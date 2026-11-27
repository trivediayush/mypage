import { useRef } from 'react';
import { motion, useReducedMotion, useScroll, useTransform } from 'motion/react';
import { ArrowDownRight, ArrowUpRight } from 'lucide-react';
import { HERO_VISUAL, profile } from '../data/portfolio';
import { EASE_EDITORIAL, ResilientImage } from './MotionPrimitives';

export function Hero() {
  const prefersReducedMotion = useReducedMotion();
  const stageRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: stageRef,
    offset: ['start start', 'end start'],
  });

  const imageY = useTransform(scrollYProgress, [0, 1], ['0%', '8%']);

  return (
    <section
      id="top"
      ref={stageRef}
      aria-labelledby="hero-heading"
      className="relative overflow-hidden border-b border-slate-200/80 dark:border-slate-800/80"
    >
      <div className="relative mx-auto max-w-6xl px-6 pt-12 pb-16 sm:pt-16 lg:px-8 lg:pt-20 lg:pb-20">
        {/* Two-column balanced hero split with items-stretch */}
        <div className="grid grid-cols-1 items-stretch gap-10 lg:grid-cols-12 lg:gap-12">
          {/* Left Typographic Column */}
          <div className="flex flex-col justify-between lg:col-span-7">
            <div>
              <motion.p
                initial={prefersReducedMotion ? false : { opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.45, ease: EASE_EDITORIAL }}
                className="text-sm font-semibold tracking-wide text-[#1D4ED8] dark:text-[#60A5FA]"
              >
                {profile.kicker}
              </motion.p>

              <motion.h1
                id="hero-heading"
                initial={prefersReducedMotion ? false : { opacity: 0, y: 18 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.58, delay: 0.06, ease: EASE_EDITORIAL }}
                className="mt-5 font-editorial text-[2.35rem] leading-[1.08] font-medium tracking-[-0.025em] text-[#0B1220] sm:text-5xl lg:text-[3.35rem] dark:text-[#F8FAFC]"
              >
                {profile.headline}
              </motion.h1>

              <motion.p
                initial={prefersReducedMotion ? false : { opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.55, delay: 0.14, ease: EASE_EDITORIAL }}
                className="mt-6 max-w-xl text-base leading-[1.7] text-slate-600 sm:text-[17px] dark:text-slate-300"
              >
                {profile.abstract}
              </motion.p>

              <motion.div
                initial={prefersReducedMotion ? false : { opacity: 0, y: 14 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.52, delay: 0.22, ease: EASE_EDITORIAL }}
                className="mt-9 grid grid-cols-2 gap-3 sm:flex sm:flex-wrap sm:items-center sm:gap-4"
              >
                <a
                  href="#work"
                  className="inline-flex min-h-[44px] items-center justify-center gap-2 rounded-lg bg-[#1D4ED8] px-4 py-2.5 text-sm font-medium text-white whitespace-nowrap shrink-0 transition-all duration-150 hover:bg-[#1E40AF] active:scale-[0.99] sm:px-6 dark:bg-[#2563EB] dark:hover:bg-[#3B82F6]"
                >
                  <span>Selected work</span>
                  <ArrowDownRight className="h-4 w-4" aria-hidden="true" />
                </a>

                <a
                  href="#platforms"
                  className="inline-flex min-h-[44px] items-center justify-center gap-2 rounded-lg border border-slate-300 bg-white px-4 py-2.5 text-sm font-medium text-[#0B1220] whitespace-nowrap shrink-0 transition-colors duration-150 hover:border-slate-400 hover:bg-slate-50 sm:px-6 dark:border-slate-700 dark:bg-[#101726] dark:text-slate-100 dark:hover:border-slate-600 dark:hover:bg-[#162033]"
                >
                  <span>Built platforms</span>
                  <ArrowUpRight className="h-4 w-4 text-[#0F766E] dark:text-[#14B8A6]" aria-hidden="true" />
                </a>
              </motion.div>
            </div>

            {/* Quiet typographic provenance note */}
            <motion.ul
              initial={prefersReducedMotion ? false : { opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="mt-10 flex flex-wrap items-center gap-x-4 gap-y-1.5 border-t border-slate-200/80 pt-5 text-xs text-slate-500 dark:border-slate-800/80 dark:text-slate-400"
            >
              <li>Based in {profile.location}</li>
              <li className="hidden sm:list-item list-none" aria-hidden="true">·</li>
              <li>Oracle Cloud Infrastructure Certified DevOps Professional</li>
              <li className="hidden sm:list-item list-none" aria-hidden="true">·</li>
              <li>AWS, Azure &amp; GCP</li>
            </motion.ul>
          </div>

          {/* Right Architectural Visual Container (matches height cleanly on lg) */}
          <motion.div
            initial={prefersReducedMotion ? false : { opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.65, delay: 0.1, ease: EASE_EDITORIAL }}
            className="relative min-h-[280px] overflow-hidden rounded-2xl border border-slate-200 bg-white dark:border-slate-800 dark:bg-[#101726] sm:min-h-[340px] lg:col-span-5 lg:min-h-full"
          >
            <motion.div
              style={prefersReducedMotion ? undefined : { y: imageY }}
              className="h-full w-full scale-[1.06]"
            >
              <ResilientImage
                src={HERO_VISUAL.src}
                alt={HERO_VISUAL.alt}
                fallbackTitle="Cloud & Platform Engineering"
                containerClassName="h-full w-full"
                className="h-full w-full object-cover"
              />
            </motion.div>
            {/* Subtle edge sheen for visual polish without obstructing photography */}
            <div
              aria-hidden="true"
              className="pointer-events-none absolute inset-0 rounded-2xl ring-1 ring-inset ring-slate-950/10 dark:ring-white/10"
            />
          </motion.div>
        </div>

        {/* Full-width 4-column institutional proof strip below the split */}
        <motion.div
          initial={prefersReducedMotion ? false : { opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55, delay: 0.28, ease: EASE_EDITORIAL }}
          className="mt-14 grid grid-cols-1 gap-6 border-t border-slate-200 pt-8 sm:grid-cols-2 lg:grid-cols-4 dark:border-slate-800"
        >
          {profile.facts.map((fact, idx) => (
            <div
              key={fact.label}
              className={`${
                idx > 0
                  ? 'lg:border-l lg:border-slate-200 lg:pl-6 dark:lg:border-slate-800'
                  : ''
              }`}
            >
              <p className="text-xs font-medium text-slate-500 dark:text-slate-400">
                {fact.label}
              </p>
              <p className="mt-1.5 text-[15px] font-semibold text-[#0B1220] dark:text-[#F1F5F9]">
                {fact.value}
              </p>
              <p className="mt-0.5 text-xs text-slate-600 dark:text-slate-400">
                {fact.subvalue}
              </p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
