import Link from "next/link";
import { Github, Linkedin, Mail } from "lucide-react";
import { profile } from "@/data/profile";
import { siteConfig } from "@/data/site";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t" style={{ backgroundColor: "var(--bg-subtle)" }}>
      <div className="container-content flex flex-col items-center justify-between gap-6 py-10 sm:flex-row">
        <div className="text-center sm:text-left">
          <p className="font-display text-sm font-semibold">{siteConfig.name}</p>
          <p className="mt-1 text-sm text-muted">
            © {year} — Ingénieur & chercheur en IA · {profile.location}
          </p>
        </div>

        <div className="flex items-center gap-3">
          <Link
            href={profile.contact.github}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            className="flex h-9 w-9 items-center justify-center rounded-full border transition-colors hover:bg-[var(--surface-2)]"
          >
            <Github className="h-[18px] w-[18px]" />
          </Link>
          <Link
            href={profile.contact.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="flex h-9 w-9 items-center justify-center rounded-full border transition-colors hover:bg-[var(--surface-2)]"
          >
            <Linkedin className="h-[18px] w-[18px]" />
          </Link>
          <Link
            href={`mailto:${profile.contact.email}`}
            aria-label="Email"
            className="flex h-9 w-9 items-center justify-center rounded-full border transition-colors hover:bg-[var(--surface-2)]"
          >
            <Mail className="h-[18px] w-[18px]" />
          </Link>
        </div>
      </div>
    </footer>
  );
}
