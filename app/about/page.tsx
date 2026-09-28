import { meta } from "@/lib/seo";
import { PageHero, Container, WaBand } from "@/components/ui";
export const metadata = meta("About ALPHAPHYSICS EDU CONSULT", "Learn about ALPHAPHYSICS EDU CONSULT, an education and admission support service helping Nigerian students understand JAMB/UTME and admission.", "/about");
export default function About() {
  return (<>
    <PageHero eyebrow="About us" title="About ALPHAPHYSICS EDU CONSULT" />
    <section className="py-14"><Container className="max-w-3xl space-y-5 text-lg text-slate-700">
      <p>ALPHAPHYSICS EDU CONSULT is an education and admission support service dedicated to helping students and prospective undergraduates better understand important stages of their educational and admission journey.</p>
      <p>We provide guidance relating to JAMB/UTME, admission processes, O'Level requirements, admission forms, school information and one-on-one educational consultation.</p>
      <p>Our goal is to make admission information easier to understand and help students make informed decisions throughout their admission journey.</p>
      <p className="rounded-md bg-navy-light p-4 text-base">Note: We are an independent education consultancy. We are not JAMB, and we do not represent any school or government body. Always confirm official dates and policies from official sources.</p>
    </Container></section>
    <WaBand />
  </>);
}
