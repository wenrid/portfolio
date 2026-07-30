import { notFound } from "next/navigation";
import Link from "next/link";
import type { Metadata } from "next";
import { ArrowLeft, Github, ExternalLink, Target, TrendingUp, CheckCircle2 } from "lucide-react";
import { projects } from "@/data/projects";

type Params = { params: { slug: string } };

// Génère les routes statiques pour chaque projet (export statique, rapide sur Vercel).
export function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

export function generateMetadata({ params }: Params): Metadata {
  const project = projects.find((p) => p.slug === params.slug);
  if (!project) return { title: "Projet introuvable" };
  return {
    title: project.title,
    description: project.summary,
  };
}

export default function ProjectPage({ params }: Params) {
  const project = projects.find((p) => p.slug === params.slug);
  if (!project) notFound();

  return (
    <article className="pt-28 pb-24 sm:pt-32">
      <div className="container-content max-w-3xl">
        <Link
          href="/#projets"
          className="inline-flex items-center gap-2 text-sm text-muted transition-colors hover:text-[var(--text)]"
        >
          <ArrowLeft className="h-4 w-4" />
          Tous les projets
        </Link>

        <p className="eyebrow mt-8">{project.category}</p>
        <h1 className="mt-3 font-display text-display-lg font-bold">{project.title}</h1>
        <p className="mt-4 text-lg leading-relaxed text-muted">{project.summary}</p>

        {/* Métriques clés */}
        {project.metrics && project.metrics.length > 0 && (
          <div className="mt-8 flex flex-wrap gap-px overflow-hidden rounded-xl border" style={{ backgroundColor: "var(--border)" }}>
            {project.metrics.map((m) => (
              <div key={m.label} className="flex-1 px-5 py-4" style={{ backgroundColor: "var(--surface)" }}>
                <p className="font-display text-2xl font-bold accent">{m.value}</p>
                <p className="mt-1 font-mono text-xs text-muted">{m.label}</p>
              </div>
            ))}
          </div>
        )}

        <div className="mt-10 space-y-10">
          <section>
            <h2 className="font-display text-lg font-semibold">Description</h2>
            <p className="mt-3 leading-relaxed text-muted">{project.description}</p>
          </section>

          <section>
            <div className="flex items-center gap-2">
              <Target className="h-4 w-4 accent" />
              <h2 className="font-display text-lg font-semibold">Objectifs</h2>
            </div>
            <p className="mt-3 leading-relaxed text-muted">{project.objectives}</p>
          </section>

          <section>
            <h2 className="font-display text-lg font-semibold">Résultats</h2>
            <ul className="mt-3 space-y-2">
              {project.results.map((r) => (
                <li key={r} className="flex gap-3 text-muted">
                  <CheckCircle2 className="mt-0.5 h-4 w-4 flex-shrink-0 accent" />
                  <span>{r}</span>
                </li>
              ))}
            </ul>
          </section>

          <section>
            <div className="flex items-center gap-2">
              <TrendingUp className="h-4 w-4 accent" />
              <h2 className="font-display text-lg font-semibold">Impact</h2>
            </div>
            <p className="mt-3 leading-relaxed text-muted">{project.impact}</p>
          </section>

          <section>
            <h2 className="font-display text-lg font-semibold">Technologies</h2>
            <div className="mt-3 flex flex-wrap gap-2">
              {project.tech.map((t) => (
                <span key={t} className="tag">
                  {t}
                </span>
              ))}
            </div>
          </section>
        </div>

        {/* Liens */}
        <div className="mt-10 flex flex-wrap gap-3 border-t pt-8">
          {project.github && (
            <Link href={project.github} target="_blank" rel="noopener noreferrer" className="btn btn-ghost">
              <Github className="h-4 w-4" />
              Voir le code
            </Link>
          )}
          {project.demo && (
            <Link href={project.demo} target="_blank" rel="noopener noreferrer" className="btn btn-primary">
              <ExternalLink className="h-4 w-4" />
              Démonstration
            </Link>
          )}
        </div>
      </div>
    </article>
  );
}
