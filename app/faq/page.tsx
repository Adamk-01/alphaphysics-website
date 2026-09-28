import { meta } from "@/lib/seo";
import { PageHero, Container, WaBand } from "@/components/ui";
import FaqAccordion from "@/components/FaqAccordion";
export const metadata = meta("FAQ | ALPHAPHYSICS EDU CONSULT", "Answers to common questions about JAMB/UTME, admission, O'Level requirements and the ALPHAPHYSICS 2027 Aspirants Community.", "/faq");

const faqs = [
  { q: "What is ALPHAPHYSICS EDU CONSULT?", a: "ALPHAPHYSICS EDU CONSULT is an independent education and admission support service. We help students and prospective undergraduates understand JAMB/UTME, admission processes, O'Level requirements, school information and more. We are not JAMB and do not represent any school or government body." },
  { q: "How do I join the 2027 Aspirants Community?", a: "Click the \"Join 2027 Aspirants\" button on any page or visit our 2027 Aspirants page. You will be taken to our WhatsApp group where you can connect with other aspirants and receive useful admission updates." },
  { q: "When does JAMB registration start?", a: "JAMB announces registration dates each year through their official channels. We do not have advance information about dates. We will share the official announcement in our community once it is released. Always confirm dates from JAMB directly." },
  { q: "How much is the JAMB registration fee?", a: "JAMB sets and announces the registration fee each year. Check the JAMB official website or our community for the latest confirmed information. Be cautious of unofficial sources that post unconfirmed fees." },
  { q: "What subjects should I register for JAMB?", a: "Your subject combination depends on the course you want to study. Different courses require different subjects. Check JAMB's approved subject combinations for your chosen course, or ask us for guidance." },
  { q: "What O'Level results do I need for admission?", a: "Most universities require at least five O'Level credits including English Language and usually Mathematics. However, the specific subjects depend on your course and school. Always verify requirements with your chosen institution." },
  { q: "Do you help with school selection?", a: "Yes. We provide general information on schools, courses and admission requirements to help you compare your options. We can also discuss your situation in a one-on-one consultation." },
  { q: "Is your service free?", a: "Joining the 2027 Aspirants Community on WhatsApp is free. For personalised one-on-one consultation and specific guidance, please contact us to discuss." },
  { q: "How can I contact ALPHAPHYSICS EDU CONSULT?", a: "You can reach us on WhatsApp at 08023836040, call us directly, or send an email to alphaphysicseduconsult@gmail.com. You can also use the contact form on our Contact page." },
  { q: "Can parents/guardians also join the community?", a: "Absolutely. Parents and guardians who want to understand the admission process and support their children are welcome in the community." },
  { q: "Do you guarantee admission?", a: "No. No one can guarantee admission. We provide guidance, information and support to help you understand the process and make better decisions. Admission is determined by the schools and JAMB, not by any consultancy." },
  { q: "How do I know if information you share is accurate?", a: "We base our guidance on publicly available official information and clearly state when something is our own advice. We always encourage you to verify important details from official sources like JAMB and your chosen school." },
];

export default function Faq() {
  return (<>
    <PageHero eyebrow="FAQ" title="Frequently Asked Questions">Common questions about JAMB, admission, and our services.</PageHero>
    <section className="py-14"><Container className="max-w-3xl">
      <FaqAccordion faqs={faqs} />
    </Container></section>
    <WaBand title="Still have questions?" text="We're happy to help." />
  </>);
}
