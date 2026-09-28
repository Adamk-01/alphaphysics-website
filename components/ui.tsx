import Link from "next/link";
import { wa, MSG, groupHref } from "@/lib/site";

export const Container = ({ children, className = "" }: { children: React.ReactNode; className?: string }) => (
  <div className={`mx-auto w-full max-w-6xl px-5 sm:px-8 ${className}`}>{children}</div>
);

const base = "inline-flex min-h-12 items-center justify-center gap-2 rounded-md px-6 py-3 text-center text-sm font-bold uppercase tracking-wide transition-colors";
const variants = {
  gold: "bg-gold text-navy-dark hover:bg-gold-dark hover:text-white",
  navy: "bg-navy text-white hover:bg-navy-dark",
  green: "bg-brand-green text-white hover:bg-green-900",
  outline: "border-2 border-white text-white hover:bg-white hover:text-navy",
  outlineNavy: "border-2 border-navy text-navy hover:bg-navy hover:text-white",
};
type V = keyof typeof variants;

export function Btn({ href, children, variant = "gold", external = false }: { href: string; children: React.ReactNode; variant?: V; external?: boolean }) {
  const cls = `${base} ${variants[variant]}`;
  return external ? <a href={href} className={cls} target="_blank" rel="noopener noreferrer">{children}</a> : <Link href={href} className={cls}>{children}</Link>;
}
export const WaBtn = ({ msg = MSG.general, label = "Chat on WhatsApp", variant = "green" }: { msg?: string; label?: string; variant?: V }) => (
  <Btn href={wa(msg)} variant={variant} external>{label}</Btn>
);
export const JoinBtn = ({ label = "Join 2027 Aspirants", variant = "gold" }: { label?: string; variant?: V }) => (
  <Btn href={groupHref} variant={variant} external>{label}</Btn>
);

export function Heading({ eyebrow, title, children, light = false }: { eyebrow?: string; title: string; children?: React.ReactNode; light?: boolean }) {
  return (
    <div className="max-w-2xl">
      {eyebrow && <p className="mb-2 text-xs font-bold uppercase tracking-[.18em] text-gold-dark">{eyebrow}</p>}
      <h2 className={`text-3xl font-bold leading-tight sm:text-4xl ${light ? "!text-white" : ""}`}>{title}</h2>
      {children && <p className={`mt-3 text-base leading-relaxed ${light ? "text-blue-100" : "text-slate-600"}`}>{children}</p>}
    </div>
  );
}

export function PageHero({ eyebrow, title, children }: { eyebrow?: string; title: string; children?: React.ReactNode }) {
  return (
    <section className="border-b-4 border-gold bg-navy py-12 sm:py-16">
      <Container>
        {eyebrow && <p className="mb-2 text-xs font-bold uppercase tracking-[.18em] text-gold">{eyebrow}</p>}
        <h1 className="max-w-3xl text-3xl font-bold leading-tight !text-white sm:text-5xl">{title}</h1>
        {children && <p className="mt-4 max-w-2xl text-lg text-blue-100">{children}</p>}
      </Container>
    </section>
  );
}

export function WaBand({ title = "Need Admission Guidance?", text = "Talk to ALPHAPHYSICS EDU CONSULT.", msg = MSG.general }: { title?: string; text?: string; msg?: string }) {
  return (
    <section className="bg-navy-light py-14">
      <Container className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-center">
        <div><h2 className="text-3xl font-bold">{title}</h2><p className="mt-2 text-slate-600">{text} Need help with JAMB, admission or school information?</p></div>
        <div className="flex w-full flex-col gap-3 sm:w-auto sm:flex-row"><WaBtn msg={msg} /><JoinBtn variant="navy" /></div>
      </Container>
    </section>
  );
}

const paths: Record<string, string> = {
  file: "M6 3h9l4 4v14H6zM14 3v5h5M9 13h6M9 17h6",
  compass: "M12 3a9 9 0 100 18 9 9 0 000-18zM15.5 8.5l-2 5-5 2 2-5z",
  book: "M4 5h6a2 2 0 012 2v12a2 2 0 00-2-2H4zM20 5h-6a2 2 0 00-2 2v12a2 2 0 012-2h6z",
  clip: "M9 4h6v3H9zM7 5H5v16h14V5h-2M9 12h6M9 16h4",
  users: "M9 11a3 3 0 100-6 3 3 0 000 6zM3 20a6 6 0 0112 0M17 11a2.5 2.5 0 100-5M17 14a5 5 0 014 6",
  building: "M3 9l9-5 9 5M5 9v9M9 9v9M15 9v9M19 9v9M3 20h18",
};
export const Icon = ({ name }: { name: string }) => (
  <span className="flex h-12 w-12 items-center justify-center rounded-md bg-navy text-gold" aria-hidden="true">
    <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d={paths[name]} /></svg>
  </span>
);
