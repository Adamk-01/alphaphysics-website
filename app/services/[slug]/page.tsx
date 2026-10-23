import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { meta } from "@/lib/seo";
import { services, wa, site } from "@/lib/site";
import { PageHero, Container, WaBtn, JoinBtn, WaBand, Icon } from "@/components/ui";
import Breadcrumb, { FaqLd, ServiceLd } from "@/components/Schema";

export const dynamicParams = false;
export const generateStaticParams = () => services.map((s) => ({ slug: s.slug }));

export function generateMetadata({ params }: { params: { slug: string } }): Metadata {
  const s = services.find((x) => x.slug === params.slug);
  if (!s) return {};
  return meta(`${s.title} in Nigeria`, s.seoDescription, `/services/${s.slug}`, { keywords: s.keywords });
}

export default function ServicePage({ params }: { params: { slug: string } }) {
  const s = services.find((x) => x.slug === params.slug);
  if (!s) notFound();

  const others = services.filter((x) => x.slug !== s.slug).slice(0, 3);
  const faqs = [
    {
      q: `What does ${s.title.toLowerCase()} cost?`,
      a: `Our service fee is confirmed with you before any work starts, and it is separate from fees charged by JAMB, NIMC, WAEC or the institution. Message us with your specific case and we will give you a figure rather than a range.`,
    },
    {
      q: `How long does ${s.title.toLowerCase()} take?`,
      a: `Most tasks are completed the same day where the official portal cooperates. Anything that depends on a third party, such as a NIMC correction or an institution's processing, takes as long as that body takes — we will tell you which category your job falls into.`,
    },
    {
      q: `Do you need my original documents?`,
      a: `Usually not. Most services need clear photos or scans, which you can send through the channel we specify. Originals are only requested where an institution requires physical sight of them, and they are returned to you.`,
    },
    {
      q: `Can you guarantee the outcome?`,
      a: `No. We carry out the work correctly on the official portal, but the decision itself belongs to JAMB, NIMC or the institution. No consultancy can promise an admission or a specific result.`,
    },
  ];

  return (
    <>
      <Breadcrumb items={[{ name: "Services", path: "/services" }, { name: s.title, path: `/services/${s.slug}` }]} />
      <PageHero eyebrow="Service" title={s.title}>
        {s.short}
      </PageHero>

      <section className="py-14">
        <Container className="max-w-3xl space-y-10">
          <div className="flex items-start gap-4">
            <Icon name={s.icon} />
            <p className="text-lg leading-relaxed text-slate-700">{s.what}</p>
          </div>

          <div>
            <h2 className="text-2xl font-bold">Who this is for</h2>
            <p className="mt-2 text-lg leading-relaxed text-slate-700">{s.who}</p>
          </div>

          <div>
            <h2 className="text-2xl font-bold">What we handle</h2>
            <ul className="mt-3 space-y-2">
              {s.help.map((h) => (
                <li key={h} className="flex items-start gap-3 text-lg text-slate-700">
                  <svg
                    aria-hidden="true"
                    viewBox="0 0 24 24"
                    className="mt-1.5 h-5 w-5 shrink-0 text-brand-green"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M20 6L9 17l-5-5" />
                  </svg>
                  <span>{h}</span>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h2 className="text-2xl font-bold">How it works</h2>
            <ol className="mt-3 space-y-3 text-lg text-slate-700">
              <li>
                <strong className="text-navy">1. Tell us your situation.</strong> Course, school, what you have already
                done, and what is not working.
              </li>
              <li>
                <strong className="text-navy">2. We confirm what is possible.</strong> Including when the honest answer
                is that you do not need this service.
              </li>
              <li>
                <strong className="text-navy">3. You approve the cost.</strong> No work starts before you know the price
                and the expected turnaround.
              </li>
              <li>
                <strong className="text-navy">4. We do the work and hand you the proof.</strong> Receipts, slips and
                printouts belong to you.
              </li>
            </ol>
          </div>

          <div className="flex flex-col gap-3 sm:flex-row">
            <WaBtn msg={s.msg} label="Ask on WhatsApp" />
            <JoinBtn variant="outlineNavy" />
          </div>

          <div className="rounded-md border-l-4 border-gold bg-navy-light p-4 text-sm leading-relaxed text-slate-700">
            {site.name} is an independent consultancy. We are not JAMB, NIMC, WAEC, NECO or any institution, and we do
            not guarantee an admission or a specific result.
          </div>

          <div>
            <h2 className="text-2xl font-bold">Questions about this service</h2>
            <dl className="mt-4 divide-y divide-slate-200 border-y border-slate-200">
              {faqs.map((f) => (
                <div key={f.q} className="py-4">
                  <dt className="font-bold text-navy">{f.q}</dt>
                  <dd className="mt-1 leading-relaxed text-slate-700">{f.a}</dd>
                </div>
              ))}
            </dl>
          </div>

          <div>
            <h2 className="text-2xl font-bold">Other services</h2>
            <ul className="mt-3 space-y-2">
              {others.map((o) => (
                <li key={o.slug}>
                  <Link href={`/services/${o.slug}`} className="font-semibold text-navy underline hover:text-gold-dark">
                    {o.title}
                  </Link>
                  <span className="text-slate-600"> — {o.short}</span>
                </li>
              ))}
            </ul>
          </div>
        </Container>
      </section>

      <WaBand msg={s.msg} title="Ready when you are" text={`Talk to us about ${s.title.toLowerCase()}.`} />
      <ServiceLd name={s.title} description={s.short} path={`/services/${s.slug}`} slug={s.slug} />
      <FaqLd faqs={faqs} />
    </>
  );
}
