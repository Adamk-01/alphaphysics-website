import Link from "next/link";
import { meta } from "@/lib/seo";
import { posts } from "@/lib/posts";
import { PageHero, Container, WaBand } from "@/components/ui";
import Breadcrumb from "@/components/Schema";

export const metadata = meta(
  "Admission Resources and Guides",
  "Guides on JAMB/UTME, O'Level requirements, CAPS, Post-UTME screening and university admission in Nigeria for 2027 aspirants.",
  "/resources",
  { keywords: ["JAMB guides", "admission guides Nigeria", "UTME preparation"] },
);

const formatDate = (iso: string) =>
  new Date(iso).toLocaleDateString("en-NG", { day: "numeric", month: "short", year: "numeric" });

export default function Resources() {
  return (
    <>
      <Breadcrumb items={[{ name: "Resources", path: "/resources" }]} />
      <PageHero eyebrow="Resources" title="Admission resources">
        Plain-English guides for aspirants. For official dates and policies, always check JAMB and your chosen
        institution.
      </PageHero>

      <section className="py-14">
        <Container>
          <p className="max-w-3xl text-lg leading-relaxed text-slate-700">
            Everything here is written for students and parents in Nigeria working through the admission process: how
            the UTME fits together with Post-UTME screening, what CAPS does with your O&apos;Level results, why a subject
            combination can disqualify a strong candidate, and how to read a cut-off mark without being misled by it.
          </p>

          <div className="mt-10 grid gap-5 md:grid-cols-2">
            {posts.map((p) => (
              <article key={p.slug} className="flex flex-col rounded-md border border-slate-200 p-6">
                <div className="flex flex-wrap items-center gap-x-3 gap-y-1 text-xs text-slate-600">
                  <span className="rounded-full bg-navy-light px-2.5 py-1 font-bold text-navy">{p.tag}</span>
                  <time dateTime={p.updated}>{formatDate(p.updated)}</time>
                  <span aria-hidden="true">·</span>
                  <span>{p.readingMinutes} min read</span>
                </div>
                <h2 className="mt-3 text-xl font-bold">
                  <Link href={`/resources/${p.slug}`} className="hover:underline">
                    {p.h1}
                  </Link>
                </h2>
                <p className="mt-2 flex-1 text-slate-700">{p.excerpt}</p>
                <Link
                  href={`/resources/${p.slug}`}
                  className="mt-4 inline-flex min-h-11 items-center font-bold text-navy underline"
                >
                  Read the guide
                  <span className="sr-only"> — {p.h1}</span>
                </Link>
              </article>
            ))}
          </div>
        </Container>
      </section>

      <WaBand title="Want this explained for your own case?" text="Send us your course, school and score." />
    </>
  );
}
