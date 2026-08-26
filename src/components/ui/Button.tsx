import type { AnchorHTMLAttributes, ReactNode } from "react";
import { cn } from "@/lib/utils";

interface ButtonProps extends AnchorHTMLAttributes<HTMLAnchorElement> {
  children: ReactNode;
  variant?: "primary" | "secondary" | "ghost";
  icon?: ReactNode;
}

export function Button({
  children,
  variant = "primary",
  icon,
  className,
  ...props
}: ButtonProps) {
  return (
    <a
      className={cn(
        "inline-flex min-h-[44px] items-center gap-2 rounded-md px-5 py-2.5 font-mono text-[13px] transition-all duration-200 ease-out-expo",
        variant === "primary" &&
          "bg-accent text-bg hover:opacity-90",
        variant === "secondary" &&
          "border border-border-strong text-text hover:border-accent hover:text-accent",
        variant === "ghost" &&
          "text-text-muted hover:text-text",
        className,
      )}
      {...props}
    >
      {children}
      {icon}
    </a>
  );
}
