import { education } from "@/data/education";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { AnimatedReveal } from "@/components/ui/AnimatedReveal";

export function Education() {
  return (
    <section id="education" className="mx-auto max-w-content px-6 py-20 sm:py-28">
      <SectionHeading eyebrow="Background" title="Education" />

      <div className="flex flex-col">
        {education.map((entry, i) => (
          <AnimatedReveal key={entry.institution} delay={0.08 * i}>
            <div className="flex flex-col gap-2 border-t border-border py-7 sm:flex-row sm:items-baseline sm:justify-between">
              <div>
                <h3 className="font-display text-lg font-bold text-text">
                  {entry.institution}
                </h3>
                <p className="mt-1 text-sm text-text-muted">
                  {entry.qualification}
                </p>
              </div>
              <div className="text-left sm:text-right">
                <p className="font-mono text-[13px] text-text-faint">
                  {entry.period}
                </p>
                <p className="mt-1 font-mono text-[13px] text-accent">
                  {entry.score}
                </p>
              </div>
            </div>
          </AnimatedReveal>
        ))}
        <div className="border-t border-border" />
      </div>
    </section>
  );
}
