import { notFound } from "next/navigation";
import { meta } from "@/lib/seo";
import { posts } from "@/lib/posts";
import { PageHero, Container, WaBand } from "@/components/ui";
export const dynamicParams = false;
export const generateStaticParams = () => posts.map((p) => ({ slug: p.slug }));
export function generateMetadata({ params }: { params: { slug: string } }) {
  const p = posts.find((x) => x.slug === params.slug);
  return p ? meta(p.title, p.excerpt, `/resources/${p.slug}`) : {};
}
export default function Post({ params }: { params: { slug: string } }) {
  const p = posts.find((x) => x.slug === params.slug);
  if (!p) notFound();
  return (<>
    <PageHero eyebrow="Resources" title={p.title} />
    <article className="py-14"><Container className="max-w-3xl space-y-6">
      <p className="rounded-md bg-navy-light p-4 text-sm text-slate-700">This is general educational guidance, not an official announcement. Confirm current dates and policies with official sources.</p>
      {p.sections.map((s) => <div key={s.h}><h2 className="text-2xl font-bold">{s.h}</h2><p className="mt-2 text-lg text-slate-700">{s.p}</p></div>)}
    </Container></article>
    <WaBand />
  </>);
}
