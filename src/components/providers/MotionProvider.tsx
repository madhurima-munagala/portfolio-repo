"use client";

import { MotionConfig } from "framer-motion";
import type { ReactNode } from "react";

/**
 * Wraps the app so every Framer Motion animation automatically respects
 * the user's OS-level "reduce motion" setting. The CSS-level reduced-motion
 * rules in globals.css cover ordinary CSS transitions, but Framer Motion
 * animates via JS and needs this separately.
 */
export function MotionProvider({ children }: { children: ReactNode }) {
  return <MotionConfig reducedMotion="user">{children}</MotionConfig>;
}
