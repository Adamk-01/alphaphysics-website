import Link from "next/link";
import type { Metadata } from "next";
import { Container } from "@/components/ui";
import { nav } from "@/lib/site";

export const metadata: Metadata = {
  title: "Page not found",
  robots: { index: false, follow: true },
};

export default function NotFound() {
  return (
    <section className="py-20">
      <Container className="max-w-2xl text-center">
        <p className="font-serif text-6xl font-bold text-gold-dark">404</p>
        <h1 className="mt-4 text-3xl font-bold">We could not find that page</h1>
        <p className="mt-3 text-lg text-slate-700">
          The link may be old, or the page may have moved. Here are the parts of the site people usually want:
        </p>
        <ul className="mx-auto mt-8 grid max-w-md gap-2 text-left">
          {nav.map((n) => (
            <li key={n.href}>
              <Link
                href={n.href}
                className="block rounded-md border border-slate-200 px-4 py-3 font-semibold text-navy hover:border-gold hover:bg-slate-50"
              >
                {n.label}
              </Link>
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
}
