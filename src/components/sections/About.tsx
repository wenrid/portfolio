import { Sparkles } from "lucide-react";
import { profile } from "@/data/profile";
import { SectionHeading } from "@/components/SectionHeading";
import { Reveal } from "@/components/Reveal";

export function About() {
  return (
    <section id="a-propos" className="scroll-mt-24 py-20 sm:py-28">
      <div className="container-content">
        <SectionHeading eyebrow="À propos" title="Construire une IA utile et mesurable" />

        <div className="mt-12 grid gap-12 lg:grid-cols-[1.5fr_1fr]">
          <Reveal>
            <div className="space-y-5 text-base leading-relaxed text-muted sm:text-lg">
              <p>{profile.summary}</p>
              <p>
                Mon fil conducteur : partir d&apos;un problème réel — un agriculteur
                qui perd sa récolte, un service d&apos;état civil submergé de
                documents manuscrits, un médecin qui a besoin d&apos;un signal
                précoce — et le résoudre par un système complet, du prototype à
                l&apos;application déployable, en mesurant chaque résultat.
              </p>
              <p>
                Je vise une thèse de recherche à l&apos;interface de la vision par
                ordinateur, des modèles génératifs et des données du monde réel.
              </p>
            </div>
          </Reveal>

          <Reveal delay={0.1}>
            <div className="rounded-2xl border surface-card p-6">
              <div className="flex items-center gap-2">
                <Sparkles className="h-4 w-4 accent" />
                <h3 className="font-display text-sm font-semibold uppercase tracking-wide">
                  En ce moment j&apos;explore
                </h3>
              </div>
              <ul className="mt-4 space-y-3">
                {profile.currentFocus.map((focus) => (
                  <li key={focus} className="flex gap-3 text-sm text-muted">
                    <span className="mt-2 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-[var(--accent)]" />
                    <span>{focus}</span>
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        </div>

        {/* Langues */}
        <Reveal delay={0.15}>
          <div className="mt-12 flex flex-wrap gap-3">
            {profile.languages.map((lang) => (
              <div
                key={lang.name}
                className="flex items-center gap-2 rounded-full border px-4 py-2 text-sm"
              >
                <span className="font-medium">{lang.name}</span>
                <span className="text-muted">·</span>
                <span className="font-mono text-xs text-muted">{lang.level}</span>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
