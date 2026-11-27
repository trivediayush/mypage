import { useEffect, useState } from 'react';
import { AnimatePresence, motion, useReducedMotion } from 'motion/react';
import { ArrowUpRight, X } from 'lucide-react';
import {
  projectCategories,
  projects,
  type ProjectCategory,
  type ProjectItem,
} from '../data/portfolio';
import { filterProjectsByCategory, formatInlineMetadata } from '../utils/portfolioFilters';
import { EASE_EDITORIAL, Reveal, SectionHeading } from './MotionPrimitives';

export function ProjectsSection() {
  const [selectedCategory, setSelectedCategory] = useState<ProjectCategory>('All');
  const [inspectedProject, setInspectedProject] = useState<ProjectItem | null>(null);
  const prefersReducedMotion = useReducedMotion();

  const visibleProjects = filterProjectsByCategory(projects, selectedCategory);

  useEffect(() => {
    if (!inspectedProject) return;
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setInspectedProject(null);
      }
    };
    window.addEventListener('keydown', onKeyDown);
    return () => window.removeEventListener('keydown', onKeyDown);
  }, [inspectedProject]);

  return (
    <section
      id="work"
      aria-labelledby="work-heading"
      className="scroll-mt-20 py-20 lg:py-24"
    >
      <div className="mx-auto max-w-6xl px-6 lg:px-8">
        <Reveal>
          <SectionHeading
            id="work-heading"
            index="03"
            title="Selected Engineering Work"
            subtitle="Architecture patterns and production infrastructure built around immutability, multi-region resilience, Kubernetes delivery, and automated security gates."
          />
        </Reveal>

        {/* Interactive Filter Segmented Control */}
        <div
          role="tablist"
          aria-label="Filter projects by engineering domain"
          className="mb-10 flex flex-wrap items-center gap-1.5 rounded-xl border border-slate-200 bg-slate-100/80 p-1.5 dark:border-slate-800 dark:bg-[#0F1624]"
        >
          {projectCategories.map((category) => {
            const isActive = selectedCategory === category;
            return (
              <button
                key={category}
                type="button"
                role="tab"
                aria-selected={isActive}
                onClick={() => setSelectedCategory(category)}
                className={`relative min-h-[40px] rounded-lg px-4 py-2 text-sm font-medium whitespace-nowrap shrink-0 transition-colors duration-150 ${
                  isActive
                    ? 'text-[#0B1220] dark:text-white'
                    : 'text-slate-600 hover:text-[#0B1220] dark:text-slate-400 dark:hover:text-slate-200'
                }`}
              >
                {isActive && (
                  <motion.span
                    layoutId="active-project-filter"
                    transition={
                      prefersReducedMotion
                        ? { duration: 0 }
                        : { type: 'spring', stiffness: 380, damping: 32 }
                    }
                    aria-hidden="true"
                    className="absolute inset-0 rounded-lg bg-white shadow-sm ring-1 ring-slate-200/80 dark:bg-[#19243A] dark:ring-slate-700/80"
                  />
                )}
                <span className="relative z-10">{category}</span>
              </button>
            );
          })}
        </div>

        {/* Case Study Grid */}
        <motion.div
          layout={!prefersReducedMotion}
          data-testid="projects-grid"
          className="grid grid-cols-1 gap-6 md:grid-cols-2"
        >
          <AnimatePresence mode="popLayout">
            {visibleProjects.map((project) => (
              <motion.article
                key={project.id}
                layout={!prefersReducedMotion}
                initial={prefersReducedMotion ? false : { opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                exit={prefersReducedMotion ? undefined : { opacity: 0, scale: 0.98 }}
                transition={{ duration: 0.28, ease: EASE_EDITORIAL }}
                className="flex flex-col justify-between rounded-2xl border border-slate-200 bg-white p-7 transition-colors duration-150 hover:border-slate-300 dark:border-slate-800 dark:bg-[#101726] dark:hover:border-slate-700"
              >
                <div>
                  <p className="text-xs font-medium text-slate-500 dark:text-slate-400">
                    {project.context}
                  </p>

                  <h3 className="mt-2.5 font-editorial text-2xl font-medium tracking-tight text-[#0B1220] dark:text-[#F8FAFC]">
                    {project.title}
                  </h3>

                  <p className="mt-2 font-mono text-xs leading-relaxed text-[#1D4ED8] dark:text-[#60A5FA]">
                    {formatInlineMetadata(project.stack)}
                  </p>

                  <dl className="mt-6 space-y-4 border-t border-slate-200/80 pt-5 text-sm leading-relaxed dark:border-slate-800/80">
                    <div>
                      <dt className="text-xs font-semibold text-slate-500 dark:text-slate-400">
                        Challenge
                      </dt>
                      <dd className="mt-1 text-slate-700 dark:text-slate-300">
                        {project.problem}
                      </dd>
                    </div>
                    <div>
                      <dt className="text-xs font-semibold text-slate-500 dark:text-slate-400">
                        Outcome
                      </dt>
                      <dd className="mt-1 text-slate-700 dark:text-slate-300">
                        {project.result}
                      </dd>
                    </div>
                  </dl>
                </div>

                <div className="mt-7 flex flex-wrap items-center justify-between gap-4 border-t border-slate-200/80 pt-5 dark:border-slate-800/80">
                  <button
                    type="button"
                    onClick={() => setInspectedProject(project)}
                    aria-label={`Inspect architecture details for ${project.title}`}
                    className="inline-flex min-h-[40px] items-center gap-2 rounded-lg border border-slate-300 bg-slate-50 px-4 py-2 text-sm font-medium text-[#0B1220] whitespace-nowrap shrink-0 transition-colors duration-150 hover:border-[#1D4ED8] hover:bg-white hover:text-[#1D4ED8] dark:border-slate-700 dark:bg-[#151E31] dark:text-slate-100 dark:hover:border-[#60A5FA] dark:hover:text-[#60A5FA]"
                  >
                    Inspect architecture
                  </button>

                  {project.repoUrl && (
                    <a
                      href={project.repoUrl}
                      target="_blank"
                      rel="noreferrer noopener"
                      aria-label={`View GitHub repository for ${project.title}`}
                      className="inline-flex min-h-[40px] items-center gap-1.5 text-sm font-medium text-slate-600 whitespace-nowrap shrink-0 transition-colors hover:text-[#1D4ED8] dark:text-slate-400 dark:hover:text-[#60A5FA]"
                    >
                      <span>Repository</span>
                      <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
                    </a>
                  )}
                </div>
              </motion.article>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>

      {/* Full Case Study Detail Modal */}
      <AnimatePresence>
        {inspectedProject && (
          <motion.div
            role="dialog"
            aria-modal="true"
            aria-labelledby="project-modal-title"
            initial={prefersReducedMotion ? false : { opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={prefersReducedMotion ? undefined : { opacity: 0 }}
            transition={{ duration: 0.2 }}
            onClick={() => setInspectedProject(null)}
            className="fixed inset-0 z-50 flex items-center justify-center bg-slate-950/60 p-4 backdrop-blur-xs sm:p-6"
          >
            <motion.div
              initial={prefersReducedMotion ? false : { opacity: 0, scale: 0.97, y: 12 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={prefersReducedMotion ? undefined : { opacity: 0, scale: 0.97, y: 8 }}
              transition={{ duration: 0.22, ease: EASE_EDITORIAL }}
              onClick={(event) => event.stopPropagation()}
              className="max-h-[90vh] w-full max-w-2xl overflow-y-auto rounded-2xl border border-slate-200 bg-white p-7 shadow-2xl sm:p-9 dark:border-slate-700 dark:bg-[#0F1624]"
            >
              <div className="flex items-start justify-between gap-4 border-b border-slate-200 pb-5 dark:border-slate-800">
                <div>
                  <p className="text-xs font-medium text-[#1D4ED8] dark:text-[#60A5FA]">
                    {formatInlineMetadata([inspectedProject.category, inspectedProject.context])}
                  </p>
                  <h3
                    id="project-modal-title"
                    className="mt-2 font-editorial text-2xl font-medium tracking-tight text-[#0B1220] sm:text-3xl dark:text-[#F8FAFC]"
                  >
                    {inspectedProject.title}
                  </h3>
                </div>

                <button
                  type="button"
                  onClick={() => setInspectedProject(null)}
                  aria-label="Close architecture details"
                  className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-lg border border-slate-200 text-slate-600 transition-colors hover:bg-slate-100 hover:text-[#0B1220] dark:border-slate-700 dark:text-slate-300 dark:hover:bg-slate-800 dark:hover:text-white"
                >
                  <X className="h-5 w-5" aria-hidden="true" />
                </button>
              </div>

              <div className="mt-6 space-y-6">
                <div>
                  <h4 className="text-xs font-semibold text-slate-500 dark:text-slate-400">
                    Problem statement
                  </h4>
                  <p className="mt-2 text-[15px] leading-relaxed text-slate-700 dark:text-slate-300">
                    {inspectedProject.problem}
                  </p>
                </div>

                <div>
                  <h4 className="text-xs font-semibold text-slate-500 dark:text-slate-400">
                    Engineering approach
                  </h4>
                  <p className="mt-2 text-[15px] leading-relaxed text-slate-700 dark:text-slate-300">
                    {inspectedProject.approach}
                  </p>
                </div>

                <div>
                  <h4 className="text-xs font-semibold text-slate-500 dark:text-slate-400">
                    Operational outcome
                  </h4>
                  <p className="mt-2 text-[15px] leading-relaxed text-slate-700 dark:text-slate-300">
                    {inspectedProject.result}
                  </p>
                </div>

                <div className="border-t border-slate-200 pt-5 dark:border-slate-800">
                  <h4 className="text-xs font-semibold text-slate-500 dark:text-slate-400">
                    Architecture stack
                  </h4>
                  <p className="mt-2 font-mono text-sm text-[#0B1220] dark:text-slate-200">
                    {formatInlineMetadata(inspectedProject.stack)}
                  </p>
                </div>
              </div>

              <div className="mt-8 flex flex-wrap items-center justify-end gap-3 border-t border-slate-200 pt-5 dark:border-slate-800">
                {inspectedProject.repoUrl && (
                  <a
                    href={inspectedProject.repoUrl}
                    target="_blank"
                    rel="noreferrer noopener"
                    className="inline-flex min-h-[42px] items-center gap-2 rounded-lg border border-slate-300 px-4 py-2 text-sm font-medium text-[#0B1220] whitespace-nowrap transition-colors hover:bg-slate-50 dark:border-slate-700 dark:text-slate-100 dark:hover:bg-slate-800"
                  >
                    <span>Open on GitHub</span>
                    <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
                  </a>
                )}
                <button
                  type="button"
                  onClick={() => setInspectedProject(null)}
                  className="inline-flex min-h-[42px] items-center justify-center rounded-lg bg-[#1D4ED8] px-5 py-2 text-sm font-medium text-white whitespace-nowrap transition-colors hover:bg-[#1E40AF] dark:bg-[#2563EB] dark:hover:bg-[#3B82F6]"
                >
                  Close
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
