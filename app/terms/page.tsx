import Link from "next/link";
import { meta } from "@/lib/seo";
import { site } from "@/lib/site";
import { Container, PageHero } from "@/components/ui";
import Breadcrumb from "@/components/Schema";

export const metadata = meta(
  "Terms of Service",
  "The terms that apply when you use the ALPHAPHYSICS EDU CONSULT website and the services we provide.",
  "/terms",
  { keywords: ["terms of service", "terms and conditions"] },
);

export default function Terms() {
  return (
    <>
      <Breadcrumb items={[{ name: "Terms of Service", path: "/terms" }]} />
      <PageHero eyebrow="Legal" title="Terms of Service">
        What you can expect from us, and what we cannot promise.
      </PageHero>

      <section className="py-14">
        <Container className="max-w-3xl space-y-8 leading-relaxed text-slate-700">
          <p className="text-sm text-slate-600">
            Last updated: <time dateTime="2026-10-23">23 October 2026</time>
          </p>

          <div>
            <h2 className="text-2xl font-bold">1. Who these terms cover</h2>
            <p className="mt-3">
              These terms apply to your use of this website and to any service you ask {site.name} to carry out. By using
              the site or asking us to act for you, you accept them.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-bold">2. We are an independent consultancy</h2>
            <p className="mt-3">
              {site.name} is a private education and admission support service. We are not JAMB, WAEC, NECO, NABTEB,
              NIMC, any university, polytechnic, college of education or government agency, and we do not act on behalf
              of any of them. Any information we pass on about their processes is general guidance, not an official
              statement from them.
            </p>
            <p className="mt-3">
              In particular, we are not a licensed National Identification Number (NIN) enrolment agent and we do not
              carry out NIN enrolment, NIN modification, NIN slip printing or National ID card processing. Those
              services are provided by NIMC and its licensed agents. We can tell you whether a mismatch between your
              records is likely to affect your JAMB registration, and point you to NIMC, but the correction itself is
              yours to complete with them.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-bold">3. No guarantee of admission or results</h2>
            <p className="mt-3">
              We do not sell admission, and we cannot influence an admission decision, a merit list, a screening score or
              an exam result. Those decisions belong to JAMB and the institutions concerned. Anyone who tells you
              otherwise, including anyone claiming to act on our behalf, is not acting with our authority.
            </p>
            <p className="mt-3">
              What we do promise is that the work we agree with you will be carried out properly, on the official
              portals, using the details you provide.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-bold">4. Information on this website</h2>
            <p className="mt-3">
              Our guides are written to be useful, but admission rules, fees, dates and cut-off marks change every cycle.
              Everything on this site is general information as at the date shown on the page. It is not official and it
              may be out of date. Always confirm the current position with JAMB and your chosen institution before you act
              on it.
            </p>
            <p className="mt-3">
              Cut-off marks shown in our checker are clearly labelled as indicative figures compiled from previous
              admission cycles. They are not predictions and not official publications.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-bold">5. Your responsibilities</h2>
            <ul className="mt-3 list-disc space-y-2 pl-5">
              <li>Give us accurate and complete information, and tell us promptly if anything changes.</li>
              <li>Check any document we produce before you submit it to an institution.</li>
              <li>Meet the deadlines set by JAMB and by the institution you are applying to.</li>
              <li>Keep your own copies of receipts, slips and printouts.</li>
            </ul>
          </div>

          <div>
            <h2 className="text-2xl font-bold">6. Fees</h2>
            <p className="mt-3">
              We will tell you what a service costs and how long it is expected to take before work begins. Fees charged
              by JAMB, NIMC, WAEC, NECO or an institution are separate from our own service fee and are set by them, not
              by us. Portal or institution fees are generally non-refundable once paid, because they are paid to a third
              party.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-bold">7. Limitation of liability</h2>
            <p className="mt-3">
              We are responsible for carrying out the service we agreed with you with reasonable care. We are not
              responsible for losses caused by things outside our control, including portal downtime, changes to official
              rules, delays at a government agency or institution, incorrect information supplied to us, or a missed
              deadline that was not ours to meet.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-bold">8. Intellectual property</h2>
            <p className="mt-3">
              The text, design and guides on this website belong to {site.name}. You may read, print and share them for
              personal, non-commercial use with a link back to this site. Please do not republish them as your own or use
              them commercially without written permission.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-bold">9. Third-party links and advertising</h2>
            <p className="mt-3">
              This site links to external websites, including WhatsApp and official portals, and displays advertising
              served by Google. We do not control those third parties and are not responsible for their content, accuracy
              or practices.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-bold">10. Privacy</h2>
            <p className="mt-3">
              How we handle your personal data is set out in our{" "}
              <Link href="/privacy" className="font-semibold text-navy underline">
                Privacy Policy
              </Link>
              , which forms part of these terms.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-bold">11. Governing law and changes</h2>
            <p className="mt-3">
              These terms are governed by the laws of the Federal Republic of Nigeria, and disputes will be handled by
              the courts of Lagos State. We may update these terms from time to time; the date at the top of the page
              shows when they last changed.
            </p>
            <p className="mt-3">
              Questions about these terms? Email{" "}
              <a href={`mailto:${site.email}`} className="font-semibold text-navy underline">
                {site.email}
              </a>
              .
            </p>
          </div>
        </Container>
      </section>
    </>
  );
}
