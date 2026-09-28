"use client";
import { site, wa, services } from "@/lib/site";
const input = "mt-1 block min-h-12 w-full rounded-md border border-slate-300 px-3 py-2";
export default function ContactForm() {
  function submit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const f = new FormData(e.currentTarget);
    const msg = `Hello ${site.name}, my name is ${f.get("name")}.\nService needed: ${f.get("service")}\nPhone: ${f.get("phone")}\nEmail: ${f.get("email") || "-"}\n\n${f.get("message")}`;
    window.open(wa(msg), "_blank", "noopener");
  }
  return (
    <form onSubmit={submit} className="space-y-4">
      <div><label htmlFor="name" className="font-semibold text-navy">Name</label><input id="name" name="name" required autoComplete="name" className={input} /></div>
      <div><label htmlFor="email" className="font-semibold text-navy">Email (optional)</label><input id="email" name="email" type="email" autoComplete="email" className={input} /></div>
      <div><label htmlFor="phone" className="font-semibold text-navy">Phone</label><input id="phone" name="phone" type="tel" required autoComplete="tel" className={input} /></div>
      <div><label htmlFor="service" className="font-semibold text-navy">Service needed</label>
        <select id="service" name="service" required className={input}>{services.map((s) => <option key={s.slug}>{s.title}</option>)}<option>2027 Aspirants Community</option></select></div>
      <div><label htmlFor="message" className="font-semibold text-navy">Message</label><textarea id="message" name="message" rows={5} required className={input} /></div>
      <button type="submit" className="min-h-12 w-full rounded-md bg-navy px-6 py-3 font-bold uppercase tracking-wide text-white hover:bg-navy-dark sm:w-auto">Send Message</button>
      <p className="text-sm text-slate-500">Your message opens in WhatsApp so you can send it to us directly.</p>
    </form>
  );
}
