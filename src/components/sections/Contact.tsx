import { ArrowUpRight, Github, Linkedin, Mail } from "lucide-react";
import { profile } from "@/data/profile";
import { AnimatedReveal } from "@/components/ui/AnimatedReveal";

const links = [
  { label: profile.email, href: `mailto:${profile.email}`, icon: Mail },
  { label: "LinkedIn", href: profile.linkedin, icon: Linkedin },
  { label: "GitHub", href: profile.github, icon: Github },
];

export function Contact() {
  return (
    <section id="contact" className="mx-auto max-w-content px-6 py-20 sm:py-32">
      <AnimatedReveal>
        <p className="mb-4 font-mono text-xs uppercase tracking-[0.2em] text-accent">
          Contact
        </p>
        <h2 className="max-w-2xl font-display text-display-md font-bold text-text">
          Have a project, opportunity, or idea? I&apos;d like to hear about it.
        </h2>

        <div className="mt-10 flex flex-col gap-4 sm:flex-row sm:flex-wrap">
          {links.map(({ label, href, icon: Icon }) => (
            <a
              key={label}
              href={href}
              target={href.startsWith("mailto:") ? undefined : "_blank"}
              rel={href.startsWith("mailto:") ? undefined : "noopener noreferrer"}
              className="detect-corners group flex items-center justify-between gap-6 border border-border px-6 py-4 transition-colors hover:border-border-strong sm:min-w-[220px]"
            >
              <span className="flex items-center gap-3 font-mono text-sm text-text">
                <Icon size={16} className="text-accent" />
                {label}
              </span>
              <ArrowUpRight
                size={15}
                className="text-text-faint transition-colors group-hover:text-accent"
              />
            </a>
          ))}
        </div>
      </AnimatedReveal>
    </section>
  );
}
