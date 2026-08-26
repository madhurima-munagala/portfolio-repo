import { skillCategories } from "@/data/skills";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { AnimatedReveal } from "@/components/ui/AnimatedReveal";
import { TagChip } from "@/components/ui/TagChip";

export function Skills() {
  return (
    <section id="skills" className="mx-auto max-w-content px-6 py-20 sm:py-28">
      <SectionHeading eyebrow="Stack" title="Technical skills" />

      <div className="grid gap-x-10 gap-y-10 sm:grid-cols-2 lg:grid-cols-3">
        {skillCategories.map((cat, i) => (
          <AnimatedReveal key={cat.category} delay={0.06 * i}>
            <h3 className="mb-4 font-mono text-xs uppercase tracking-[0.15em] text-text-faint">
              {cat.category}
            </h3>
            <div className="flex flex-wrap gap-2">
              {cat.items.map((item) => (
                <TagChip key={item} label={item} />
              ))}
            </div>
          </AnimatedReveal>
        ))}
      </div>
    </section>
  );
}
