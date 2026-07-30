import Link from "next/link";
import { GraduationCap, Award, ExternalLink } from "lucide-react";
import { education, certifications } from "@/data/education";
import { SectionHeading } from "@/components/SectionHeading";
import { Reveal } from "@/components/Reveal";

export function Education() {
  return (
    <section id="formation" className="scroll-mt-24 py-20 sm:py-28">
      <div className="container-content">
        <SectionHeading eyebrow="Formation" title="Parcours académique & certifications" />

        <div className="mt-12 grid gap-12 lg:grid-cols-2">
          {/* Diplômes */}
          <div>
            <h3 className="mb-6 font-display text-sm font-semibold uppercase tracking-wide text-muted">
              Diplômes
            </h3>
            <div className="space-y-4">
              {education.map((edu, i) => (
                <Reveal key={edu.degree} delay={i * 0.08}>
                  <div className="rounded-2xl border surface-card p-6">
                    <div className="flex items-start gap-4">
                      <span className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-lg bg-[var(--accent-soft)]">
                        <GraduationCap className="h-5 w-5 accent" />
                      </span>
                      <div>
                        <p className="font-mono text-xs uppercase tracking-wider text-muted">
                          {edu.period}
                        </p>
                        <h4 className="mt-1 font-display font-semibold">{edu.degree}</h4>
                        <p className="text-sm accent">{edu.field}</p>
                        <p className="mt-1 text-sm text-muted">{edu.school}</p>
                      </div>
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>

          {/* Certifications */}
          <div>
            <h3 className="mb-6 font-display text-sm font-semibold uppercase tracking-wide text-muted">
              Certifications
            </h3>
            <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-1 xl:grid-cols-2">
              {certifications.map((cert, i) => (
                <Reveal key={cert.title} delay={i * 0.04}>
                  <div className="flex h-full items-start gap-3 rounded-xl border surface-card p-4">
                    <Award className="mt-0.5 h-4 w-4 flex-shrink-0 accent" />
                    <div className="min-w-0">
                      <p className="text-sm font-medium leading-snug">{cert.title}</p>
                      <p className="mt-1 font-mono text-xs text-muted">
                        {cert.issuer} · {cert.year}
                      </p>
                      {cert.url && (
                        <Link
                          href={cert.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="mt-1 inline-flex items-center gap-1 text-xs accent hover:underline"
                        >
                          Voir le certificat
                          <ExternalLink className="h-3 w-3" />
                        </Link>
                      )}
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
