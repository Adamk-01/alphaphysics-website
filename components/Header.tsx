import Image from "next/image";
import Link from "next/link";
import { nav, site } from "@/lib/site";
import { Container, WaBtn } from "./ui";

export default function Header() {
  return (
    <header className="sticky top-0 z-40 border-b border-slate-200 bg-white">
      <Container className="flex h-16 items-center justify-between gap-3">
        <Link href="/" className="flex items-center gap-3" aria-label={`${site.name} home`}>
          <Image src="/logo.jpg" alt={`${site.name} logo`} width={48} height={48} priority className="h-11 w-11 rounded-full" />
          <span className="hidden text-sm font-bold leading-tight text-navy sm:block">ALPHAPHYSICS<br /><span className="text-gold-dark">EDU CONSULT</span></span>
        </Link>
        <nav aria-label="Main" className="hidden items-center gap-6 lg:flex">
          {nav.map((n) => <Link key={n.href} href={n.href} className="text-sm font-semibold text-navy hover:text-gold-dark">{n.label}</Link>)}
        </nav>
        <div className="hidden lg:block"><WaBtn label="WhatsApp Us" /></div>
        <details className="group relative lg:hidden">
          <summary className="flex min-h-11 cursor-pointer list-none items-center rounded-md border-2 border-navy px-4 text-sm font-bold text-navy">Menu</summary>
          <nav aria-label="Mobile" className="absolute right-0 top-14 w-64 rounded-md border border-slate-200 bg-white p-2 shadow-lg">
            {nav.map((n) => <Link key={n.href} href={n.href} className="block rounded px-4 py-3 font-semibold text-navy hover:bg-navy-light">{n.label}</Link>)}
          </nav>
        </details>
      </Container>
    </header>
  );
}
