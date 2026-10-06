import { ArrowUpRight, Cloud, GitPullRequest, ScanSearch } from "lucide-react";
import { profile } from "@/content/portfolio";
import { Section } from "./Section";

const services = [
  { icon: Cloud, name: "Cloud infrastructure", text: "AWS / Azure environments, networking, compute, access, and Terraform-based provisioning." },
  { icon: GitPullRequest, name: "CI/CD automation", text: "Build, test, security, deployment, release, and rollback workflows." },
  { icon: ScanSearch, name: "Infrastructure review", text: "Practical review of reliability, cost, deployment flow, and operational gaps." },
];

export function Services() {
  return (
    <Section id="services" index={6} title="Freelance" abstract="I take on focused DevOps work alongside my full-time engineering role." tone="shade">
      <div className="grid gap-4 md:grid-cols-3">{services.map(({ icon: Icon, name, text }) => <article key={name} className="service-card rounded-xl border border-border bg-background/82 p-6"><Icon className="h-5 w-5 text-primary" /><h3 className="mt-6 text-lg font-semibold tracking-tight">{name}</h3><p className="mt-3 text-sm leading-6 text-muted-foreground">{text}</p></article>)}</div>
      <a href={`mailto:${profile.email}?subject=DevOps%20freelance%20engagement`} className="mt-7 inline-flex items-center gap-2 rounded-md border border-border px-4 py-2.5 text-sm font-medium hover:border-primary/40 hover:text-primary">Discuss a project <ArrowUpRight className="h-4 w-4" /></a>
    </Section>
  );
}
