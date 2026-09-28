import Link from "next/link";
import { meta } from "@/lib/seo";
import { posts } from "@/lib/posts";
import { PageHero, Container, WaBand } from "@/components/ui";
export const metadata = meta("Admission Resources: JAMB, UTME & University Admission", "General guides on JAMB/UTME, O'Level requirements and university admission in Nigeria for 2027 aspirants.", "/resources");
export default function Resources() {
  return (<>
    <PageHero eyebrow="Resources" title="Admission resources">General guidance for aspirants. For official dates and policies, always check official announcements.</PageHero>
    <section className="py-14"><Container className="grid gap-5 md:grid-cols-2">
      {posts.map((p) => (<article key={p.slug} className="rounded-md border border-slate-200 p-6">
        <h2 className="text-xl font-bold"><Link href={`/resources/${p.slug}`} className="hover:underline">{p.title}</Link></h2>
        <p className="mt-2 text-slate-600">{p.excerpt}</p></article>))}
    </Container></section>
    <WaBand />
  </>);
}
