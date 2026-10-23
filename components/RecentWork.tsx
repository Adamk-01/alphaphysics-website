import { wa } from "@/lib/site";

/**
 * Service capability cards.
 *
 * Deliberately contains no invented statistics, star ratings, "guaranteed" language or
 * testimonials. If real, permissioned testimonials become available, they belong in a
 * separate section with Review schema — not in copy like this.
 */
const works = [
  {
    category: "JAMB Services",
    title: "O'Level result upload to JAMB CAPS",
    details:
      "WAEC, NECO or NABTEB results uploaded to your CAPS profile through the official JAMB portal, with the grades checked against your UTME record before submission.",
    deliverable: "You leave with your CAPS profile showing the uploaded grades.",
    turnaround: "Same day in most cases",
  },
  {
    category: "JAMB Services",
    title: "Result slip and admission letter printing",
    details:
      "Original coloured UTME result slips, JAMB admission letters and registration slips printed from the portal, not from a screenshot.",
    deliverable: "A printable PDF and a physical copy if you need one.",
    turnaround: "Within the hour where the portal cooperates",
  },
  {
    category: "JAMB Services",
    title: "Change of course or institution",
    details:
      "For candidates whose subject combination or score does not match the course they picked. We check eligibility first so you are not paying to move into another dead end.",
    deliverable: "The change reflected on your JAMB profile.",
    turnaround: "Usually 24–72 hours on the portal",
  },
  {
    category: "Admission Processing",
    title: "Profile mismatch check before you pay for anything",
    details:
      "We check that the name and date of birth on your JAMB profile, O'Level result and other documents agree, and tell you which office to visit to correct anything that does not. We do not carry out NIN enrolment or NIN modification.",
    deliverable: "A clear list of what matches, what does not, and where each correction has to be done.",
    turnaround: "Same day",
  },
  {
    category: "Documents",
    title: "State of origin and local government certificates",
    details:
      "Certified local government identification and birth attestation documents that admission clearance officers ask for during screening.",
    deliverable: "Certified documents ready for your file.",
    turnaround: "Confirmed before we start",
  },
  {
    category: "Admission Processing",
    title: "Post-UTME and Direct Entry registration",
    details:
      "Screening registration, document uploads and slip generation for university, polytechnic and college of education applicants.",
    deliverable: "A submitted application and your screening slip.",
    turnaround: "Before the institution's deadline",
  },
];

const principles = [
  ["Official portals only", "Every transaction we carry out is done on JAMB's portal or the institution's own portal, using your details. NIN enrolment and NIN modification are handled by NIMC directly, not by us."],
  ["No guaranteed admission", "Nobody can sell you admission. We explain your options and improve your paperwork."],
  ["Cost confirmed first", "You are told what a service costs and how long it takes before any work starts."],
  ["You keep the documents", "Receipts, slips and printouts are handed to you, not held back."],
];

export default function RecentWork() {
  return (
    <section className="bg-slate-50 py-16" aria-labelledby="what-we-handle">
      <div className="mx-auto w-full max-w-6xl px-5 sm:px-8">
        <div className="flex flex-col items-start justify-between gap-4 md:flex-row md:items-end">
          <div className="max-w-2xl">
            <p className="text-xs font-bold uppercase tracking-[.18em] text-gold-dark">What we handle</p>
            <h2 id="what-we-handle" className="mt-1 text-3xl font-bold leading-tight text-navy sm:text-4xl">
              Services we run every week
            </h2>
            <p className="mt-2 text-slate-700">
              These are the jobs that come up most often during an admission cycle, and what is actually involved in
              each one.
            </p>
          </div>
          <a
            href={wa("Hello ALPHAPHYSICS EDU CONSULT, I would like you to handle my document/admission processing.")}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex min-h-12 shrink-0 items-center rounded-md bg-brand-green px-6 text-sm font-bold uppercase tracking-wider text-white shadow hover:bg-green-900"
          >
            Start your request
          </a>
        </div>

        <ul className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {principles.map(([title, text]) => (
            <li key={title} className="rounded-lg border border-slate-200 bg-white p-5">
              <p className="font-bold text-navy">{title}</p>
              <p className="mt-1 text-sm leading-relaxed text-slate-700">{text}</p>
            </li>
          ))}
        </ul>

        <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {works.map((w) => (
            <article key={w.title} className="flex flex-col rounded-lg border border-slate-200 bg-white p-6 shadow-sm">
              <span className="w-fit rounded-full bg-navy-light px-3 py-1 text-xs font-bold text-navy">{w.category}</span>
              <h3 className="mt-4 text-lg font-bold text-navy">{w.title}</h3>
              <p className="mt-2 flex-1 text-sm leading-relaxed text-slate-700">{w.details}</p>
              <div className="mt-4 rounded-md border-l-4 border-gold bg-slate-50 p-3 text-sm text-slate-700">
                <strong className="text-navy">You get: </strong>
                {w.deliverable}
              </div>
              <div className="mt-4 flex items-center justify-between gap-3 border-t border-slate-100 pt-3 text-xs text-slate-600">
                <span>{w.turnaround}</span>
                <a
                  href={wa(`Hello ALPHAPHYSICS EDU CONSULT, I need assistance with: ${w.title}`)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-bold text-navy underline hover:text-gold-dark"
                >
                  Ask about this
                  <span className="sr-only"> — {w.title}</span>
                </a>
              </div>
            </article>
          ))}
        </div>

        <div className="mt-10 rounded-lg bg-navy p-6 text-white sm:flex sm:items-center sm:justify-between sm:gap-6 sm:p-8">
          <div>
            <h3 className="text-xl font-bold !text-white">Not sure which one you need?</h3>
            <p className="mt-1 text-sm text-blue-100">
              Describe your situation and we will tell you what is actually required — including when the answer is
              &ldquo;you do not need to pay for this&rdquo;.
            </p>
          </div>
          <a
            href={wa("Hello ALPHAPHYSICS EDU CONSULT, I am not sure which service I need. Here is my situation:")}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-4 inline-flex min-h-12 flex-shrink-0 items-center rounded-md bg-gold px-6 text-sm font-bold uppercase tracking-wider text-navy-dark shadow hover:bg-gold-dark hover:text-white sm:mt-0"
          >
            Describe your situation
          </a>
        </div>
      </div>
    </section>
  );
}
