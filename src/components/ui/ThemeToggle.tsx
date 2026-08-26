"use client";

import { useEffect, useState } from "react";
import { Moon, Sun } from "lucide-react";

export function ThemeToggle() {
  const [isLight, setIsLight] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    setIsLight(document.documentElement.classList.contains("light"));
  }, []);

  function toggleTheme() {
    const next = !isLight;
    setIsLight(next);
    document.documentElement.classList.toggle("light", next);
    try {
      localStorage.setItem("theme", next ? "light" : "dark");
    } catch {
      // localStorage unavailable — theme just won't persist
    }
  }

  // Avoid rendering an icon that might not match the actual theme
  // until after hydration.
  if (!mounted) {
    return <div className="h-10 w-10" aria-hidden="true" />;
  }

  return (
    <button
      type="button"
      onClick={toggleTheme}
      aria-label={isLight ? "Switch to dark theme" : "Switch to light theme"}
      className="flex h-10 w-10 items-center justify-center rounded-md border border-border text-text-muted transition-colors duration-200 hover:border-border-strong hover:text-text"
    >
      {isLight ? <Moon size={16} /> : <Sun size={16} />}
    </button>
  );
}
