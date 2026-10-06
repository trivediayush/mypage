import { useEffect, useState } from "react";

/** Tracks the section currently in view and overall scroll progress. */
export function useSectionSpy(ids: string[]) {
  const [activeIndex, setActiveIndex] = useState(0);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const onScroll = () => {
      const doc = document.documentElement;
      const max = doc.scrollHeight - window.innerHeight;
      setProgress(max > 0 ? Math.min(1, Math.max(0, window.scrollY / max)) : 0);

      const line = window.scrollY + window.innerHeight * 0.32;
      let next = 0;
      ids.forEach((id, i) => {
        const el = document.getElementById(id);
        if (el && el.offsetTop <= line) next = i;
      });
      setActiveIndex(next);
    };

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, [ids]);

  return { activeIndex, progress };
}
