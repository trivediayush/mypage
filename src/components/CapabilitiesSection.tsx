import { useState } from 'react';
import { AnimatePresence, motion, useReducedMotion } from 'motion/react';
import { ArrowUpRight } from 'lucide-react';
import {
  certifications,
  clientWork,
  education,
  serviceScopes,
  skills,
} from '../data/portfolio';
import { formatInlineMetadata } from '../utils/portfolioFilters';
import { EASE_EDITORIAL, Reveal, SectionHeading } from './MotionPrimitives';
import { SkillIcon } from './SkillIcon';

export function CapabilitiesSection() {
  const [activeServiceId, setActiveServiceId] = useState<string>(serviceScopes[0].id);
  const prefersReducedMotion = useReducedMotion();

  const activeService =
    serviceScopes.find((scope) => scope.id === activeServiceId) ?? serviceScopes[0];

  return (
    <section
      id="capabilities"
      aria-labelledby="capabilities-heading"
      className="scroll-mt-20 border-y border-slate-200/80 bg-[#F1F5F9]/70 py-20 lg:py-24 dark:border-slate-800/80 dark:bg-[#0C121E]"
    >
      <div className="mx-auto max-w-6xl px-6 lg:px-8">
        <Reveal>
          <SectionHeading
            id="capabilities-heading"
            index="04"
            title="Skills, Client Work & Credentials"
            subtitle="Core cloud, orchestration, automation, security, and observability tooling—paired with verified certifications and freelance client delivery."
          />
        </Reveal>

        {/* Unified Skills Grid (No Categorization, Official Theme-Matched Icons) */}
        <Reveal>
          <div
            data-testid="skills-grid"
            aria-label="Technical skills and tools"
            className="grid grid-cols-2 overflow-hidden rounded-2xl border border-slate-200 bg-slate-200/80 gap-px sm:grid-cols-3 lg:grid-cols-4 dark:border-slate-800 dark:bg-slate-800/80"
          >
            {skills.map((skill) => (
              <motion.div
                key={skill.id}
                whileHover={prefersReducedMotion ? undefined : { y: -1 }}
                transition={{ duration: 0.16, ease: EASE_EDITORIAL }}
                className="group flex items-center gap-3.5 bg-white px-4 py-3.5 transition-colors duration-150 hover:bg-[#F8FAFC] dark:bg-[#101726] dark:hover:bg-[#151F33]"
              >
                <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-[#1D4ED8]/[0.07] text-[#1D4ED8] transition-colors duration-150 group-hover:bg-[#1D4ED8] group-hover:text-white dark:bg-[#3B82F6]/12 dark:text-[#60A5FA] dark:group-hover:bg-[#2563EB] dark:group-hover:text-white">
                  <SkillIcon id={skill.id} className="h-[18px] w-[18px]" />
                </span>
                <span className="truncate text-sm font-medium text-[#0B1220] dark:text-slate-100">
                  {skill.name}
                </span>
              </motion.div>
            ))}
          </div>
        </Reveal>

        {/* Dedicated Freelance Client Showcase — Jashoda Jewels (Live on AWS) */}
        <Reveal delay={0.06} className="mt-12">
          <div
            id="client-work"
            className="rounded-2xl border border-slate-200 bg-white p-7 sm:p-9 dark:border-slate-800 dark:bg-[#101726]"
          >
            <div className="grid grid-cols-1 gap-8 lg:grid-cols-12 lg:items-start">
              <div className="lg:col-span-5">
                <p className="text-xs font-semibold text-[#1D4ED8] dark:text-[#60A5FA]">
                  {clientWork.type}
                </p>
                <h3 className="mt-2 font-editorial text-2xl font-medium tracking-tight text-[#0B1220] sm:text-3xl dark:text-[#F8FAFC]">
                  {clientWork.name}
                </h3>
                <p className="mt-1.5 font-mono text-xs text-slate-500 dark:text-slate-400">
                  {formatInlineMetadata([clientWork.displayUrl, clientWork.cloud])}
                </p>
                <p className="mt-3.5 text-[15px] leading-relaxed text-slate-600 dark:text-slate-400">
                  {clientWork.summary}
                </p>

                <div className="mt-6">
                  <a
                    href={clientWork.url}
                    target="_blank"
                    rel="noreferrer noopener"
                    aria-label={`Visit live website for ${clientWork.name} at ${clientWork.displayUrl}`}
                    className="inline-flex min-h-[42px] items-center gap-2 rounded-lg bg-[#1D4ED8] px-4 py-2 text-sm font-medium text-white whitespace-nowrap transition-colors hover:bg-[#1E40AF] dark:bg-[#2563EB] dark:hover:bg-[#3B82F6]"
                  >
                    <span>Visit {clientWork.displayUrl}</span>
                    <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
                  </a>
                </div>
              </div>

              <div className="border-t border-slate-200/80 pt-6 lg:col-span-7 lg:border-t-0 lg:border-l lg:pt-0 lg:pl-8 dark:border-slate-800/80">
                <p className="text-xs font-semibold text-slate-500 dark:text-slate-400">
                  AWS Hosting &amp; Delivery Highlights
                </p>
                <ul className="mt-4 space-y-3.5">
                  {clientWork.details.map((detail) => (
                    <li
                      key={detail}
                      className="flex items-start gap-3 text-[15px] leading-relaxed text-slate-700 dark:text-slate-300"
                    >
                      <span
                        aria-hidden="true"
                        className="mt-2.5 h-1.5 w-1.5 shrink-0 bg-[#1D4ED8] dark:bg-[#60A5FA]"
                      />
                      <span>{detail}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </Reveal>

        {/* Credentials, Education & Separate Freelance Advisory Row */}
        <div className="mt-8 grid grid-cols-1 gap-8 lg:grid-cols-12">
          {/* Certifications & Education */}
          <Reveal className="flex flex-col justify-between rounded-2xl border border-slate-200 bg-white p-7 sm:p-8 dark:border-slate-800 dark:bg-[#101726] lg:col-span-5">
            <div>
              <p className="text-xs font-semibold text-[#1D4ED8] dark:text-[#60A5FA]">
                Verified Credentials
              </p>
              <h3 className="mt-2 font-editorial text-2xl font-medium tracking-tight text-[#0B1220] dark:text-[#F8FAFC]">
                Certifications &amp; Education
              </h3>

              <ul className="mt-6 divide-y divide-slate-200/80 dark:divide-slate-800/80">
                {certifications.map((cert) => (
                  <li key={cert.name} className="py-3.5 first:pt-0">
                    <p className="text-sm font-medium text-[#0B1220] dark:text-slate-100">
                      {cert.name}
                    </p>
                    <p className="mt-0.5 font-mono text-xs text-slate-500 tabular-nums dark:text-slate-400">
                      {formatInlineMetadata([cert.issuer, cert.year])}
                    </p>
                  </li>
                ))}
              </ul>
            </div>

            <div className="mt-8 border-t border-slate-200/80 pt-6 dark:border-slate-800/80">
              <p className="text-xs font-semibold text-slate-500 dark:text-slate-400">
                Academic Foundation
              </p>
              <p className="mt-1.5 text-sm font-semibold text-[#0B1220] dark:text-slate-100">
                {education.degree}
              </p>
              <p className="mt-0.5 text-xs text-slate-600 dark:text-slate-400">
                {education.institution}
              </p>
              <p className="mt-0.5 font-mono text-xs text-slate-500 tabular-nums dark:text-slate-400">
                {education.period}
              </p>
            </div>
          </Reveal>

          {/* Separate Freelance Advisory & Discussion Card */}
          <Reveal
            delay={0.08}
            className="flex flex-col justify-between rounded-2xl border border-slate-200 bg-white p-7 sm:p-8 dark:border-slate-800 dark:bg-[#101726] lg:col-span-7"
          >
            <div id="freelance">
              <p className="text-xs font-semibold text-[#0F766E] dark:text-[#14B8A6]">
                Freelance &amp; Independent Engagements
              </p>
              <h3 className="mt-2 font-editorial text-2xl font-medium tracking-tight text-[#0B1220] dark:text-[#F8FAFC]">
                Selected Consulting Scopes
              </h3>

              {/* Scope Selector Tabs */}
              <div
                role="tablist"
                aria-label="Consulting engagement scopes"
                className="mt-6 flex flex-wrap gap-1.5 border-b border-slate-200 pb-4 dark:border-slate-800"
              >
                {serviceScopes.map((scope) => {
                  const active = scope.id === activeService.id;
                  return (
                    <button
                      key={scope.id}
                      type="button"
                      role="tab"
                      aria-selected={active}
                      onClick={() => setActiveServiceId(scope.id)}
                      className={`min-h-[40px] rounded-lg px-3.5 py-2 text-xs font-semibold whitespace-nowrap shrink-0 transition-colors ${
                        active
                          ? 'bg-[#0F766E] text-white dark:bg-[#0D9488]'
                          : 'bg-slate-100 text-slate-700 hover:bg-slate-200/80 dark:bg-[#151E31] dark:text-slate-300 dark:hover:bg-[#1B2740]'
                      }`}
                    >
                      {scope.name}
                    </button>
                  );
                })}
              </div>

              <AnimatePresence mode="wait">
                <motion.div
                  key={activeService.id}
                  initial={prefersReducedMotion ? false : { opacity: 0, y: 6 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={prefersReducedMotion ? undefined : { opacity: 0, y: -6 }}
                  transition={{ duration: 0.2, ease: EASE_EDITORIAL }}
                  className="mt-6"
                >
                  <p className="text-[15px] leading-relaxed text-slate-700 dark:text-slate-300">
                    {activeService.scope}
                  </p>
                  <p className="mt-2 text-xs text-slate-500 dark:text-slate-400">
                    Ideal fit: {activeService.bestFor}
                  </p>
                  <ul className="mt-5 space-y-2.5">
                    {activeService.deliverables.map((item) => (
                      <li
                        key={item}
                        className="flex items-start gap-3 text-sm text-slate-700 dark:text-slate-300"
                      >
                        <span
                          aria-hidden="true"
                          className="mt-2 h-1.5 w-1.5 shrink-0 bg-[#0F766E] dark:bg-[#14B8A6]"
                        />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </motion.div>
              </AnimatePresence>
            </div>

            <div className="mt-8 flex flex-wrap items-center justify-between gap-4 border-t border-slate-200/80 pt-5 dark:border-slate-800/80">
              <p className="text-xs text-slate-600 dark:text-slate-400">
                Have a cloud setup, CI/CD, or AWS hosting project in mind?
              </p>
              <a
                href="mailto:ayushtrivedi11jan@gmail.com?subject=Freelance%20DevOps%20%26%20Cloud%20Inquiry"
                className="inline-flex min-h-[42px] items-center gap-2 rounded-lg bg-[#0F766E] px-4 py-2 text-sm font-medium text-white whitespace-nowrap shrink-0 transition-colors hover:bg-[#115E59] dark:bg-[#0D9488] dark:hover:bg-[#14B8A6]"
              >
                <span>Discuss a freelance project</span>
                <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
              </a>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
