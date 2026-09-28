"use client";
import { useState, useMemo } from "react";
import { schools } from "@/lib/cutoff-data";

export default function CutoffChecker() {
  const [selectedSchoolId, setSelectedSchoolId] = useState<string>("");
  const [selectedCourseName, setSelectedCourseName] = useState<string>("");

  const selectedSchool = useMemo(() => schools.find(s => s.id === selectedSchoolId), [selectedSchoolId]);
  const selectedCourse = useMemo(() => selectedSchool?.courses.find(c => c.name === selectedCourseName), [selectedSchool, selectedCourseName]);

  return (
    <div className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm sm:p-10">
      <div className="grid gap-6 md:grid-cols-2">
        {/* School Selection */}
        <div>
          <label htmlFor="school" className="mb-2 block font-bold text-navy">Select Institution</label>
          <select 
            id="school"
            value={selectedSchoolId}
            onChange={(e) => {
              setSelectedSchoolId(e.target.value);
              setSelectedCourseName(""); // Reset course when school changes
            }}
            className="w-full rounded-md border border-slate-300 px-4 py-3 text-slate-700 outline-none focus:border-gold focus:ring-1 focus:ring-gold"
          >
            <option value="">-- Choose an Institution --</option>
            {schools.map(school => (
              <option key={school.id} value={school.id}>{school.name}</option>
            ))}
          </select>
        </div>

        {/* Course Selection */}
        <div>
          <label htmlFor="course" className="mb-2 block font-bold text-navy">Select Course</label>
          <select 
            id="course"
            value={selectedCourseName}
            onChange={(e) => setSelectedCourseName(e.target.value)}
            disabled={!selectedSchoolId}
            className="w-full rounded-md border border-slate-300 px-4 py-3 text-slate-700 outline-none focus:border-gold focus:ring-1 focus:ring-gold disabled:bg-slate-50 disabled:text-slate-400"
          >
            <option value="">-- Choose a Course --</option>
            {selectedSchool?.courses.map(course => (
              <option key={course.name} value={course.name}>{course.name}</option>
            ))}
          </select>
        </div>
      </div>

      {/* Result Card */}
      {selectedSchool && selectedCourse && (
        <div className="mt-8 animate-in fade-in slide-in-from-bottom-4 duration-500">
          <div className="rounded-lg border-2 border-gold bg-navy p-6 text-white sm:p-8">
            <h3 className="text-xl font-bold uppercase tracking-wide text-gold">Estimated Cut-Off Mark</h3>
            <p className="mt-1 text-sm text-blue-200">For {selectedCourse.name} at {selectedSchool.name}</p>
            
            <div className="mt-6 flex items-end gap-2">
              <span className="font-serif text-6xl font-bold leading-none">{selectedCourse.cutoff}</span>
              <span className="pb-1 text-lg text-blue-200">/ 400</span>
            </div>

            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              <div className="rounded-md bg-white/10 p-4">
                <p className="text-xs font-bold uppercase tracking-widest text-gold">Subject Combination</p>
                <p className="mt-2 text-sm leading-relaxed">{selectedCourse.reqs}</p>
              </div>
              <div className="rounded-md bg-white/10 p-4">
                <p className="text-xs font-bold uppercase tracking-widest text-gold">General School Cut-Off</p>
                <p className="mt-2 text-sm leading-relaxed">
                  {selectedSchool.name} usually sets a baseline cut-off of <strong>{selectedSchool.generalCutOff}</strong> for all programs.
                </p>
              </div>
            </div>
          </div>

          <p className="mt-4 text-center text-sm text-slate-500">
            * Disclaimer: These are highly accurate estimates based on historical data. Official cut-off marks may change slightly each admission year.
          </p>
        </div>
      )}
    </div>
  );
}
