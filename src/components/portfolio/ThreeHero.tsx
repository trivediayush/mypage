import { useEffect, useRef } from "react";
import * as THREE from "three";

export function ThreeHero() {
  const hostRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const host = hostRef.current;
    if (!host) return;

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(38, 1, 0.1, 100);
    camera.position.set(0, 0, 5.6);

    const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true, powerPreference: "high-performance" });
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 1.6));
    renderer.setClearColor(0x000000, 0);
    host.appendChild(renderer.domElement);

    const group = new THREE.Group();
    group.position.set(0.6, 0, 0);
    scene.add(group);

    const shell = new THREE.Mesh(
      new THREE.IcosahedronGeometry(1.35, 2),
      new THREE.MeshBasicMaterial({ color: 0x3155d9, wireframe: true, transparent: true, opacity: 0.22 }),
    );
    const inner = new THREE.Mesh(
      new THREE.IcosahedronGeometry(0.92, 1),
      new THREE.MeshBasicMaterial({ color: 0x6b57c7, wireframe: true, transparent: true, opacity: 0.2 }),
    );
    group.add(shell, inner);

    const nodeGeometry = new THREE.SphereGeometry(0.035, 8, 8);
    const nodes: THREE.Mesh[] = [];
    const positions: THREE.Vector3[] = [];
    for (let i = 0; i < 16; i += 1) {
      const phi = Math.acos(1 - (2 * (i + 0.5)) / 16);
      const theta = Math.PI * (3 - Math.sqrt(5)) * i;
      const p = new THREE.Vector3(
        Math.cos(theta) * Math.sin(phi) * 1.48,
        Math.cos(phi) * 1.48,
        Math.sin(theta) * Math.sin(phi) * 1.48,
      );
      positions.push(p);
      const node = new THREE.Mesh(
        nodeGeometry,
        new THREE.MeshBasicMaterial({ color: i % 5 === 0 ? 0xf09a48 : 0x3155d9, transparent: true, opacity: 0.78 }),
      );
      node.position.copy(p);
      nodes.push(node);
      group.add(node);
    }

    const edgePositions: number[] = [];
    for (let i = 0; i < positions.length; i += 1) {
      const nearest = positions
        .map((point, index) => ({ index, distance: positions[i].distanceToSquared(point) }))
        .filter((item) => item.index !== i)
        .sort((a, b) => a.distance - b.distance)
        .slice(0, 2);
      nearest.forEach((item) => edgePositions.push(...positions[i].toArray(), ...positions[item.index].toArray()));
    }
    const edgeGeometry = new THREE.BufferGeometry();
    edgeGeometry.setAttribute("position", new THREE.Float32BufferAttribute(edgePositions, 3));
    const edges = new THREE.LineSegments(
      edgeGeometry,
      new THREE.LineBasicMaterial({ color: 0x3155d9, transparent: true, opacity: 0.22 }),
    );
    group.add(edges);

    const packetGeometry = new THREE.SphereGeometry(0.07, 10, 10);
    const packets = Array.from({ length: 4 }, (_, index) => {
      const packet = new THREE.Mesh(
        packetGeometry,
        new THREE.MeshBasicMaterial({ color: index % 2 ? 0x18a999 : 0xf09a48, transparent: true, opacity: 0.85 }),
      );
      packet.userData = { from: index * 3, to: (index * 3 + 4) % positions.length, offset: index / 4 };
      group.add(packet);
      return packet;
    });

    const pointer = new THREE.Vector2();
    const onPointerMove = (event: PointerEvent) => {
      const rect = host.getBoundingClientRect();
      pointer.x = (event.clientX - rect.left) / rect.width - 0.5;
      pointer.y = (event.clientY - rect.top) / rect.height - 0.5;
    };
    host.addEventListener("pointermove", onPointerMove, { passive: true });

    const resize = () => {
      const width = host.clientWidth || 1;
      const height = host.clientHeight || 1;
      renderer.setSize(width, height, false);
      camera.aspect = width / height;
      camera.updateProjectionMatrix();
    };
    const resizeObserver = new ResizeObserver(resize);
    resizeObserver.observe(host);
    resize();

    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const clock = new THREE.Clock();
    let frame = 0;

    const animate = () => {
      const elapsed = clock.getElapsedTime();
      group.rotation.y += 0.0018 + pointer.x * 0.001;
      group.rotation.x += (pointer.y * 0.08 - group.rotation.x) * 0.02;
      group.position.y = Math.sin(elapsed * 0.4) * 0.04;

      packets.forEach((packet) => {
        const from = positions[packet.userData.from as number];
        const to = positions[packet.userData.to as number];
        const t = ((elapsed * 0.16 + (packet.userData.offset as number)) % 1 + 1) % 1;
        packet.position.lerpVectors(from, to, t);
      });

      renderer.render(scene, camera);
      if (!reduced) frame = requestAnimationFrame(animate);
    };
    animate();

    return () => {
      cancelAnimationFrame(frame);
      host.removeEventListener("pointermove", onPointerMove);
      resizeObserver.disconnect();
      scene.traverse((object) => {
        if (object instanceof THREE.Mesh || object instanceof THREE.LineSegments) {
          object.geometry.dispose();
          const material = object.material;
          if (Array.isArray(material)) material.forEach((item) => item.dispose());
          else material.dispose();
        }
      });
      renderer.dispose();
      renderer.domElement.remove();
    };
  }, []);

  return <div ref={hostRef} className="three-hero" aria-hidden="true" />;
}
