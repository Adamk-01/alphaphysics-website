"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { nav, site } from "@/lib/site";
import { Container, WaBtn } from "./ui";

export default function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const panelRef = useRef<HTMLDivElement>(null);

  // Close the menu on navigation. The header lives in the root layout and is not
  // remounted between routes, so without this the panel stays open after a tap.
  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    const onClick = (e: MouseEvent) => {
      if (panelRef.current && !panelRef.current.contains(e.target as Node)) setOpen(false);
    };
    document.addEventListener("keydown", onKey);
    document.addEventListener("mousedown", onClick);
    return () => {
      document.removeEventListener("keydown", onKey);
      document.removeEventListener("mousedown", onClick);
    };
  }, [open]);

  const isActive = (href: string) => (href === "/" ? pathname === "/" : pathname.startsWith(href));

  return (
    <header className="sticky top-0 z-40 border-b border-slate-200 bg-white">
      <Container className="flex h-16 items-center justify-between gap-3">
        <Link href="/" className="flex shrink-0 items-center gap-3" aria-label={`${site.name} — home`}>
          <Image src="/logo.jpg" alt={`${site.name} logo`} width={48} height={48} priority className="h-11 w-11 rounded-full" />
          <span className="hidden text-sm font-bold leading-tight text-navy sm:block">
            ALPHAPHYSICS
            <br />
            <span className="text-gold-dark">EDU CONSULT</span>
          </span>
        </Link>

        <nav aria-label="Main" className="hidden items-center gap-4 xl:flex">
          {nav.map((n) => (
            <Link
              key={n.href}
              href={n.href}
              aria-current={isActive(n.href) ? "page" : undefined}
              className={`inline-flex min-h-6 items-center py-2 text-[13px] font-semibold underline-offset-4 hover:text-gold-dark hover:underline ${
                isActive(n.href) ? "text-gold-dark" : "text-navy"
              }`}
            >
              {n.label}
            </Link>
          ))}
        </nav>

        <div className="hidden shrink-0 xl:block">
          <WaBtn label="WhatsApp Us" />
        </div>

        <div className="relative xl:hidden" ref={panelRef}>
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-expanded={open}
            aria-controls="mobile-menu"
            className="flex min-h-11 items-center rounded-md border-2 border-navy px-4 text-sm font-bold text-navy"
          >
            {open ? "Close" : "Menu"}
          </button>
          {open && (
            <nav
              id="mobile-menu"
              aria-label="Mobile"
              className="absolute right-0 top-14 max-h-[70vh] w-64 overflow-y-auto rounded-md border border-slate-200 bg-white p-2 shadow-lg"
            >
              {nav.map((n) => (
                <Link
                  key={n.href}
                  href={n.href}
                  aria-current={isActive(n.href) ? "page" : undefined}
                  className={`block rounded px-4 py-3 font-semibold hover:bg-navy-light ${
                    isActive(n.href) ? "bg-navy-light text-gold-dark" : "text-navy"
                  }`}
                >
                  {n.label}
                </Link>
              ))}
              <div className="p-2 pt-3">
                <WaBtn label="WhatsApp Us" srSuffix="(opens WhatsApp chat)" />
              </div>
            </nav>
          )}
        </div>
      </Container>
    </header>
  );
}
