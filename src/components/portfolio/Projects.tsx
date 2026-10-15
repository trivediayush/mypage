import { ArrowUpRight, GitBranch } from "lucide-react";
import { projects } from "@/content/portfolio";
import { Section } from "./Section";
import { ToolIcon } from "./ToolIcon";

const projectTools: Record<string, string[]> = {
  "GCP High Availability & Disaster Recovery Infrastructure": ["Google Cloud", "Terraform", "Ansible"],
  "Kubernetes Microservices Delivery Platform": ["Microsoft Azure", "Kubernetes", "Azure DevOps", "Helm"],
  "DevSecOps CI/CD Pipeline": ["GitHub Actions", "SonarQube", "Trivy", "Snyk", "Gitleaks"],
  "Golden AMI Pipeline Pattern": ["AWS", "Terraform", "Jenkins"],
};

export function Projects() {
  return (
    <Section id="work" index={3} title="Selected work" abstract="Systems, platforms, and automation patterns I can talk through in an interview.">
      <div className="grid gap-5 lg:grid-cols-2">
        {projects.map((project, i) => (
          <article key={project.title} className="project-card group flex min-h-[22rem] flex-col rounded-xl border border-border/80 bg-background/75 p-6 transition-all duration-300 hover:-translate-y-1 hover:border-primary/30 hover:shadow-[0_24px_70px_-48px_var(--foreground)] md:p-7">
            <div className="flex items-center justify-between gap-3">
              <span className="font-mono text-[0.62rem] tracking-[0.16em] text-primary uppercase">0{i + 1} / {project.status ?? "Project"}</span>
              <GitBranch className="h-4 w-4 text-muted-foreground" />
            </div>
            <h3 className="mt-6 max-w-lg text-xl font-semibold leading-tight tracking-tight sm:text-2xl">{project.title}</h3>
            <div className="mt-4 flex flex-wrap gap-2">
              {(projectTools[project.title] ?? []).map((tool) => <span key={tool} className="tech-chip"><ToolIcon name={tool} className="h-3.5 w-3.5" />{tool}</span>)}
            </div>
            <div className="mt-6 space-y-2"><p className="text-sm leading-6 text-foreground/90">{project.approach}</p><p className="text-sm leading-6 text-muted-foreground">{project.result}</p></div>
            <div className="mt-auto pt-7 flex items-center justify-between border-t border-border">
              <span className="font-mono text-[0.6rem] tracking-[0.12em] text-muted-foreground uppercase">{project.stack}</span>
              {project.href ? <a href={project.href} target="_blank" rel="noreferrer noopener" className="inline-flex items-center gap-1 text-sm font-medium text-primary">Repo <ArrowUpRight className="h-3.5 w-3.5" /></a> : <span className="font-mono text-[0.6rem] text-muted-foreground uppercase">Architecture / delivery</span>}
            </div>
          </article>
        ))}
      </div>
    </Section>
  );
}
