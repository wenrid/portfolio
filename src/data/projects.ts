import type { Project } from "@/types";

export const projects: Project[] = [
  {
    slug: "ia-agriculture-haiti",
    title: "IA pour l'agriculture saine et durable en Haïti",
    category: "Vision par ordinateur · Agriculture",
    summary:
      "Diagnostic automatisé des maladies du caféier et du citronnier à partir d'images, avec recommandations ciblées.",
    description:
      "Système d'analyse d'images bâti sur YOLOv11 et OpenCV pour diagnostiquer les maladies du caféier et du citronnier. Les agriculteurs obtiennent un diagnostic instantané et des recommandations d'action via une application web.",
    objectives:
      "Rendre le diagnostic phytosanitaire accessible aux petits agriculteurs et permettre une détection précoce des maladies.",
    results: [
      "Détection en temps réel sur application web",
      "Recommandations ciblées par type de maladie détectée",
    ],
    impact:
      "Amélioration de la productivité agricole grâce à la détection précoce et à la prévention ciblée.",
    tech: ["YOLOv11", "OpenCV", "Python", "Streamlit"],
    github: "https://github.com/wenrid",
    featured: true,
  },
  {
    slug: "suivi-medical-intelligent",
    title: "Système de suivi médical intelligent",
    category: "Machine Learning · Santé",
    summary:
      "Plateforme de gestion de dossiers médicaux intégrant quatre modules d'IA pour l'aide à la décision.",
    description:
      "Application web complète de gestion de dossiers médicaux, articulée autour de quatre modules d'intelligence artificielle : prédiction du risque patient, analyse épidémiologique par âge et localisation, détection de foyers de maladies et prévision de tendances sur 30 jours.",
    objectives:
      "Fournir aux professionnels de santé un outil d'aide à la décision et un support pour la recherche en santé publique.",
    results: [
      "4 modules d'IA opérationnels",
      "Analyse géographique et par tranche d'âge",
      "Prévision de tendances épidémiologiques sur 30 jours",
    ],
    impact: "Aide à la décision médicale et appui à la recherche en santé publique.",
    tech: ["Django 5.1", "Scikit-learn", "PostgreSQL", "Chart.js"],
    github: "https://github.com/wenrid",
    featured: true,
  },
  {
    slug: "image-captioning-transfer-vs-scratch",
    title: "Légende d'images — transfer learning vs. from scratch",
    category: "Deep Learning · NLP + Vision",
    summary:
      "Étude comparative de deux architectures de génération automatique de descriptions d'images sur Flickr8k.",
    description:
      "Comparaison de deux approches d'image captioning sur le dataset Flickr8k : un encodeur ResNet-50 préentraîné (transfer learning) face à un CNN entraîné à partir de zéro. Les deux utilisent un décodeur LSTM avec mécanisme d'attention additif de Bahdanau, complété par des visualisations Grad-CAM et heatmaps d'attention.",
    objectives:
      "Quantifier l'apport du transfer learning lorsque le jeu de données est limité, et interpréter le comportement des modèles.",
    results: [
      "ResNet-50 + LSTM + Attention : BLEU-4 = 0.0695",
      "CNN maison 5 couches + GAP : BLEU-4 = 0.0444",
      "Analyse des hallucinations et de l'effet goulot d'étranglement",
    ],
    impact:
      "Démonstration que le transfer learning est indispensable avec des données limitées (+56,5 % de BLEU-4).",
    tech: ["PyTorch", "ResNet-50", "LSTM", "Attention", "Grad-CAM"],
    metrics: [
      { label: "BLEU-4 (ResNet-50)", value: "0.0695" },
      { label: "Gain vs. from scratch", value: "+56.5%" },
    ],
    github: "https://github.com/wenrid",
    featured: true,
  },
  {
    slug: "gtsrb-panneaux-signalisation",
    title: "Classification de panneaux de signalisation (GTSRB)",
    category: "Deep Learning · Vision embarquée",
    summary:
      "CNN léger pour reconnaître 43 classes de panneaux routiers allemands en temps réel.",
    description:
      "Conception et entraînement d'un réseau de neurones convolutif pour classifier 43 classes de panneaux allemands sur 51 839 images réelles. Le modèle combine dropout, augmentation de données et visualisation des activations, avec une comparaison CNN vs. HOG via t-SNE.",
    objectives:
      "Obtenir un modèle robuste et suffisamment léger pour des systèmes embarqués de véhicules autonomes.",
    results: [
      "Architecture légère : 549 355 paramètres",
      "Précision validation : 99,44 %",
      "Précision test officiel : 95,62 %",
    ],
    impact: "Modèle robuste et léger applicable aux systèmes embarqués temps réel.",
    tech: ["PyTorch", "OpenCV", "t-SNE", "Grad-CAM", "Scikit-learn"],
    metrics: [
      { label: "Précision test", value: "95.62%" },
      { label: "Paramètres", value: "549K" },
    ],
    github: "https://github.com/wenrid",
    featured: true,
  },
  {
    slug: "ocr-actes-naissance-rdc",
    title: "Numérisation automatique des actes de naissance — RDC",
    category: "OCR · Transformers",
    summary:
      "Pipeline OCR de bout en bout pour les actes de naissance manuscrits congolais, avec export Word structuré.",
    description:
      "Pipeline complet de reconnaissance optique de caractères adapté aux actes de naissance manuscrits de la RDC. Le système transforme une image scannée en document Word structuré, avec extraction des 40 champs officiels du certificat et post-correction adaptée à l'onomastique locale.",
    objectives:
      "Moderniser l'administration de l'état civil et préserver le patrimoine documentaire.",
    results: [
      "Dataset annoté de 300 certificats",
      "Fine-tuning de LightOnOCR-2-1B sur le domaine RDC",
      "40 règles regex de post-correction · export Word",
    ],
    impact:
      "Préservation du patrimoine documentaire et modernisation de l'état civil.",
    tech: ["HuggingFace", "Transformers", "Streamlit", "SQLite", "python-docx"],
    metrics: [
      { label: "F1-Score", value: "93.7%" },
      { label: "CER", value: "10.95%" },
      { label: "Recall", value: "96.0%" },
    ],
    github: "https://github.com/wenrid",
    featured: true,
  },
  {
    slug: "analyse-predictive-maladies-cardiaques",
    title: "Analyse prédictive des maladies cardiaques",
    category: "Machine Learning · Santé",
    summary:
      "Modèles de ML pour identifier les facteurs de risque cardiaque sur 918 patients.",
    description:
      "Développement de modèles de machine learning (régression logistique, réseaux de neurones) pour identifier les facteurs de risque de maladie cardiaque sur un jeu de 918 patients.",
    objectives:
      "Détecter les facteurs de risque et fournir un support de dépistage précoce.",
    results: ["AUC-ROC = 0,925 sur le jeu de test"],
    impact: "Support au dépistage précoce des pathologies cardiaques.",
    tech: ["Scikit-learn", "TensorFlow", "Pandas", "Seaborn"],
    metrics: [{ label: "AUC-ROC", value: "0.925" }],
    github: "https://github.com/wenrid",
  },
  {
    slug: "segmentation-intelligente-images",
    title: "Segmentation intelligente d'images",
    category: "Vision par ordinateur classique",
    summary:
      "Pipeline en 6 étapes combinant filtrage, segmentation HSV et analyse géométrique.",
    description:
      "Chaîne de traitement d'images en six étapes combinant filtrage bilatéral, CLAHE, morphologie mathématique (Top-Hat, Watershed), seuillage d'Otsu et segmentation HSV, avec un algorithme de séparation géométrique pour gérer les chevauchements.",
    objectives:
      "Segmenter et compter automatiquement des objets sur des images de complexité variable.",
    results: ["96 % de réussite sur 3 complexes d'images"],
    impact: "Applicable à l'OCR, la vision industrielle et l'imagerie médicale.",
    tech: ["OpenCV", "NumPy", "Python"],
    metrics: [{ label: "Réussite", value: "96%" }],
    github: "https://github.com/wenrid",
  },
  {
    slug: "simulation-multi-agents-bfs",
    title: "Simulation multi-agents — BFS avec GAMA",
    category: "Systèmes multi-agents",
    summary:
      "Visualisation interactive de l'algorithme Breadth-First Search en environnement multi-agents.",
    description:
      "Implémentation de l'algorithme Breadth-First Search en environnement multi-agents, pour la visualisation interactive de la recherche de chemin optimal.",
    objectives:
      "Illustrer visuellement la recherche de chemin optimal dans un contexte agent.",
    results: ["Visualisation interactive du parcours BFS"],
    impact: "Applicable à la robotique, la navigation GPS et l'IA pour jeux vidéo.",
    tech: ["GAMA", "GAML"],
    github: "https://github.com/wenrid",
  },
];

export const featuredProjects = projects.filter((p) => p.featured);
