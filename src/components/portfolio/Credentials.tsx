import { Award, GraduationCap } from "lucide-react";
import { certifications, education } from "@/content/portfolio";
import { Section } from "./Section";
import { ToolIcon } from "./ToolIcon";

export function Credentials() {
  return (
    <Section id="credentials" index={5} title="Credentials" abstract="Education and certifications — kept compact so the work stays the focus.">
      <div className="grid gap-5 lg:grid-cols-[1.05fr_.95fr]">
        <article className="credential-card rounded-xl border border-border bg-background/82 p-6 md:p-7"><GraduationCap className="h-5 w-5 text-primary" /><p className="mt-6 font-mono text-[0.62rem] tracking-[0.15em] text-muted-foreground uppercase">{education.period}</p><h3 className="mt-2 text-xl font-semibold tracking-tight">{education.degree}</h3><p className="mt-1 text-sm text-primary">{education.institution}</p></article>
        <div className="grid gap-2">{certifications.map((cert) => <div key={cert.name} className="flex items-start gap-3 rounded-lg border border-border bg-background px-4 py-3"><Award className="mt-0.5 h-4 w-4 shrink-0 text-primary" /><div><p className="text-sm font-medium leading-5">{cert.name}</p><p className="mt-1 flex items-center gap-2 font-mono text-[0.58rem] tracking-[0.12em] text-muted-foreground uppercase"><ToolIcon name={cert.issuer === "AWS" ? "AWS" : cert.issuer === "Google Cloud" ? "Google Cloud" : cert.issuer === "Oracle" ? "Oracle" : "Git"} className="h-3.5 w-3.5" />{cert.issuer}</p></div></div>)}</div>
      </div>
    </Section>
  );
}
