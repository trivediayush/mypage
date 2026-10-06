import { useState } from "react";
import { ArrowUpRight } from "lucide-react";
import { articles, profile } from "@/content/portfolio";
import { Section } from "./Section";

export function Writing() {
  const [active, setActive] = useState(0);
  const current = articles[active] ?? articles[0]!;

  return (
    <Section
      id="writing"
      index={7}
      title="Writing"
      abstract="Pick an article to preview what it covers."
      tone="shade"
    >
      <div className="grid gap-8 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.05fr)] lg:gap-14">
        <ol className="border-t border-border">
          {articles.map((article, i) => {
            const on = i === active;
            return (
              <li key={article.title} className="border-b border-border">
                <button
                  type="button"
                  onClick={() => setActive(i)}
                  onMouseEnter={() => setActive(i)}
                  aria-current={on}
                  className={
                    "group relative grid w-full grid-cols-[2.5rem_minmax(0,1fr)] items-baseline gap-4 py-5 text-left transition-colors duration-300 " +
                    (on ? "bg-signal/8" : "hover:bg-signal/5")
                  }
                >
                  <span
                    aria-hidden="true"
                    className={
                      "absolute top-0 left-0 h-full w-px bg-primary transition-transform duration-500 ease-out " +
                      (on ? "scale-y-100" : "scale-y-0")
                    }
                  />
                  <span
                    className={
                      "pl-3 font-mono text-xs tracking-[0.14em] uppercase transition-colors " +
                      (on ? "text-primary" : "text-muted-foreground")
                    }
                  >
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <span className="min-w-0">
                    <span
                      className={
                        "block text-base leading-snug font-semibold tracking-tight transition-colors " +
                        (on ? "text-primary" : "text-foreground group-hover:text-primary")
                      }
                    >
                      {article.title}
                    </span>
                    <span className="mt-2 flex flex-wrap items-center gap-x-3 gap-y-1 font-mono text-[0.65rem] tracking-[0.16em] text-muted-foreground uppercase">
                      <span className="text-signal">{article.topic}</span>
                      <span aria-hidden="true">/</span>
                      <span>{article.readTime}</span>
                      <span aria-hidden="true">/</span>
                      <span>{article.date}</span>
                    </span>
                  </span>
                </button>
              </li>
            );
          })}
        </ol>

        <div key={active} className="tool-tile min-w-0 border-t border-border pt-6 lg:pt-0">
          <p className="font-mono text-[0.65rem] tracking-[0.2em] text-signal uppercase">
            {current.topic} — {current.readTime}
          </p>
          <h3 className="mt-4 text-xl leading-snug font-semibold tracking-tight text-foreground sm:text-2xl">
            {current.title}
          </h3>
          <p className="mt-4 max-w-xl text-sm leading-relaxed text-muted-foreground">
            {current.summary}
          </p>

          <ul className="mt-6 border-t border-border">
            {current.takeaways.map((takeaway) => (
              <li
                key={takeaway}
                className="grid grid-cols-[1.25rem_minmax(0,1fr)] gap-3 border-b border-border py-3 text-sm leading-relaxed text-foreground/90"
              >
                <span aria-hidden="true" className="font-mono text-xs text-primary">
                  —
                </span>
                <span className="min-w-0">{takeaway}</span>
              </li>
            ))}
          </ul>

          <a
            href={current.href}
            target="_blank"
            rel="noreferrer noopener"
            className="group mt-6 inline-flex items-center gap-2 border-b border-primary/40 pb-1 font-mono text-xs tracking-[0.18em] text-primary uppercase transition-colors hover:border-primary"
          >
            Read on Medium
            <ArrowUpRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </a>
        </div>
      </div>

      <a
        href={profile.links.medium}
        target="_blank"
        rel="noreferrer noopener"
        className="group mt-10 inline-flex items-center gap-2 font-mono text-xs tracking-[0.18em] text-primary uppercase"
      >
        All articles on Medium
        <ArrowUpRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
      </a>
    </Section>
  );
}
