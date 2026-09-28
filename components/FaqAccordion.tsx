"use client";
import { useState } from "react";

type Faq = { q: string; a: string };

export default function FaqAccordion({ faqs }: { faqs: Faq[] }) {
  const [open, setOpen] = useState<number | null>(null);
  return (
    <div className="divide-y divide-slate-200 border-y border-slate-200">
      {faqs.map((f, i) => (
        <details
          key={i}
          open={open === i}
          onClick={(e) => { e.preventDefault(); setOpen(open === i ? null : i); }}
          className="group"
        >
          <summary className="flex cursor-pointer select-none items-center justify-between gap-4 py-5 text-lg font-bold text-navy transition-colors hover:text-gold-dark">
            {f.q}
            <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-navy-light text-navy transition-transform group-open:rotate-45">
              <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><path d="M12 5v14M5 12h14" /></svg>
            </span>
          </summary>
          <p className="pb-5 pr-12 text-slate-600 leading-relaxed">{f.a}</p>
        </details>
      ))}
    </div>
  );
}
