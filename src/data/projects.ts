import type { Project } from "@/types";

export const projects: Project[] = [
  {
    slug: "smart-grocery",
    name: "Smart Grocery Expiry & Waste Reduction System",
    oneLiner:
      "Households lose track of what's in the fridge until it's already gone bad.",
    description:
      "A full-stack grocery management system with OCR-based receipt parsing, expiry tracking, RESTful APIs, recipe recommendations, and PostgreSQL integration.",
    tech: ["React", "FastAPI", "Python", "PostgreSQL", "Spoonacular API"],
    features: [
      "OCR-based receipt parsing to auto-log groceries",
      "Expiry tracking with proactive alerts",
      "Recipe recommendations via the Spoonacular API, prioritized by what's about to expire",
      "RESTful API layer connecting the frontend to a PostgreSQL store",
    ],
    metrics: [
      { label: "Manual tracking effort", value: "-60%" },
      { label: "Query performance", value: "+35%" },
    ],
    status: "live",
    demoUrl: "https://fridgeproj.vercel.app/",
    githubUrl: "https://github.com/P-Arnav/fridge_proj",
    featured: true,
    team: true,
    contributionNote:
      "Built as part of a team project — contributed the backend APIs, the Spoonacular recipe API integration, and the recipe recommendation and grocery-tracking system.",
    detail: {
      problem:
        "Groceries expire silently in the back of the fridge because there's no lightweight way to track what you bought and when it'll go bad.",
      solution:
        "An end-to-end system that reads a grocery receipt via OCR, logs items automatically with estimated expiry windows, and nudges users toward recipes that use what's expiring soonest — turning waste prevention into something that requires almost no manual data entry.",
      results: [
        { label: "Manual tracking effort", value: "Reduced by 60%" },
        { label: "Query performance", value: "Improved by 35%" },
      ],
    },
  },
  {
    slug: "movie-night",
    name: "Movie Night Matcher",
    oneLiner:
      "Group movie nights die in the group chat before anyone agrees on a film.",
    description:
      "A real-time collaborative movie matching platform using React, Firebase Authentication, Cloud Firestore, and the TMDB API, letting friends create or join rooms and vote on movies together.",
    tech: ["React", "Firebase", "Firestore", "TMDB API"],
    features: [
      "Create/join rooms for group movie voting",
      "Real-time synchronized voting via Firestore listeners",
      "Server-side Cloud Functions to detect group matches",
      "TMDB integration for movie details, ratings, posters, and streaming availability",
    ],
    metrics: [],
    status: "live",
    demoUrl: "https://movie-night-matcher-63275.web.app/",
    githubUrl: "https://github.com/madhurima-munagala/movie-night-matcher",
    featured: true,
    detail: {
      problem:
        "Deciding on a movie as a group usually means endless back-and-forth with no clear way to see what everyone actually wants to watch.",
      solution:
        "A room-based voting app: friends join a shared room, swipe through TMDB-sourced titles, and Firestore's real-time listeners sync every vote instantly. A Cloud Function watches for when the group converges on a title and surfaces the match automatically.",
      results: [],
    },
  },
  {
    slug: "resume-screening",
    name: "Resume Screening Assistant",
    oneLiner:
      "Manually sorting a stack of resumes into job roles doesn't scale.",
    description:
      "A Resume Screening Assistant built with Python, Streamlit, and pdfplumber that classifies PDF resumes into job roles using NLP techniques.",
    tech: ["Python", "Streamlit", "pdfplumber", "Pandas", "NLP", "Regex"],
    features: [
      "Multi-file PDF processing in a single batch",
      "NLP-based classification into job roles",
      "Interactive result visualization",
      "CSV report generation for downstream review",
    ],
    metrics: [],
    status: "code-only",
    githubUrl: "https://github.com/", // TODO: replace with actual repo URL
    featured: true,
    detail: {
      problem:
        "Screening resumes at any volume is repetitive and slow when done by hand, and it's easy to lose consistency across reviewers.",
      solution:
        "A Streamlit tool that ingests multiple PDF resumes at once, extracts structured text with pdfplumber, and uses NLP/regex-based classification to sort candidates into job roles — with results visualized interactively and exportable as CSV.",
      results: [],
    },
  },
];

export function getProjectBySlug(slug: string): Project | undefined {
  return projects.find((p) => p.slug === slug);
}
