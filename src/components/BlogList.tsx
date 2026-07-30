"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import { Search, Calendar, Clock, ArrowUpRight } from "lucide-react";
import { blogPosts, blogCategories } from "@/data/blog";
import { cn } from "@/lib/utils";

const PAGE_SIZE = 6;

export function BlogList() {
  const [query, setQuery] = useState("");
  const [category, setCategory] = useState<string | null>(null);
  const [page, setPage] = useState(1);

  const filtered = useMemo(() => {
    return blogPosts.filter((post) => {
      const matchesQuery =
        query.trim() === "" ||
        post.title.toLowerCase().includes(query.toLowerCase()) ||
        post.excerpt.toLowerCase().includes(query.toLowerCase()) ||
        post.tags.some((t) => t.toLowerCase().includes(query.toLowerCase()));
      const matchesCategory = !category || post.category === category;
      return matchesQuery && matchesCategory;
    });
  }, [query, category]);

  const totalPages = Math.max(1, Math.ceil(filtered.length / PAGE_SIZE));
  const currentPage = Math.min(page, totalPages);
  const paginated = filtered.slice(
    (currentPage - 1) * PAGE_SIZE,
    currentPage * PAGE_SIZE,
  );

  const resetPage = () => setPage(1);

  return (
    <div>
      {/* Barre de recherche + filtres */}
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div className="relative w-full sm:max-w-xs">
          <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted" />
          <input
            type="search"
            value={query}
            onChange={(e) => {
              setQuery(e.target.value);
              resetPage();
            }}
            placeholder="Rechercher un article…"
            className="w-full rounded-full border bg-transparent py-2.5 pl-10 pr-4 text-sm outline-none transition-colors focus:border-[var(--accent)]"
          />
        </div>

        <div className="flex flex-wrap gap-2">
          <button
            type="button"
            onClick={() => {
              setCategory(null);
              resetPage();
            }}
            className={cn(
              "rounded-full border px-3 py-1.5 text-xs font-medium transition-colors",
              !category ? "bg-[var(--accent)] text-white" : "text-muted hover:bg-[var(--surface-2)]",
            )}
          >
            Tout
          </button>
          {blogCategories.map((cat) => (
            <button
              key={cat}
              type="button"
              onClick={() => {
                setCategory(cat);
                resetPage();
              }}
              className={cn(
                "rounded-full border px-3 py-1.5 text-xs font-medium transition-colors",
                category === cat ? "bg-[var(--accent)] text-white" : "text-muted hover:bg-[var(--surface-2)]",
              )}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      {/* Grille d'articles */}
      {paginated.length > 0 ? (
        <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {paginated.map((post) => (
            <Link
              key={post.slug}
              href={`/blog/${post.slug}`}
              className="group flex h-full flex-col rounded-2xl border surface-card p-6 transition-all hover:-translate-y-1 hover:border-[var(--accent)]"
            >
              <span className="tag w-fit">{post.category}</span>
              <h3 className="mt-4 font-display text-lg font-semibold leading-snug">
                {post.title}
              </h3>
              <p className="mt-2 flex-1 text-sm leading-relaxed text-muted">{post.excerpt}</p>
              <div className="mt-4 flex flex-wrap gap-1.5">
                {post.tags.map((t) => (
                  <span key={t} className="font-mono text-xs text-muted">
                    #{t}
                  </span>
                ))}
              </div>
              <div className="mt-5 flex items-center justify-between border-t pt-4 text-xs text-muted">
                <span className="flex items-center gap-1">
                  <Calendar className="h-3.5 w-3.5" />
                  {new Date(post.date).toLocaleDateString("fr-FR", {
                    year: "numeric",
                    month: "short",
                    day: "numeric",
                  })}
                </span>
                <span className="flex items-center gap-1">
                  <Clock className="h-3.5 w-3.5" />
                  {post.readingTime}
                  <ArrowUpRight className="ml-1 h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </span>
              </div>
            </Link>
          ))}
        </div>
      ) : (
        <div className="mt-16 rounded-2xl border border-dashed p-12 text-center">
          <p className="font-display text-lg font-semibold">Aucun article trouvé</p>
          <p className="mt-2 text-sm text-muted">
            Essayez un autre mot-clé ou réinitialisez les filtres.
          </p>
        </div>
      )}

      {/* Pagination */}
      {totalPages > 1 && (
        <div className="mt-12 flex items-center justify-center gap-2">
          {Array.from({ length: totalPages }, (_, i) => i + 1).map((p) => (
            <button
              key={p}
              type="button"
              onClick={() => setPage(p)}
              className={cn(
                "h-9 w-9 rounded-full border text-sm font-medium transition-colors",
                p === currentPage ? "bg-[var(--accent)] text-white" : "text-muted hover:bg-[var(--surface-2)]",
              )}
            >
              {p}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
