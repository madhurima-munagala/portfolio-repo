import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { ArrowUpRight, Github, Users } from "lucide-react";
import { projects, getProjectBySlug } from "@/data/projects";
import { buildMetadata } from "@/lib/metadata";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { TagChip } from "@/components/ui/TagChip";
import { Button } from "@/components/ui/Button";
import { BackLink } from "@/components/ui/BackLink";
import { AnimatedReveal } from "@/components/ui/AnimatedReveal";

interface ProjectPageProps {
  params: Promise<{ slug: string }>;
}

export function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: ProjectPageProps): Promise<Metadata> {
  const { slug } = await params;
  const project = getProjectBySlug(slug);

  if (!project) {
    return buildMetadata({ title: "Project not found" });
  }

  return buildMetadata({
    title: project.name,
    description: project.description,
    openGraph: {
      title: project.name,
      description: project.description,
      type: "article",
    },
  });
}

export default async function ProjectPage({ params }: ProjectPageProps) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);

  if (!project) {
    notFound();
  }

  const { detail } = project;

  return (
    <>
      <Navbar />
      <main id="main-content" className="mx-auto max-w-content px-6 pb-20 pt-28 sm:pb-28 sm:pt-32">
        <BackLink href="/#projects" label="Back to projects" />

        <AnimatedReveal className="mt-8">
          <div className="flex flex-wrap items-center gap-3">
            <span
              className={
                project.status === "live"
                  ? "rounded-sm bg-accent-dim px-2 py-1 font-mono text-[10px] uppercase tracking-wider text-accent"
                  : "rounded-sm border border-border px-2 py-1 font-mono text-[10px] uppercase tracking-wider text-text-faint"
              }
            >
              {project.status === "live" ? "Live" : "Code"}
            </span>
            <div className="flex flex-wrap gap-2">
              {project.tech.map((t) => (
                <TagChip key={t} label={t} />
              ))}
            </div>
          </div>

          <h1 className="mt-5 font-display text-display-lg font-extrabold text-text">
            {project.name}
          </h1>

          <p className="mt-4 max-w-2xl font-mono text-sm leading-relaxed text-text-faint">
            {project.oneLiner}
          </p>

          {project.team && project.contributionNote && (
            <div className="mt-5 flex items-start gap-3 border-l-2 border-accent bg-accent-dim px-4 py-3">
              <Users size={16} className="mt-0.5 shrink-0 text-accent" />
              <p className="text-sm text-text-muted">{project.contributionNote}</p>
            </div>
          )}

          <div className="mt-8 flex flex-wrap gap-4">
            {project.status === "live" && project.demoUrl && (
              <Button
                href={project.demoUrl}
                target="_blank"
                rel="noopener noreferrer"
                variant="primary"
                icon={<ArrowUpRight size={14} />}
              >
                Live Demo
              </Button>
            )}
            {project.githubUrl && (
              <Button
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                variant="secondary"
                icon={<Github size={14} />}
              >
                View Code
              </Button>
            )}
          </div>
        </AnimatedReveal>

        <div className="mt-16 grid gap-14 lg:grid-cols-3">
          <div className="flex flex-col gap-12 lg:col-span-2">
            {detail.problem && (
              <AnimatedReveal>
                <h2 className="mb-3 font-mono text-xs uppercase tracking-[0.15em] text-accent">
                  Problem
                </h2>
                <p className="text-base leading-relaxed text-text-muted">
                  {detail.problem}
                </p>
              </AnimatedReveal>
            )}

            {detail.solution && (
              <AnimatedReveal delay={0.05}>
                <h2 className="mb-3 font-mono text-xs uppercase tracking-[0.15em] text-accent">
                  Solution
                </h2>
                <p className="text-base leading-relaxed text-text-muted">
                  {detail.solution}
                </p>
              </AnimatedReveal>
            )}

            {/* Architecture is only rendered when explicitly documented —
                never fabricated for projects where it wasn't provided. */}
            {detail.architecture && (
              <AnimatedReveal delay={0.1}>
                <h2 className="mb-3 font-mono text-xs uppercase tracking-[0.15em] text-accent">
                  Architecture
                </h2>
                <p className="text-base leading-relaxed text-text-muted">
                  {detail.architecture}
                </p>
              </AnimatedReveal>
            )}

            {project.features.length > 0 && (
              <AnimatedReveal delay={0.15}>
                <h2 className="mb-4 font-mono text-xs uppercase tracking-[0.15em] text-accent">
                  Key Features
                </h2>
                <ul className="space-y-2.5">
                  {project.features.map((feature) => (
                    <li
                      key={feature}
                      className="flex items-start gap-3 text-sm text-text-muted"
                    >
                      <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-accent" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </AnimatedReveal>
            )}
          </div>

          <div className="flex flex-col gap-8">
            {detail.results && detail.results.length > 0 && (
              <AnimatedReveal>
                <div className="detect-corners border border-border p-6">
                  <h2 className="mb-5 font-mono text-xs uppercase tracking-[0.15em] text-text-faint">
                    Results
                  </h2>
                  <div className="flex flex-col gap-5">
                    {detail.results.map((r) => (
                      <div key={r.label}>
                        <p className="font-display text-2xl font-bold text-accent">
                          {r.value}
                        </p>
                        <p className="mt-1 font-mono text-[11px] text-text-faint">
                          {r.label}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              </AnimatedReveal>
            )}

            <AnimatedReveal delay={0.05}>
              <div className="border border-border p-6">
                <h2 className="mb-4 font-mono text-xs uppercase tracking-[0.15em] text-text-faint">
                  Stack
                </h2>
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((t) => (
                    <TagChip key={t} label={t} />
                  ))}
                </div>
              </div>
            </AnimatedReveal>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
