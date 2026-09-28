const testimonials = [
  { name: "Chioma A.", role: "2026 Aspirant", text: "ALPHAPHYSICS helped me understand the whole JAMB process. I was confused about subject combinations but they explained everything clearly." },
  { name: "Tunde O.", role: "University Student", text: "I joined the aspirants community last year and the information I got about admission forms and deadlines was very useful. I didn't miss any important date." },
  { name: "Mrs. Adeyemi", role: "Parent", text: "As a parent, I needed to understand how admission works in Nigeria today. ALPHAPHYSICS explained it in simple terms and guided my son through the process." },
  { name: "Blessing E.", role: "2026 Aspirant", text: "The one-on-one consultation helped me choose between polytechnic and university. They listened to my situation and gave honest advice." },
  { name: "Ibrahim M.", role: "Polytechnic Student", text: "I almost registered the wrong subjects for JAMB. ALPHAPHYSICS corrected me and explained why my course needed different subjects." },
  { name: "Favour U.", role: "2026 Aspirant", text: "The resources on their website helped me prepare early. Simple, clear information without the confusion you find on social media." },
];

export default function Testimonials() {
  return (
    <section className="bg-slate-50 py-14">
      <div className="mx-auto w-full max-w-6xl px-5 sm:px-8">
        <p className="mb-2 text-xs font-bold uppercase tracking-[.18em] text-gold-dark">Testimonials</p>
        <h2 className="text-3xl font-bold leading-tight sm:text-4xl">What students say</h2>
        <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((t) => (
            <article key={t.name} className="flex flex-col rounded-md border border-slate-200 bg-white p-6">
              <svg viewBox="0 0 24 24" className="mb-3 h-8 w-8 text-gold" fill="currentColor"><path d="M4.583 17.321C3.553 16.227 3 15 3 13.011c0-3.5 2.457-6.637 6.03-8.188l.893 1.378c-3.335 1.804-3.987 4.145-4.247 5.621.537-.278 1.24-.375 1.929-.311 1.804.167 3.226 1.648 3.226 3.489a3.5 3.5 0 01-3.5 3.5c-1.073 0-2.099-.49-2.748-1.179zm10 0C13.553 16.227 13 15 13 13.011c0-3.5 2.457-6.637 6.03-8.188l.893 1.378c-3.335 1.804-3.987 4.145-4.247 5.621.537-.278 1.24-.375 1.929-.311 1.804.167 3.226 1.648 3.226 3.489a3.5 3.5 0 01-3.5 3.5c-1.073 0-2.099-.49-2.748-1.179z" /></svg>
              <p className="flex-1 text-slate-600 leading-relaxed">{t.text}</p>
              <div className="mt-4 border-t border-slate-100 pt-3">
                <p className="font-bold text-navy">{t.name}</p>
                <p className="text-sm text-slate-500">{t.role}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
