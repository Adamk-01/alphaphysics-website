import { site, services } from "@/lib/site";

/**
 * Site-wide structured data. Deliberately contains no aggregateRating, review count,
 * founding date or opening hours — we do not publish claims we cannot evidence, and
 * fabricated review markup is a manual-action risk.
 */
export default function JsonLd() {
  const sameAs = Object.values(site.socials).filter(Boolean);

  const data: Record<string, unknown> = {
    "@context": "https://schema.org",
    "@type": ["EducationalOrganization", "ProfessionalService"],
    "@id": `${site.url}/#organization`,
    name: site.name,
    alternateName: site.shortName,
    legalName: site.name,
    description: site.description,
    url: site.url,
    logo: { "@type": "ImageObject", url: `${site.url}/logo.jpg`, width: 512, height: 512 },
    image: `${site.url}/og-image.jpg`,
    telephone: `+${site.whatsappNumber}`,
    email: site.email,
    slogan: site.tagline,
    address: {
      "@type": "PostalAddress",
      streetAddress: "3, Okegbenro Street, Iju Ishaga",
      addressLocality: site.addressLocality,
      addressRegion: site.addressRegion,
      addressCountry: site.country,
    },
    areaServed: [
      { "@type": "Country", name: "Nigeria" },
      { "@type": "City", name: "Lagos" },
      { "@type": "City", name: "Ibadan" },
      { "@type": "City", name: "Abuja" },
    ],
    contactPoint: [
      {
        "@type": "ContactPoint",
        telephone: `+${site.whatsappNumber}`,
        contactType: "customer service",
        areaServed: "NG",
        availableLanguage: ["English"],
      },
    ],
    knowsAbout: [
      "JAMB registration",
      "UTME preparation",
      "University admission in Nigeria",
      "O'Level requirements",
      "Post-UTME screening",
      "JAMB CAPS",
    ],
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Admission and education support services",
      itemListElement: services.map((s) => ({
        "@type": "Offer",
        itemOffered: { "@type": "Service", name: s.title, description: s.short, url: `${site.url}/services/${s.slug}` },
      })),
    },
  };

  if (sameAs.length) data.sameAs = sameAs;

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data).replace(/</g, "\\u003c") }}
    />
  );
}
