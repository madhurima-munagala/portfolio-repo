import Link from "next/link";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";

export default function NotFound() {
  return (
    <>
      <Navbar />
      <main id="main-content" className="mx-auto flex min-h-[70vh] max-w-content flex-col items-start justify-center px-6">
        <p className="mb-4 font-mono text-xs uppercase tracking-[0.2em] text-accent">
          404
        </p>
        <h1 className="font-display text-display-lg font-extrabold text-text">
          Nothing here.
        </h1>
        <p className="mt-4 max-w-md text-text-muted">
          The page you&apos;re looking for doesn&apos;t exist or has moved.
        </p>
        <Link
          href="/"
          className="mt-8 font-mono text-[13px] text-text underline decoration-border underline-offset-4 transition-colors hover:text-accent hover:decoration-accent"
        >
          Back to home
        </Link>
      </main>
      <Footer />
    </>
  );
}
