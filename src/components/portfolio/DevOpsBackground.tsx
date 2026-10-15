import { useEffect, useState } from "react";

const commits = [
  { x: 8, y: 22 }, { x: 22, y: 22 }, { x: 36, y: 22 }, { x: 50, y: 22 },
  { x: 64, y: 22 }, { x: 78, y: 22 }, { x: 92, y: 22 },
  { x: 22, y: 44 }, { x: 36, y: 44 }, { x: 50, y: 44 },
  { x: 64, y: 44 }, { x: 50, y: 66 }, { x: 64, y: 66 }, { x: 78, y: 66 },
];

const paths = [
  "M 8 22 H 92",
  "M 22 22 V 44 H 50 V 22",
  "M 36 44 V 55 Q 36 66 48 66 H 50 V 22",
  "M 64 22 V 44",
  "M 50 66 H 64 V 44",
  "M 64 44 V 66 H 78 V 22",
];

export function DevOpsBackground() {
  const [motion, setMotion] = useState(false);

  useEffect(() => {
    setMotion(!window.matchMedia("(prefers-reduced-motion: reduce)").matches);
  }, []);

  return (
    <div className={motion ? "git-graph-background is-moving" : "git-graph-background"} aria-hidden="true">
      <svg className="git-graph-svg" viewBox="0 0 100 88" preserveAspectRatio="xMidYMid slice">
        <defs>
          <linearGradient id="git-branch-gradient" x1="0" y1="0" x2="1" y2="0">
            <stop offset="0%" stopColor="#60a5fa" stopOpacity=".12" />
            <stop offset="50%" stopColor="#818cf8" stopOpacity=".45" />
            <stop offset="100%" stopColor="#34d399" stopOpacity=".18" />
          </linearGradient>
          <filter id="git-soft-glow" x="-100%" y="-100%" width="300%" height="300%">
            <feGaussianBlur stdDeviation=".7" />
          </filter>
        </defs>
        <g className="git-branch-lines">
          {paths.map((path, i) => (
            <path key={i} d={path} className={i === 0 ? "git-branch main-branch" : "git-branch"} />
          ))}
        </g>
        <g className="git-commits">
          {commits.map((commit, i) => (
            <g key={i} className={i === 8 || i === 11 ? "git-commit merge-commit" : "git-commit"} style={{ animationDelay: `${i * -0.37}s` }}>
              <circle className="git-commit-halo" cx={commit.x} cy={commit.y} r="1.65" filter="url(#git-soft-glow)" />
              <circle className="git-commit-dot" cx={commit.x} cy={commit.y} r={i === 8 || i === 11 ? "1.15" : ".8"} />
            </g>
          ))}
        </g>
        {motion && (
          <>
            <circle className="git-flow git-flow-one" r="1.05">
              <animateMotion dur="8s" repeatCount="indefinite" path="M 8 22 H 22 V 44 H 50 V 22 H 92" />
            </circle>
            <circle className="git-flow git-flow-two" r=".8">
              <animateMotion dur="10s" begin="-4s" repeatCount="indefinite" path="M 36 22 V 44 V 55 Q 36 66 48 66 H 50 V 22" />
            </circle>
            <circle className="git-flow git-flow-three" r=".7">
              <animateMotion dur="7s" begin="-2.5s" repeatCount="indefinite" path="M 50 66 H 64 V 44 V 22 H 78 V 66" />
            </circle>
          </>
        )}
      </svg>
      <div className="git-graph-label git-label-top">feat / automation</div>
      <div className="git-graph-label git-label-bottom">merge · build · deploy</div>
    </div>
  );
}
