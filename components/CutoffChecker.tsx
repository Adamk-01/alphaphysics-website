"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import { schools, CUTOFF_LAST_REVIEWED } from "@/lib/cutoff-data";

export default function CutoffChecker() {
  const [selectedSchoolId, setSelectedSchoolId] = useState<string>("");
  const [selectedCourseName, setSelectedCourseName] = useState<string>("");
  const [score, setScore] = useState<string>("");

  const selectedSchool = useMemo(() => schools.find((s) => s.id === selectedSchoolId), [selectedSchoolId]);
  const selectedCourse = useMemo(
    () => selectedSchool?.courses.find((c) => c.name === selectedCourseName),
    [selectedSchool, selectedCourseName],
  );

  const numericScore = Number(score);
  const hasScore = score.trim() !== "" && Number.isFinite(numericScore) && numericScore > 0 && numericScore <= 400;
  const gap = selectedCourse && hasScore ? numericScore - selectedCourse.cutoff : null;

  return (
    <div className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm sm:p-10">
      <div className="grid gap-6 md:grid-cols-2">
        <div>
          <label htmlFor="school" className="mb-2 block font-bold text-navy">
            Select institution
          </label>
          <select
            id="school"
            value={selectedSchoolId}
            onChange={(e) => {
              setSelectedSchoolId(e.target.value);
              setSelectedCourseName("");
            }}
            className="min-h-12 w-full rounded-md border border-slate-300 px-4 py-3 text-slate-700 outline-none focus:border-navy focus:ring-2 focus:ring-navy/30"
          >
            <option value="">-- Choose an institution --</option>
            {schools.map((school) => (
              <option key={school.id} value={school.id}>
                {school.name}
              </option>
            ))}
          </select>
        </div>

        <div>
          <label htmlFor="course" className="mb-2 block font-bold text-navy">
            Select course
          </label>
          <select
            id="course"
            value={selectedCourseName}
            onChange={(e) => setSelectedCourseName(e.target.value)}
            disabled={!selectedSchoolId}
            className="min-h-12 w-full rounded-md border border-slate-300 px-4 py-3 text-slate-700 outline-none focus:border-navy focus:ring-2 focus:ring-navy/30 disabled:bg-slate-100 disabled:text-slate-500"
          >
            <option value="">-- Choose a course --</option>
            {selectedSchool?.courses.map((course) => (
              <option key={course.name} value={course.name}>
                {course.name}
              </option>
            ))}
          </select>
        </div>
      </div>

      <div className="mt-6">
        <label htmlFor="score" className="mb-2 block font-bold text-navy">
          Your UTME score <span className="font-normal text-slate-600">(optional, out of 400)</span>
        </label>
        <input
          id="score"
          type="number"
          inputMode="numeric"
          min={0}
          max={400}
          value={score}
          onChange={(e) => setScore(e.target.value)}
          placeholder="e.g. 245"
          className="min-h-12 w-full max-w-xs rounded-md border border-slate-300 px-4 py-3 text-slate-700 outline-none focus:border-navy focus:ring-2 focus:ring-navy/30"
        />
        <p className="mt-2 text-sm text-slate-600">
          We only use this number on your device to show how it compares. It is not sent anywhere.
        </p>
      </div>

      {selectedSchool && selectedCourse && (
        <div className="mt-8">
          <div className="rounded-lg border-2 border-gold bg-navy p-6 text-white sm:p-8">
            <p className="text-xs font-bold uppercase tracking-widest text-gold">Indicative cut-off mark</p>
            <p className="mt-1 text-sm text-blue-200">
              {selectedCourse.name} at {selectedSchool.name}
            </p>

            <div className="mt-4 flex items-end gap-2">
              <span className="font-serif text-6xl font-bold leading-none">{selectedCourse.cutoff}</span>
              <span className="pb-1 text-lg text-blue-200">/ 400</span>
            </div>

            {gap !== null && (
              <p className={`mt-4 rounded-md bg-white/10 p-4 text-sm ${gap >= 0 ? "text-white" : "text-gold"}`}>
                {gap >= 0 ? (
                  <>
                    Your score of <strong>{numericScore}</strong> is <strong>{gap} points above</strong> this indicative
                    mark. That helps, but it is not an offer of admission — your O&apos;Level grades, the subject
                    combination and the number of applicants all count.
                  </>
                ) : (
                  <>
                    Your score of <strong>{numericScore}</strong> is <strong>{Math.abs(gap)} points below</strong> this
                    indicative mark. Competitive courses are usually decided on more than the cut-off, so read the
                    options below before you change anything.
                  </>
                )}
              </p>
            )}

            <div className="mt-6 grid gap-4 sm:grid-cols-2">
              <div className="rounded-md bg-white/10 p-4">
                <p className="text-xs font-bold uppercase tracking-widest text-gold">Subject combination</p>
                <p className="mt-2 text-sm leading-relaxed">{selectedCourse.reqs}</p>
              </div>
              <div className="rounded-md bg-white/10 p-4">
                <p className="text-xs font-bold uppercase tracking-widest text-gold">Institutional minimum</p>
                <p className="mt-2 text-sm leading-relaxed">
                  {selectedSchool.name} has used a general minimum of <strong>{selectedSchool.generalCutOff}</strong> in
                  recent cycles. It is a floor for the institution, not a target for a competitive course.
                </p>
              </div>
            </div>
          </div>

          <div className="mt-4 rounded-md border border-slate-200 bg-slate-50 p-5 text-sm leading-relaxed text-slate-700">
            <p className="font-bold text-navy">What to do next</p>
            <ul className="mt-2 list-disc space-y-1 pl-5">
              <li>
                Compare the subject combination above with what you actually registered for in UTME. A wrong combination
                can rule you out even with a high score.
              </li>
              <li>
                Check that your O&apos;Level results are uploaded to JAMB CAPS. Without that upload you cannot be offered
                admission.
              </li>
              <li>
                Read{" "}
                <Link href="/admission" className="font-semibold text-navy underline">
                  how admission works in Nigeria
                </Link>{" "}
                so you know which stage you are at.
              </li>
              <li>
                If your score is short, talk to us before paying for a change of course.&nbsp;
                <Link href="/services/one-on-one-consultation" className="font-semibold text-navy underline">
                  Book a one-on-one consultation
                </Link>
                .
              </li>
            </ul>
          </div>

          <p className="mt-4 text-center text-sm text-slate-600">
            Indicative figures compiled from the {CUTOFF_LAST_REVIEWED}. They are not official and not a prediction.
            Confirm the current cut-off with JAMB and {selectedSchool.name} before you make any decision.
          </p>
        </div>
      )}

      <details className="mt-8 rounded-md border border-slate-200 p-4">
        <summary className="cursor-pointer font-bold text-navy">How these figures are worked out</summary>
        <div className="mt-3 space-y-2 text-sm leading-relaxed text-slate-700">
          <p>
            A cut-off mark is the score an institution settles on for a course after admission closes. It is not fixed
            in advance: it moves with the number of applicants, how well they scored and how many places the department
            has. That is why last year&apos;s number is a guide, not a promise.
          </p>
          <p>
            The institutional minimum shown here is the general floor a school announces. Individual departments then
            set their own, usually higher, mark for competitive courses such as Medicine, Law, Pharmacy and Nursing.
          </p>
          <p>
            Where you see &ldquo;indicative&rdquo;, treat the number as a rough benchmark from recent cycles. Always
            check the institution&apos;s own publication and JAMB&apos;s official brochure for the cycle you are
            applying in.
          </p>
        </div>
      </details>
    </div>
  );
}
