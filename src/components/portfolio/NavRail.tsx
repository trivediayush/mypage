import { useEffect, useState } from "react";
import { ArrowUpRight, X } from "lucide-react";
import { profile, sections } from "@/content/portfolio";
import { useSectionSpy } from "@/hooks/use-section-spy";

export function NavRail() {
  const ids = sections.map((s) => s.id);
  const { activeIndex, progress } = useSectionSpy(ids);
  const [open, setOpen] = useState(false);
  const [condensed, setCondensed] = useState(false);
  const active = sections[activeIndex] ?? sections[0]!;

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    const onScroll = () => setCondensed(window.scrollY > 40);
    onScroll();
    window.addEventListener("keydown", onKey);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      window.removeEventListener("keydown", onKey);
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  return (
    <header className="fixed inset-x-0 top-0 z-50 px-3 pt-3 md:px-6 md:pt-5">
      <div
        className={
          "mx-auto w-full max-w-6xl border border-border bg-background/80 backdrop-blur-md transition-all duration-500 ease-out " +
          (condensed ? "shadow-[0_10px_30px_-24px_var(--foreground)]" : "shadow-none")
        }
      >
        <div
          className={
            "grid grid-cols-[minmax(0,1fr)_auto] items-center gap-4 px-4 transition-all duration-500 ease-out md:px-6 " +
            (condensed ? "py-2.5" : "py-4")
          }
        >
          <a
            href="#intro"
            className="group flex min-w-0 items-baseline gap-3 text-sm font-semibold tracking-tight text-foreground"
          >
            <span
              aria-hidden="true"
              className="h-1.5 w-1.5 shrink-0 translate-y-[-0.1rem] bg-primary transition-transform duration-500 group-hover:scale-150"
            />
            <span className="whitespace-nowrap">{profile.name}</span>
          </a>


          <div className="flex shrink-0 items-center gap-2">
            <nav aria-label="Sections" className="hidden items-center gap-1 xl:flex">
              {sections.map((s, i) => {
                const on = i === activeIndex;
                return (
                  <a
                    key={s.id}
                    href={`#${s.id}`}
                    aria-current={on ? "true" : undefined}
                    className={
                      "relative px-2.5 py-1.5 text-xs tracking-wide uppercase transition-colors " +
                      (on ? "text-primary" : "text-muted-foreground hover:text-foreground")
                    }
                  >
                    {s.label}
                    <span
                      aria-hidden="true"
                      className={
                        "absolute inset-x-2 bottom-0 h-px origin-left bg-primary transition-transform duration-500 ease-out " +
                        (on ? "scale-x-100" : "scale-x-0")
                      }
                    />
                  </a>
                );
              })}
            </nav>

            <a
              href="#contact"
              className="group hidden items-center gap-2 border border-primary px-3 py-1.5 text-xs tracking-wide text-primary uppercase transition-colors hover:bg-primary hover:text-primary-foreground sm:inline-flex"
            >
              Contact
              <ArrowUpRight className="h-3 w-3 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </a>

            <button
              type="button"
              onClick={() => setOpen((v) => !v)}
              aria-expanded={open}
              aria-label="Open section index"
              className="flex items-center gap-2 px-2 py-1.5 text-xs tracking-wide text-muted-foreground uppercase transition-colors hover:text-primary xl:hidden"
            >
              <span className="tabular-nums">
                {String(activeIndex + 1).padStart(2, "0")}
                <span className="text-muted-foreground/60">
                  /{String(sections.length).padStart(2, "0")}
                </span>
              </span>
              <span className="hidden sm:inline">{active.label}</span>
              <span
                aria-hidden="true"
                className="flex h-3.5 w-4 flex-col justify-between text-primary"
              >
                <span
                  className={
                    "h-px w-full bg-current transition-transform duration-300 " +
                    (open ? "translate-y-[0.4rem] rotate-45" : "")
                  }
                />
                <span
                  className={
                    "h-px w-full bg-current transition-opacity duration-300 " +
                    (open ? "opacity-0" : "opacity-100")
                  }
                />
                <span
                  className={
                    "h-px w-full bg-current transition-transform duration-300 " +
                    (open ? "-translate-y-[0.4rem] -rotate-45" : "")
                  }
                />
              </span>
            </button>
          </div>
        </div>

        <div aria-hidden="true" className="h-px w-full bg-border">
          <div
            className="h-px bg-primary transition-[width] duration-200 ease-out"
            style={{ width: `${progress * 100}%` }}
          />
        </div>

        <div
          className={
            "grid overflow-hidden transition-[grid-template-rows,opacity] duration-500 ease-out xl:hidden " +
            (open ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0")
          }
        >
          <div className="min-h-0">
            <nav aria-label="All sections" className="bg-background px-4 py-5 md:px-6">
              <div className="flex items-start justify-between gap-6">
                <ul className="grid w-full gap-px sm:grid-cols-2">
                  {sections.map((s, i) => (
                    <li key={s.id}>
                      <a
                        href={`#${s.id}`}
                        onClick={() => setOpen(false)}
                        className={
                          "flex items-baseline gap-3 border-t border-border py-3 font-mono text-xs tracking-[0.16em] uppercase transition-colors sm:pr-6 " +
                          (i === activeIndex
                            ? "text-primary"
                            : "text-muted-foreground hover:text-foreground")
                        }
                      >
                        <span>{String(i + 1).padStart(2, "0")}</span>
                        <span>{s.label}</span>
                      </a>
                    </li>
                  ))}
                </ul>
                <button
                  type="button"
                  onClick={() => setOpen(false)}
                  aria-label="Close section index"
                  className="shrink-0 text-muted-foreground transition-colors hover:text-primary"
                >
                  <X className="h-4 w-4" />
                </button>
              </div>
            </nav>
          </div>
        </div>
      </div>
    </header>
  );
}
