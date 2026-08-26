"use client";

import { motion } from "framer-motion";
import { ArrowDown, FileText, Github, Linkedin } from "lucide-react";
import { profile } from "@/data/profile";
import { Button } from "@/components/ui/Button";

const container = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.12, delayChildren: 0.1 },
  },
};

const item = {
  hidden: { opacity: 0, y: 16 },
  show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] } },
};

export function Hero() {
  return (
    <section
      id="top"
      className="relative mx-auto flex min-h-[88vh] sm:min-h-[92vh] max-w-content flex-col justify-center px-6 pt-20"
    >
      <motion.div variants={container} initial="hidden" animate="show">
        <motion.p
          variants={item}
          className="mb-6 font-mono text-xs uppercase tracking-[0.2em] text-accent"
        >
          {profile.location} · Available for opportunities
        </motion.p>

        <motion.h1
          variants={item}
          className="font-display text-display-xl font-extrabold text-text"
        >
          {profile.name}
        </motion.h1>

        <motion.p
          variants={item}
          className="mt-6 max-w-xl text-lg leading-relaxed text-text-muted"
        >
          {profile.tagline}
        </motion.p>

        <motion.ul
          variants={item}
          className="mt-8 flex flex-wrap gap-x-6 gap-y-2 font-mono text-[13px] text-text-faint"
        >
          {profile.currentFacts.map((fact) => (
            <li key={fact} className="flex items-center gap-2">
              <span className="h-1 w-1 rounded-full bg-accent" />
              {fact}
            </li>
          ))}
        </motion.ul>

        <motion.div variants={item} className="mt-10 flex flex-wrap items-center gap-4">
          <Button href="#projects" variant="primary">
            View Projects
          </Button>
          <Button
            href={profile.resumeUrl}
            target="_blank"
            rel="noopener noreferrer"
            variant="secondary"
            icon={<FileText size={14} />}
          >
            Resume
          </Button>
          <Button
            href={profile.github}
            target="_blank"
            rel="noopener noreferrer"
            variant="ghost"
            icon={<Github size={16} />}
          >
            GitHub
          </Button>
          <Button
            href={profile.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            variant="ghost"
            icon={<Linkedin size={16} />}
          >
            LinkedIn
          </Button>
        </motion.div>
      </motion.div>

      <motion.a
        href="#about"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 0.6 }}
        aria-label="Scroll to About section"
        className="absolute bottom-10 left-6 flex items-center gap-2 font-mono text-xs text-text-faint transition-colors hover:text-accent"
      >
        <ArrowDown size={14} />
        Scroll
      </motion.a>
    </section>
  );
}
