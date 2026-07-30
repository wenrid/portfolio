import Link from "next/link";
import { Home } from "lucide-react";

export default function NotFound() {
  return (
    <section className="flex min-h-[70vh] items-center justify-center px-6">
      <div className="text-center">
        <p className="font-mono text-sm uppercase tracking-widest accent">Erreur 404</p>
        <h1 className="mt-4 font-display text-display-lg font-bold">Page introuvable</h1>
        <p className="mt-4 text-muted">
          La page que vous cherchez n&apos;existe pas ou a été déplacée.
        </p>
        <Link href="/" className="btn btn-primary mt-8">
          <Home className="h-4 w-4" />
          Retour à l&apos;accueil
        </Link>
      </div>
    </section>
  );
}
