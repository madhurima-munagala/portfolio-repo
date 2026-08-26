import { GraduationCap, Award, BookOpen } from "lucide-react";
import { profile } from "@/data/profile";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { AnimatedReveal } from "@/components/ui/AnimatedReveal";

const facts = [
  {
    icon: GraduationCap,
    label: "B.Tech Computer Science, VIT Vellore",
    sub: "CGPA 8.96 · 2023 – 2027",
  },
  {
    icon: Award,
    label: "IBM Certified Generative AI Engineer",
    sub: "LLMs, prompt engineering, responsible AI",
  },
  {
    icon: BookOpen,
    label: "Sole-author researcher",
    sub: "Published on SSRN (Elsevier), April 2026",
  },
];

export function About() {
  return (
    <section id="about" className="mx-auto max-w-content px-6 py-20 sm:py-28">
      <SectionHeading eyebrow="About" title="A quick introduction" />

      <div className="grid gap-12 md:grid-cols-5">
        <AnimatedReveal className="md:col-span-3">
          <p className="text-lg leading-relaxed text-text-muted">
            {profile.bio}
          </p>
        </AnimatedReveal>

        <AnimatedReveal delay={0.1} className="md:col-span-2">
          <ul className="flex flex-col gap-5 border-l border-border pl-6">
            {facts.map(({ icon: Icon, label, sub }) => (
              <li key={label} className="flex gap-3">
                <Icon size={18} className="mt-0.5 shrink-0 text-accent" />
                <div>
                  <p className="text-sm font-medium text-text">{label}</p>
                  <p className="mt-0.5 font-mono text-xs text-text-faint">{sub}</p>
                </div>
              </li>
            ))}
          </ul>
        </AnimatedReveal>
      </div>
    </section>
  );
}
