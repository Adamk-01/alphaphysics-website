import Link from "next/link";
import { meta } from "@/lib/seo";
import { site } from "@/lib/site";
import { Container, PageHero } from "@/components/ui";
import Breadcrumb from "@/components/Schema";

export const metadata = meta(
  "Privacy Policy",
  "How ALPHAPHYSICS EDU CONSULT collects, uses and protects your personal data, including cookies used by Google AdSense.",
  "/privacy",
  { keywords: ["privacy policy", "data protection Nigeria"] },
);

const updated = "23 October 2026";

export default function Privacy() {
  return (
    <>
      <Breadcrumb items={[{ name: "Privacy Policy", path: "/privacy" }]} />
      <PageHero eyebrow="Legal" title="Privacy Policy">
        What we collect, why, and what you can ask us to do with it.
      </PageHero>

      <section className="py-14">
        <Container className="max-w-3xl space-y-8 leading-relaxed text-slate-700">
          <p className="text-sm text-slate-600">
            Last updated: <time dateTime="2026-10-23">{updated}</time>
          </p>

          <div>
            <h2 className="text-2xl font-bold">Who we are</h2>
            <p className="mt-3">
              {site.name} is an independent education and admission support service based at {site.address}. We are the
              data controller for the personal information described in this policy. You can reach us at{" "}
              <a href={`mailto:${site.email}`} className="font-semibold text-navy underline">
                {site.email}
              </a>{" "}
              or on{" "}
              <a href={`tel:${site.phone}`} className="font-semibold text-navy underline">
                {site.phone}
              </a>
              .
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-bold">What we collect</h2>
            <p className="mt-3">
              <strong>Information you send us.</strong> When you use the contact form or message us on WhatsApp, you may
              give us your name, phone number, email address, the service you need and the details you choose to write
              in your message. Please do not send sensitive documents such as your NIN slip, birth certificate or exam
              results unless we have asked for them for a specific service.
            </p>
            <p className="mt-3">
              <strong>Information collected automatically.</strong> Like most websites, our hosting provider records
              technical information such as your IP address, browser type and the pages you visited. This is used to keep
              the site secure and working, not to identify you personally.
            </p>
            <p className="mt-3">
              <strong>Cookies.</strong> Small files placed on your device. Some are necessary for the site to work;
              others are set by Google for advertising, as explained below.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-bold">The contact form does not store your message</h2>
            <p className="mt-3">
              Our contact form runs entirely in your browser. When you press send, it opens WhatsApp with your message
              pre-filled and you choose whether to send it. Nothing you type into that form is saved on this website. Once
              you press send in WhatsApp, that conversation is handled under WhatsApp&apos;s own privacy terms as well as
              ours.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-bold">Why we use it</h2>
            <ul className="mt-3 list-disc space-y-2 pl-5">
              <li>To reply to your enquiry and provide the service you asked for.</li>
              <li>To keep records of work we have carried out for you.</li>
              <li>To keep the website secure and understand which pages are useful.</li>
              <li>To show advertising that funds the free guides on this site.</li>
            </ul>
            <p className="mt-3">
              We rely on your consent for marketing-style communication and on the performance of our service to you for
              the rest. You can withdraw consent at any time by contacting us.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-bold">Advertising and Google AdSense</h2>
            <p className="mt-3">
              This site displays advertising through Google AdSense. Third-party vendors, including Google, use cookies
              to serve ads based on your prior visits to this website or other websites. Google&apos;s use of advertising
              cookies enables it and its partners to serve ads to you based on your visit to this site and/or other sites
              on the internet.
            </p>
            <p className="mt-3">
              You may opt out of personalised advertising by visiting{" "}
              <a
                href="https://www.google.com/settings/ads"
                className="font-semibold text-navy underline"
                target="_blank"
                rel="noopener noreferrer"
              >
                Google Ads Settings
              </a>
              , or opt out of third-party vendors&apos; use of cookies for personalised advertising at{" "}
              <a
                href="https://www.aboutads.info/choices/"
                className="font-semibold text-navy underline"
                target="_blank"
                rel="noopener noreferrer"
              >
                aboutads.info
              </a>
              . Google&apos;s own explanation of how it uses information from sites that use its services is available at{" "}
              <a
                href="https://policies.google.com/technologies/partner-sites"
                className="font-semibold text-navy underline"
                target="_blank"
                rel="noopener noreferrer"
              >
                policies.google.com/technologies/partner-sites
              </a>
              .
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-bold">Who we share it with</h2>
            <p className="mt-3">
              We do not sell your personal information. We share it only where necessary: with our hosting provider, with
              Google for advertising and analytics, and with WhatsApp when you choose to message us. We may also disclose
              information where the law requires it.
            </p>
            <p className="mt-3">
              If a service requires us to submit information to an institution or to JAMB on your behalf, we will tell you
              that we are doing so before it happens.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-bold">How long we keep it</h2>
            <p className="mt-3">
              Enquiry messages are kept for up to 24 months so we can follow up on your case. Records of a completed
              service are kept for up to 6 years, which is the period we may need them for accounting or dispute
              purposes. After that they are deleted.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-bold">Your rights</h2>
            <p className="mt-3">
              Under the Nigeria Data Protection Act 2023 you can ask us to confirm what personal data we hold about you,
              give you a copy, correct anything inaccurate, delete it, or stop using it for a particular purpose. You can
              also object to us processing it, and you can complain to the Nigeria Data Protection Commission.
            </p>
            <p className="mt-3">
              To exercise any of these rights, email{" "}
              <a href={`mailto:${site.email}`} className="font-semibold text-navy underline">
                {site.email}
              </a>{" "}
              with &ldquo;Data request&rdquo; in the subject line. We will respond within 30 days.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-bold">Security</h2>
            <p className="mt-3">
              We use reasonable technical and organisational measures to protect the information you send us, including
              encrypted connections to this website. No method of transmission over the internet is completely secure, so
              please avoid sending sensitive documents through the contact form. Send them through the channel we specify
              for that service.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-bold">Children</h2>
            <p className="mt-3">
              Many of our readers are secondary school students. We do not knowingly collect personal information from
              anyone under 18 without the involvement of a parent or guardian. If you believe a child has sent us personal
              information, contact us and we will delete it.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-bold">Changes to this policy</h2>
            <p className="mt-3">
              If we change how we handle personal data we will update this page and the date at the top. Please check back
              occasionally.
            </p>
            <p className="mt-3">
              See also our{" "}
              <Link href="/terms" className="font-semibold text-navy underline">
                Terms of Service
              </Link>
              .
            </p>
          </div>
        </Container>
      </section>
    </>
  );
}
