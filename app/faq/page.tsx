import Link from "next/link";
import { meta } from "@/lib/seo";
import { PageHero, Container, WaBand } from "@/components/ui";
import FaqAccordion from "@/components/FaqAccordion";
import Breadcrumb, { FaqLd } from "@/components/Schema";

export const metadata = meta(
  "FAQ: JAMB, Admission & O'Level",
  "Answers to common questions about JAMB/UTME, admission requirements, cut-off marks, CAPS and the ALPHAPHYSICS 2027 Aspirants Community.",
  "/faq",
  { keywords: ["JAMB FAQ", "admission questions", "cut off mark questions"] },
);

const faqs = [
  {
    q: "What is ALPHAPHYSICS EDU CONSULT?",
    a: "ALPHAPHYSICS EDU CONSULT is an independent education and admission support service based in Lagos, Nigeria. We help students and prospective undergraduates understand JAMB/UTME, admission processes, O'Level requirements and school information, and we handle the paperwork that goes with them. We are not JAMB and do not represent any school or government body.",
  },
  {
    q: "How do I join the 2027 Aspirants Community?",
    a: "Click the 'Join 2027 Aspirants' button on any page or visit our 2027 Aspirants page. You will be taken to our WhatsApp group where you can connect with other aspirants and receive useful admission updates.",
  },
  {
    q: "When does JAMB registration start?",
    a: "JAMB announces registration dates each year through its official channels, and the date moves between cycles. We do not publish guessed dates. We share the official announcement in our community as soon as it is released, and you should always confirm the date on JAMB's own website before acting.",
  },
  {
    q: "How much is the JAMB registration fee?",
    a: "JAMB sets and announces the registration fee each cycle. Check the official JAMB website for the current figure, and be cautious of any site quoting a fee without linking to JAMB. We do not state fees here because a stale number is worse than no number.",
  },
  {
    q: "What subjects should I register for in JAMB?",
    a: "Your subject combination depends on the course you want to study. Different courses require different subjects: Medicine typically needs English, Biology, Chemistry and Physics, while Law needs English, Literature in English and two Arts or Social Science subjects. Check the JAMB brochure for your exact course, or read our guide on subject combinations.",
  },
  {
    q: "What O'Level results do I need for admission?",
    a: "Most universities require at least five credit passes including English Language, and many courses also require Mathematics, obtained in not more than two sittings. The specific subjects depend on your course and school, and some competitive programmes ask for a single sitting.",
  },
  {
    q: "What is the difference between a cut-off mark and the JAMB minimum?",
    a: "JAMB announces a national minimum each cycle, which is a floor for admission. Institutions then set their own institutional minimum, and departments set a further requirement for competitive courses. The number that matters for your course is the departmental one, and it is published by the institution.",
  },
  {
    q: "Do you help with school selection?",
    a: "Yes. We provide general information on schools, courses and admission requirements to help you compare your options, and we will tell you when a course is realistically out of reach for your score. For a detailed discussion of your own situation, a one-on-one consultation is the right step.",
  },
  {
    q: "Is your service free?",
    a: "Joining the 2027 Aspirants Community on WhatsApp is free, and so is reading every guide on this site. Specific processing work, such as a CAPS upload, an application or a correction, carries a service fee, and you will be told the cost before any work starts.",
  },
  {
    q: "Can you guarantee admission?",
    a: "No. Nobody can. Admission is decided by institutions through JAMB's CAPS system, and we have no influence over it. What we can do is make sure your paperwork, subject combination and profile are correct so that a place you have earned is not lost to an avoidable error.",
  },
  {
    q: "How can I contact ALPHAPHYSICS EDU CONSULT?",
    a: "Message us on WhatsApp at 08023836040, call the same number, email alphaphysicseduconsult@gmail.com, or use the contact form on our Contact page. We usually reply the same day.",
  },
  {
    q: "Can parents or guardians join the community?",
    a: "Yes. Parents and guardians who want to understand the admission process and support their children are welcome, and we often deal with parents directly on document and application work.",
  },
  {
    q: "How do I know if the information you share is accurate?",
    a: "We base our guidance on publicly available official information, we date every article and show when it was last updated, and we say plainly when something is general advice rather than an official announcement. We also tell you where to verify it yourself. If you spot something out of date, tell us and we will correct it.",
  },
];

export default function Faq() {
  return (
    <>
      <Breadcrumb items={[{ name: "FAQ", path: "/faq" }]} />
      <PageHero eyebrow="FAQ" title="Frequently asked questions">
        Common questions about JAMB, admission, O&apos;Level requirements and our services.
      </PageHero>

      <section className="py-14">
        <Container className="max-w-3xl">
          <FaqAccordion faqs={faqs} />
          <p className="mt-8 rounded-md border-l-4 border-gold bg-navy-light p-4 text-sm leading-relaxed text-slate-700">
            Can&apos;t see your question? Read our{" "}
            <Link href="/admission" className="font-bold text-navy underline">
              admission guide
            </Link>{" "}
            or{" "}
            <Link href="/resources" className="font-bold text-navy underline">
              browse the resources
            </Link>
            , or just ask us directly.
          </p>
        </Container>
      </section>

      <WaBand title="Still have questions?" text="We are happy to help." extra="No obligation, and no pressure to buy anything." />
      <FaqLd faqs={faqs} />
    </>
  );
}
