import { meta } from "@/lib/seo";
import { site } from "@/lib/site";
import { PageHero, Container, WaBtn } from "@/components/ui";
import ContactForm from "@/components/ContactForm";
export const metadata = meta("Contact ALPHAPHYSICS EDU CONSULT", "Contact ALPHAPHYSICS EDU CONSULT on 08023836040 or WhatsApp for JAMB/UTME, admission and school information help.", "/contact");
export default function Contact() {
  return (<>
    <PageHero eyebrow="Contact" title="Talk to us">Need help with JAMB, admission or school information? Talk to us on WhatsApp.</PageHero>
    <section className="py-14"><Container className="grid gap-12 md:grid-cols-2">
      <div className="space-y-4">
        <p className="text-lg"><span className="font-bold text-navy">Phone:</span> <a href={`tel:${site.phone}`} className="underline">{site.phone}</a></p>
        <p className="text-lg"><span className="font-bold text-navy">WhatsApp:</span> {site.phone}</p>
        {site.email && <p className="text-lg"><span className="font-bold text-navy">Email:</span> {site.email}</p>}
        {/* PLACEHOLDER: address shows only when site.address is set in lib/site.ts */}
        {site.address && <p className="text-lg"><span className="font-bold text-navy">Address:</span> {site.address}</p>}
        <WaBtn label="Chat on WhatsApp" />
      </div>
      <ContactForm />
    </Container></section>
  </>);
}
