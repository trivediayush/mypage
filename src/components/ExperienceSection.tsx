import { useState } from 'react';
import { AnimatePresence, motion, useReducedMotion } from 'motion/react';
import { roles } from '../data/portfolio';
import { formatInlineMetadata } from '../utils/portfolioFilters';
import { EASE_EDITORIAL, Reveal, SectionHeading } from './MotionPrimitives';

export function ExperienceSection() {
  const [activeRoleId, setActiveRoleId] = useState<string>(roles[0].id);
  const prefersReducedMotion = useReducedMotion();

  const activeRole = roles.find((r) => r.id === activeRoleId) ?? roles[0];

  return (
    <section
      id="experience"
      aria-labelledby="experience-heading"
      className="scroll-mt-20 py-20 lg:py-24"
    >
      <div className="mx-auto max-w-6xl px-6 lg:px-8">
        <Reveal>
          <SectionHeading
            id="experience-heading"
            index="01"
            title="Professional Experience"
            subtitle="Production ownership across hybrid cloud infrastructure, multi-region disaster recovery, Kubernetes microservices, and shift-left delivery pipelines."
          />
        </Reveal>

        <div className="grid grid-cols-1 gap-8 lg:grid-cols-12 lg:gap-12">
          {/* Interactive Chronology Selector */}
          <div
            role="tablist"
            aria-label="Career roles"
            className="flex flex-col divide-y divide-slate-200/80 border-y border-slate-200/80 dark:divide-slate-800/80 dark:border-slate-800/80 lg:col-span-5"
          >
            {roles.map((role) => {
              const isSelected = role.id === activeRole.id;
              return (
                <button
                  key={role.id}
                  type="button"
                  role="tab"
                  id={`role-tab-${role.id}`}
                  aria-selected={isSelected}
                  aria-controls={`role-panel-${role.id}`}
                  onClick={() => setActiveRoleId(role.id)}
                  className={`relative flex w-full flex-col items-start px-4 py-5 text-left transition-colors duration-150 ${
                    isSelected
                      ? 'text-[#0B1220] dark:text-[#F8FAFC]'
                      : 'text-slate-600 hover:bg-slate-100/70 hover:text-[#0B1220] dark:text-slate-400 dark:hover:bg-[#101726]/70 dark:hover:text-slate-100'
                  }`}
                >
                  {isSelected && (
                    <motion.span
                      layoutId="active-role-surface"
                      transition={
                        prefersReducedMotion
                          ? { duration: 0 }
                          : { type: 'spring', stiffness: 360, damping: 34 }
                      }
                      aria-hidden="true"
                      className="absolute inset-0 -z-10 bg-white shadow-[0_1px_2px_rgba(15,23,42,0.05)] ring-1 ring-inset ring-slate-200 dark:bg-[#101726] dark:ring-slate-700/80"
                    />
                  )}

                  <span className="font-mono text-xs text-slate-500 tabular-nums dark:text-slate-400">
                    {formatInlineMetadata([role.period, role.current ? 'Current' : role.employmentType])}
                  </span>
                  <span className="mt-1.5 text-base font-semibold tracking-tight">
                    {role.company}
                  </span>
                  <span className="mt-0.5 text-sm text-slate-600 dark:text-slate-300">
                    {role.title}
                  </span>
                </button>
              );
            })}
          </div>

          {/* Selected Role Detail Monograph */}
          <div className="lg:col-span-7">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeRole.id}
                role="tabpanel"
                id={`role-panel-${activeRole.id}`}
                aria-labelledby={`role-tab-${activeRole.id}`}
                initial={prefersReducedMotion ? false : { opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={prefersReducedMotion ? undefined : { opacity: 0, y: -8 }}
                transition={{ duration: 0.24, ease: EASE_EDITORIAL }}
                className="rounded-2xl border border-slate-200 bg-white p-7 sm:p-9 dark:border-slate-800 dark:bg-[#101726]"
              >
                <div className="flex flex-wrap items-baseline justify-between gap-2 border-b border-slate-200/80 pb-5 dark:border-slate-800/80">
                  <div>
                    <h3 className="font-editorial text-2xl font-medium tracking-tight text-[#0B1220] dark:text-[#F8FAFC]">
                      {activeRole.title}
                    </h3>
                    <p className="mt-1 text-sm font-medium text-[#1D4ED8] dark:text-[#60A5FA]">
                      {activeRole.company}
                    </p>
                  </div>
                  <p className="font-mono text-xs text-slate-500 tabular-nums dark:text-slate-400">
                    {activeRole.period}
                  </p>
                </div>

                <p className="mt-6 text-[15px] leading-relaxed text-slate-700 dark:text-slate-300">
                  {activeRole.summary}
                </p>

                <ul className="mt-6 space-y-3.5">
                  {activeRole.details.map((bullet, idx) => (
                    <li
                      key={idx}
                      className="flex items-start gap-3.5 text-[15px] leading-relaxed text-slate-700 dark:text-slate-300"
                    >
                      <span
                        aria-hidden="true"
                        className="mt-2.5 h-1.5 w-1.5 shrink-0 bg-[#1D4ED8] dark:bg-[#60A5FA]"
                      />
                      <span>{bullet}</span>
                    </li>
                  ))}
                </ul>

                <div className="mt-8 border-t border-slate-200/80 pt-5 dark:border-slate-800/80">
                  <p className="text-xs font-medium text-slate-500 dark:text-slate-400">
                    Primary focus areas
                  </p>
                  <p className="mt-1.5 font-mono text-xs leading-relaxed text-slate-700 dark:text-slate-300">
                    {formatInlineMetadata(activeRole.focusAreas)}
                  </p>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
}
