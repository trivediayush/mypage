import { Github, Linkedin, Mail, Phone } from "lucide-react";
import { profile } from "@/content/portfolio";
import { Section } from "./Section";

export function Contact() {
  return (
    <Section id="contact" index={8} title="Contact" abstract="For DevOps, cloud infrastructure, and platform engineering opportunities.">
      <div className="flex flex-col gap-8 border-y border-border py-7 sm:flex-row sm:items-center sm:justify-between">
        <a href={`mailto:${profile.email}`} className="inline-flex items-center gap-2 text-sm text-foreground transition-colors hover:text-primary">
          <Mail className="h-4 w-4" aria-hidden="true" />
          <span>{profile.email}</span>
        </a>
        <a href={`tel:${profile.tel}`} className="inline-flex items-center gap-2 text-sm text-foreground transition-colors hover:text-primary">
          <Phone className="h-4 w-4" aria-hidden="true" />
          <span>{profile.tel}</span>
        </a>
        <nav aria-label="Social profiles" className="flex items-center gap-5">
          <a href="https://github.com/trivediayush" target="_blank" rel="noreferrer noopener" aria-label="GitHub profile" title="GitHub" className="text-muted-foreground transition-colors hover:text-primary">
            <Github className="h-5 w-5" aria-hidden="true" />
          </a>
          <a href="https://www.linkedin.com/in/ayush-trivedi-in/" target="_blank" rel="noreferrer noopener" aria-label="LinkedIn profile" title="LinkedIn" className="text-muted-foreground transition-colors hover:text-primary">
            <Linkedin className="h-5 w-5" aria-hidden="true" />
          </a>
        </nav>
      </div>
    </Section>
  );
}
