import type { Metadata } from "next";
import { profile } from "@/data/profile";

const SITE_URL = "https://madhurima-portfolio.vercel.app"; // TODO: replace with final deployed domain

export const siteConfig = {
  name: profile.name,
  title: `${profile.name} | Software Engineer & AI Developer`,
  description:
    "Portfolio of Madhurima Munagala — a Computer Science undergraduate at VIT Vellore building full-stack applications and applied AI systems, and a sole-author SSRN (Elsevier) published researcher in real-time computer vision.",
  url: SITE_URL,
};

export function buildMetadata(overrides: Partial<Metadata> = {}): Metadata {
  return {
    metadataBase: new URL(siteConfig.url),
    title: {
      default: siteConfig.title,
      template: `%s | ${profile.name}`,
    },
    description: siteConfig.description,
    keywords: [
      "Madhurima Munagala",
      "Software Engineer",
      "AI Developer",
      "Full Stack Developer",
      "VIT Vellore",
      "Computer Vision",
      "React Developer",
      "Python Developer",
    ],
    authors: [{ name: profile.name }],
    creator: profile.name,
    openGraph: {
      type: "website",
      locale: "en_US",
      url: siteConfig.url,
      title: siteConfig.title,
      description: siteConfig.description,
      siteName: siteConfig.name,
    },
    twitter: {
      card: "summary_large_image",
      title: siteConfig.title,
      description: siteConfig.description,
    },
    robots: {
      index: true,
      follow: true,
    },
    ...overrides,
  };
}
