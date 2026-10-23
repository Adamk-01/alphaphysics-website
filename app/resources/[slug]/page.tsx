import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { meta } from "@/lib/seo";
import { posts } from "@/lib/posts";
import { services } from "@/lib/site";
import { PageHero, Container, WaBand } from "@/components/ui";
import Breadcrumb, { ArticleLd } from "@/components/Schema";

export const dynamicParams = false;
export const generateStaticParams = () => posts.map((p) => ({ slug: p.slug }));

const formatDate = (iso: string) =>
  new Date(iso).toLocaleDateString("en-NG", { day: "numeric", month: "long", year: "numeric" });

export function generateMetadata({ params }: { params: { slug: string } }): Metadata {
  const p = posts.find((x) => x.slug === params.slug);
  if (!p) return {};
  return meta(p.title, p.excerpt, `/resources/${p.slug}`, {
    type: "article",
    publishedTime: p.date,
    modifiedTime: p.updated,
  });
}

export default function Post({ params }: { params: { slug: string } }) {
  const p = posts.find((x) => x.slug === params.slug);
  if (!p) notFound();

  const related = posts.filter((x) => x.slug !== p.slug && x.tag === p.tag).slice(0, 3);
  const fallback = posts.filter((x) => x.slug !== p.slug).slice(0, 3);
  const others = related.length > 0 ? related : fallback;
  const service = services.find((s) => s.slug === p.service);

  return (
    <>
      <Breadcrumb items={[{ name: "Resources", path: "/resources" }, { name: p.title, path: `/resources/${p.slug}` }]} />
      <PageHero eyebrow="Resources" title={p.h1}>
        {p.excerpt}
      </PageHero>

      <article className="py-12">
        <Container className="max-w-3xl">
          <div className="flex flex-wrap items-center gap-x-4 gap-y-2 text-sm text-slate-600">
            <span className="rounded-full bg-navy-light px-3 py-1 font-bold text-navy">{p.tag}</span>
            <time dateTime={p.date}>Published {formatDate(p.date)}</time>
            {p.updated !== p.date && (
              <>
                <span aria-hidden="true">·</span>
                <time dateTime={p.updated}>Updated {formatDate(p.updated)}</time>
              </>
            )}
            <span aria-hidden="true">·</span>
            <span>{p.readingMinutes} min read</span>
          </div>

          <p className="mt-6 rounded-md border-l-4 border-gold bg-navy-light p-4 text-sm leading-relaxed text-slate-700">
            This is general educational guidance, not an official announcement. Dates, fees and policies change every
            cycle — confirm them with JAMB and your chosen institution before acting.
          </p>

          <nav aria-label="On this page" className="mt-8 rounded-md border border-slate-200 p-5">
            <h2 className="text-base font-bold">On this page</h2>
            <ol className="mt-2 space-y-1 text-sm">
              {p.sections.map((s, i) => (
                <li key={s.h}>
                  <a href={`#section-${i}`} className="text-navy underline hover:text-gold-dark">
                    {s.h}
                  </a>
                </li>
              ))}
            </ol>
          </nav>

          <div className="mt-10 space-y-10">
            {p.sections.map((s, i) => (
              <section key={s.h} id={`section-${i}`} className="scroll-mt-24">
                <h2 className="text-2xl font-bold">{s.h}</h2>
                {s.p.split(/\n\s*\n/).map((para, j) => (
                  <p key={j} className="mt-4 text-lg leading-relaxed text-slate-700">
                    {para}
                  </p>
                ))}
              </section>
            ))}
          </div>

          {service && (
            <aside className="mt-12 rounded-lg bg-navy p-6 text-white sm:p-8">
              <h2 className="text-2xl font-bold !text-white">Need this handled for you?</h2>
              <p className="mt-2 text-blue-100">
                We can help with {service.title.toLowerCase()}. You will be told what it costs and how long it takes
                before any work starts.
              </p>
              <div className="mt-5 flex flex-col gap-3 sm:flex-row">
                <Link
                  href={`/services/${service.slug}`}
                  className="inline-flex min-h-12 items-center justify-center rounded-md bg-gold px-6 text-sm font-bold uppercase tracking-wide text-navy-dark hover:bg-gold-dark hover:text-white"
                >
                  About {service.title}
                </Link>
                <Link
                  href="/contact"
                  className="inline-flex min-h-12 items-center justify-center rounded-md border-2 border-white px-6 text-sm font-bold uppercase tracking-wide text-white hover:bg-white hover:text-navy"
                >
                  Ask a question
                </Link>
              </div>
            </aside>
          )}

          <div className="mt-12 border-t border-slate-200 pt-8">
            <h2 className="text-xl font-bold">Keep reading</h2>
            <ul className="mt-4 space-y-3">
              {others.map((o) => (
                <li key={o.slug}>
                  <Link href={`/resources/${o.slug}`} className="font-semibold text-navy underline hover:text-gold-dark">
                    {o.h1}
                  </Link>
                  <p className="text-sm text-slate-600">{o.excerpt}</p>
                </li>
              ))}
            </ul>
            <p className="mt-6">
              <Link href="/resources" className="font-bold text-navy underline">
                All resources
              </Link>
            </p>
          </div>
        </Container>
      </article>

      <WaBand title="Still not sure what applies to you?" text="Ask us and we will point you to the right step." />
      <ArticleLd
        title={p.h1}
        description={p.excerpt}
        path={`/resources/${p.slug}`}
        published={p.date}
        modified={p.updated}
      />
    </>
  );
}
