import { site } from "@/lib/site";
export default function JsonLd() {
  const data: Record<string, unknown> = {
    "@context": "https://schema.org", "@type": ["EducationalOrganization", "LocalBusiness"],
    name: site.name, description: site.description, url: site.url, logo: `${site.url}/logo.jpg`, image: `${site.url}/logo.jpg`,
    telephone: `+${site.whatsappNumber}`, areaServed: { "@type": "Country", name: "Nigeria" }, slogan: site.tagline,
    contactPoint: { "@type": "ContactPoint", telephone: `+${site.whatsappNumber}`, contactType: "customer service", availableLanguage: "English" },
    sameAs: Object.values(site.socials).filter(Boolean),
  };
  if (site.email) data.email = site.email;
  if (site.address) data.address = { "@type": "PostalAddress", streetAddress: site.address, addressCountry: "NG" };
  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }} />;
}
