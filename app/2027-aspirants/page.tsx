import Image from "next/image";
import Link from "next/link";
import { meta } from "@/lib/seo";
import { MSG, site } from "@/lib/site";
import { Container, Heading, JoinBtn, WaBtn } from "@/components/ui";
import CountdownTimer from "@/components/CountdownTimer";
import Breadcrumb from "@/components/Schema";

export const metadata = meta(
  "2027 Aspirants Community",
  "Join the ALPHAPHYSICS 2027 Aspirants Community for admission information, JAMB/UTME guidance, school information and educational updates.",
  "/2027-aspirants",
  { keywords: ["2027 aspirants", "JAMB 2027 group", "2027 UTME", "admission community Nigeria"] },
);

const get = [
  ["Admission updates", "Admission-related information as it is officially released, without the rumour."],
  ["JAMB / UTME guidance", "Plain-English explanations of the registration and exam process."],
  ["School information", "Requirements, subject combinations and cut-off guidance for schools and courses."],
  ["Admission guidance", "Help understanding which stage of the process you are at."],
  ["Educational opportunities", "Scholarships, programmes and opportunities worth knowing about."],
  ["Useful reminders", "Reminders for deadlines so you do not miss a step."],
];

const who = [
  "2027 JAMB candidates",
  "Prospective university students",
  "Polytechnic aspirants",
  "College of Education aspirants",
  "Students preparing for admission",
  "Parents and guardians looking for admission information",
];

export default function Aspirants() {
  return (
    <>
      <Breadcrumb items={[{ name: "2027 Aspirants", path: "/2027-aspirants" }]} />

      <section className="border-b-4 border-gold bg-brand-green py-12 sm:py-16">
        <Container className="grid items-center gap-10 md:grid-cols-2">
          <div>
            <p className="text-xs font-bold uppercase tracking-[.18em] text-gold">2027 Aspirants</p>
            <h1 className="mt-3 text-4xl font-bold leading-tight !text-white sm:text-5xl">
              2027 Aspirants: your admission journey starts here
            </h1>
            <p className="mt-4 text-lg text-green-50">
              Join the ALPHAPHYSICS 2027 Aspirants Community and stay connected to admission information, JAMB/UTME
              guidance, school information and educational updates.
            </p>
            <div className="mt-8">
              <JoinBtn label="Join the 2027 Aspirants Group" srSuffix="(opens WhatsApp group)" />
            </div>
            <p className="mt-4 text-sm text-green-50">
              Free to join. You can leave at any time. We do not sell your details.
            </p>
          </div>
          <div className="mx-auto w-full max-w-md border-4 border-gold bg-white p-2">
            <Image
              src="/2027-flyer.png"
              alt="2027 Aspirants flyer from ALPHAPHYSICS EDU CONSULT"
              width={1254}
              height={1254}
              priority
              sizes="(min-width:768px) 448px, 90vw"
              className="h-auto w-full"
            />
          </div>
        </Container>
      </section>

      <section className="py-14">
        <Container>
          <Heading eyebrow="What you get" title="Inside the community" />
          <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {get.map(([t, d], i) => (
              <article key={t} className="rounded-md border border-slate-200 p-6">
                <span className="font-serif text-3xl font-bold text-gold-dark">0{i + 1}</span>
                <h3 className="mt-1 text-xl font-bold">{t}</h3>
                <p className="mt-2 text-slate-700">{d}</p>
              </article>
            ))}
          </div>
        </Container>
      </section>

      <section className="bg-slate-50 py-14">
        <Container>
          <Heading eyebrow="Who is this for?" title="This community is for" />
          <ul className="mt-6 grid gap-3 sm:grid-cols-2">
            {who.map((w) => (
              <li key={w} className="rounded-md border-l-4 border-gold bg-white p-4 font-semibold text-navy">
                {w}
              </li>
            ))}
          </ul>
        </Container>
      </section>

      <section className="py-14">
        <Container>
          <Heading eyebrow="Updates" title="Dates and deadlines">
            We publish official announcements, not guesses. If JAMB has not announced something, this page will say so.
          </Heading>
          <div className="mt-8 grid gap-8 md:grid-cols-[1fr_320px]">
            <div className="space-y-4">
              <div className="rounded-md border-l-4 border-gold bg-brand-green/10 p-5">
                <h3 className="font-bold text-navy">2027 JAMB registration</h3>
                <p className="mt-1 text-slate-700">
                  Official dates have not been announced yet. When JAMB releases them, the exact dates will be posted in
                  the group and added to this page. Confirm them on JAMB&apos;s official website before you pay anything.
                </p>
              </div>
              <div className="rounded-md border border-slate-200 bg-white p-5">
                <h3 className="font-bold text-navy">Expected UTME window</h3>
                <p className="mt-1 text-slate-700">
                  In recent cycles the UTME has been held between April and May. That is a pattern, not an announcement —
                  treat it as a reason to start preparing early, not as a date to plan around.
                </p>
              </div>
              <div className="rounded-md border border-slate-200 bg-white p-5">
                <h3 className="font-bold text-navy">What you can do now</h3>
                <p className="mt-1 text-slate-700">
                  Settle your course and subject combination, check your O&apos;Level position and make sure your NIN
                  details match the name you will register with.{" "}
                  <Link href="/resources/2027-aspirants-admission-preparation-checklist" className="font-bold text-navy underline">
                    See the full checklist
                  </Link>
                  .
                </p>
              </div>
            </div>
            <div>
              <CountdownTimer
                title="Registration countdown"
                note="Shown only when there is a real date"
              />
              <div className="mt-4 rounded-md border border-slate-200 bg-white p-5 text-sm text-slate-700">
                We deliberately do not run a countdown to a guessed date. A countdown that is wrong by six weeks is worse
                than no countdown at all.
              </div>
            </div>
          </div>
        </Container>
      </section>

      <section className="bg-navy py-14 text-center">
        <Container>
          <h2 className="text-3xl font-bold uppercase !text-white sm:text-4xl">
            Don&apos;t navigate your admission journey alone
          </h2>
          <p className="mt-3 text-blue-100">Join the 2027 Aspirants Community. WhatsApp: {site.phone}</p>
          <div className="mt-6 flex flex-col justify-center gap-3 sm:flex-row">
            <JoinBtn label="Join the 2027 Aspirants Group" srSuffix="(opens WhatsApp group)" />
            <WaBtn msg={MSG.aspirants} variant="outline" />
          </div>
        </Container>
      </section>
    </>
  );
}
