import Link from "next/link";
import { meta } from "@/lib/seo";
import { posts } from "@/lib/posts";
import { Container, PageHero, WaBand, JoinBtn, WaBtn, Heading } from "@/components/ui";
import Breadcrumb, { FaqLd } from "@/components/Schema";

export const metadata = meta(
  "Admission in Nigeria: How It Works",
  "How admission works in Nigeria: UTME, O'Level requirements, Post-UTME screening, JAMB CAPS and cut-off marks, explained step by step for 2027 aspirants.",
  "/admission",
  {
    keywords: [
      "admission",
      "admission in Nigeria",
      "how to get admission in Nigeria",
      "university admission",
      "admission requirements Nigeria",
      "JAMB admission",
    ],
  },
);

const steps = [
  {
    n: "01",
    title: "Choose a course, then your subjects",
    body: "The course decides the four UTME subjects. Registering for the wrong combination can disqualify a candidate with an excellent score, so check the JAMB brochure before registration — not after.",
    link: { href: "/resources/understanding-jamb-subject-combinations", label: "Subject combinations explained" },
  },
  {
    n: "02",
    title: "Check the O'Level requirements",
    body: "Most degree programmes ask for five credits including English Language and often Mathematics, in not more than two sittings. Competitive courses ask for specific science or arts subjects, and some ask for a single sitting.",
    link: { href: "/resources/understanding-olevel-requirements-for-university-admission", label: "O'Level requirements explained" },
  },
  {
    n: "03",
    title: "Register for JAMB and sit the UTME",
    body: "Create a profile code, complete registration at an accredited centre, and sit the computer-based exam. The UTME is scored out of 400 across four subjects and is the first filter every institution applies.",
    link: { href: "/resources/2027-jamb-what-prospective-candidates-should-know", label: "What 2027 candidates should know" },
  },
  {
    n: "04",
    title: "Upload your O'Level results to CAPS",
    body: "CAPS attaches your grades to your profile. If they are missing, the institution cannot consider you — this is the most common avoidable reason a qualified candidate gets no offer.",
    link: { href: "/resources/what-is-jamb-caps-and-why-your-olevel-upload-matters", label: "How CAPS works" },
  },
  {
    n: "05",
    title: "Take part in Post-UTME screening",
    body: "Most institutions run a CBT test, a written exam or an online document screening. The window is short and announced on the school's own website. Missing it removes you from that school regardless of your score.",
    link: { href: "/resources/post-utme-screening-explained", label: "What screening involves" },
  },
  {
    n: "06",
    title: "Accept the offer on CAPS",
    body: "Offers appear on your CAPS profile rather than in a text message. Accept there, then complete the school's acceptance payment and clearance with your original documents.",
    link: { href: "/resources/how-university-admission-works-in-nigeria", label: "The full admission pipeline" },
  },
];

const faqs = [
  {
    q: "What is the minimum UTME score for admission in Nigeria?",
    a: "JAMB announces a national minimum each cycle, and institutions then set their own institutional minimum, which is usually higher. Competitive departments such as Medicine, Law, Pharmacy and Nursing set a further, higher departmental mark. Our cut-off checker shows indicative figures so you can see roughly where you stand.",
  },
  {
    q: "How many O'Level credits do I need for admission?",
    a: "Most universities require at least five credit passes including English Language, and many courses also require Mathematics, obtained in not more than two sittings. Specific subjects depend on the course, and some competitive programmes ask for a single sitting.",
  },
  {
    q: "Can I get admission without JAMB?",
    a: "Not for regular undergraduate admission into public universities, polytechnics and colleges of education. Some institutions offer part-time, open and distance learning or pre-degree routes with different requirements, but you must confirm the exact entry route with the institution offering it.",
  },
  {
    q: "What happens if I miss the Post-UTME screening?",
    a: "That institution will not consider you for that cycle, even with a high UTME score. Screening windows are short, so the practical advice is to follow the school's official website and verified social accounts from the moment you register.",
  },
  {
    q: "Can someone help me get admission directly?",
    a: "No legitimate consultancy can decide an admission. Offers are made by institutions through CAPS and are visible on your own profile. Anyone who offers to sell you admission rather than a service is a risk, not a shortcut.",
  },
  {
    q: "What should I do if I am not admitted this year?",
    a: "Common options are a change of course or institution to somewhere your score is competitive, applying to a polytechnic or college of education, taking a Direct Entry route after a diploma or JUPEB/IJMB programme, or sitting the UTME again with better preparation.",
  },
];

export default function AdmissionPage() {
  const guides = posts.filter((p) => p.tag === "Admission" || p.tag === "JAMB").slice(0, 6);

  return (
    <>
      <Breadcrumb items={[{ name: "Admission", path: "/admission" }]} />
      <PageHero eyebrow="Admission guide" title="Admission in Nigeria, step by step">
        How the process actually fits together — from choosing a course to accepting an offer on JAMB CAPS — and where
        candidates most often lose a place they had already earned.
      </PageHero>

      <section className="py-14">
        <Container className="max-w-3xl">
          <p className="text-lg leading-relaxed text-slate-700">
            Admission into a Nigerian university, polytechnic or college of education is not one decision. It is a
            sequence of them, each with its own deadline, and a mistake at any stage can cancel a strong result further
            down the line. A candidate can score 280 and still get nothing because they registered for the wrong
            subjects, or because their O&apos;Level result never reached JAMB CAPS, or because they missed a two-week
            screening window nobody told them about.
          </p>
          <p className="mt-4 text-lg leading-relaxed text-slate-700">
            This page sets out the sequence in order, with the requirements that apply at each stage. It is written for
            the 2027 admission cycle and for anyone who wants the process explained without the rumour.
          </p>

          <div className="mt-8 rounded-md border-l-4 border-gold bg-navy-light p-5">
            <p className="font-bold text-navy">The four things that decide most outcomes</p>
            <ul className="mt-2 list-disc space-y-1 pl-5 text-slate-700">
              <li>Your UTME score</li>
              <li>Your subject combination</li>
              <li>Your O&apos;Level grades, and whether they reached CAPS</li>
              <li>Whether you met the institution&apos;s screening deadline</li>
            </ul>
            <p className="mt-3 text-slate-700">
              Everything else — who you know, which agent you used, which group chat you are in — matters far less than
              these four.
            </p>
          </div>
        </Container>
      </section>

      <section className="bg-slate-50 py-14">
        <Container>
          <Heading eyebrow="The process" title="Six stages, in order" />
          <ol className="mt-8 grid gap-5 md:grid-cols-2">
            {steps.map((s) => (
              <li key={s.n} className="flex flex-col rounded-md border border-slate-200 bg-white p-6">
                <span className="font-serif text-3xl font-bold text-gold-dark">{s.n}</span>
                <h3 className="mt-2 text-xl font-bold">{s.title}</h3>
                <p className="mt-2 flex-1 text-slate-700">{s.body}</p>
                <Link href={s.link.href} className="mt-4 inline-flex min-h-11 items-center font-bold text-navy underline">
                  {s.link.label}
                </Link>
              </li>
            ))}
          </ol>
        </Container>
      </section>

      <section className="py-14">
        <Container className="max-w-3xl">
          <h2 className="text-3xl font-bold">What &ldquo;merit&rdquo; actually means</h2>
          <p className="mt-4 text-lg leading-relaxed text-slate-700">
            Institutions do not simply admit the highest scores nationwide. They balance merit against catchment area,
            educationally less developed state considerations and their own senate-approved rules. This is why two
            candidates with the same score can get different answers from the same school, and why &ldquo;the cut-off&rdquo;
            is rarely a single national number.
          </p>
          <p className="mt-4 text-lg leading-relaxed text-slate-700">
            The useful consequence is that your choice of course and institution is itself a strategy. Picking a
            programme where your score sits comfortably in the pool is worth more than applying to the most popular
            programme in the country and hoping.
          </p>

          <h2 className="mt-10 text-3xl font-bold">Where candidates lose places they had earned</h2>
          <ul className="mt-4 space-y-3 text-lg leading-relaxed text-slate-700">
            <li>
              <strong className="text-navy">Wrong subject combination.</strong> The score is fine and the course
              requirement is not met. This is decided at registration, before results exist.
            </li>
            <li>
              <strong className="text-navy">O&apos;Level not uploaded.</strong> An awaiting result that was never
              uploaded after release leaves the profile incomplete and therefore out of consideration.
            </li>
            <li>
              <strong className="text-navy">Missed screening window.</strong> Two weeks, announced on a school website,
              and gone.
            </li>
            <li>
              <strong className="text-navy">Identity mismatch.</strong> A name or date of birth that differs between
              NIN, result and JAMB profile stalls registration or clearance.
            </li>
            <li>
              <strong className="text-navy">Offer not accepted.</strong> An admission that appears on CAPS and is never
              accepted can lapse.
            </li>
          </ul>

          <div className="mt-8 rounded-lg bg-navy p-6 text-white sm:p-8">
            <h2 className="text-2xl font-bold !text-white">Check your course before you commit</h2>
            <p className="mt-2 text-blue-100">
              The cut-off checker shows an indicative mark, the subject combination and the institutional minimum for
              six institutions, and compares them with your score.
            </p>
            <div className="mt-5 flex flex-col gap-3 sm:flex-row">
              <Link
                href="/cut-off-checker"
                className="inline-flex min-h-12 items-center justify-center rounded-md bg-gold px-6 text-sm font-bold uppercase tracking-wide text-navy-dark hover:bg-gold-dark hover:text-white"
              >
                Open the cut-off checker
              </Link>
              <Link
                href="/services/one-on-one-consultation"
                className="inline-flex min-h-12 items-center justify-center rounded-md border-2 border-white px-6 text-sm font-bold uppercase tracking-wide text-white hover:bg-white hover:text-navy"
              >
                Talk through your options
              </Link>
            </div>
          </div>
        </Container>
      </section>

      <section className="bg-slate-50 py-14">
        <Container>
          <Heading eyebrow="Keep reading" title="Guides for each stage" />
          <div className="mt-8 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {guides.map((p) => (
              <article key={p.slug} className="rounded-md border border-slate-200 bg-white p-6">
                <span className="text-xs font-bold uppercase tracking-wider text-gold-dark">{p.tag}</span>
                <h3 className="mt-2 text-lg font-bold">
                  <Link href={`/resources/${p.slug}`} className="hover:underline">
                    {p.h1}
                  </Link>
                </h3>
                <p className="mt-2 text-sm text-slate-700">{p.excerpt}</p>
              </article>
            ))}
          </div>
        </Container>
      </section>

      <section className="py-14">
        <Container className="max-w-3xl">
          <Heading eyebrow="Questions" title="Admission questions people actually ask" />
          <dl className="mt-6 divide-y divide-slate-200 border-y border-slate-200">
            {faqs.map((f) => (
              <div key={f.q} className="py-5">
                <dt className="text-lg font-bold text-navy">{f.q}</dt>
                <dd className="mt-2 leading-relaxed text-slate-700">{f.a}</dd>
              </div>
            ))}
          </dl>
          <p className="mt-6">
            <Link href="/faq" className="font-bold text-navy underline">
              More frequently asked questions
            </Link>
          </p>
        </Container>
      </section>

      <WaBand
        title="Not sure which stage you are at?"
        text="Send us your course, school and score."
        extra="We will tell you which step you are on and what to do next."
      />
      <FaqLd faqs={faqs} />
    </>
  );
}
