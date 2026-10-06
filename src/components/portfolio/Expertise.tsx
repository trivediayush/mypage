import type { CSSProperties } from "react";
import { expertise } from "@/content/portfolio";
import { Section } from "./Section";
import { ToolIcon } from "./ToolIcon";

export function Expertise() {
  return (
    <Section
      id="expertise"
      index={2}
      title="Skills"
      abstract="A focused set of cloud, platform, delivery, infrastructure, observability, security, and systems skills."
      tone="shade"
    >
      <div className="skills-map">
        {expertise.map((row, categoryIndex) => (
          <article key={row.category} className="skills-group">
            <div className="skills-group-label">
              <span className="skills-group-index">0{categoryIndex + 1}</span>
              <h3>{row.category}</h3>
            </div>

            <div className="skills-tools" aria-label={`${row.category} skills`}>
              {row.tools.map((tool, toolIndex) => (
                <div
                  key={tool}
                  className="skill-pill"
                  style={{ "--skill-delay": `${toolIndex * 55}ms` } as CSSProperties}
                >
                  <span className="skill-icon">
                    <ToolIcon name={tool} className="h-5 w-5" />
                  </span>
                  <span>{tool}</span>
                </div>
              ))}
            </div>
          </article>
        ))}
      </div>
    </Section>
  );
}
