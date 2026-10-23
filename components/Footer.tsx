import Image from "next/image";
import Link from "next/link";
import { nav, services, site, wa, MSG } from "@/lib/site";
import { Container } from "./ui";

export default function Footer() {
  const socials = Object.entries(site.socials).filter(([, url]) => url);
  const year = new Date().getFullYear();

  return (
    <footer className="bg-navy-dark pb-24 pt-14 text-blue-100 lg:pb-14">
      <Container className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
        <div>
          <Image src="/logo.jpg" alt={`${site.name} logo`} width={80} height={80} loading="lazy" className="h-20 w-20 rounded-full" />
          <p className="mt-4 font-bold text-white">{site.name}</p>
          <p className="mt-1 text-sm">{site.tagline}</p>
          <p className="mt-3 text-sm text-blue-200">{site.address}</p>
          <p className="mt-2 text-sm">
            <a href={`mailto:${site.email}`} className="underline hover:text-white">
              {site.email}
            </a>
          </p>
        </div>

        <div>
          <h2 className="mb-3 text-base font-bold !text-gold">Explore</h2>
          <ul className="space-y-1 text-sm">
            {nav.map((n) => (
              <li key={n.href}>
                <Link href={n.href} className="inline-block py-1.5 hover:text-white hover:underline">
                  {n.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h2 className="mb-3 text-base font-bold !text-gold">Services</h2>
          <ul className="space-y-1 text-sm">
            {services.map((s) => (
              <li key={s.slug}>
                <Link href={`/services/${s.slug}`} className="inline-block py-1.5 hover:text-white hover:underline">
                  {s.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h2 className="mb-3 text-base font-bold !text-gold">Contact</h2>
          <p className="text-sm">
            <a href={`tel:${site.phone}`} className="font-semibold text-white underline">
              {site.phone}
            </a>
          </p>
          <p className="mt-2 text-sm">
            <a href={wa(MSG.general)} className="hover:text-white hover:underline" target="_blank" rel="noopener noreferrer">
              WhatsApp: chat with us
            </a>
          </p>
          {socials.length > 0 && (
            <ul className="mt-4 flex flex-wrap gap-x-4 gap-y-2 text-sm">
              {socials.map(([name, url]) => (
                <li key={name}>
                  <a href={url} className="hover:text-white hover:underline" target="_blank" rel="noopener noreferrer">
                    {name}
                  </a>
                </li>
              ))}
            </ul>
          )}
          <ul className="mt-6 space-y-1 text-sm">
            <li>
              <Link href="/privacy" className="inline-block py-1.5 hover:text-white hover:underline">
                Privacy Policy
              </Link>
            </li>
            <li>
              <Link href="/terms" className="inline-block py-1.5 hover:text-white hover:underline">
                Terms of Service
              </Link>
            </li>
            <li>
              <Link href="/about" className="inline-block py-1.5 hover:text-white hover:underline">
                About &amp; how we work
              </Link>
            </li>
          </ul>
        </div>
      </Container>

      <Container className="mt-10 border-t border-blue-900 pt-6 text-xs leading-relaxed">
        <p className="max-w-4xl text-blue-200">
          {site.name} is an independent education consultancy based in Lagos, Nigeria. We are not JAMB, WAEC, NECO,
          NIMC or any school, and we do not represent any government body. We do not guarantee admission. Always
          confirm official dates, fees and policies with JAMB and your chosen institution.
        </p>
        <p className="mt-4">© {year} {site.name}. All rights reserved.</p>
      </Container>
    </footer>
  );
}
