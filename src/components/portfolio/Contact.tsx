import { useState } from "react";
import { ArrowUpRight, Check, Copy } from "lucide-react";
import { profile } from "@/content/portfolio";
import { Section } from "./Section";

type Row = { label: string; value: string; href?: string; copy?: boolean };

export function Contact() {
  const [copied, setCopied] = useState<string | null>(null);

  const rows: Row[] = [
    { label: "Email", value: profile.email, href: `mailto:${profile.email}`, copy: true },
    { label: "Phone", value: profile.phones[0]!, href: `tel:${profile.phones[0]}`, copy: true },
    { label: "Alt. phone", value: profile.phones[1]!, href: `tel:${profile.phones[1]}`, copy: true },
    { label: "LinkedIn", value: "in/ayush-trivediin", href: profile.links.linkedin },
    { label: "GitHub", value: "trivediayush", href: profile.links.github },
    { label: "Medium", value: "@ayushtrivedi11jan", href: profile.links.medium },
  ];

  const copy = async (value: string) => {
    try {
      await navigator.clipboard.writeText(value);
      setCopied(value);
      window.setTimeout(() => setCopied(null), 1600);
    } catch {
      setCopied(null);
    }
  };

  return (
    <Section
      id="contact"
      index={8}
      title="Get in touch"
      abstract="Open to DevOps, Platform Engineering, SRE, Cloud Infrastructure, and selected freelance opportunities."
    >
      <div className="grid gap-12 lg:grid-cols-[minmax(0,1.15fr)_minmax(0,1fr)] lg:gap-16">
        <div className="min-w-0">
          <p className="max-w-xl text-base leading-relaxed text-foreground/90">
            The fastest way to reach me is email. If you are hiring, reviewing infrastructure, or
            scoping a freelance engagement, send a short note about the system and the outcome you
            are after.
          </p>

          <dl className="mt-8 border-t border-border">
            {rows.map((row) => (
              <div
                key={row.label}
                className="grid grid-cols-[6.5rem_minmax(0,1fr)_auto] items-baseline gap-4 border-b border-border py-3"
              >
                <dt className="font-mono text-[0.7rem] tracking-[0.16em] text-muted-foreground uppercase">
                  {row.label}
                </dt>
                <dd className="min-w-0 truncate text-sm text-foreground">
                  <a
                    href={row.href}
                    target={row.href?.startsWith("http") ? "_blank" : undefined}
                    rel={row.href?.startsWith("http") ? "noreferrer noopener" : undefined}
                    className="transition-colors hover:text-primary"
                  >
                    {row.value}
                  </a>
                </dd>
                <div className="justify-self-end">
                  {row.copy ? (
                    <button
                      type="button"
                      onClick={() => copy(row.value)}
                      aria-label={`Copy ${row.label}`}
                      className="text-muted-foreground transition-colors hover:text-primary"
                    >
                      {copied === row.value ? (
                        <Check className="h-3.5 w-3.5 text-primary" />
                      ) : (
                        <Copy className="h-3.5 w-3.5" />
                      )}
                    </button>
                  ) : (
                    <ArrowUpRight className="h-3.5 w-3.5 text-muted-foreground" />
                  )}
                </div>
              </div>
            ))}
          </dl>
        </div>

        <aside className="bg-primary p-8 text-primary-foreground md:p-10">
          <p className="font-mono text-[0.7rem] tracking-[0.2em] uppercase opacity-80">
            Freelance
          </p>
          <h3 className="mt-4 text-xl leading-snug font-semibold tracking-tight">
            Need help with cloud infrastructure or delivery automation?
          </h3>
          <p className="mt-4 text-sm leading-relaxed opacity-90">
            Send a short note about the current setup, the problem you are trying to solve, and the outcome you want.
          </p>
          <a
            href={`mailto:${profile.email}?subject=Freelance%20DevOps%20engagement`}
            className="group mt-8 inline-flex items-center gap-2 border-b border-primary-foreground/50 pb-1 font-mono text-xs tracking-[0.18em] uppercase"
          >
            Discuss a project
            <ArrowUpRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </a>
        </aside>
      </div>
    </Section>
  );
}
