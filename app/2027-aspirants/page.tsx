import Image from "next/image";
import { meta } from "@/lib/seo";
import { MSG } from "@/lib/site";
import { Container, Heading, JoinBtn, WaBtn } from "@/components/ui";
import CountdownTimer from "@/components/CountdownTimer";
export const metadata = meta("2027 Aspirants Community | JAMB/UTME & Admission Guidance", "Join the ALPHAPHYSICS 2027 Aspirants Community for admission information, JAMB/UTME guidance, school information and educational updates.", "/2027-aspirants");
const get = [["Admission Updates", "Useful admission-related information as it becomes available."], ["JAMB / UTME Guidance", "General guidance on the JAMB/UTME process."], ["School Information", "Information on schools, courses and requirements."],
  ["Admission Guidance", "Help understanding admission steps."], ["Educational Opportunities", "Opportunities that may help your education."], ["Useful Reminders", "Reminders so you do not miss important steps."]];
const who = ["2027 JAMB candidates", "Prospective university students", "Polytechnic aspirants", "College of Education aspirants", "Students preparing for admission", "Parents/guardians looking for admission information"];
export default function Aspirants() {
  return (<>
    <section className="border-b-4 border-gold bg-brand-green py-12 sm:py-16"><Container className="grid items-center gap-10 md:grid-cols-2">
      <div><p className="text-xs font-bold uppercase tracking-[.18em] text-gold">2027 Aspirants</p>
        <h1 className="mt-3 text-4xl font-bold leading-tight !text-white sm:text-5xl">2027 ASPIRANTS: Your Admission Journey Starts Here.</h1>
        <p className="mt-4 text-lg text-green-50">Preparing for the 2027 admission cycle? Join the ALPHAPHYSICS 2027 Aspirants Community and stay connected to useful admission information, guidance, JAMB/UTME support and educational updates.</p>
        <div className="mt-8"><JoinBtn label="Join the 2027 Aspirants Group" /></div></div>
      <div className="mx-auto w-full max-w-md border-4 border-gold bg-white p-2"><Image src="/2027-flyer.png" alt="2027 Aspirants flyer from ALPHAPHYSICS EDU CONSULT" width={1254} height={1254} priority sizes="(min-width:768px) 448px, 90vw" className="h-auto w-full" /></div>
    </Container></section>
    <section className="py-14"><Container><Heading eyebrow="What you get" title="Inside the community" />
      <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">{get.map(([t, d], i) => (
        <article key={t} className="rounded-md border border-slate-200 p-6"><span className="font-serif text-3xl font-bold text-gold-dark">0{i + 1}</span><h3 className="mt-1 text-xl font-bold">{t}</h3><p className="mt-2 text-slate-600">{d}</p></article>))}</div></Container></section>
    <section className="bg-slate-50 py-14"><Container><Heading eyebrow="Who is this for?" title="This community is for" />
      <ul className="mt-6 grid gap-3 sm:grid-cols-2">{who.map((w) => <li key={w} className="rounded-md border-l-4 border-gold bg-white p-4 font-semibold text-navy">{w}</li>)}</ul></Container></section>
    <section className="py-14"><Container><Heading eyebrow="Updates" title="Live Updates & Deadlines" />
      <div className="mt-8 grid gap-8 md:grid-cols-[1fr_300px]">
        <div className="space-y-4">
          <div className="rounded-md border-l-4 border-gold bg-brand-green/10 p-5">
            <h3 className="font-bold text-navy">2027 JAMB Registration</h3>
            <p className="mt-1 text-slate-700">Official dates have not been announced yet. Stay in the group to get the exact dates once JAMB releases them.</p>
          </div>
          <div className="rounded-md border border-slate-200 bg-white p-5">
            <h3 className="font-bold text-navy">Expected UTME Window</h3>
            <p className="mt-1 text-slate-700">Usually between April and May. Start your preparation early.</p>
          </div>
        </div>
        <div>
          {/* Using a dummy target date, you can change this when JAMB announces the real date */}
          <CountdownTimer targetDate="2027-01-15T00:00:00" title="Estimated Days to Registration" />
        </div>
      </div>
    </Container></section>
    <section className="bg-navy py-14 text-center"><Container>
      <h2 className="text-3xl font-bold uppercase !text-white sm:text-4xl">Don't navigate your admission journey alone.</h2>
      <p className="mt-3 text-blue-100">Join the 2027 Aspirants Community. WhatsApp: 08023836040</p>
      <div className="mt-6 flex flex-col justify-center gap-3 sm:flex-row"><JoinBtn label="Join the 2027 Aspirants Group" /><WaBtn msg={MSG.aspirants} variant="outline" /></div></Container></section>
  </>);
}
