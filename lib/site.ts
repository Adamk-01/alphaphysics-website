// ===== CENTRAL CONFIG: edit business info here =====
const FALLBACK_URL = "https://alphaphysics-website.vercel.app";

function resolveUrl(): string {
  const raw = process.env.NEXT_PUBLIC_SITE_URL?.trim();
  if (!raw) {
    if (process.env.NODE_ENV === "production") {
      console.warn(
        "[ALPHAPHYSICS] NEXT_PUBLIC_SITE_URL is not set. Canonical URLs, sitemap.xml and JSON-LD " +
          `will fall back to ${FALLBACK_URL}. Set it in your hosting provider before deploying.`,
      );
    }
    return FALLBACK_URL;
  }
  // Normalise: strip a trailing slash so `${site.url}${path}` never doubles up.
  return raw.replace(/\/+$/, "");
}

export const site = {
  name: "ALPHAPHYSICS EDU CONSULT",
  /** Short brand used in the <title> template — long names push titles past Google's truncation point. */
  shortName: "ALPHAPHYSICS",
  tagline: "Your One-Stop Admission & Education Hub",
  description:
    "Practical admission guidance, JAMB/UTME support and educational information for students and prospective undergraduates in Nigeria.",
  url: resolveUrl(),
  phone: "08023836040",
  whatsappNumber: "2348023836040",
  groupLink: "https://chat.whatsapp.com/Kx9p8hsiE0p2cEe1VVEY56",
  email: "alphaphysicseduconsult@gmail.com",
  address: "3, Okegbenro Street, Iju Ishaga, Lagos, Nigeria",
  addressLocality: "Lagos",
  addressRegion: "Lagos",
  country: "NG",
  /**
   * Social profiles. Only entries with a real URL are rendered — on the site and in the
   * JSON-LD `sameAs` array. Leave an entry out entirely rather than adding a placeholder;
   * an empty list renders no social block at all.
   *
   * To add one, give it the full profile URL:
   *   socials: { Instagram: "https://instagram.com/yourhandle" },
   */
  socials: {} as Record<string, string>,

  /**
   * Primary search terms. Google has ignored <meta name="keywords"> since 2009, but Bing,
   * Yandex, Naver and several social/AI crawlers still read it, and it keeps the site's
   * topic focus documented in one place. Ranking comes from page content + titles + links,
   * not from this list — see app/admission/page.tsx for the page that actually targets
   * "admission" as a head term.
   */
  keywords: [
    "admission",
    "admission in Nigeria",
    "university admission",
    "JAMB admission",
    "how to gain admission in Nigeria",
    "2027 JAMB",
    "UTME 2027",
    "JAMB registration",
    "JAMB cut off mark",
    "cut off mark for all courses",
    "post UTME",
    "O'Level requirements for admission",
    "WAEC result upload to CAPS",
    "JAMB CAPS",
    "change of course and institution",
    "admission processing",
    "JAMB services",
    "NIN for JAMB",
    "admission consultant Lagos",
    "education consultant Nigeria",
    "2027 aspirants",
  ],
};

export const wa = (msg: string) => `https://wa.me/${site.whatsappNumber}?text=${encodeURIComponent(msg)}`;
export const MSG = {
  general: "Hello ALPHAPHYSICS EDU CONSULT, I need admission guidance.",
  aspirants: "Hello ALPHAPHYSICS EDU CONSULT, I would like to get information about the 2027 Aspirants Community.",
};
export const groupHref = site.groupLink || wa(MSG.aspirants);

export const nav = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/services", label: "Services" },
  { href: "/admission", label: "Admission" },
  { href: "/cut-off-checker", label: "Cut-Off Marks" },
  { href: "/2027-aspirants", label: "2027 Aspirants" },
  { href: "/resources", label: "Resources" },
  { href: "/faq", label: "FAQ" },
  { href: "/contact", label: "Contact" },
];

/** Querystring-safe WhatsApp deep links used across cards. */
export const legalUpdated = "23 October 2026";

export type Service = {
  slug: string;
  title: string;
  icon: string;
  short: string;
  what: string;
  who: string;
  help: string[];
  msg: string;
  keywords: string[];
  seoDescription: string;
};
export const services: Service[] = [
  {
    slug: "jamb-services",
    title: "JAMB Services",
    icon: "file",
    short: "JAMB/UTME processing, CAPS uploads, result printing and profile corrections.",
    what:
      "We help candidates complete and correct every part of the JAMB process — from profile code creation to printing admission letters and uploading O'Level results to CAPS. We work from the official JAMB portal, so every step is done on the record and you keep proof of it.",
    who: "UTME candidates, admission seekers, Direct Entry candidates and anyone who needs a JAMB profile correction.",
    help: [
      "Admission Letter Printing",
      "Original UTME Result Printing",
      "JAMB Registration Slip",
      "O'Level Upload to CAPS",
      "Change of Course/Institution",
      "Profile Code & Other JAMB Services",
    ],
    msg: "Hello ALPHAPHYSICS EDU CONSULT, I need help with JAMB Services.",
    keywords: ["JAMB services", "JAMB registration", "JAMB CAPS upload", "change of course JAMB"],
    seoDescription: "JAMB registration, profile code, CAPS upload, result printing and change of course or institution, handled on the official JAMB portal for candidates across Nigeria.",
  },
  {
    slug: "admission-processing",
    title: "Admission Processing",
    icon: "compass",
    short: "Application processing for universities, polytechnics and specialised programmes.",
    what:
      "We take the paperwork and form-filling off your hands. From Post-UTME screening to Direct Entry, JUPEB, IJMB, nursing and ND/HND applications, we prepare the submission, check it against the institution's published requirements and make sure nothing is left out before the deadline.",
    who: "Undergraduates, Direct Entry candidates, diploma and nursing applicants and parents submitting on a child's behalf.",
    help: [
      "Post-UTME Registration",
      "ND/HND & Diploma Applications",
      "JUPEB & IJMB Applications",
      "Nursing Applications",
      "Direct Entry Processing",
      "University & Polytechnic Admission Processing",
    ],
    msg: "Hello ALPHAPHYSICS EDU CONSULT, I need help with Admission Processing.",
    keywords: ["admission processing", "post UTME registration", "direct entry", "JUPEB IJMB"],
    seoDescription: "Post-UTME, Direct Entry, JUPEB, IJMB, nursing and ND/HND application processing, checked against each institution's published requirements before submission.",
  },
  {
    slug: "olevel-exam-services",
    title: "O'Level & Exam Services",
    icon: "book",
    short: "Result checking, verification and WAEC digital certificate processing.",
    what:
      "Fast, careful handling of O'Level paperwork: checking and verifying WAEC, NECO and NABTEB results, and processing digital certificates that institutions accept for clearance. We confirm the result details line up with your JAMB record before anything is submitted.",
    who: "Secondary school leavers, admission seekers and anyone whose institution has asked for result verification.",
    help: [
      "WAEC, NECO & NABTEB Services",
      "Result Checking & Verification",
      "WAEC Digital Certificate Processing",
      "NECO Result Verification",
    ],
    msg: "Hello ALPHAPHYSICS EDU CONSULT, I need help with O'Level & Exam Services.",
    keywords: ["WAEC result checker", "NECO verification", "WAEC digital certificate"],
    seoDescription: "WAEC, NECO and NABTEB result checking, verification and digital certificate processing for admission clearance, with your details checked against your JAMB record.",
  },
  {
    slug: "documents-certificates",
    title: "Documents & Certificates",
    icon: "clip",
    short: "Processing of educational, local government and official documents.",
    what:
      "We help you assemble the supporting documents admission clearance asks for — birth certificates, state of origin, attestation letters, local government identification and school testimonials — and we tell you up front what each one costs and how long it takes.",
    who: "Admission seekers clearing their documents, fresh graduates and anyone needing official certificates.",
    help: [
      "Birth & State of Origin Certificates",
      "Attestation & Recommendation Letters",
      "Local Government & Marriage Certificates",
      "School Leaving Testimonial Certificates",
      "Admission Clearance & Educational Documents",
    ],
    msg: "Hello ALPHAPHYSICS EDU CONSULT, I need help processing Documents & Certificates.",
    keywords: ["state of origin certificate", "birth certificate Nigeria", "admission clearance documents"],
    seoDescription: "Birth certificates, state of origin and local government certificates, attestation letters and school testimonials processed for admission clearance and official use.",
  },
  {
    slug: "nin-services",
    title: "NIN Services",
    icon: "users",
    short: "NIN modification, slips and National ID card processing.",
    what:
      "Your NIN details must match your name and date of birth exactly, or JAMB registration will stall. We handle the correction and slip printing so that mismatch does not cost you a registration window.",
    who: "JAMB candidates, admission seekers and members of the public updating their NIN record.",
    help: ["NIN Modification (Name, DOB, etc.)", "Regular & Premium NIN Slip Printing", "National ID Card Processing"],
    msg: "Hello ALPHAPHYSICS EDU CONSULT, I need help with NIN Services.",
    keywords: ["NIN modification", "NIN slip printing", "NIN for JAMB registration"],
    seoDescription: "NIN modification for name and date-of-birth mismatches, NIN slip printing and National ID card processing, so your JAMB registration is not held up by a record error.",
  },
  {
    slug: "one-on-one-consultation",
    title: "One-on-One Consultation",
    icon: "building",
    short: "Personal guidance for your own admission situation.",
    what:
      "A private, unhurried conversation about your results, your course choice and your realistic options. We explain what is working in your favour, what is not, and the specific next steps that improve your chances — in plain English, not admission jargon.",
    who: "Students and parents who want advice specific to their situation rather than a general article.",
    help: ["Listen to your situation", "Explain your options clearly", "Suggest sensible next steps"],
    msg: "Hello ALPHAPHYSICS EDU CONSULT, I would like a one-on-one consultation.",
    keywords: ["admission consultation", "education consultant Lagos", "course selection advice"],
    seoDescription: "A private consultation about your results, course choice and realistic admission options, with clear next steps in plain English rather than admission jargon.",
  },
];
