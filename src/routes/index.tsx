import { createFileRoute } from "@tanstack/react-router";
import { NavRail } from "@/components/portfolio/NavRail";
import { Intro } from "@/components/portfolio/Intro";
import { Experience } from "@/components/portfolio/Experience";
import { Expertise } from "@/components/portfolio/Expertise";
import { Projects } from "@/components/portfolio/Projects";
import { Credentials } from "@/components/portfolio/Credentials";
import { Services } from "@/components/portfolio/Services";
import { Writing } from "@/components/portfolio/Writing";
import { ClientWork } from "@/components/portfolio/ClientWork";
import { Contact } from "@/components/portfolio/Contact";
import { SiteFooter } from "@/components/portfolio/SiteFooter";
import { PortfolioPreloader } from "@/components/portfolio/PortfolioPreloader";
import { profile, services } from "@/content/portfolio";

const title = "Ayush Trivedi | DevOps Engineer & Cloud Infrastructure";
const description =
  "DevOps Engineer focused on AWS, Azure, Kubernetes, Terraform, CI/CD automation, cloud infrastructure, and DevSecOps. Explore infrastructure projects, technical skills, and freelance work.";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },\n      { name: "robots", content: "index, follow, max-image-preview:large" },\n      { name: "keywords", content: "DevOps Engineer, Cloud Infrastructure, AWS, Microsoft Azure, Kubernetes, Terraform, CI/CD, Infrastructure as Code, DevSecOps, Platform Engineering, India" },\n      { property: "og:locale", content: "en_IN" },\n      { property: "og:site_name", content: "Ayush Trivedi — DevOps Portfolio" },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "profile" },
      { property: "og:url", content: "/" },
      { name: "twitter:card", content: "summary" },\n      { name: "twitter:title", content: title },
      { name: "twitter:description", content: description },
    ],
    links: [{ rel: "canonical", href: "/" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Person",
          name: profile.name,
          jobTitle: "DevOps Engineer",\n          description,
          email: `mailto:${profile.email}`,
          telephone: profile.phones,
          address: {
            "@type": "PostalAddress",
            addressLocality: "Indore",
            addressRegion: "Madhya Pradesh",
            addressCountry: "IN",
          },
          knowsAbout: [
            "Microsoft Azure",
            "AWS",
            "Kubernetes",
            "Docker",
            "Terraform",
            "CI/CD",
            "DevSecOps",\n            "Cloud Infrastructure",\n            "Platform Engineering",\n            "Infrastructure Automation",\n            "Observability",
          ],
          sameAs: [profile.links.linkedin, profile.links.github, profile.links.medium],
        }),
      },
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "ProfessionalService",
          name: `${profile.name} — DevOps & Cloud Consulting`,
          areaServed: "Worldwide",
          provider: { "@type": "Person", name: profile.name },
          hasOfferCatalog: {
            "@type": "OfferCatalog",
            name: "Freelance engagements",
            itemListElement: services.map((service) => ({
              "@type": "Offer",
              itemOffered: { "@type": "Service", name: service.name, description: service.scope },
            })),
          },
        }),
      },
    ],
  }),
  component: Portfolio,
});

function Portfolio() {
  return (
    <div className="portfolio-shell min-h-screen bg-background">
      <PortfolioPreloader />
      <NavRail />
      <main className="relative z-10">
        <Intro />
        <Experience />
        <Expertise />
        <Projects />
        <ClientWork />
        <Credentials />
        <Services />
        <Writing />
        <Contact />
      </main>
      <SiteFooter />
    </div>
  );
}
