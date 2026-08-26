import { BadgeCheck } from "lucide-react";
import { certification } from "@/data/certification";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { AnimatedReveal } from "@/components/ui/AnimatedReveal";
import { TagChip } from "@/components/ui/TagChip";

export function Certification() {
  return (
    <section className="mx-auto max-w-content px-6 py-20 sm:py-28">
      <SectionHeading eyebrow="Certification" title="Formal credentials" />

      <AnimatedReveal>
        <div className="detect-corners flex flex-col gap-6 border border-border p-8 sm:flex-row sm:items-start">
          <BadgeCheck size={28} className="shrink-0 text-accent" />
          <div>
            <h3 className="font-display text-lg font-bold text-text">
              {certification.name}
            </h3>
            <p className="mt-1 font-mono text-xs text-text-faint">
              Issued by {certification.issuer}
            </p>
            <div className="mt-5 flex flex-wrap gap-2">
              {certification.areas.map((area) => (
                <TagChip key={area} label={area} />
              ))}
            </div>
          </div>
        </div>
      </AnimatedReveal>
    </section>
  );
}
