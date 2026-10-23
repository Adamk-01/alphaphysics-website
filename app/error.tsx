"use client";

import { useEffect } from "react";
import Link from "next/link";
import { site } from "@/lib/site";

export default function Error({ error, reset }: { error: Error & { digest?: string }; reset: () => void }) {
  useEffect(() => {
    console.error("[ALPHAPHYSICS] Unhandled route error:", error);
  }, [error]);

  return (
    <section className="py-20">
      <div className="mx-auto w-full max-w-2xl px-5 text-center sm:px-8">
        <h1 className="text-3xl font-bold">Something went wrong</h1>
        <p className="mt-3 text-lg text-slate-700">
          This page could not load. Nothing you did caused it, and nothing was saved. You can try again, or reach us
          directly and we will answer there.
        </p>
        <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
          <button
            type="button"
            onClick={reset}
            className="inline-flex min-h-12 items-center justify-center rounded-md bg-navy px-6 text-sm font-bold uppercase tracking-wide text-white hover:bg-navy-dark"
          >
            Try again
          </button>
          <Link
            href="/"
            className="inline-flex min-h-12 items-center justify-center rounded-md border-2 border-navy px-6 text-sm font-bold uppercase tracking-wide text-navy hover:bg-navy hover:text-white"
          >
            Go to the homepage
          </Link>
          <a
            href={`https://wa.me/${site.whatsappNumber}`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex min-h-12 items-center justify-center rounded-md bg-brand-green px-6 text-sm font-bold uppercase tracking-wide text-white hover:bg-green-900"
          >
            WhatsApp us
          </a>
        </div>
      </div>
    </section>
  );
}
