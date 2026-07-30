import { projects } from "@/data/projects";
import { ProjectCard } from "@/components/ProjectCard";
import { SectionHeading } from "@/components/SectionHeading";
import { Reveal } from "@/components/Reveal";

export function Projects() {
  return (
    <section id="projets" className="scroll-mt-24 py-20 sm:py-28">
      <div className="container-content">
        <SectionHeading
          eyebrow="Projets"
          title="Des systèmes complets"
          description="Chaque projet part d'un problème réel et se termine par un résultat mesuré — santé, agriculture, OCR, vision embarquée."
        />

        <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {projects.map((project, i) => (
            <Reveal key={project.slug} delay={(i % 3) * 0.08} as="div">
              <ProjectCard project={project} />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
