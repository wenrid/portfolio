import { notFound } from "next/navigation";
import Link from "next/link";
import type { Metadata } from "next";
import { ArrowLeft, Calendar, Clock } from "lucide-react";
import { blogPosts } from "@/data/blog";

type Params = { params: { slug: string } };

export function generateStaticParams() {
  return blogPosts.map((p) => ({ slug: p.slug }));
}

export function generateMetadata({ params }: Params): Metadata {
  const post = blogPosts.find((p) => p.slug === params.slug);
  if (!post) return { title: "Article introuvable" };
  return { title: post.title, description: post.excerpt };
}

export default function BlogPostPage({ params }: Params) {
  const post = blogPosts.find((p) => p.slug === params.slug);
  if (!post) notFound();

  return (
    <article className="pt-28 pb-24 sm:pt-32">
      <div className="container-content max-w-3xl">
        <Link
          href="/blog"
          className="inline-flex items-center gap-2 text-sm text-muted transition-colors hover:text-[var(--text)]"
        >
          <ArrowLeft className="h-4 w-4" />
          Tous les articles
        </Link>

        <span className="tag mt-8 inline-flex">{post.category}</span>
        <h1 className="mt-4 font-display text-display-lg font-bold">{post.title}</h1>

        <div className="mt-5 flex flex-wrap items-center gap-4 text-sm text-muted">
          <span className="flex items-center gap-1.5">
            <Calendar className="h-4 w-4" />
            {new Date(post.date).toLocaleDateString("fr-FR", {
              year: "numeric",
              month: "long",
              day: "numeric",
            })}
          </span>
          <span className="flex items-center gap-1.5">
            <Clock className="h-4 w-4" />
            {post.readingTime}
          </span>
        </div>

        <div className="mt-10 border-t pt-10">
          <p className="text-lg leading-relaxed text-muted">{post.excerpt}</p>
          <div className="mt-6 leading-relaxed text-muted">{post.content}</div>
        </div>

        <div className="mt-10 flex flex-wrap gap-2 border-t pt-8">
          {post.tags.map((t) => (
            <span key={t} className="tag">#{t}</span>
          ))}
        </div>
      </div>
    </article>
  );
}
