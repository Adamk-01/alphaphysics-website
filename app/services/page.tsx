import Link from "next/link";
import { meta } from "@/lib/seo";
import { services } from "@/lib/site";
import { PageHero, Container, Icon, WaBtn, WaBand } from "@/components/ui";
export const metadata = meta("Our Services: JAMB, Admission, O'Level & Consultation", "JAMB/UTME support, admission guidance, O'Level support, admission forms, one-on-one consultation and school information for Nigerian students.", "/services");
export default function Services() {
  return (<>
    <PageHero eyebrow="Services" title="How ALPHAPHYSICS can help you">Guidance for every stage of your admission journey.</PageHero>
    <section className="py-14"><Container className="space-y-6">
      {services.map((s) => (
        <article key={s.slug} className="rounded-md border border-slate-200 p-6 sm:p-8">
          <div className="flex items-center gap-4"><Icon name={s.icon} /><h2 className="text-2xl font-bold"><Link href={`/services/${s.slug}`}>{s.title}</Link></h2></div>
          <dl className="mt-5 grid gap-4 md:grid-cols-3 text-slate-600">
            <div><dt className="font-bold text-navy">What it is</dt><dd>{s.what}</dd></div>
            <div><dt className="font-bold text-navy">Who it is for</dt><dd>{s.who}</dd></div>
            <div><dt className="font-bold text-navy">How we can help</dt><dd>{s.help.slice(0, 2).join(". ")}.</dd></div>
          </dl>
          <div className="mt-5"><WaBtn msg={s.msg} label="Ask on WhatsApp" /></div>
        </article>))}
    </Container></section>
    <WaBand />
  </>);
}
