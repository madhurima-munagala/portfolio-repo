export interface Metric {
  label: string;
  value: string;
}

export interface ProjectLink {
  label: string;
  href: string;
}

/**
 * status controls what the UI renders:
 * - "live"       -> show a "Live Demo" button using demoUrl
 * - "code-only"  -> no live demo exists yet; UI shows a "Demo coming soon"
 *                   state instead of fabricating a URL
 */
export type ProjectStatus = "live" | "code-only";

export interface ProjectDetail {
  problem?: string;
  solution?: string;
  /** Only populate with information explicitly provided. Leave undefined
   *  (not fabricated) if the architecture hasn't been described. */
  architecture?: string;
  results?: Metric[];
}

export interface Project {
  slug: string;
  name: string;
  oneLiner: string;
  description: string;
  tech: string[];
  features: string[];
  metrics: Metric[];
  status: ProjectStatus;
  demoUrl?: string;
  githubUrl?: string; // placeholder until repo links are provided
  featured: boolean;
  detail: ProjectDetail;
  /** True when this was built with others, not solo. Never omit this
   *  when true — the UI uses it to avoid implying sole authorship. */
  team?: boolean;
  /** Required when team is true: a specific, honest note on what this
   *  person actually built. No names — just the contribution. */
  contributionNote?: string;
}

export interface Publication {
  title: string;
  venue: string;
  date: string;
  authorNote: string;
  description: string;
  highlights: string[];
  url: string;
}

export interface Certification {
  name: string;
  issuer: string;
  areas: string[];
}

export interface SkillCategory {
  category: string;
  items: string[];
}

export interface EducationEntry {
  institution: string;
  qualification: string;
  period: string;
  score: string;
}

export interface Profile {
  name: string;
  role: string;
  tagline: string;
  location: string;
  email: string;
  github: string;
  linkedin: string;
  resumeUrl: string;
  bio: string;
  currentFacts: string[];
}
