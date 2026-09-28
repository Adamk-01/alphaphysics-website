import Image from "next/image";
import Link from "next/link";
import { meta } from "@/lib/seo";
import { services, MSG } from "@/lib/site";
import { posts } from "@/lib/posts";
import { Container, Heading, Icon, JoinBtn, WaBtn, WaBand, Btn } from "@/components/ui";
import Testimonials from "@/components/Testimonials";

export const metadata = meta("ALPHAPHYSICS EDU CONSULT | Admission & JAMB/UTME Guidance in Nigeria",
  "Practical admission guidance, JAMB/UTME support, O'Level support and school information for Nigerian students. Join the 2027 Aspirants Community.", "/");

const why = [["Practical Guidance", "Clear explanations you can act on."], ["Admission Information", "General information on schools, courses and requirements."],
  ["One-on-One Support", "Advice for your own situation."], ["Aspirant Community", "Stay connected with other 2027 aspirants."],
  ["Educational Updates", "Useful reminders and information."], ["Student-Focused Service", "Simple English for students and parents."]];
const steps = ["Tell us what you need", "Get guidance", "Understand your options", "Take the next step"];

export default function Home() {
  return (
    <>
      <section className="bg-navy py-12 sm:py-16">
        <Container className="grid items-center gap-10 md:grid-cols-2">
          <div>
            <p className="text-xs font-bold uppercase tracking-[.18em] text-gold">Your One-Stop Admission &amp; Education Hub</p>
            <h1 className="mt-3 text-4xl font-bold uppercase leading-tight !text-white sm:text-5xl">Your Admission Journey Starts Here</h1>
            <p className="mt-4 text-lg text-blue-100">Practical admission guidance, JAMB/UTME support and educational information for students and prospective undergraduates.</p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row"><JoinBtn label="Join 2027 Aspirants" /><WaBtn label="Chat on WhatsApp" variant="outline" /></div>
            <p className="mt-4 text-sm text-blue-200">Stay informed. Stay prepared.</p>
          </div>
          <div className="mx-auto w-full max-w-md border-4 border-gold bg-white p-2">
            <Image src="/2027-flyer.png" alt="ALPHAPHYSICS EDU CONSULT 2027 Aspirants flyer with a smiling student holding books" width={1254} height={1254} priority sizes="(min-width:768px) 448px, 90vw" className="h-auto w-full" />
          </div>
        </Container>
      </section>

      <section className="py-14"><Container className="grid items-center gap-8 md:grid-cols-[auto_1fr]">
        <Image src="/logo.jpg" alt="ALPHAPHYSICS EDU CONSULT official logo" width={160} height={160} loading="lazy" className="h-32 w-32 rounded-full border border-slate-200" />
        <div><h2 className="text-2xl font-bold sm:text-3xl">Who we are</h2>
          <p className="mt-3 max-w-3xl text-slate-600">ALPHAPHYSICS EDU CONSULT is an education and admission support service helping students and prospective undergraduates understand important stages of their admission journey, from JAMB/UTME to O'Level requirements and school information.</p>
          <p className="mt-3"><Link href="/about" className="font-bold text-navy underline">About us</Link></p></div>
      </Container></section>

      <section className="bg-slate-50 py-14"><Container>
        <Heading eyebrow="Our Services" title="Get the information and guidance you need" />
        <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((s) => (
            <article key={s.slug} className="flex flex-col rounded-md border border-slate-200 bg-white p-6">
              <Icon name={s.icon} /><h3 className="mt-4 text-xl font-bold">{s.title}</h3>
              <p className="mt-2 flex-1 text-slate-600">{s.short}</p>
              <Link href={`/services/${s.slug}`} className="mt-4 inline-flex min-h-11 items-center font-bold text-navy underline">Learn more</Link>
            </article>))}
        </div>
      </Container></section>

      <section className="border-y-4 border-gold bg-brand-green py-14 text-white"><Container className="grid items-center gap-8 md:grid-cols-[1.4fr_1fr]">
        <div>
          <h2 className="text-3xl font-bold uppercase leading-tight !text-white sm:text-4xl">2027 Aspirants — Get ready for your admission journey</h2>
          <p className="mt-4 text-green-50">Preparing for the 2027 admission cycle? Join the ALPHAPHYSICS 2027 Aspirants Community for useful admission information, guidance, JAMB/UTME support, school information and educational opportunities.</p>
          <div className="mt-6 flex flex-col gap-3 sm:flex-row"><JoinBtn label="Join the 2027 Aspirants Group" /><Btn href="/2027-aspirants" variant="outline">Learn more</Btn></div>
        </div>
        <p className="font-serif text-6xl font-bold text-gold sm:text-8xl">2027</p>
      </Container></section>

      <section className="py-14"><Container>
        <Heading eyebrow="Why ALPHAPHYSICS" title="Simple, honest support" />
        <div className="mt-8 grid gap-x-8 gap-y-6 sm:grid-cols-2 lg:grid-cols-3">
          {why.map(([t, d]) => <div key={t} className="border-l-4 border-gold pl-4"><h3 className="text-lg font-bold">{t}</h3><p className="mt-1 text-slate-600">{d}</p></div>)}
        </div>
      </Container></section>

      <Testimonials />

      <section className="bg-navy-light py-14"><Container>
        <Heading eyebrow="How it works" title="Four simple steps" />
        <ol className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {steps.map((s, i) => <li key={s} className="rounded-md bg-white p-6"><span className="font-serif text-4xl font-bold text-gold-dark">0{i + 1}</span><p className="mt-2 text-lg font-bold text-navy">{s}</p></li>)}
        </ol>
      </Container></section>

      <section className="py-14"><Container>
        <Heading eyebrow="Educational Resources" title="Admission information you can use" />
        <div className="mt-8 grid gap-5 md:grid-cols-3">
          {posts.slice(0, 3).map((p) => (
            <article key={p.slug} className="rounded-md border border-slate-200 p-6">
              <h3 className="text-lg font-bold"><Link href={`/resources/${p.slug}`} className="hover:underline">{p.title}</Link></h3>
              <p className="mt-2 text-slate-600">{p.excerpt}</p></article>))}
        </div>
        <p className="mt-6"><Link href="/resources" className="font-bold text-navy underline">All resources</Link></p>
      </Container></section>

      <WaBand />
    </>
  );
}
