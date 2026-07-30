# Portfolio — Wenchel Ridoré

Portfolio professionnel premium pour ingénieur & chercheur en IA (vision par ordinateur, machine learning, deep learning).

**Stack :** Next.js 14 (App Router) · TypeScript · Tailwind CSS · Framer Motion · Lucide Icons.

---

## 🚀 Lancer le projet en local

Prérequis : **Node.js 18.17+** (ou 20+).

```bash
# 1. Installer les dépendances
npm install

# 2. Lancer le serveur de développement
npm run dev
```

Ouvre ensuite **http://localhost:3000**.

Autres commandes :

```bash
npm run build   # build de production
npm run start   # servir le build de production
npm run lint    # vérifier le code
```

---

## ✏️ Personnaliser le contenu

Tout le contenu est centralisé dans `src/data/` — **pas besoin de toucher aux composants** :

| Fichier | Contenu |
|---|---|
| `src/data/profile.ts` | Nom, titre, résumé, contact, langues, focus actuel, métriques du hero |
| `src/data/projects.ts` | Tes projets (titre, description, résultats, technologies, liens) |
| `src/data/skills.ts` | Compétences groupées par catégorie |
| `src/data/experience.ts` | Expériences professionnelles (timeline) |
| `src/data/education.ts` | Diplômes et certifications |
| `src/data/blog.ts` | Articles de blog (structure prête) |
| `src/data/site.ts` | Nom du site, description SEO, URL, navigation |

### Remplacer la photo

Dépose ta photo dans `public/` (par ex. `public/profile.jpg`), puis dans
`src/components/sections/Hero.tsx` change `src="/profile-placeholder.svg"` par `src="/profile.jpg"`.

### Remplacer le CV téléchargeable

Le fichier `public/cv/CV_Wenchel_RIDORE.pdf` est déjà en place. Remplace-le par ta version à jour (même nom, ou adapte `cvPath` dans `src/data/profile.ts`).

### Numéro WhatsApp

Deux numéros figuraient dans tes documents. Vérifie/corrige `contact.whatsapp` et `contact.whatsappLink` dans `src/data/profile.ts`.

---

## 🌑 Fonctionnalités incluses

- Mode sombre / clair (bascule en haut à droite, sombre par défaut)
- SEO complet : métadonnées, Open Graph, Twitter Card
- `sitemap.xml` et `robots.txt` générés automatiquement
- Favicon + image de partage (Open Graph)
- Pages projet détaillées (`/projets/[slug]`) générées statiquement
- Blog avec recherche, filtres par catégorie, tags et pagination
- Responsive, accessible (focus clavier, `prefers-reduced-motion` respecté)
- Animations discrètes (Framer Motion)

---

## 📬 Formulaire de contact

Par défaut, le formulaire ouvre le client mail de l'utilisateur (`mailto:`), sans backend — parfait pour un hébergement gratuit.

Pour recevoir les messages directement par email, branche un service gratuit comme **Formspree** ou **Resend** :
1. Crée un compte sur https://formspree.io
2. Dans `src/components/sections/Contact.tsx`, remplace la logique `handleSubmit` par un `fetch` vers ton endpoint Formspree.

---

## ☁️ Déployer gratuitement sur Vercel

### Étape par étape

1. **Pousser le projet sur GitHub**
   ```bash
   git init
   git add .
   git commit -m "Portfolio initial"
   git branch -M main
   git remote add origin https://github.com/wenrid/mon-portfolio.git
   git push -u origin main
   ```

2. **Importer dans Vercel**
   - Va sur https://vercel.com et connecte-toi avec GitHub.
   - Clique sur **Add New… → Project**.
   - Sélectionne ton dépôt `mon-portfolio`.
   - Vercel détecte automatiquement Next.js — **aucune configuration nécessaire**.
   - Clique sur **Deploy**.

3. **C'est en ligne** 🎉
   Ton site est accessible sur une URL du type `https://mon-portfolio.vercel.app`.
   Chaque `git push` redéploie automatiquement.

> ℹ️ Pense à mettre à jour `siteConfig.url` dans `src/data/site.ts` avec ton URL finale (pour un SEO correct).

### Connecter un domaine personnalisé (plus tard)

1. Dans ton projet Vercel : **Settings → Domains**.
2. Ajoute ton domaine (ex. `wenchel-ridore.com`).
3. Suis les instructions Vercel pour configurer les enregistrements DNS chez ton registrar (généralement un enregistrement `A` ou `CNAME`).
4. Vercel gère automatiquement le certificat HTTPS.

---

## 🗂️ Architecture

```
src/
├── app/                  # routes (App Router)
│   ├── layout.tsx        # layout racine, polices, SEO global
│   ├── page.tsx          # page d'accueil (assemble les sections)
│   ├── globals.css       # thème clair/sombre + styles de base
│   ├── sitemap.ts        # sitemap dynamique
│   ├── robots.ts         # robots.txt
│   ├── not-found.tsx     # page 404
│   ├── projets/[slug]/   # pages projet détaillées
│   └── blog/             # liste + articles
├── components/
│   ├── sections/         # Hero, About, Skills, Projects, Experience, Education, Contact
│   ├── Navbar.tsx  Footer.tsx  ThemeToggle.tsx  Reveal.tsx …
├── data/                 # 👈 tout le contenu éditable
├── lib/                  # utilitaires
└── types/                # types TypeScript
```

---

Fait avec Next.js. Bonne chance pour tes candidatures 🚀
