import Link from "next/link";
import { site } from "@/lib/site";

export type Crumb = { name: string; path: string };

function Ld({ data }: { data: Record<string, unknown> }) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data).replace(/</g, "\\u003c") }}
    />
  );
}

/** Visible breadcrumb trail. Also emits BreadcrumbList structured data. */
export default function Breadcrumb({ items }: { items: Crumb[] }) {
  const all: Crumb[] = [{ name: "Home", path: "/" }, ...items];
  const data = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: all.map((c, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: c.name,
      item: `${site.url}${c.path === "/" ? "" : c.path}`,
    })),
  };

  return (
    <>
      <nav aria-label="Breadcrumb" className="border-b border-slate-200 bg-white">
        <div className="mx-auto w-full max-w-6xl overflow-x-auto px-5 py-3 text-sm sm:px-8">
          <ol className="flex items-center gap-2 whitespace-nowrap text-slate-600">
            {all.map((c, i) => {
              const last = i === all.length - 1;
              return (
                <li key={c.path} className="flex items-center gap-2">
                  {last ? (
                    <span aria-current="page" className="font-semibold text-navy">
                      {c.name}
                    </span>
                  ) : (
                    <>
                      <Link href={c.path} className="underline hover:text-navy">
                        {c.name}
                      </Link>
                      <span aria-hidden="true" className="text-slate-400">
                        /
                      </span>
                    </>
                  )}
                </li>
              );
            })}
          </ol>
        </div>
      </nav>
      <Ld data={data} />
    </>
  );
}

export function ArticleLd({
  title,
  description,
  path,
  published,
  modified,
}: {
  title: string;
  description: string;
  path: string;
  published: string;
  modified?: string;
}) {
  const url = `${site.url}${path}`;
  return (
    <Ld
      data={{
        "@context": "https://schema.org",
        "@type": "Article",
        headline: title,
        description,
        url,
        mainEntityOfPage: { "@type": "WebPage", "@id": url },
        datePublished: published,
        dateModified: modified ?? published,
        inLanguage: "en-NG",
        author: { "@type": "Organization", name: site.name, url: site.url },
        publisher: {
          "@type": "Organization",
          name: site.name,
          url: site.url,
          logo: { "@type": "ImageObject", url: `${site.url}/logo.jpg` },
        },
        image: [`${site.url}/og-image.jpg`],
        isAccessibleForFree: true,
      }}
    />
  );
}

export function FaqLd({ faqs }: { faqs: { q: string; a: string }[] }) {
  return (
    <Ld
      data={{
        "@context": "https://schema.org",
        "@type": "FAQPage",
        mainEntity: faqs.map((f) => ({
          "@type": "Question",
          name: f.q,
          acceptedAnswer: { "@type": "Answer", text: f.a },
        })),
      }}
    />
  );
}

export function ServiceLd({
  name,
  description,
  path,
  slug,
}: {
  name: string;
  description: string;
  path: string;
  slug: string;
}) {
  const url = `${site.url}${path}`;
  return (
    <Ld
      data={{
        "@context": "https://schema.org",
        "@type": "Service",
        name,
        description,
        serviceType: name,
        url,
        provider: { "@type": "EducationalOrganization", name: site.name, url: site.url },
        areaServed: { "@type": "Country", name: "Nigeria" },
        audience: { "@type": "EducationalAudience", educationalRole: "student" },
        mainEntityOfPage: { "@type": "WebPage", "@id": url },
        identifier: slug,
      }}
    />
  );
}
