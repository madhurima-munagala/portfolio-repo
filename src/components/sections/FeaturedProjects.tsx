import { projects } from "@/data/projects";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ProjectCard } from "@/components/ui/ProjectCard";
import { AnimatedReveal } from "@/components/ui/AnimatedReveal";

export function FeaturedProjects() {
  const [first, second, ...rest] = projects;

  return (
    <section id="projects" className="mx-auto max-w-content px-6 py-20 sm:py-28">
      <SectionHeading
        eyebrow="Selected Work"
        title="Featured projects"
        description="Three projects spanning full-stack systems and applied AI — each built end to end, from data layer to interface."
      />

      <div className="grid gap-6 lg:grid-cols-2">
        {first && (
          <AnimatedReveal>
            <ProjectCard project={first} prominent />
          </AnimatedReveal>
        )}
        {second && (
          <AnimatedReveal delay={0.1}>
            <ProjectCard project={second} prominent />
          </AnimatedReveal>
        )}
      </div>

      {rest.length > 0 && (
        <div className="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {rest.map((project, i) => (
            <AnimatedReveal key={project.slug} delay={0.1 * (i + 1)}>
              <ProjectCard project={project} />
            </AnimatedReveal>
          ))}
        </div>
      )}
    </section>
  );
}
