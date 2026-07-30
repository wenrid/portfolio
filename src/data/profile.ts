import type { Metric } from "@/types";

export const profile = {
  name: "Wenchel Ridoré",
  // Titre affiché sous le nom dans le hero.
  title: "Ingénieur & chercheur en IA",
  subtitle: "Vision par ordinateur · Machine Learning · Deep Learning",
  location: "Hanoï, Vietnam",

  // Résumé professionnel (hero + À propos).
  tagline:
    "Je conçois des systèmes d'IA appliquée — de la vision par ordinateur à l'OCR — pour résoudre des problèmes concrets en santé, agriculture et administration.",

  summary:
    "Étudiant en Master Systèmes Intelligents et Multimédia (double diplôme VNU Hanoï / Université de La Rochelle), je me spécialise en vision par ordinateur, apprentissage profond et modèles génératifs. J'ai construit des systèmes de bout en bout — détection de maladies agricoles, diagnostic médical assisté, OCR de documents administratifs — avec un souci constant du résultat mesurable et de l'impact réel. Mon objectif : poursuivre en thèse de recherche.",

  // Chemin vers le CV téléchargeable (placé dans /public/cv).
  cvPath: "",

  contact: {
    email: "rwenchella@gmail.com",
    linkedin: "https://linkedin.com/in/wenchel-ridore-38632b169",
    github: "https://github.com/wenrid",
    // NOTE : deux numéros figurent dans tes documents (+509 37 93 00 62 et +84 34 833 1093).
    // J'ai gardé celui-ci — remplace-le si besoin.
    whatsapp: "+509 37 93 00 62",
    whatsappLink: "https://wa.me/50937930062",
  },

  languages: [
    { name: "Créole haïtien", level: "Natif" },
    { name: "Français", level: "Courant" },
    { name: "Anglais", level: "Intermédiaire" },
    { name: "Espagnol", level: "Intermédiaire" },
  ],

  // Ce que tu explores actuellement (section À propos).
  currentFocus: [
    "Génération de données médicales synthétiques (TimeGAN, modèles de diffusion) sur séries temporelles",
    "Évaluation de fidélité des données générées (MMD, DTW)",
    "Optimisation et déploiement de CNN sur périphériques edge",
    "Agents conversationnels et chaînes d'IA avec LangChain & LLMs",
    "MLOps, Docker et déploiement cloud",
    "Cybersécurité appliquée à l'IA et aux systèmes web",
  ],
};

// Métriques réelles mises en avant dans le hero (la « signature » du site).
export const heroMetrics: Metric[] = [
  { label: "Précision test — GTSRB", value: "95.6%" },
  { label: "AUC-ROC — cardio", value: "0.925" },
  { label: "F1 — OCR RDC", value: "93.7%" },
  { label: "Gain transfer learning", value: "+56.5%" },
];
