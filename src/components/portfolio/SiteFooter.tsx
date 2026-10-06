import { profile } from "@/content/portfolio";

export function SiteFooter() {
  return (
    <footer className="border-t border-border">
      <div className="mx-auto grid max-w-6xl gap-3 px-6 py-8 md:grid-cols-[minmax(0,1fr)_auto] md:items-baseline md:px-10">
        <p className="min-w-0 font-mono text-[0.7rem] tracking-[0.16em] text-muted-foreground uppercase">
          {profile.name} — {profile.role} — {profile.location}
        </p>
        <div className="flex flex-wrap items-baseline gap-x-6 gap-y-2 font-mono text-[0.7rem] tracking-[0.16em] uppercase">
          <a
            href={profile.links.linkedin}
            target="_blank"
            rel="noreferrer noopener"
            className="text-muted-foreground transition-colors hover:text-primary"
          >
            LinkedIn
          </a>
          <a
            href={profile.links.github}
            target="_blank"
            rel="noreferrer noopener"
            className="text-muted-foreground transition-colors hover:text-primary"
          >
            GitHub
          </a>
          <a
            href={profile.links.medium}
            target="_blank"
            rel="noreferrer noopener"
            className="text-muted-foreground transition-colors hover:text-primary"
          >
            Medium
          </a>
          <span className="text-muted-foreground">© {new Date().getFullYear()}</span>
        </div>
      </div>
    </footer>
  );
}
