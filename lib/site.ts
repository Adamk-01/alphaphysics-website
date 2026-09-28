// ===== CENTRAL CONFIG: edit business info here =====
export const site = {
  name: "ALPHAPHYSICS EDU CONSULT",
  tagline: "Your One-Stop Admission & Education Hub",
  description: "Practical admission guidance, JAMB/UTME support and educational information for students and prospective undergraduates in Nigeria.",
  url: process.env.NEXT_PUBLIC_SITE_URL || "https://your-domain.com",
  phone: "08023836040",
  whatsappNumber: "2348023836040",
  // PLACEHOLDER: paste the real 2027 Aspirants WhatsApp group invite link here (e.g. https://chat.whatsapp.com/XXXX).
  // Until then, the join buttons open a WhatsApp chat with you instead.
  groupLink: "https://chat.whatsapp.com/Kx9p8hsiE0p2cEe1VVEY56",
  email: "alphaphysicseduconsult@gmail.com",
  address: "3, Okegbenro Street, Iju Ishaga, Lagos, Nigeria",
  // PLACEHOLDER: full profile URLs. Empty ones are hidden from the site and JSON-LD.
  socials: { Instagram: "", Facebook: "", TikTok: "", X: "", LinkedIn: "", YouTube: "" } as Record<string, string>,
};
export const wa = (msg: string) => `https://wa.me/${site.whatsappNumber}?text=${encodeURIComponent(msg)}`;
export const MSG = {
  general: "Hello ALPHAPHYSICS EDU CONSULT, I need admission guidance.",
  aspirants: "Hello ALPHAPHYSICS EDU CONSULT, I would like to get information about the 2027 Aspirants Community.",
};
export const groupHref = site.groupLink || wa(MSG.aspirants);

export const nav = [
  { href: "/", label: "Home" }, { href: "/about", label: "About" }, { href: "/services", label: "Services" },
  { href: "/cut-off-checker", label: "Cut-Off Checker" }, { href: "/2027-aspirants", label: "2027 Aspirants" }, 
  { href: "/resources", label: "Resources" }, { href: "/faq", label: "FAQ" }, { href: "/contact", label: "Contact" },
];

export type Service = { slug: string; title: string; icon: string; short: string; what: string; who: string; help: string[]; msg: string };
export const services: Service[] = [
  { slug: "jamb-services", title: "JAMB Services", icon: "file", short: "Comprehensive JAMB/UTME processing, uploads, and corrections.",
    what: "We handle all your JAMB-related processing quickly and accurately to ensure a smooth admission journey.",
    who: "JAMBITES, admission seekers, and candidates needing profile corrections.",
    help: ["Admission Letter Printing", "Original UTME Result Printing", "JAMB Registration Slip", "O'Level Upload to CAPS", "Change of Course/Institution", "Profile Code & Other JAMB Services"],
    msg: "Hello ALPHAPHYSICS EDU CONSULT, I need help with JAMB Services." },
  { slug: "admission-processing", title: "Admission Processing", icon: "compass", short: "Seamless application processing for universities, polytechnics, and specialized programs.",
    what: "We take the stress out of applying to your dream school. From Post-UTME to Direct Entry, we process your applications flawlessly.",
    who: "Undergraduates, direct entry candidates, and diploma/nursing applicants.",
    help: ["Post-UTME Registration", "ND/HND & Diploma Applications", "JUPEB & IJMB Applications", "Nursing Applications", "Direct Entry Processing", "University & Polytechnic Admission Processing"],
    msg: "Hello ALPHAPHYSICS EDU CONSULT, I need help with Admission Processing." },
  { slug: "olevel-exam-services", title: "O'Level & Exam Services", icon: "book", short: "Result checking, verification, and digital certificate processing.",
    what: "Fast and reliable processing for all your O'Level and exam-related needs, including digital certificates.",
    who: "Secondary school leavers, admission seekers, and anyone needing result verification.",
    help: ["WAEC, NECO & NABTEB Services", "Result Checking & Verification", "WAEC Digital Certificate Processing", "NECO Result Verification"],
    msg: "Hello ALPHAPHYSICS EDU CONSULT, I need help with O'Level & Exam Services." },
  { slug: "documents-certificates", title: "Documents & Certificates", icon: "clip", short: "Processing of essential educational, local, and official documents.",
    what: "We assist in securing and processing critical documents needed for your admission clearance or general official use.",
    who: "Admission seekers clearing their documents, and anyone needing official certificates.",
    help: ["Birth & State of Origin Certificates", "Attestation & Recommendation Letters", "Local Government & Marriage Certificates", "School Leaving Testimonial Certificates", "Admission Clearance & Educational Documents"],
    msg: "Hello ALPHAPHYSICS EDU CONSULT, I need help processing Documents & Certificates." },
  { slug: "nin-services", title: "NIN Services", icon: "users", short: "NIN modification, slips, and National ID card processing.",
    what: "Avoid JAMB registration delays. We provide fast and reliable National Identification Number (NIN) services.",
    who: "JAMB candidates, admission seekers, and the general public.",
    help: ["NIN Modification (Name, DOB, etc.)", "Regular & Premium NIN Slip Printing", "National ID Card Processing"],
    msg: "Hello ALPHAPHYSICS EDU CONSULT, I need help with NIN Services." },
  { slug: "one-on-one-consultation", title: "One-on-One Consultation", icon: "building", short: "Personal guidance for your unique admission situation.",
    what: "A personal conversation about your goals, results, and options to give you the best chance at admission.",
    who: "Students and parents who want advice specific to their situation.",
    help: ["Listen to your situation", "Explain your options clearly", "Suggest sensible next steps"],
    msg: "Hello ALPHAPHYSICS EDU CONSULT, I would like a one-on-one consultation." },
];
