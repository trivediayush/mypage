import { useEffect, useRef } from "react";
import * as THREE from "three";

/**
 * One persistent Three.js scene for the entire portfolio.
 * It is deliberately subtle: the site content remains primary while the
 * network field changes with scroll and pointer position.
 */
export function ThreeSiteField() {
  const hostRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const host = hostRef.current;
    if (!host) return;

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(48, 1, 0.1, 100);
    camera.position.set(0, 0, 9);

    const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true, powerPreference: "high-performance" });
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 1.5));
    renderer.setClearColor(0x000000, 0);
    host.appendChild(renderer.domElement);

    const root = new THREE.Group();
    scene.add(root);

    const nodes: THREE.Vector3[] = [];
    const nodeGroup = new THREE.Group();
    root.add(nodeGroup);

    const nodeMaterial = new THREE.MeshBasicMaterial({ color: 0x3155d9, transparent: true, opacity: 0.52 });
    const warmMaterial = new THREE.MeshBasicMaterial({ color: 0xf09a48, transparent: true, opacity: 0.65 });
    const nodeGeometry = new THREE.SphereGeometry(0.045, 8, 8);

    const count = 30;
    for (let i = 0; i < count; i += 1) {
      const phi = Math.acos(1 - (2 * (i + 0.5)) / count);
      const theta = Math.PI * (3 - Math.sqrt(5)) * i;
      const radius = 2.7 + ((i * 17) % 7) * 0.08;
      const p = new THREE.Vector3(
        Math.cos(theta) * Math.sin(phi) * radius,
        Math.cos(phi) * radius * 0.72,
        Math.sin(theta) * Math.sin(phi) * radius,
      );
      nodes.push(p);
      const mesh = new THREE.Mesh(nodeGeometry, i % 7 === 0 ? warmMaterial : nodeMaterial);
      mesh.position.copy(p);
      nodeGroup.add(mesh);
    }

    const edgePositions: number[] = [];
    for (let i = 0; i < nodes.length; i += 1) {
      const nearest = nodes
        .map((point, index) => ({ index, distance: nodes[i].distanceToSquared(point) }))
        .filter((item) => item.index !== i)
        .sort((a, b) => a.distance - b.distance)
        .slice(0, 2);
      for (const target of nearest) {
        edgePositions.push(...nodes[i].toArray(), ...nodes[target.index].toArray());
      }
    }

    const edgeGeometry = new THREE.BufferGeometry();
    edgeGeometry.setAttribute("position", new THREE.Float32BufferAttribute(edgePositions, 3));
    const edgeMaterial = new THREE.LineBasicMaterial({ color: 0x7188df, transparent: true, opacity: 0.12 });
    const edges = new THREE.LineSegments(edgeGeometry, edgeMaterial);
    root.add(edges);

    const orbitMaterials = [
      new THREE.MeshBasicMaterial({ color: 0x3155d9, transparent: true, opacity: 0.08 }),
      new THREE.MeshBasicMaterial({ color: 0x6b57c7, transparent: true, opacity: 0.07 }),
      new THREE.MeshBasicMaterial({ color: 0xf09a48, transparent: true, opacity: 0.06 }),
    ];
    [2.9, 3.35, 3.8].forEach((radius, index) => {
      const ring = new THREE.Mesh(new THREE.TorusGeometry(radius, 0.006, 6, 96), orbitMaterials[index]);
      ring.rotation.set(0.8 + index * 0.22, index * 0.65, 0.2);
      root.add(ring);
    });

    const packets: THREE.Mesh[] = [];
    const packetGeometry = new THREE.SphereGeometry(0.075, 10, 10);
    for (let i = 0; i < 6; i += 1) {
      const packet = new THREE.Mesh(packetGeometry, new THREE.MeshBasicMaterial({ color: i % 2 ? 0xf09a48 : 0x3155d9, transparent: true, opacity: 0.8 }));
      packet.userData = { from: i * 3, to: (i * 3 + 5) % nodes.length, offset: i / 6 };
      packets.push(packet);
      root.add(packet);
    }

    const pointer = new THREE.Vector2();
    const targetRotation = new THREE.Vector2();
    const onPointerMove = (event: PointerEvent) => {
      pointer.x = event.clientX / window.innerWidth - 0.5;
      pointer.y = event.clientY / window.innerHeight - 0.5;
    };
    window.addEventListener("pointermove", onPointerMove, { passive: true });

    let scrollProgress = 0;
    const onScroll = () => {
      const max = Math.max(document.documentElement.scrollHeight - window.innerHeight, 1);
      scrollProgress = window.scrollY / max;
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });

    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    let frame = 0;
    const clock = new THREE.Clock();

    const resize = () => {
      const width = window.innerWidth;
      const height = window.innerHeight;
      renderer.setSize(width, height, false);
      camera.aspect = width / height;
      camera.updateProjectionMatrix();
    };
    const resizeObserver = new ResizeObserver(resize);
    resizeObserver.observe(host);
    resize();

    const animate = () => {
      const elapsed = clock.getElapsedTime();
      targetRotation.x = pointer.y * 0.12;
      targetRotation.y = pointer.x * 0.16;

      root.rotation.x += (targetRotation.x - root.rotation.x) * 0.025;
      root.rotation.y += (targetRotation.y + scrollProgress * 0.8 - root.rotation.y) * 0.012;
      root.position.y += ((scrollProgress - 0.5) * -0.8 - root.position.y) * 0.018;
      root.position.x += (pointer.x * 0.25 - root.position.x) * 0.02;

      packets.forEach((packet) => {
        const from = nodes[packet.userData.from as number];
        const to = nodes[packet.userData.to as number];
        const t = ((elapsed * 0.11 + (packet.userData.offset as number)) % 1 + 1) % 1;
        packet.position.lerpVectors(from, to, t);
      });

      nodeGroup.rotation.z = Math.sin(elapsed * 0.16) * 0.035;
      edges.rotation.z = nodeGroup.rotation.z;
      renderer.render(scene, camera);
      if (!reduced) frame = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener("pointermove", onPointerMove);
      window.removeEventListener("scroll", onScroll);
      resizeObserver.disconnect();
      nodeGeometry.dispose();
      edgeGeometry.dispose();
      packetGeometry.dispose();
      nodeMaterial.dispose();
      warmMaterial.dispose();
      edgeMaterial.dispose();
      orbitMaterials.forEach((material) => material.dispose());
      packets.forEach((packet) => (packet.material as THREE.Material).dispose());
      renderer.dispose();
      renderer.domElement.remove();
    };
  }, []);

  return <div ref={hostRef} aria-hidden="true" className="three-site-field" />;
}
