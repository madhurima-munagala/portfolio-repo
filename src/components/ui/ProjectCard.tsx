import { ArrowUpRight, Github, Users } from "lucide-react";
import Link from "next/link";
import type { Project } from "@/types";
import { TagChip } from "@/components/ui/TagChip";
import { cn } from "@/lib/utils";

interface ProjectCardProps {
  project: Project;
  prominent?: boolean;
}

export function ProjectCard({ project, prominent = false }: ProjectCardProps) {
  return (
    <article
      className={cn(
        "detect-corners group flex flex-col justify-between border border-border bg-surface p-7 transition-colors duration-300 hover:border-border-strong",
        prominent ? "md:p-9" : "",
      )}
    >
      <div>
        <div className="mb-4 flex flex-wrap items-start justify-between gap-3">
          <h3
            className={cn(
              "font-display font-bold text-text",
              prominent ? "text-xl md:text-2xl" : "text-lg",
            )}
          >
            {project.name}
          </h3>
          <span
            className={cn(
              "shrink-0 rounded-sm px-2 py-1 font-mono text-[10px] uppercase tracking-wider",
              project.status === "live"
                ? "bg-accent-dim text-accent"
                : "border border-border text-text-faint",
            )}
          >
            {project.status === "live" ? "Live" : "Code"}
          </span>
        </div>

        <p className="font-mono text-[13px] leading-relaxed text-text-faint">
          {project.oneLiner}
        </p>

        <p className="mt-4 text-sm leading-relaxed text-text-muted">
          {project.description}
        </p>

        {project.team && (
          <p className="mt-3 flex items-center gap-2 font-mono text-[11px] uppercase tracking-wide text-text-faint">
            <Users size={12} className="text-accent" />
            Team project
          </p>
        )}

        {project.features.length > 0 && (
          <ul className="mt-5 space-y-1.5">
            {project.features.slice(0, prominent ? 4 : 2).map((feature) => (
              <li
                key={feature}
                className="flex items-start gap-2 text-sm text-text-muted"
              >
                <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-accent" />
                {feature}
              </li>
            ))}
          </ul>
        )}

        {project.metrics.length > 0 && (
          <div className="mt-6 flex gap-6 border-t border-border pt-5">
            {project.metrics.map((metric) => (
              <div key={metric.label}>
                <p className="font-display text-xl font-bold text-accent">
                  {metric.value}
                </p>
                <p className="font-mono text-[11px] text-text-faint">
                  {metric.label}
                </p>
              </div>
            ))}
          </div>
        )}
      </div>

      <div className="mt-7 flex flex-wrap items-center justify-between gap-4">
        <div className="flex flex-wrap gap-2">
          {project.tech.map((t) => (
            <TagChip key={t} label={t} />
          ))}
        </div>
      </div>

      <div className="mt-6 flex flex-wrap items-center gap-x-5 gap-y-3 border-t border-border pt-5">
        <Link
          href={`/projects/${project.slug}`}
          className="min-h-[32px] font-mono text-[13px] text-text underline decoration-border underline-offset-4 transition-colors hover:text-accent hover:decoration-accent"
        >
          View details
        </Link>
        {project.status === "live" && project.demoUrl && (
          <a
            href={project.demoUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex min-h-[32px] items-center gap-1 font-mono text-[13px] text-text-muted transition-colors hover:text-accent"
          >
            Live demo <ArrowUpRight size={13} />
          </a>
        )}
        {project.githubUrl && (
          <a
            href={project.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex min-h-[32px] items-center gap-1 font-mono text-[13px] text-text-muted transition-colors hover:text-accent"
          >
            <Github size={13} /> Code
          </a>
        )}
      </div>
    </article>
  );
}
