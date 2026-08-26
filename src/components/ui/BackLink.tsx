import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export function BackLink({ href, label }: { href: string; label: string }) {
  return (
    <Link
      href={href}
      className="inline-flex items-center gap-2 font-mono text-[13px] text-text-muted transition-colors hover:text-accent"
    >
      <ArrowLeft size={14} />
      {label}
    </Link>
  );
}
