import Image from "next/image";
import Link from "next/link";
import { nav, services, site, wa, MSG } from "@/lib/site";
import { Container } from "./ui";

export default function Footer() {
  const socials = Object.entries(site.socials);
  return (
    <footer className="bg-navy-dark pb-24 pt-14 text-blue-100 lg:pb-14">
      <Container className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
        <div>
          <Image src="/logo.jpg" alt={`${site.name} logo`} width={80} height={80} loading="lazy" className="h-20 w-20 rounded-full" />
          <p className="mt-4 font-bold text-white">{site.name}</p>
          <p className="mt-1 text-sm">{site.tagline}</p>
        </div>
        <div><h2 className="mb-3 text-base font-bold !text-gold">Quick Links</h2><ul className="space-y-2 text-sm">
          {nav.map((n) => <li key={n.href}><Link href={n.href} className="hover:text-white">{n.label}</Link></li>)}</ul></div>
        <div><h2 className="mb-3 text-base font-bold !text-gold">Services</h2><ul className="space-y-2 text-sm">
          {services.map((s) => <li key={s.slug}><Link href={`/services/${s.slug}`} className="hover:text-white">{s.title}</Link></li>)}</ul></div>
        <div><h2 className="mb-3 text-base font-bold !text-gold">Contact</h2>
          <p className="text-sm"><a href={`tel:${site.phone}`} className="font-semibold text-white">{site.phone}</a></p>
          <p className="mt-2 text-sm"><a href={wa(MSG.general)} className="hover:text-white" target="_blank" rel="noopener noreferrer">WhatsApp: Chat with us</a></p>
          <ul className="mt-4 flex flex-wrap gap-x-4 gap-y-2 text-sm">
            {socials.map(([n, u]) => <li key={n}>{u ? <a href={u} className="hover:text-white" target="_blank" rel="noopener noreferrer">{n}</a> : <span className="opacity-50">{n} (coming soon)</span>}</li>)}
          </ul></div>
      </Container>
      <Container className="mt-10 border-t border-blue-900 pt-6 text-xs">© 2026 {site.name}. All rights reserved.</Container>
    </footer>
  );
}
