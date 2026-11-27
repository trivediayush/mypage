import { useState } from 'react';
import { ArrowUpRight, Check, Copy, Mail, Phone } from 'lucide-react';
import { builtPlatforms, profile } from '../data/portfolio';
import { Reveal, SectionHeading } from './MotionPrimitives';

export function ContactSection() {
  const [copied, setCopied] = useState(false);

  const handleCopyEmail = async () => {
    try {
      await navigator.clipboard.writeText(profile.email);
      setCopied(true);
      window.setTimeout(() => setCopied(false), 2400);
    } catch {
      // Fallback when clipboard permissions are restricted
      setCopied(true);
      window.setTimeout(() => setCopied(false), 2400);
    }
  };

  return (
    <>
      <section
        id="contact"
        aria-labelledby="contact-heading"
        className="scroll-mt-20 border-t border-slate-200/80 bg-[#F1F5F9]/70 py-20 lg:py-24 dark:border-slate-800/80 dark:bg-[#0C121E]"
      >
        <div className="mx-auto max-w-6xl px-6 lg:px-8">
          <Reveal>
            <SectionHeading
              id="contact-heading"
              index="06"
              title="Contact"
              subtitle="Direct channels for DevOps, Platform Engineering, and Site Reliability Engineering roles."
            />
          </Reveal>

          <div className="grid grid-cols-1 gap-8 rounded-2xl border border-slate-200 bg-white p-8 sm:p-10 dark:border-slate-800 dark:bg-[#101726] lg:grid-cols-12 lg:items-center">
            <div className="lg:col-span-7">
              <p className="text-xs font-semibold text-[#1D4ED8] dark:text-[#60A5FA]">
                Direct Channels
              </p>
              <h3 className="mt-2 font-editorial text-2xl font-medium tracking-tight text-[#0B1220] sm:text-3xl dark:text-[#F8FAFC]">
                Start an engineering conversation.
              </h3>
              <p className="mt-3 max-w-xl text-[15px] leading-relaxed text-slate-600 dark:text-slate-400">
                Reach out directly via email or phone for full-time DevOps, Platform, or SRE opportunities and technical interviews. For independent consulting or AWS hosting work, see{' '}
                <a
                  href="#freelance"
                  className="font-medium text-[#0F766E] underline decoration-[#0F766E]/40 underline-offset-4 transition-colors hover:text-[#115E59] dark:text-[#14B8A6] dark:decoration-[#14B8A6]/40 dark:hover:text-[#2DD4BF]"
                >
                  Freelance &amp; Consulting Scopes
                </a>
                .
              </p>

              <div className="mt-7 flex flex-wrap items-center gap-3">
                <a
                  href={`mailto:${profile.email}`}
                  className="inline-flex min-h-[44px] items-center gap-2 rounded-lg bg-[#1D4ED8] px-5 py-2.5 text-sm font-medium text-white whitespace-nowrap transition-colors hover:bg-[#1E40AF] dark:bg-[#2563EB] dark:hover:bg-[#3B82F6]"
                >
                  <Mail className="h-4 w-4" aria-hidden="true" />
                  <span>{profile.email}</span>
                </a>

                <button
                  type="button"
                  onClick={handleCopyEmail}
                  aria-label="Copy email address"
                  className="inline-flex min-h-[44px] items-center gap-2 rounded-lg border border-slate-300 bg-white px-4 py-2.5 text-sm font-medium text-[#0B1220] whitespace-nowrap transition-colors hover:bg-slate-50 dark:border-slate-700 dark:bg-[#151E31] dark:text-slate-200 dark:hover:bg-[#1C2840]"
                >
                  {copied ? (
                    <>
                      <Check className="h-4 w-4 text-[#0F766E] dark:text-[#14B8A6]" aria-hidden="true" />
                      <span>Copied</span>
                    </>
                  ) : (
                    <>
                      <Copy className="h-4 w-4 text-slate-500 dark:text-slate-400" aria-hidden="true" />
                      <span>Copy email</span>
                    </>
                  )}
                </button>
              </div>
            </div>

            <div className="space-y-5 border-t border-slate-200/80 pt-6 lg:col-span-5 lg:border-t-0 lg:border-l lg:pt-0 lg:pl-8 dark:border-slate-800/80">
              <div>
                <p className="text-xs font-medium text-slate-500 dark:text-slate-400">Phone</p>
                <a
                  href={`tel:${profile.telHref}`}
                  className="mt-1 inline-flex items-center gap-2 font-mono text-sm font-medium text-[#0B1220] tabular-nums transition-colors hover:text-[#1D4ED8] dark:text-slate-200 dark:hover:text-[#60A5FA]"
                >
                  <Phone className="h-4 w-4 text-slate-400" aria-hidden="true" />
                  <span>{profile.tel}</span>
                </a>
              </div>

              <div>
                <p className="text-xs font-medium text-slate-500 dark:text-slate-400">Profiles</p>
                <div className="mt-2 flex flex-wrap gap-x-5 gap-y-2 text-sm font-medium">
                  <a
                    href={profile.links.linkedin}
                    target="_blank"
                    rel="noreferrer noopener"
                    className="inline-flex items-center gap-1 text-[#0B1220] transition-colors hover:text-[#1D4ED8] dark:text-slate-200 dark:hover:text-[#60A5FA]"
                  >
                    <span>LinkedIn</span>
                    <ArrowUpRight className="h-3.5 w-3.5" aria-hidden="true" />
                  </a>
                  <a
                    href={profile.links.github}
                    target="_blank"
                    rel="noreferrer noopener"
                    className="inline-flex items-center gap-1 text-[#0B1220] transition-colors hover:text-[#1D4ED8] dark:text-slate-200 dark:hover:text-[#60A5FA]"
                  >
                    <span>GitHub</span>
                    <ArrowUpRight className="h-3.5 w-3.5" aria-hidden="true" />
                  </a>
                  <a
                    href={profile.links.medium}
                    target="_blank"
                    rel="noreferrer noopener"
                    className="inline-flex items-center gap-1 text-[#0B1220] transition-colors hover:text-[#1D4ED8] dark:text-slate-200 dark:hover:text-[#60A5FA]"
                  >
                    <span>Medium</span>
                    <ArrowUpRight className="h-3.5 w-3.5" aria-hidden="true" />
                  </a>
                </div>
              </div>

              <div>
                <p className="text-xs font-medium text-slate-500 dark:text-slate-400">
                  Platforms Built
                </p>
                <div className="mt-2 flex flex-col gap-1.5 text-sm font-medium">
                  {builtPlatforms.map((platform) => (
                    <a
                      key={platform.id}
                      href={platform.url}
                      target="_blank"
                      rel="noreferrer noopener"
                      className="inline-flex items-center gap-1.5 text-[#0F766E] transition-colors hover:text-[#115E59] dark:text-[#14B8A6] dark:hover:text-[#2DD4BF]"
                    >
                      <span className="font-mono text-xs">{platform.displayUrl}</span>
                      <ArrowUpRight className="h-3.5 w-3.5" aria-hidden="true" />
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <footer className="border-t border-slate-200 bg-[#F8FAFC] py-8 dark:border-slate-800 dark:bg-[#080C14]">
        <div className="mx-auto flex max-w-6xl flex-col items-start justify-between gap-4 px-6 text-xs text-slate-500 sm:flex-row sm:items-center lg:px-8 dark:text-slate-400">
          <p>
            © {new Date().getFullYear()} {profile.name}. {profile.role}.
          </p>
          <div className="flex flex-wrap items-center gap-x-4 gap-y-1">
            <a
              href="https://devops.atrivedi.online/"
              target="_blank"
              rel="noreferrer noopener"
              className="transition-colors hover:text-[#0B1220] dark:hover:text-slate-200"
            >
              devops.atrivedi.online
            </a>
            <span aria-hidden="true">·</span>
            <a
              href="https://practice.atrivedi.online/"
              target="_blank"
              rel="noreferrer noopener"
              className="transition-colors hover:text-[#0B1220] dark:hover:text-slate-200"
            >
              practice.atrivedi.online
            </a>
            <span aria-hidden="true">·</span>
            <a
              href="#top"
              className="transition-colors hover:text-[#0B1220] dark:hover:text-slate-200"
            >
              Back to top
            </a>
          </div>
        </div>
      </footer>
    </>
  );
}
