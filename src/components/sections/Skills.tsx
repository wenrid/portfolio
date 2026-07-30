import { Brain, Code, LineChart, Settings, type LucideIcon } from "lucide-react";
import { skillGroups } from "@/data/skills";
import { SectionHeading } from "@/components/SectionHeading";
import { Reveal } from "@/components/Reveal";

const icons: Record<string, LucideIcon> = {
  brain: Brain,
  "line-chart": LineChart,
  code: Code,
  settings: Settings,
};

export function Skills() {
  return (
    <section
      id="competences"
      className="scroll-mt-24 py-20 sm:py-28"
      style={{ backgroundColor: "var(--bg-subtle)" }}
    >
      <div className="container-content">
        <SectionHeading
          eyebrow="Compétences"
          title="Une boîte à outils orientée IA appliquée"
          description="Du prototype de recherche au déploiement — vision, apprentissage profond, data science et outillage MLOps."
        />

        <div className="mt-12 grid gap-5 sm:grid-cols-2">
          {skillGroups.map((group, i) => {
            const Icon = icons[group.icon] ?? Code;
            return (
              <Reveal key={group.title} delay={i * 0.06}>
                <div className="h-full rounded-2xl border surface-card p-6">
                  <div className="flex items-center gap-3">
                    <span className="flex h-10 w-10 items-center justify-center rounded-lg bg-[var(--accent-soft)]">
                      <Icon className="h-5 w-5 accent" />
                    </span>
                    <h3 className="font-display text-lg font-semibold">{group.title}</h3>
                  </div>
                  <div className="mt-5 flex flex-wrap gap-2">
                    {group.skills.map((skill) => (
                      <span key={skill} className="tag">
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
