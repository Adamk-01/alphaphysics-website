import Link from "next/link";
import { site, wa, MSG } from "@/lib/site";

const recentWorks = [
  {
    category: "JAMB Services",
    title: "O'Level Result Upload to JAMB CAPS",
    details: "Processed WAEC & NECO awaiting result uploads directly onto JAMB CAPS for multiple candidates across Federal and State universities.",
    result: "CAPS profile updated with verified grades; candidates qualified for admission list consideration.",
    badge: "Verified on CAPS",
    time: "2026/2027 Cycle",
  },
  {
    category: "Documents & Clearances",
    title: "Original Result & Admission Letter Retrieval",
    details: "Retrieved original colored JAMB result slips and official JAMB admission letters with active security QR/barcodes.",
    result: "Instant digital PDF delivered within 30 minutes for urgent university screening clearance.",
    badge: "100% Official",
    time: "Fast Turnaround",
  },
  {
    category: "JAMB Processing",
    title: "Change of Course & Institution Correction",
    details: "Assisted candidates with wrong subject combinations by switching them to eligible courses and alternative institutions.",
    result: "Successfully reflected on candidate profile before the post-UTME registration deadline.",
    badge: "Successfully Cleared",
    time: "Same-Day Service",
  },
  {
    category: "NIN Services",
    title: "NIN Modification & Profile Code Resolution",
    details: "Rectified name spelling and Date of Birth discrepancies on the NIMC database preventing JAMB profile code generation.",
    result: "Profile code generated; candidate registered for UTME without missing the deadline.",
    badge: "NIMC Cleared",
    time: "Direct Resolution",
  },
  {
    category: "Clearance Documents",
    title: "State of Origin & Local Government Certificate",
    details: "Processed certified Local Government Identification certificates and birth attestations for undergraduate clearance.",
    result: "Full clearance package accepted with zero queries by institution faculty officers.",
    badge: "Screening Approved",
    time: "Official Document",
  },
  {
    category: "Admission Processing",
    title: "Post-UTME & Direct Entry Registration",
    details: "Handled error-free online screening registrations, document uploads, and slip generation for polytechnic and university aspirants.",
    result: "Accurate submission ensuring candidate candidate credentials were fully recognized.",
    badge: "Processed & Verified",
    time: "Guaranteed Accuracy",
  },
];

const highlights = [
  { value: "500+", label: "Candidates & Aspirants Guided" },
  { value: "100%", label: "Legitimate & Official Channels" },
  { value: "0", label: "Disqualifications from Paperwork Errors" },
  { value: "< 1hr", label: "Average Response & Processing Speed" },
];

export default function Testimonials() {
  return (
    <section className="bg-slate-50 py-16">
      <div className="mx-auto w-full max-w-6xl px-5 sm:px-8">
        <div className="flex flex-col items-start justify-between gap-4 md:flex-row md:items-end">
          <div>
            <p className="text-xs font-bold uppercase tracking-[.18em] text-gold-dark">Proven Track Record</p>
            <h2 className="mt-1 text-3xl font-bold leading-tight text-navy sm:text-4xl">Recent Work &amp; Completed Services</h2>
            <p className="mt-2 max-w-2xl text-slate-600">
              We take pride in real, verified results. Here are examples of actual client assignments and admission processing cases we handle regularly.
            </p>
          </div>
          <a
            href={wa("Hello ALPHAPHYSICS EDU CONSULT, I would like you to handle my document/admission processing.")}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex min-h-12 items-center rounded-md bg-brand-green px-6 text-sm font-bold uppercase tracking-wider text-white shadow hover:bg-green-700"
          >
            Start Your Request
          </a>
        </div>

        {/* Highlight Numbers */}
        <div className="mt-10 grid grid-cols-2 gap-4 rounded-xl border border-slate-200 bg-white p-6 shadow-sm md:grid-cols-4 md:p-8">
          {highlights.map((h) => (
            <div key={h.label} className="text-center">
              <p className="font-serif text-3xl font-bold text-navy sm:text-4xl">{h.value}</p>
              <p className="mt-1 text-xs font-medium text-slate-600 sm:text-sm">{h.label}</p>
            </div>
          ))}
        </div>

        {/* Work Cards */}
        <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {recentWorks.map((w) => (
            <article key={w.title} className="flex flex-col justify-between rounded-lg border border-slate-200 bg-white p-6 shadow-sm transition hover:border-gold hover:shadow-md">
              <div>
                <div className="flex items-center justify-between gap-2">
                  <span className="rounded-full bg-navy-light px-3 py-1 text-xs font-bold text-navy">
                    {w.category}
                  </span>
                  <span className="inline-flex items-center rounded-full bg-green-50 px-2.5 py-0.5 text-xs font-semibold text-brand-green">
                    ✓ {w.badge}
                  </span>
                </div>

                <h3 className="mt-4 text-lg font-bold text-navy">{w.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-600">{w.details}</p>

                <div className="mt-4 rounded-md border-l-2 border-gold bg-slate-50 p-3 text-xs text-slate-700">
                  <strong className="text-navy">Outcome: </strong>
                  {w.result}
                </div>
              </div>

              <div className="mt-5 flex items-center justify-between border-t border-slate-100 pt-3 text-xs text-slate-500">
                <span>{w.time}</span>
                <a
                  href={wa(`Hello ALPHAPHYSICS EDU CONSULT, I need assistance with: ${w.title}`)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-bold text-navy hover:underline"
                >
                  Need this? Chat &rarr;
                </a>
              </div>
            </article>
          ))}
        </div>

        {/* Trust banner */}
        <div className="mt-10 rounded-lg bg-navy p-6 text-white sm:flex sm:items-center sm:justify-between sm:p-8">
          <div>
            <h4 className="text-xl font-bold text-white">Need an official document or admission processed without errors?</h4>
            <p className="mt-1 text-sm text-blue-100">
              From JAMB letters to NIN updates and admission clearance, we handle it swiftly and transparently.
            </p>
          </div>
          <a
            href={wa("Hello ALPHAPHYSICS EDU CONSULT, I need an official service processed.")}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-4 inline-flex min-h-12 flex-shrink-0 items-center rounded-md bg-gold px-6 text-sm font-bold uppercase tracking-wider text-navy shadow hover:bg-yellow-400 sm:mt-0"
          >
            Chat with an Expert
          </a>
        </div>
      </div>
    </section>
  );
}
