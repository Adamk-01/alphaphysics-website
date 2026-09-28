"use client";
import { useState, useEffect } from "react";

export default function CountdownTimer({ targetDate, title }: { targetDate: string; title: string }) {
  const [timeLeft, setTimeLeft] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 });
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
    const target = new Date(targetDate).getTime();

    const interval = setInterval(() => {
      const now = new Date().getTime();
      const distance = target - now;

      if (distance < 0) {
        clearInterval(interval);
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
      } else {
        setTimeLeft({
          days: Math.floor(distance / (1000 * 60 * 60 * 24)),
          hours: Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
          minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
          seconds: Math.floor((distance % (1000 * 60)) / 1000),
        });
      }
    }, 1000);

    return () => clearInterval(interval);
  }, [targetDate]);

  if (!isClient) return null;

  return (
    <div className="rounded-lg border-2 border-gold bg-navy p-6 text-center shadow-lg">
      <h3 className="mb-4 text-xl font-bold uppercase tracking-wide text-white">{title}</h3>
      <div className="flex justify-center gap-4 text-white">
        {Object.entries(timeLeft).map(([unit, value]) => (
          <div key={unit} className="flex flex-col items-center">
            <div className="flex h-16 w-16 items-center justify-center rounded-md bg-navy-dark text-2xl font-bold text-gold sm:h-20 sm:w-20 sm:text-3xl">
              {value.toString().padStart(2, "0")}
            </div>
            <span className="mt-2 text-xs font-bold uppercase tracking-widest text-blue-200">{unit}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
