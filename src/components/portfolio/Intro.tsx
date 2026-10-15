import { ArrowDown, ArrowUpRight } from "lucide-react";
import { profile } from "@/content/portfolio";
import { useReveal } from "@/hooks/use-reveal";
import { ThreeHero } from "./ThreeHero";

export function Intro() {
  const { ref, shown } = useReveal<HTMLDivElement>();

  return (
    <section id="intro" aria-labelledby="intro-title" className="scroll-mt-24">
      <div ref={ref} className="mx-auto w-full max-w-6xl px-6 pb-16 pt-28 md:px-10 md:pb-24 md:pt-36">
        <div className="hero-stage relative mb-10 min-h-[34rem] overflow-hidden border border-border bg-[#eef2ff] md:min-h-[40rem]">
          <div className="hero-grid absolute inset-0" />
          <div className="hero-visual absolute inset-y-0 right-[-7%] z-[1] w-[64%] min-w-[30rem] md:right-[-3%] md:w-[59%] lg:right-[-1%] lg:w-[57%]">
            <ThreeHero />
          </div>
          <div className="hero-copy relative z-10 flex min-h-[34rem] flex-col justify-center p-7 md:min-h-[40rem] md:p-10 lg:p-12">
            <div className="max-w-[43rem]">
              <p className="font-mono text-[0.62rem] tracking-[0.2em] text-[#3155d9] uppercase">
                DEVOPS ENGINEER
              </p>
              <h1
                id="intro-title"
                className={
                  "mt-5 max-w-[38rem] text-[3.5rem] leading-[0.91] font-semibold tracking-[-0.055em] text-[#10182f] transition-all duration-700 sm:text-7xl lg:text-[6.4rem] " +
                  (shown ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0")
                }
              >
                Engineer reliable systems.
                <br />
                <span className="text-[#5365a8]">Automate the complex.</span>
              </h1>
              <p className="mt-7 max-w-xl text-base leading-7 text-[#39435f] sm:text-lg">
                Cloud infrastructure, Kubernetes, and delivery automation—with a focus on repeatability, security, and operational clarity.
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                <a href="#work" className="inline-flex items-center gap-2 rounded-full bg-[#3155d9] px-5 py-3 text-sm font-medium text-white transition-transform hover:-translate-y-0.5">
                  Selected work <ArrowUpRight className="h-4 w-4" />
                </a>
                <a href="#contact" className="inline-flex items-center gap-2 rounded-full border border-[#b8c1df] bg-white/80 px-5 py-3 text-sm font-medium text-[#10182f] backdrop-blur transition-colors hover:bg-white">
                  Contact
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="grid border-y border-border sm:grid-cols-1">
          <div className="py-5">
            <p className="text-2xl font-medium tracking-tight text-foreground">2026</p>
            <p className="mt-1 font-mono text-[0.58rem] tracking-[0.16em] text-muted-foreground uppercase">Current DevOps &amp; Cloud Role</p>
          </div>
        </div>

        <a href="#experience" className="mt-7 inline-flex items-center gap-2 font-mono text-[0.65rem] tracking-[0.16em] text-muted-foreground uppercase hover:text-primary">
          Scroll to experience <ArrowDown className="h-3.5 w-3.5" />
        </a>
      </div>
    </section>
  );
}
