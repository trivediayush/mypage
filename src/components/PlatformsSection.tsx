import { motion, useReducedMotion } from 'motion/react';
import { ArrowUpRight } from 'lucide-react';
import { builtPlatforms } from '../data/portfolio';
import { EASE_EDITORIAL, ResilientImage, Reveal, SectionHeading } from './MotionPrimitives';

export function PlatformsSection() {
  const prefersReducedMotion = useReducedMotion();

  return (
    <section
      id="platforms"
      aria-labelledby="platforms-heading"
      className="scroll-mt-20 border-y border-slate-200/80 bg-[#F1F5F9]/70 py-20 lg:py-24 dark:border-slate-800/80 dark:bg-[#0C121E]"
    >
      <div className="mx-auto max-w-6xl px-6 lg:px-8">
        <Reveal>
          <SectionHeading
            id="platforms-heading"
            index="02"
            title="Built Platforms"
            subtitle="Two publicly deployed engineering web platforms I created and maintain to organize DevOps operational knowledge and scenario-based systems practice."
          />
        </Reveal>

        <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
          {builtPlatforms.map((platform, idx) => {
            const accentText =
              platform.accentTone === 'cobalt'
                ? 'text-[#1D4ED8] dark:text-[#60A5FA]'
                : 'text-[#0F766E] dark:text-[#14B8A6]';
            const buttonBg =
              platform.accentTone === 'cobalt'
                ? 'bg-[#1D4ED8] hover:bg-[#1E40AF] dark:bg-[#2563EB] dark:hover:bg-[#3B82F6]'
                : 'bg-[#0F766E] hover:bg-[#115E59] dark:bg-[#0D9488] dark:hover:bg-[#14B8A6]';

            return (
              <Reveal key={platform.id} delay={idx * 0.08}>
                <motion.article
                  whileHover={prefersReducedMotion ? undefined : { y: -4 }}
                  transition={{ duration: 0.22, ease: EASE_EDITORIAL }}
                  className="group flex h-full flex-col overflow-hidden rounded-2xl border border-slate-200 bg-white transition-colors duration-200 hover:border-slate-300 dark:border-slate-800 dark:bg-[#101726] dark:hover:border-slate-700"
                >
                  {/* Widescreen Bespoke Architectural Visual */}
                  <div className="aspect-[16/8.2] w-full overflow-hidden border-b border-slate-200/80 dark:border-slate-800/80">
                    <ResilientImage
                      src={platform.image}
                      alt={platform.imageAlt}
                      fallbackTitle={platform.name}
                      containerClassName="h-full w-full"
                      className="h-full w-full object-cover transition-transform duration-500 ease-out group-hover:scale-[1.03]"
                    />
                  </div>

                  {/* Platform Editorial Content */}
                  <div className="flex flex-1 flex-col justify-between p-6 sm:p-7">
                    <div>
                      <div className="flex flex-wrap items-center justify-between gap-2 text-xs">
                        <span className={`font-semibold ${accentText}`}>
                          {platform.category}
                        </span>
                        <span className="font-mono text-slate-500 dark:text-slate-400">
                          {platform.displayUrl}
                        </span>
                      </div>

                      <h3 className="mt-2.5 font-editorial text-2xl font-medium tracking-tight text-[#0B1220] dark:text-[#F8FAFC]">
                        {platform.name}
                      </h3>

                      <p className="mt-2 text-sm font-medium text-slate-800 dark:text-slate-200">
                        {platform.tagline}
                      </p>

                      <p className="mt-2.5 text-sm leading-relaxed text-slate-600 dark:text-slate-400">
                        {platform.description}
                      </p>

                      <ul className="mt-5 space-y-2 border-t border-slate-200/80 pt-4 dark:border-slate-800/80">
                        {platform.highlights.map((item) => (
                          <li
                            key={item}
                            className="flex items-start gap-2.5 text-[13.5px] leading-relaxed text-slate-700 dark:text-slate-300"
                          >
                            <span
                              aria-hidden="true"
                              className={`mt-2 h-1.5 w-1.5 shrink-0 ${
                                platform.accentTone === 'cobalt'
                                  ? 'bg-[#1D4ED8] dark:bg-[#60A5FA]'
                                  : 'bg-[#0F766E] dark:bg-[#14B8A6]'
                              }`}
                            />
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="mt-6 flex items-center justify-between gap-4 border-t border-slate-200/80 pt-5 dark:border-slate-800/80">
                      <span className="text-xs text-slate-500 dark:text-slate-400">
                        Created &amp; maintained by Ayush Trivedi
                      </span>
                      <a
                        href={platform.url}
                        target="_blank"
                        rel="noreferrer noopener"
                        aria-label={`Visit ${platform.name} at ${platform.displayUrl}`}
                        className={`inline-flex min-h-[42px] items-center gap-2 rounded-lg px-4 py-2 text-sm font-medium text-white whitespace-nowrap shrink-0 transition-colors duration-150 ${buttonBg}`}
                      >
                        <span>Visit platform</span>
                        <ArrowUpRight
                          className="h-4 w-4 transition-transform duration-150 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                          aria-hidden="true"
                        />
                      </a>
                    </div>
                  </div>
                </motion.article>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
