import { meta } from "@/lib/seo";
import { Container, PageHero, WaBand, JoinBtn } from "@/components/ui";
import CutoffChecker from "@/components/CutoffChecker";

export const metadata = meta(
  "JAMB Cut-Off Mark Checker 2027",
  "Check the estimated JAMB/UTME cut-off marks and O'Level subject combinations for universities and polytechnics in Nigeria.",
  "/cut-off-checker"
);

export default function CutoffCheckerPage() {
  return (
    <>
      <PageHero eyebrow="Free Tool" title="JAMB Cut-Off Mark Checker">
        Select your desired institution and course to see the estimated cut-off mark and required subject combination for the upcoming admission year.
      </PageHero>

      <section className="bg-slate-50 py-14">
        <Container className="max-w-4xl">
          <CutoffChecker />

          <div className="mt-14 rounded-lg bg-navy p-8 text-center text-white sm:p-12">
            <h2 className="text-2xl font-bold uppercase sm:text-3xl">Not seeing your school or course?</h2>
            <p className="mx-auto mt-4 max-w-2xl text-blue-100">
              We process admissions for hundreds of schools across Nigeria. If your preferred institution isn't listed here, join our community or send us a message to get the exact requirements.
            </p>
            <div className="mt-8 flex justify-center">
              <JoinBtn label="Join the Aspirants Group" variant="primary" />
            </div>
          </div>
        </Container>
      </section>

      <WaBand msg="Hello ALPHAPHYSICS EDU CONSULT, I need help confirming a cut-off mark for my course." />
    </>
  );
}
