import { notFound } from "next/navigation";
import { meta } from "@/lib/seo";
import { services } from "@/lib/site";
import { PageHero, Container, WaBtn, JoinBtn, WaBand } from "@/components/ui";
export const dynamicParams = false;
export const generateStaticParams = () => services.map((s) => ({ slug: s.slug }));
export function generateMetadata({ params }: { params: { slug: string } }) {
  const s = services.find((x) => x.slug === params.slug);
  return s ? meta(`${s.title} in Nigeria`, s.short, `/services/${s.slug}`) : {};
}
export default function ServicePage({ params }: { params: { slug: string } }) {
  const s = services.find((x) => x.slug === params.slug);
  if (!s) notFound();
  return (<>
    <PageHero eyebrow="Service" title={s.title}>{s.short}</PageHero>
    <section className="py-14"><Container className="max-w-3xl space-y-8">
      <div><h2 className="text-2xl font-bold">What it is</h2><p className="mt-2 text-lg text-slate-700">{s.what}</p></div>
      <div><h2 className="text-2xl font-bold">Who it is for</h2><p className="mt-2 text-lg text-slate-700">{s.who}</p></div>
      <div><h2 className="text-2xl font-bold">How ALPHAPHYSICS can help</h2>
        <ul className="mt-2 list-disc space-y-2 pl-5 text-lg text-slate-700">{s.help.map((h) => <li key={h}>{h}</li>)}</ul></div>
      <div className="flex flex-col gap-3 sm:flex-row"><WaBtn msg={s.msg} /><JoinBtn variant="navy" /></div>
    </Container></section>
    <WaBand msg={s.msg} />
  </>);
}
