"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { navLinks, siteConfig } from "@/data/site";
import { ThemeToggle } from "./ThemeToggle";
import { cn } from "@/lib/utils";

export function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-all duration-300",
        scrolled
          ? "border-b backdrop-blur-md"
          : "border-b border-transparent",
      )}
      style={scrolled ? { backgroundColor: "color-mix(in srgb, var(--bg) 82%, transparent)" } : undefined}
    >
      <nav className="container-content flex h-16 items-center justify-between">
        <Link href="/" className="group flex items-center gap-2" onClick={() => setOpen(false)}>
          <span className="flex h-8 w-8 items-center justify-center rounded-md bg-[var(--accent)] font-display text-sm font-bold text-white">
            WR
          </span>
          <span className="hidden font-display text-sm font-semibold sm:block">
            {siteConfig.name}
          </span>
        </Link>

        <div className="hidden items-center gap-1 md:flex">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="rounded-full px-3 py-2 text-sm text-muted transition-colors hover:text-[var(--text)] hover:bg-[var(--surface-2)]"
            >
              {link.label}
            </Link>
          ))}
          <div className="ml-1">
            <ThemeToggle />
          </div>
        </div>

        <div className="flex items-center gap-1 md:hidden">
          <ThemeToggle />
          <button
            type="button"
            aria-label={open ? "Fermer le menu" : "Ouvrir le menu"}
            onClick={() => setOpen((v) => !v)}
            className="flex h-9 w-9 items-center justify-center rounded-full transition-colors hover:bg-[var(--surface-2)]"
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </nav>

      {open && (
        <div className="border-t md:hidden" style={{ backgroundColor: "var(--bg)" }}>
          <div className="container-content flex flex-col py-3">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="rounded-lg px-3 py-3 text-sm text-muted transition-colors hover:text-[var(--text)] hover:bg-[var(--surface-2)]"
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      )}
    </header>
  );
}
