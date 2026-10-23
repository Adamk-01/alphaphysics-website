"use client";

import { useEffect, useState } from "react";

type TimeLeft = { days: number; hours: number; minutes: number; seconds: number };

const UNITS: (keyof TimeLeft)[] = ["days", "hours", "minutes", "seconds"];

/**
 * Countdown that renders identically on the server and on first client paint.
 *
 * - With no `targetDate` it renders a neutral "not yet announced" card instead of
 *   inventing a date. Never pass a guessed date here: visitors read it as official.
 * - Placeholders are dashes of fixed width, so hydrating the real numbers causes no
 *   layout shift.
 * - Once the date passes it says so, instead of silently sitting at 00:00:00.
 */
export default function CountdownTimer({
  targetDate,
  title,
  note,
}: {
  targetDate?: string;
  title: string;
  note?: string;
}) {
  const [timeLeft, setTimeLeft] = useState<TimeLeft | null>(null);
  const [passed, setPassed] = useState(false);

  useEffect(() => {
    if (!targetDate) return;
    const target = new Date(targetDate).getTime();
    if (Number.isNaN(target)) return;

    const tick = () => {
      const distance = target - Date.now();
      if (distance <= 0) {
        setPassed(true);
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
        return false;
      }
      setTimeLeft({
        days: Math.floor(distance / 86_400_000),
        hours: Math.floor((distance % 86_400_000) / 3_600_000),
        minutes: Math.floor((distance % 3_600_000) / 60_000),
        seconds: Math.floor((distance % 60_000) / 1000),
      });
      return true;
    };

    tick();
    const id = setInterval(() => {
      if (!tick()) clearInterval(id);
    }, 1000);
    return () => clearInterval(id);
  }, [targetDate]);

  return (
    <div className="rounded-lg border-2 border-gold bg-navy p-6 text-center shadow-lg">
      <h3 className="mb-2 text-xl font-bold uppercase tracking-wide text-white">{title}</h3>
      {note && <p className="mb-4 text-xs text-blue-200">{note}</p>}

      {targetDate ? (
        <>
          <div className="flex justify-center gap-4 text-white">
            {UNITS.map((unit) => (
              <div key={unit} className="flex flex-col items-center">
                <div className="flex h-16 w-16 items-center justify-center rounded-md bg-navy-dark text-2xl font-bold text-gold tabular-nums sm:h-20 sm:w-20 sm:text-3xl">
                  {timeLeft ? String(timeLeft[unit]).padStart(2, "0") : "--"}
                </div>
                <span className="mt-2 text-xs font-bold uppercase tracking-widest text-blue-200">{unit}</span>
              </div>
            ))}
          </div>
          {passed && (
            <p className="mt-4 text-sm font-semibold text-gold">
              This date has passed. Check JAMB&apos;s official channels for the current schedule.
            </p>
          )}
        </>
      ) : (
        <p className="text-sm leading-relaxed text-blue-100">
          JAMB has not announced a registration date yet. We do not publish guessed dates — when the official
          announcement is released, it will be posted in the 2027 Aspirants Community.
        </p>
      )}
    </div>
  );
}
