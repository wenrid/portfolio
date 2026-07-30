import { Briefcase } from "lucide-react";
import { experience } from "@/data/experience";
import { SectionHeading } from "@/components/SectionHeading";
import { Reveal } from "@/components/Reveal";

export function Experience() {
  return (
    <section
      id="experience"
      className="scroll-mt-24 py-20 sm:py-28"
      style={{ backgroundColor: "var(--bg-subtle)" }}
    >
      <div className="container-content">
        <SectionHeading eyebrow="Expérience" title="Parcours professionnel" />

        <div className="mt-12 max-w-3xl">
          <div className="relative border-l pl-8">
            {experience.map((item, i) => (
              <Reveal key={item.role + item.period} delay={i * 0.08} as="div">
                <div className="relative pb-12 last:pb-0">
                  {/* Point sur la timeline */}
                  <span className="absolute -left-[41px] flex h-6 w-6 items-center justify-center rounded-full border bg-[var(--surface)]">
                    <Briefcase className="h-3 w-3 accent" />
                  </span>

                  <p className="font-mono text-xs uppercase tracking-wider text-muted">
                    {item.period}
                  </p>
                  <h3 className="mt-2 font-display text-lg font-semibold">{item.role}</h3>
                  <p className="text-sm accent">{item.organization}</p>
                  <p className="text-sm text-muted">{item.location}</p>

                  <ul className="mt-4 space-y-2">
                    {item.highlights.map((h) => (
                      <li key={h} className="flex gap-3 text-sm text-muted">
                        <span className="mt-2 h-1 w-1 flex-shrink-0 rounded-full bg-[var(--accent)]" />
                        <span>{h}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
