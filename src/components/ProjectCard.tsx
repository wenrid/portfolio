import Link from "next/link";
import { ArrowUpRight, Github, Target, TrendingUp } from "lucide-react";
import type { Project } from "@/types";

export function ProjectCard({ project }: { project: Project }) {
  return (
    <article className="group flex h-full flex-col overflow-hidden rounded-2xl border surface-card transition-all duration-300 hover:-translate-y-1 hover:border-[var(--accent)]">
      {/* Visuel placeholder : dégradé + initiales du projet */}
      <div className="relative aspect-[16/9] overflow-hidden border-b">
        <div className="grid-backdrop absolute inset-0" />
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(135deg, var(--accent-soft) 0%, transparent 60%)",
          }}
        />
        <div className="absolute inset-0 flex items-center justify-center p-6">
          <span className="text-center font-display text-lg font-bold leading-tight text-muted">
            {project.title}
          </span>
        </div>
        {project.metrics && project.metrics[0] && (
          <div className="absolute bottom-3 left-3 rounded-lg border surface-card px-3 py-1.5">
            <span className="font-mono text-xs accent">
              {project.metrics[0].label} · {project.metrics[0].value}
            </span>
          </div>
        )}
      </div>

      <div className="flex flex-1 flex-col p-6">
        <p className="font-mono text-xs uppercase tracking-wider text-muted">
          {project.category}
        </p>
        <h3 className="mt-2 font-display text-xl font-semibold">{project.title}</h3>
        <p className="mt-3 text-sm leading-relaxed text-muted">{project.summary}</p>

        <div className="mt-4 space-y-2">
          <div className="flex gap-2 text-xs">
            <Target className="mt-0.5 h-3.5 w-3.5 flex-shrink-0 accent" />
            <span className="text-muted">{project.objectives}</span>
          </div>
          <div className="flex gap-2 text-xs">
            <TrendingUp className="mt-0.5 h-3.5 w-3.5 flex-shrink-0 accent" />
            <span className="text-muted">{project.impact}</span>
          </div>
        </div>

        <div className="mt-4 flex flex-wrap gap-1.5">
          {project.tech.map((t) => (
            <span key={t} className="tag">
              {t}
            </span>
          ))}
        </div>

        <div className="mt-6 flex items-center gap-4 border-t pt-4">
          <Link
            href={`/projets/${project.slug}`}
            className="inline-flex items-center gap-1 text-sm font-medium transition-colors hover:text-[var(--accent)]"
          >
            Voir le détail
            <ArrowUpRight className="h-4 w-4" />
          </Link>
          {project.github && (
            <Link
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 text-sm text-muted transition-colors hover:text-[var(--text)]"
            >
              <Github className="h-4 w-4" />
              Code
            </Link>
          )}
        </div>
      </div>
    </article>
  );
}
