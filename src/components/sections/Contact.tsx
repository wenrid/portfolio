"use client";

import { useState } from "react";
import Link from "next/link";
import { Github, Linkedin, Mail, MessageCircle, Send } from "lucide-react";
import { profile } from "@/data/profile";
import { SectionHeading } from "@/components/SectionHeading";
import { Reveal } from "@/components/Reveal";

export function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Sans backend : on ouvre le client mail pré-rempli.
    // Pour un envoi direct, branche Formspree/Resend (voir README).
    const subject = encodeURIComponent(`Contact portfolio — ${form.name}`);
    const body = encodeURIComponent(
      `${form.message}\n\n—\n${form.name}\n${form.email}`,
    );
    window.location.href = `mailto:${profile.contact.email}?subject=${subject}&body=${body}`;
  };

  const contactLinks = [
    { icon: Mail, label: "Email", value: profile.contact.email, href: `mailto:${profile.contact.email}` },
    { icon: Linkedin, label: "LinkedIn", value: "Wenchel Ridoré", href: profile.contact.linkedin },
    { icon: Github, label: "GitHub", value: "wenrid", href: profile.contact.github },
    { icon: MessageCircle, label: "WhatsApp", value: profile.contact.whatsapp, href: profile.contact.whatsappLink },
  ];

  return (
    <section
      id="contact"
      className="scroll-mt-24 py-20 sm:py-28"
      style={{ backgroundColor: "var(--bg-subtle)" }}
    >
      <div className="container-content">
        <SectionHeading
          eyebrow="Contact"
          title="Travaillons ensemble"
          description="Stage recherche, collaboration ou simple échange sur l'IA appliquée — écrivez-moi."
        />

        <div className="mt-12 grid gap-8 lg:grid-cols-2">
          {/* Formulaire */}
          <Reveal>
            <form onSubmit={handleSubmit} className="rounded-2xl border surface-card p-6 sm:p-8">
              <div className="space-y-5">
                <div>
                  <label htmlFor="name" className="mb-2 block text-sm font-medium">
                    Nom
                  </label>
                  <input
                    id="name"
                    type="text"
                    required
                    value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                    className="w-full rounded-lg border bg-transparent px-4 py-2.5 text-sm outline-none transition-colors focus:border-[var(--accent)]"
                    placeholder="Votre nom"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="mb-2 block text-sm font-medium">
                    Email
                  </label>
                  <input
                    id="email"
                    type="email"
                    required
                    value={form.email}
                    onChange={(e) => setForm({ ...form, email: e.target.value })}
                    className="w-full rounded-lg border bg-transparent px-4 py-2.5 text-sm outline-none transition-colors focus:border-[var(--accent)]"
                    placeholder="vous@exemple.com"
                  />
                </div>
                <div>
                  <label htmlFor="message" className="mb-2 block text-sm font-medium">
                    Message
                  </label>
                  <textarea
                    id="message"
                    required
                    rows={5}
                    value={form.message}
                    onChange={(e) => setForm({ ...form, message: e.target.value })}
                    className="w-full resize-none rounded-lg border bg-transparent px-4 py-2.5 text-sm outline-none transition-colors focus:border-[var(--accent)]"
                    placeholder="Votre message…"
                  />
                </div>
                <button type="submit" className="btn btn-primary w-full">
                  <Send className="h-4 w-4" />
                  Envoyer le message
                </button>
              </div>
            </form>
          </Reveal>

          {/* Coordonnées */}
          <Reveal delay={0.1}>
            <div className="flex h-full flex-col justify-center gap-3">
              {contactLinks.map((c) => (
                <Link
                  key={c.label}
                  href={c.href}
                  target={c.href.startsWith("mailto") ? undefined : "_blank"}
                  rel="noopener noreferrer"
                  className="group flex items-center gap-4 rounded-xl border surface-card p-4 transition-all hover:-translate-y-0.5 hover:border-[var(--accent)]"
                >
                  <span className="flex h-11 w-11 items-center justify-center rounded-lg bg-[var(--accent-soft)]">
                    <c.icon className="h-5 w-5 accent" />
                  </span>
                  <div>
                    <p className="font-mono text-xs uppercase tracking-wider text-muted">
                      {c.label}
                    </p>
                    <p className="text-sm font-medium">{c.value}</p>
                  </div>
                </Link>
              ))}
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
