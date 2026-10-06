import { useReveal } from "@/hooks/use-reveal";

type SectionProps = {
  id: string;
  index: number;
  title: string;
  abstract: string;
  children: React.ReactNode;
  tone?: "paper" | "shade";
};

export function Section({ id, index, title, abstract, children, tone = "paper" }: SectionProps) {
  const { ref, shown } = useReveal<HTMLDivElement>();
  const num = String(index).padStart(2, "0");

  return (
    <section
      id={id}
      aria-labelledby={`${id}-title`}
      className={
        tone === "shade"
          ? "site-section border-t border-border bg-shade/88 backdrop-blur-[1px] scroll-mt-24"
          : "site-section border-t border-border bg-background/78 backdrop-blur-[1px] scroll-mt-24"
      }
    >
      <div
        ref={ref}
        className="mx-auto w-full max-w-6xl px-6 py-16 md:px-10 md:py-24 lg:py-28"
        data-shown={shown}
      >
        <div className="grid gap-8 md:grid-cols-[13rem_minmax(0,1fr)] md:gap-12 lg:grid-cols-[16rem_minmax(0,1fr)]">
          <div className="md:sticky md:top-28 md:self-start">
            <p
              className={
                "font-mono text-xs tracking-[0.22em] text-primary uppercase transition-all duration-700 " +
                (shown ? "translate-y-0 opacity-100" : "translate-y-2 opacity-0")
              }
            >
              {num} / {title}
            </p>
            <span
              aria-hidden="true"
              className={
                "mt-4 block h-px origin-left bg-primary transition-transform duration-[900ms] ease-out " +
                (shown ? "scale-x-100" : "scale-x-0")
              }
            />
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-muted-foreground">{abstract}</p>
          </div>

          <div className="min-w-0">
            <h2
              id={`${id}-title`}
              className={
                "text-2xl leading-tight font-semibold tracking-tight text-foreground transition-all duration-700 sm:text-3xl lg:text-3xl " +
                (shown ? "translate-y-0 opacity-100" : "translate-y-3 opacity-0")
              }
            >
              {title}
            </h2>
            <div className="reveal-stagger mt-8 md:mt-10">{children}</div>
          </div>
        </div>
      </div>
    </section>
  );
}
