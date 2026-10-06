import { Building2, MapPin } from "lucide-react";
import { roles } from "@/content/portfolio";
import { Section } from "./Section";
import { ToolIcon } from "./ToolIcon";

const roleTools: Record<string, string[]> = {
  "System Level Solutions (SLS)": ["Jenkins", "Terraform", "Ansible", "AWS", "Google Cloud"],
  "Aviasole Technologies": ["GitHub Actions", "Azure DevOps", "Kubernetes", "Microsoft Azure", "SonarQube", "Trivy"],
  "VKAPS IT Solutions Pvt. Ltd.": ["Jenkins", "Git", "Linux"],
  PearlThoughts: ["Docker", "AWS", "Jenkins"],
  "Allsoft Solutions and Services Pvt. Ltd.": ["Jenkins", "GitLab CI", "Docker", "Kubernetes", "AWS", "Microsoft Azure"],
};

export function Experience() {
  return (
    <Section id="experience" index={1} title="Experience" abstract="What I have been responsible for, without the résumé wall of text.">
      <div className="grid gap-4">
        {roles.map((role) => (
          <article key={role.company} className="experience-card group rounded-xl border border-border bg-background p-5 transition-all hover:-translate-y-0.5 hover:border-primary/30 hover:shadow-[0_20px_50px_-42px_var(--foreground)] md:p-6">
            <div className="grid gap-5 md:grid-cols-[10rem_minmax(0,1fr)_auto] md:items-start">
              <div>
                <p className="font-mono text-[0.65rem] tracking-[0.12em] text-muted-foreground uppercase">{role.period}</p>
                {role.current && <span className="mt-3 inline-flex rounded-full bg-primary/8 px-2 py-1 font-mono text-[0.58rem] tracking-[0.12em] text-primary uppercase">Current</span>}
              </div>
              <div>
                <div className="flex flex-wrap items-center gap-2">
                  <Building2 className="h-4 w-4 text-primary" />
                  <h3 className="text-lg font-semibold tracking-tight">{role.title}</h3>
                </div>
                <p className="mt-1 text-sm font-medium text-primary">{role.company}</p>
                <p className="mt-3 max-w-2xl text-sm leading-6 text-muted-foreground">{role.summary}</p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {(roleTools[role.company] ?? []).map((tool) => <span key={tool} className="tech-chip"><ToolIcon name={tool} className="h-3.5 w-3.5" />{tool}</span>)}
                </div>
              </div>
              <MapPin className="hidden h-4 w-4 text-muted-foreground md:block" />
            </div>
          </article>
        ))}
      </div>
    </Section>
  );
}
