import { ArrowUpRight } from "lucide-react";
import { expertise } from "@/content/portfolio";
import { Section } from "./Section";
import { ToolIcon } from "./ToolIcon";

export function Expertise() {
  return (
    <Section
      id="expertise"
      index={2}
      title="Skills & toolkit"
      abstract="The technologies I use to provision infrastructure, ship changes safely, and keep systems observable and maintainable."
      tone="shade"
    >
      <div className="skills-editorial">
        {expertise.map((group, index) => (
          <section key={group.category} className="skills-editorial-row">
            <div className="skills-editorial-heading">
              <span className="skills-editorial-index">0{index + 1}</span>
              <h3>{group.category}</h3>
            </div>
            <div className="skills-editorial-content">
              <div className="skills-wordmark" aria-label={`${group.category} technologies`}>
                {group.tools.map((tool) => (
                  <span key={tool} className="skills-word">
                    <span className="skills-word-icon" aria-hidden="true">
                      <ToolIcon name={tool} className="h-[1.05rem] w-[1.05rem]" />
                    </span>
                    <span>{tool}</span>
                  </span>
                ))}
              </div>
              <span className="skills-row-arrow" aria-hidden="true"><ArrowUpRight className="h-4 w-4" /></span>
            </div>
          </section>
        ))}
      </div>
      <p className="skills-footnote">A practical toolkit, applied to infrastructure, automation, delivery, and operations.</p>
    </Section>
  );
}
