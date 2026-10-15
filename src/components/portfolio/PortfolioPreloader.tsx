import { useEffect, useState } from "react";
import { Activity, Terminal } from "lucide-react";

export function PortfolioPreloader() {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const timeout = window.setTimeout(() => setVisible(false), reducedMotion ? 120 : 850);
    return () => window.clearTimeout(timeout);
  }, []);

  return (
    <div
      className={`portfolio-preloader ${visible ? "is-visible" : "is-dismissed"}`}
      aria-hidden="true"
    >
      <div className="preloader-inner">
        <div className="preloader-mark"><Terminal className="h-5 w-5" /></div>
        <p className="preloader-kicker"><Activity className="h-3.5 w-3.5" /> INITIALIZING WORKSPACE</p>
        <p className="preloader-name">Ayush Trivedi<span>.</span></p>
        <div className="preloader-track"><span /></div>
        <p className="preloader-status">Cloud · Automation · Reliability</p>
      </div>
    </div>
  );
}
