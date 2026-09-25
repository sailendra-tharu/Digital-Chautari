import type { Metadata } from "next";
import { PageHero } from "@/components/sections/PageHero";
import { Text } from "@/components/ui/Text";

export const metadata: Metadata = { title: "Legal" };

const sections = [
  { id: "privacy", title: "Privacy policy", body: "We only collect the information you share with us — such as your name, email, and project details submitted through our contact form — and use it solely to respond to your enquiry. We never sell your data." },
  { id: "terms", title: "Terms of service", body: "Content on this website is provided for general information. Project scope, pricing, and deliverables are agreed in writing with each client before work begins." },
  { id: "cookies", title: "Cookie policy", body: "This website uses only the cookies required for it to function. We do not use advertising or cross-site tracking cookies." },
];

export default function LegalPage() {
  return (
    <main>
      <PageHero eyebrow="Legal" title={<>Policies, <span className="text-gradient">plainly written.</span></>} description="How we handle your information and what to expect when working with us." />
      <section className="section">
        <div className="container faq-container">
          {sections.map((section) => (
            <article className="legal-block" id={section.id} key={section.id}>
              <Text variant="h2">{section.title}</Text>
              <Text>{section.body}</Text>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}
