import { meta } from "@/lib/seo";
import { site } from "@/lib/site";
import { PageHero, Container, WaBtn } from "@/components/ui";
import ContactForm from "@/components/ContactForm";
import Breadcrumb from "@/components/Schema";

export const metadata = meta(
  "Contact Us",
  "Contact ALPHAPHYSICS EDU CONSULT in Lagos on 08023836040 or WhatsApp for JAMB/UTME, admission and O'Level support.",
  "/contact",
  { keywords: ["contact admission consultant Lagos", "JAMB help Lagos", "WhatsApp admission guidance"] },
);

export default function Contact() {
  return (
    <>
      <Breadcrumb items={[{ name: "Contact", path: "/contact" }]} />
      <PageHero eyebrow="Contact" title="Talk to us">
        Need help with JAMB, admission or school information? Message us on WhatsApp, call, or use the form. Most
        enquiries are answered the same day.
      </PageHero>

      <section className="py-14">
        <Container className="grid gap-12 md:grid-cols-2">
          <div className="space-y-6">
            <div>
              <h2 className="text-2xl font-bold">Ways to reach us</h2>
              <dl className="mt-4 space-y-4 text-lg">
                <div>
                  <dt className="font-bold text-navy">WhatsApp</dt>
                  <dd>
                    <a
                      href={`https://wa.me/${site.whatsappNumber}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="underline"
                    >
                      {site.phone}
                    </a>{" "}
                    — usually the fastest way to get an answer.
                  </dd>
                </div>
                <div>
                  <dt className="font-bold text-navy">Phone</dt>
                  <dd>
                    <a href={`tel:${site.phone}`} className="underline">
                      {site.phone}
                    </a>
                  </dd>
                </div>
                <div>
                  <dt className="font-bold text-navy">Email</dt>
                  <dd>
                    <a href={`mailto:${site.email}`} className="underline">
                      {site.email}
                    </a>
                  </dd>
                </div>
                <div>
                  <dt className="font-bold text-navy">Office</dt>
                  <dd>{site.address}</dd>
                </div>
              </dl>
              <div className="mt-6">
                <WaBtn label="Chat on WhatsApp" />
              </div>
            </div>

            <div className="rounded-md border-l-4 border-gold bg-navy-light p-5 text-sm leading-relaxed text-slate-700">
              <p className="font-bold text-navy">Before you message us</p>
              <p className="mt-1">
                It helps to have your course, the institution you applied to, your UTME score and your O&apos;Level
                position to hand. With those four things we can usually answer in one message instead of five.
              </p>
              <p className="mt-3">
                Please do not send your NIN slip, birth certificate or result documents in a first message. We will tell
                you which channel to use for the service you need.
              </p>
            </div>

            <div className="rounded-md border border-slate-200 p-5 text-sm leading-relaxed text-slate-700">
              <p className="font-bold text-navy">What we will not ask for</p>
              <p className="mt-1">
                We will never ask for your JAMB profile password, your bank card details, or payment to a personal
                account that has not been confirmed with you in writing. If you receive a message that does, it is not
                from us — call {site.phone} to check.
              </p>
            </div>
          </div>

          <div>
            <h2 className="text-2xl font-bold">Send a message</h2>
            <p className="mt-2 text-slate-700">
              Fill this in and it will open WhatsApp with your message ready to send. Nothing is stored on this website.
            </p>
            <div className="mt-6">
              <ContactForm />
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
