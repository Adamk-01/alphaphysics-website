import Link from "next/link";
import { meta } from "@/lib/seo";
import { site } from "@/lib/site";
import { PageHero, Container, WaBand, Icon } from "@/components/ui";
import Breadcrumb from "@/components/Schema";

export const metadata = meta(
  "About Us: Independent Admission Support",
  "ALPHAPHYSICS EDU CONSULT is an independent education and admission support service in Lagos, Nigeria. Here is who we are and how we work.",
  "/about",
  {
    keywords: [
      "education consultant Lagos",
      "admission consultant Nigeria",
      "JAMB consultant",
      "about alphaphysics",
    ],
  },
);

const principles = [
  {
    icon: "check",
    title: "Official portals only",
    body: "Every registration, upload and correction we handle is carried out on JAMB's portal, the exam body's portal or the institution's own portal, using your details. You keep the receipts and the printouts. We do not carry out NIN enrolment or NIN modification — those are done by NIMC and its licensed agents.",
  },
  {
    icon: "compass",
    title: "We tell you when you do not need us",
    body: "A large part of the job is telling people what they can do themselves for free. We would rather lose a small fee than take money for a service that will not change your outcome.",
  },
  {
    icon: "book",
    title: "Information you can check",
    body: "We do not publish official dates, fees or cut-off marks as fact unless they come from an official announcement, and we point you to the source so you can verify it yourself.",
  },
  {
    icon: "users",
    title: "No guaranteed admission",
    body: "Admission is decided by institutions through JAMB CAPS, and we have no influence over it. Anyone who says otherwise, including anyone claiming to act for us, is not telling you the truth.",
  },
];

export default function About() {
  return (
    <>
      <Breadcrumb items={[{ name: "About", path: "/about" }]} />
      <PageHero eyebrow="About us" title="About ALPHAPHYSICS EDU CONSULT">
        An independent education and admission support service, based in Lagos and working with students across Nigeria.
      </PageHero>

      <section className="py-14">
        <Container className="max-w-3xl space-y-5 text-lg leading-relaxed text-slate-700">
          <h2 className="text-3xl font-bold">What we do</h2>
          <p>
            ALPHAPHYSICS EDU CONSULT helps students and prospective undergraduates understand and complete the admission
            process. In practice that means two things: explaining how the system works in plain English, and handling the
            paperwork that goes with it — JAMB registration and corrections, O&apos;Level uploads to CAPS, Post-UTME
            applications, and the documents institutions ask for at clearance.
          </p>
          <p>
            We work with candidates at every stage, from students who are still choosing a course to parents helping a
            child clear documents before resumption. Most of what we do is unglamorous and time-sensitive, which is
            exactly why it gets missed.
          </p>

          <h2 className="pt-4 text-3xl font-bold">How we work</h2>
          <div className="grid gap-4 sm:grid-cols-2">
            {principles.map((p) => (
              <div key={p.title} className="rounded-md border border-slate-200 p-5">
                <Icon name={p.icon} />
                <h3 className="mt-3 text-lg font-bold">{p.title}</h3>
                <p className="mt-1 text-base text-slate-700">{p.body}</p>
              </div>
            ))}
          </div>

          <h2 className="pt-4 text-3xl font-bold">What we are not</h2>
          <p>
            We are not JAMB, WAEC, NECO, NABTEB, NIMC or any school, and we do not represent any government body. We
            cannot admit you, influence a merit list, change a result or speed up a government agency. If a service you
            are offered promises any of those things, it is not a service — it is a risk.
          </p>

          <h2 className="pt-4 text-3xl font-bold">How our guides are written</h2>
          <p>
            Every article on this site is dated and shows when it was last updated. We describe the process as it
            generally works and we deliberately avoid stating exact dates, fees or cut-off marks as fact, because those
            change every cycle and a stale number causes real damage. Where we do publish a figure, such as the indicative
            cut-off marks in our checker, we label it as indicative and tell you where to confirm the official position.
          </p>
          <p>
            If you find something on this site that is out of date or wrong, tell us and we will correct it. That is not a
            formality: corrections are how a guide stays useful.
          </p>

          <h2 className="pt-4 text-3xl font-bold">Where we are</h2>
          <p>
            {site.address}. You can reach us on{" "}
            <a href={`tel:${site.phone}`} className="font-semibold text-navy underline">
              {site.phone}
            </a>{" "}
            or{" "}
            <a href={`mailto:${site.email}`} className="font-semibold text-navy underline">
              {site.email}
            </a>
            . Most enquiries are answered the same day.
          </p>
          <p>
            Read our{" "}
            <Link href="/privacy" className="font-semibold text-navy underline">
              Privacy Policy
            </Link>{" "}
            and{" "}
            <Link href="/terms" className="font-semibold text-navy underline">
              Terms of Service
            </Link>
            , or{" "}
            <Link href="/contact" className="font-semibold text-navy underline">
              get in touch
            </Link>
            .
          </p>
        </Container>
      </section>

      <WaBand title="Questions about how we work?" text="Ask us directly." extra="We answer plainly, including when the answer is no." />
    </>
  );
}
