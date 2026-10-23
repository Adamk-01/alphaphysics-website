import Link from "next/link";
import { meta } from "@/lib/seo";
import { Container, PageHero, WaBand, JoinBtn } from "@/components/ui";
import CutoffChecker from "@/components/CutoffChecker";
import Breadcrumb from "@/components/Schema";
import { schools, CUTOFF_LAST_REVIEWED } from "@/lib/cutoff-data";

export const metadata = meta(
  "JAMB Cut-Off Mark Checker",
  "Check indicative JAMB cut-off marks and O'Level subject combinations for Nigerian universities and polytechnics, and compare them with your UTME score.",
  "/cut-off-checker",
  {
    keywords: [
      "JAMB cut off mark",
      "cut off mark for all courses",
      "cut off mark for universities in Nigeria",
      "UNILAG cut off mark",
      "JAMB cut off mark 2027",
    ],
  },
);

export default function CutoffCheckerPage() {
  return (
    <>
      <Breadcrumb items={[{ name: "Cut-Off Checker", path: "/cut-off-checker" }]} />
      <PageHero eyebrow="Free tool" title="JAMB cut-off mark checker">
        Pick an institution and course to see an indicative cut-off mark, the subject combination and the institutional
        minimum. Add your UTME score to see how it compares.
      </PageHero>

      <section className="bg-slate-50 py-14">
        <Container className="max-w-4xl">
          <CutoffChecker />

          <div className="mt-12 space-y-4 text-lg leading-relaxed text-slate-700">
            <h2 className="text-3xl font-bold">What this tool can and cannot tell you</h2>
            <p>
              A cut-off mark is not a rule announced in advance. It is the score an institution settles on for a course
              after the admission exercise, based on how many places it has and how well the applicants scored. That is
              why the figure moves every cycle and why a number from a previous cycle is a benchmark rather than a
              promise.
            </p>
            <p>
              The figures here are <strong>indicative</strong>, compiled from the {CUTOFF_LAST_REVIEWED} across{" "}
              {schools.length} institutions. They are useful for a quick sanity check — is this course plausibly open to
              me? — and not for making a decision on their own. Before you change a course or pay for anything, confirm
              the current position with the institution and with JAMB&apos;s official brochure.
            </p>
            <p>
              A cut-off is also only one of four things that decide an admission. Your subject combination, your
              O&apos;Level grades and whether those grades reached CAPS all matter just as much. A candidate can clear
              the cut-off and still miss out because of a wrong subject combination or an incomplete profile.
            </p>
            <p>
              If you want the full picture rather than a single number, start with our{" "}
              <Link href="/admission" className="font-bold text-navy underline">
                admission guide
              </Link>{" "}
              or read{" "}
              <Link href="/resources/admission-cut-off-marks-explained" className="font-bold text-navy underline">
                what cut-off marks really mean
              </Link>
              .
            </p>
          </div>

          <div className="mt-12 rounded-lg bg-navy p-8 text-center text-white sm:p-12">
            <h2 className="text-2xl font-bold uppercase sm:text-3xl">Not seeing your school or course?</h2>
            <p className="mx-auto mt-4 max-w-2xl text-blue-100">
              This tool covers six institutions. If yours is not listed, send us a message with the school and course and
              we will tell you what the published requirement is, or join the community and ask there.
            </p>
            <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
              <Link
                href="/contact"
                className="inline-flex min-h-12 items-center justify-center rounded-md bg-gold px-6 text-sm font-bold uppercase tracking-wide text-navy-dark hover:bg-gold-dark hover:text-white"
              >
                Ask about your school
              </Link>
              <JoinBtn label="Join the Aspirants Group" variant="outline" />
            </div>
          </div>
        </Container>
      </section>

      <WaBand
        title="Need help reading this for your situation?"
        text="Send us your course, school and score."
        extra="We will tell you honestly where you stand."
        msg="Hello ALPHAPHYSICS EDU CONSULT, I need help confirming a cut-off mark for my course."
      />
    </>
  );
}
