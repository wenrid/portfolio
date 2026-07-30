import type { BlogPost } from "@/types";

// Structure prête à accueillir tes articles techniques.
// Ajoute simplement un objet ici (ou branche un CMS / des fichiers MDX plus tard).
// Les articles ci-dessous sont des exemples — remplace-les par les tiens.

export const blogPosts: BlogPost[] = [
  {
    slug: "transfer-learning-donnees-limitees",
    title: "Pourquoi le transfer learning change tout quand les données manquent",
    excerpt:
      "Retour d'expérience sur l'image captioning : comment un encodeur préentraîné surpasse un CNN entraîné de zéro sur un petit dataset.",
    date: "2025-06-15",
    category: "Deep Learning",
    tags: ["Transfer Learning", "Vision", "PyTorch"],
    readingTime: "6 min",
    content:
      "Article à venir..........",
  },
  {
    slug: "ocr-documents-manuscrits-afrique",
    title: "OCR de documents manuscrits : les pièges de l'onomastique locale",
    excerpt:
      "Fine-tuning d'un modèle OCR sur des actes d'état civil et post-correction adaptée aux noms régionaux.",
    date: "2025-05-02",
    category: "OCR",
    tags: ["OCR", "Transformers", "NLP"],
    readingTime: "8 min",
    content:
      "Article à venir..........",
  },
  {
    slug: "cnn-leger-systemes-embarques",
    title: "Concevoir un CNN léger pour l'embarqué sans sacrifier la précision",
    excerpt:
      "Comment obtenir 95 % de précision avec moins de 550 000 paramètres sur la classification de panneaux routiers.",
    date: "2025-03-20",
    category: "Vision embarquée",
    tags: ["CNN", "Edge AI", "Optimisation"],
    readingTime: "5 min",
    content:
      "Article à venir..........",
  },
];

export const blogCategories = Array.from(
  new Set(blogPosts.map((p) => p.category)),
);

export const blogTags = Array.from(
  new Set(blogPosts.flatMap((p) => p.tags)),
);
