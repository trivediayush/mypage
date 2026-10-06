import { ExternalLink, Handshake } from "lucide-react";
import { clientWork, profile } from "@/content/portfolio";
import { Section } from "./Section";

export function ClientWork() {
  return (
    <Section id="clients" index={4} title="Client work" abstract="Selected freelance work, kept deliberately high-level where client details are private." tone="shade">
      <div className="grid gap-5 md:grid-cols-[1.15fr_.85fr]">
        {clientWork.map((client) => (
          <article key={client.name} className="client-card rounded-xl border border-border bg-background/82 p-6 md:p-8">
            <div className="flex items-center gap-3 text-primary"><Handshake className="h-4 w-4" /><span className="font-mono text-[0.62rem] tracking-[0.16em] uppercase">{client.type}</span></div>
            <h3 className="mt-6 text-3xl font-semibold tracking-tight">{client.name}</h3>
            <p className="mt-4 max-w-xl text-sm leading-6 text-muted-foreground">{client.summary}</p>
            <div className="mt-6 flex flex-wrap gap-2">
              {['Infrastructure', 'Deployment', 'DevOps'].map((x) => <span key={x} className="tech-chip">{x}</span>)}
            </div>
          </article>
        ))}
        <aside className="client-card flex flex-col justify-between rounded-xl border border-dashed border-border bg-background/82 p-6 md:p-8">
          <div><p className="font-mono text-[0.62rem] tracking-[0.16em] text-muted-foreground uppercase">Selected engagements</p><p className="mt-4 text-lg leading-7 font-medium">Cloud infrastructure, CI/CD, deployment automation, and infrastructure reviews.</p></div>
          <a href={`mailto:${profile.email}?subject=DevOps%20freelance%20engagement`} className="mt-8 inline-flex items-center gap-2 text-sm font-medium text-primary">Discuss an engagement <ExternalLink className="h-3.5 w-3.5" /></a>
        </aside>
      </div>
    </Section>
  );
}
