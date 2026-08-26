import { cn } from "@/lib/utils";

interface TagChipProps {
  label: string;
  className?: string;
}

export function TagChip({ label, className }: TagChipProps) {
  return (
    <span
      className={cn(
        "inline-flex items-center rounded-sm border border-border px-2.5 py-1 font-mono text-[12px] text-text-muted",
        className,
      )}
    >
      {label}
    </span>
  );
}
