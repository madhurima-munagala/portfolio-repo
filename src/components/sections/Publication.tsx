import { ArrowUpRight } from "lucide-react";
import { publication } from "@/data/publication";
import { AnimatedReveal } from "@/components/ui/AnimatedReveal";
import { Button } from "@/components/ui/Button";

export function Publication() {
  return (
    <section id="publication" className="border-y border-border bg-surface">
      <div className="mx-auto max-w-content px-6 py-20 sm:py-28">
        <AnimatedReveal>
          <p className="mb-3 font-mono text-xs uppercase tracking-[0.2em] text-accent">
            Research
          </p>

          <div className="grid gap-10 lg:grid-cols-5">
            <div className="lg:col-span-3">
              <h2 className="font-display text-display-md font-bold text-text">
                {publication.title}
              </h2>

              {/* Citation-style metadata block */}
              <p className="mt-5 font-mono text-[13px] text-text-faint">
                {publication.venue} · {publication.date} · {publication.authorNote}
              </p>

              <p className="mt-6 max-w-xl text-base leading-relaxed text-text-muted">
                {publication.description}
              </p>

              <div className="mt-8">
                <Button
                  href={publication.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  variant="primary"
                  icon={<ArrowUpRight size={14} />}
                >
                  Read Publication
                </Button>
              </div>
            </div>

            <div className="lg:col-span-2">
              <ul className="detect-corners flex flex-col gap-4 border border-border p-6">
                {publication.highlights.map((h) => (
                  <li key={h} className="flex items-start gap-3 text-sm text-text-muted">
                    <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-accent" />
                    {h}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </AnimatedReveal>
      </div>
    </section>
  );
}
