import { useEffect, useState } from "react";

const nodes = [
  { x: 8, y: 18 }, { x: 27, y: 12 }, { x: 43, y: 29 }, { x: 63, y: 14 },
  { x: 84, y: 25 }, { x: 17, y: 48 }, { x: 36, y: 61 }, { x: 58, y: 47 },
  { x: 77, y: 65 }, { x: 92, y: 51 }, { x: 11, y: 82 }, { x: 47, y: 86 },
  { x: 68, y: 79 }, { x: 88, y: 90 },
];

const links = [
  [0, 1], [1, 2], [2, 3], [3, 4], [0, 5], [1, 5], [2, 6], [2, 7],
  [3, 7], [4, 9], [5, 6], [6, 7], [7, 8], [8, 9], [5, 10], [6, 11],
  [7, 11], [7, 12], [8, 12], [9, 13], [10, 11], [11, 12], [12, 13],
];

export function DevOpsBackground() {
  const [enabled, setEnabled] = useState(false);

  useEffect(() => {
    setEnabled(!window.matchMedia("(prefers-reduced-motion: reduce)").matches);
  }, []);

  return (
    <div className="devops-background" aria-hidden="true">
      <svg className="devops-network" viewBox="0 0 100 100" preserveAspectRatio="none">
        <defs>
          <linearGradient id="infra-line-gradient" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="currentColor" stopOpacity=".04" />
            <stop offset="50%" stopColor="currentColor" stopOpacity=".16" />
            <stop offset="100%" stopColor="currentColor" stopOpacity=".04" />
          </linearGradient>
        </defs>
        {links.map(([a, b], i) => (
          <line key={i} x1={nodes[a].x} y1={nodes[a].y} x2={nodes[b].x} y2={nodes[b].y} />
        ))}
        {nodes.map((node, i) => (
          <g key={i}>
            <circle className={enabled ? "infra-node is-animated" : "infra-node"} cx={node.x} cy={node.y} r={i % 4 === 0 ? 0.65 : 0.36} style={{ animationDelay: `${i * -0.31}s` }} />
            {enabled && i % 3 === 0 && <circle className="infra-pulse" cx={node.x} cy={node.y} r=".8" style={{ animationDelay: `${i * -0.7}s` }} />}
          </g>
        ))}
        <g className={enabled ? "infra-packet is-animated" : "infra-packet"}>
          <circle r=".65"><animateMotion dur="9s" repeatCount="indefinite" path="M 8,18 L 27,12 L 43,29 L 58,47 L 77,65 L 88,90" /></circle>
        </g>
        <g className={enabled ? "infra-packet is-animated" : "infra-packet"}>
          <circle r=".45"><animateMotion dur="12s" begin="-5s" repeatCount="indefinite" path="M 92,51 L 84,25 L 63,14 L 43,29 L 36,61 L 47,86" /></circle>
        </g>
      </svg>
      <div className="devops-glow devops-glow-one" />
      <div className="devops-glow devops-glow-two" />
    </div>
  );
}
