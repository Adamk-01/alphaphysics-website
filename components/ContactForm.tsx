"use client";

import { useState } from "react";
import Link from "next/link";
import { site, wa, services } from "@/lib/site";

const input =
  "mt-1 block min-h-12 w-full rounded-md border border-slate-300 px-3 py-2 focus:border-navy focus:outline-none focus:ring-2 focus:ring-navy/30 aria-[invalid=true]:border-red-600";

type Errors = Record<string, string>;

export default function ContactForm() {
  const [errors, setErrors] = useState<Errors>({});
  const [sent, setSent] = useState(false);

  function submit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const f = new FormData(form);
    const name = String(f.get("name") ?? "").trim();
    const phone = String(f.get("phone") ?? "").trim();
    const message = String(f.get("message") ?? "").trim();
    const consent = f.get("consent");

    const next: Errors = {};
    if (name.length < 2) next.name = "Please enter your name.";
    if (!/^[0-9+\-\s()]{7,20}$/.test(phone)) next.phone = "Enter a phone number we can reach you on, e.g. 08012345678.";
    if (message.length < 10) next.message = "Please describe what you need in a sentence or two.";
    if (!consent) next.consent = "Please tick the box so we know we may reply to you.";

    setErrors(next);
    if (Object.keys(next).length > 0) {
      const first = Object.keys(next)[0];
      document.getElementById(first)?.focus();
      return;
    }

    const msg = `Hello ${site.name}, my name is ${name}.\nService needed: ${f.get("service")}\nPhone: ${phone}\nEmail: ${f.get("email") || "-"}\n\n${message}`;
    window.open(wa(msg), "_blank", "noopener");
    setSent(true);
  }

  if (sent) {
    return (
      <div role="status" className="rounded-md border-2 border-brand-green bg-green-50 p-6">
        <h2 className="text-xl font-bold text-brand-green">Almost done</h2>
        <p className="mt-2 text-slate-700">
          WhatsApp has opened in a new tab with your message ready to send. Press <strong>send</strong> in WhatsApp and
          we will reply, usually the same day.
        </p>
        <p className="mt-3 text-slate-700">
          Nothing opened?{" "}
          <a href={wa(`Hello ${site.name}, I would like to make an enquiry.`)} target="_blank" rel="noopener noreferrer" className="font-bold text-navy underline">
            Tap here to chat with us directly
          </a>
          , or call <a href={`tel:${site.phone}`} className="font-bold text-navy underline">{site.phone}</a>.
        </p>
        <button type="button" onClick={() => setSent(false)} className="mt-5 min-h-11 font-bold text-navy underline">
          Send another message
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={submit} noValidate className="space-y-4">
      <div>
        <label htmlFor="name" className="font-semibold text-navy">
          Name <span className="text-red-700">*</span>
        </label>
        <input
          id="name"
          name="name"
          required
          autoComplete="name"
          aria-invalid={!!errors.name}
          aria-describedby={errors.name ? "name-error" : undefined}
          className={input}
        />
        {errors.name && (
          <p id="name-error" role="alert" className="mt-1 text-sm text-red-700">
            {errors.name}
          </p>
        )}
      </div>

      <div>
        <label htmlFor="email" className="font-semibold text-navy">
          Email (optional)
        </label>
        <input id="email" name="email" type="email" autoComplete="email" className={input} />
      </div>

      <div>
        <label htmlFor="phone" className="font-semibold text-navy">
          Phone <span className="text-red-700">*</span>
        </label>
        <input
          id="phone"
          name="phone"
          type="tel"
          required
          autoComplete="tel"
          inputMode="tel"
          placeholder="08012345678"
          aria-invalid={!!errors.phone}
          aria-describedby={errors.phone ? "phone-error" : undefined}
          className={input}
        />
        {errors.phone && (
          <p id="phone-error" role="alert" className="mt-1 text-sm text-red-700">
            {errors.phone}
          </p>
        )}
      </div>

      <div>
        <label htmlFor="service" className="font-semibold text-navy">
          Service needed
        </label>
        <select id="service" name="service" required className={input} defaultValue={services[0].title}>
          {services.map((s) => (
            <option key={s.slug}>{s.title}</option>
          ))}
          <option>2027 Aspirants Community</option>
          <option>Something else</option>
        </select>
      </div>

      <div>
        <label htmlFor="message" className="font-semibold text-navy">
          Message <span className="text-red-700">*</span>
        </label>
        <textarea
          id="message"
          name="message"
          rows={5}
          required
          aria-invalid={!!errors.message}
          aria-describedby={errors.message ? "message-error" : undefined}
          className={input}
          placeholder="Tell us your course, school and what you need help with."
        />
        {errors.message && (
          <p id="message-error" role="alert" className="mt-1 text-sm text-red-700">
            {errors.message}
          </p>
        )}
      </div>

      <div>
        <label htmlFor="consent" className="flex items-start gap-3 text-sm text-slate-700">
          <input
            id="consent"
            name="consent"
            type="checkbox"
            aria-invalid={!!errors.consent}
            aria-describedby={errors.consent ? "consent-error" : undefined}
            className="mt-1 h-5 w-5 shrink-0"
          />
          <span>
            I agree that ALPHAPHYSICS EDU CONSULT may use the details I enter to reply to my enquiry, as described in
            the{" "}
            <Link href="/privacy" className="font-bold text-navy underline">
              Privacy Policy
            </Link>
            .
          </span>
        </label>
        {errors.consent && (
          <p id="consent-error" role="alert" className="mt-1 text-sm text-red-700">
            {errors.consent}
          </p>
        )}
      </div>

      <button
        type="submit"
        className="min-h-12 w-full rounded-md bg-navy px-6 py-3 font-bold uppercase tracking-wide text-white hover:bg-navy-dark sm:w-auto"
      >
        Send Message
      </button>
      <p className="text-sm text-slate-600">
        Your message opens in WhatsApp so you can send it to us directly. Nothing is stored on this website.
      </p>
    </form>
  );
}
