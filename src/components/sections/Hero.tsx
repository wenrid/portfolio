"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowDown, Download, Github, Linkedin, Mail } from "lucide-react";
import { profile, heroMetrics } from "@/data/profile";

const container = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.08, delayChildren: 0.1 },
  },
};

const item = {
  hidden: { opacity: 0, y: 18 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } },
};

export function Hero() {
  return (
    <section className="hero-glow relative overflow-hidden pt-28 pb-16 sm:pt-36 sm:pb-24">
      <div className="grid-backdrop absolute inset-0 -z-10" />

      <div className="container-content relative z-10">
        <div className="grid items-center gap-12 lg:grid-cols-[1.4fr_1fr]">
          {/* Colonne texte */}
          <motion.div variants={container} initial="hidden" animate="show">
            <motion.p variants={item} className="eyebrow">
              {profile.location}
            </motion.p>

            <motion.h1
              variants={item}
              className="mt-5 font-display text-display-xl font-extrabold"
            >
              {profile.name}
            </motion.h1>

            <motion.p
              variants={item}
              className="mt-4 font-display text-xl font-semibold sm:text-2xl"
            >
              {profile.title}
            </motion.p>
            <motion.p variants={item} className="mt-1 text-base text-muted sm:text-lg">
              {profile.subtitle}
            </motion.p>

            <motion.p
              variants={item}
              className="mt-6 max-w-xl text-base leading-relaxed text-muted sm:text-lg"
            >
              {profile.tagline}
            </motion.p>

            <motion.div variants={item} className="mt-8 flex flex-wrap items-center gap-3">
              <a href={profile.cvPath} download className="btn btn-primary">
                <Download className="h-4 w-4" />
                Télécharger le CV
              </a>
              <Link
                href={profile.contact.github}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-ghost"
              >
                <Github className="h-4 w-4" />
                GitHub
              </Link>
              <Link
                href={profile.contact.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-ghost"
              >
                <Linkedin className="h-4 w-4" />
                LinkedIn
              </Link>
              <Link href="/#contact" className="btn btn-ghost">
                <Mail className="h-4 w-4" />
                Contact
              </Link>
            </motion.div>
          </motion.div>

          {/* Colonne photo (placeholder) */}
          <motion.div
            initial={{ opacity: 0, scale: 0.94 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.25, ease: [0.22, 1, 0.36, 1] }}
            className="relative mx-auto w-full max-w-[340px]"
          >
            <div className="relative aspect-[4/5] overflow-hidden rounded-2xl border surface-card">
              <Image
                src="/Photo_profile.jpg"
                alt={`Portrait de ${profile.name}`}
                fill
                priority
                className="object-cover"
              />
            </div>
            {/* Badge accent */}
            <div className="absolute -bottom-11 left-1/2 -translate-x-1/2 whitespace-nowrap rounded-xl border surface-card px-4 py-3 shadow-lg">
              <p className="font-mono text-xs text-muted">Master SIM · VNU × La Rochelle</p>
            </div>
          </motion.div>
        </div>

        {/* Bande de métriques — la signature du site */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.5 }}
          className="mt-16 grid grid-cols-2 gap-px overflow-hidden rounded-2xl border sm:grid-cols-4"
          style={{ backgroundColor: "var(--border)" }}
        >
          {heroMetrics.map((m) => (
            <div
              key={m.label}
              className="flex flex-col gap-1 px-5 py-6"
              style={{ backgroundColor: "var(--surface)" }}
            >
              <span className="font-display text-2xl font-bold accent sm:text-3xl">
                {m.value}
              </span>
              <span className="font-mono text-[0.7rem] uppercase tracking-wider text-muted">
                {m.label}
              </span>
            </div>
          ))}
        </motion.div>

        <div className="mt-14 flex justify-center">
          <Link
            href="/#a-propos"
            aria-label="Descendre vers la section À propos"
            className="flex flex-col items-center gap-2 text-muted transition-colors hover:text-[var(--text)]"
          >
            <span className="font-mono text-xs uppercase tracking-widest">Explorer</span>
            <ArrowDown className="h-4 w-4 animate-bounce" />
          </Link>
        </div>
      </div>
    </section>
  );
}
