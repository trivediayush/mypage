import { useState } from 'react';
import { AnimatePresence, motion, useReducedMotion } from 'motion/react';
import { ArrowUpRight, ChevronDown } from 'lucide-react';
import { articles } from '../data/portfolio';
import { formatInlineMetadata } from '../utils/portfolioFilters';
import { EASE_EDITORIAL, Reveal, SectionHeading } from './MotionPrimitives';

export function WritingSection() {
  const [expandedId, setExpandedId] = useState<string | null>(articles[0].id);
  const prefersReducedMotion = useReducedMotion();

  const toggleArticle = (id: string) => {
    setExpandedId((current) => (current === id ? null : id));
  };

  return (
    <section
      id="writing"
      aria-labelledby="writing-heading"
      className="scroll-mt-20 py-20 lg:py-24"
    >
      <div className="mx-auto max-w-6xl px-6 lg:px-8">
        <Reveal>
          <SectionHeading
            id="writing-heading"
            index="05"
            title="Technical Writing"
            subtitle="Practical engineering field notes on Azure Kubernetes Service, Terraform state discipline, and multi-stage CI/CD architecture."
          />
        </Reveal>

        <div className="divide-y divide-slate-200 border-y border-slate-200 dark:divide-slate-800 dark:border-slate-800">
          {articles.map((article) => {
            const isExpanded = expandedId === article.id;
            return (
              <article key={article.id} className="py-7">
                <div className="flex flex-col justify-between gap-5 lg:flex-row lg:items-start">
                  <div className="max-w-2xl">
                    <p className="font-mono text-xs text-slate-500 tabular-nums dark:text-slate-400">
                      {formatInlineMetadata([article.topic, article.date, article.readTime])}
                    </p>
                    <h3 className="mt-2 font-editorial text-2xl font-medium tracking-tight text-[#0B1220] dark:text-[#F8FAFC]">
                      {article.title}
                    </h3>
                    <p className="mt-2 text-[15px] leading-relaxed text-slate-600 dark:text-slate-400">
                      {article.summary}
                    </p>
                  </div>

                  <div className="flex shrink-0 flex-wrap items-center gap-3">
                    <button
                      type="button"
                      onClick={() => toggleArticle(article.id)}
                      aria-expanded={isExpanded}
                      aria-controls={`article-takeaways-${article.id}`}
                      aria-label={`${isExpanded ? 'Hide' : 'Show'} key takeaways for ${article.title}`}
                      className="inline-flex min-h-[42px] items-center gap-2 rounded-lg border border-slate-300 bg-white px-4 py-2 text-sm font-medium text-[#0B1220] whitespace-nowrap transition-colors hover:bg-slate-50 dark:border-slate-700 dark:bg-[#101726] dark:text-slate-200 dark:hover:bg-[#162033]"
                    >
                      <span>{isExpanded ? 'Hide takeaways' : 'Key takeaways'}</span>
                      <ChevronDown
                        className={`h-4 w-4 transition-transform duration-200 ${
                          isExpanded ? 'rotate-180' : ''
                        }`}
                        aria-hidden="true"
                      />
                    </button>

                    <a
                      href={article.href}
                      target="_blank"
                      rel="noreferrer noopener"
                      aria-label={`Read ${article.title} on Medium`}
                      className="inline-flex min-h-[42px] items-center gap-1.5 rounded-lg px-3 py-2 text-sm font-medium text-[#1D4ED8] whitespace-nowrap transition-colors hover:text-[#1E40AF] dark:text-[#60A5FA] dark:hover:text-[#93C5FD]"
                    >
                      <span>Read article</span>
                      <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
                    </a>
                  </div>
                </div>

                <AnimatePresence initial={false}>
                  {isExpanded && (
                    <motion.div
                      id={`article-takeaways-${article.id}`}
                      initial={prefersReducedMotion ? false : { opacity: 0, y: -6 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={prefersReducedMotion ? undefined : { opacity: 0, y: -6 }}
                      transition={{ duration: 0.22, ease: EASE_EDITORIAL }}
                      className="mt-5 rounded-xl border border-slate-200/90 bg-white p-5 sm:p-6 dark:border-slate-800 dark:bg-[#101726]"
                    >
                      <p className="text-xs font-semibold text-[#B45309] dark:text-[#F59E0B]">
                        Key engineering takeaways
                      </p>
                      <ul className="mt-3 space-y-2.5">
                        {article.takeaways.map((point) => (
                          <li
                            key={point}
                            className="flex items-start gap-3 text-sm leading-relaxed text-slate-700 dark:text-slate-300"
                          >
                            <span
                              aria-hidden="true"
                              className="mt-2 h-1.5 w-1.5 shrink-0 bg-[#B45309] dark:bg-[#F59E0B]"
                            />
                            <span>{point}</span>
                          </li>
                        ))}
                      </ul>
                    </motion.div>
                  )}
                </AnimatePresence>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
