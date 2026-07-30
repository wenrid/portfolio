export type Metric = {
  label: string;
  value: string;
};

export type Project = {
  slug: string;
  title: string;
  category: string;
  summary: string;
  description: string;
  objectives: string;
  results: string[];
  impact: string;
  tech: string[];
  metrics?: Metric[];
  github?: string;
  demo?: string;
  featured?: boolean;
};

export type SkillGroup = {
  title: string;
  icon: string;
  skills: string[];
};

export type ExperienceItem = {
  role: string;
  organization: string;
  location: string;
  period: string;
  highlights: string[];
};

export type EducationItem = {
  degree: string;
  field: string;
  school: string;
  period: string;
};

export type Certification = {
  title: string;
  issuer: string;
  year: string;
  url?: string;
};

export type BlogPost = {
  slug: string;
  title: string;
  excerpt: string;
  date: string;
  category: string;
  tags: string[];
  readingTime: string;
  content?: string;
};
