import type { Metadata } from "next";
import { BlogList } from "@/components/BlogList";

export const metadata: Metadata = {
  title: "Blog",
  description:
    "Articles techniques sur l'IA appliquée : vision par ordinateur, deep learning, OCR et modèles génératifs.",
};

export default function BlogPage() {
  return (
    <section className="pt-28 pb-24 sm:pt-32">
      <div className="container-content">
        <p className="eyebrow">Blog</p>
        <h1 className="mt-3 font-display text-display-lg font-bold">
          Notes techniques & retours d&apos;expérience
        </h1>
        <p className="mt-4 max-w-2xl text-lg leading-relaxed text-muted">
          Réflexions sur la vision par ordinateur, l&apos;apprentissage profond et
          les projets d&apos;IA appliquée. La structure est prête — les articles
          arrivent.
        </p>

        <div className="mt-12">
          <BlogList />
        </div>
      </div>
    </section>
  );
}
