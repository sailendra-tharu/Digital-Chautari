import type { Metadata } from "next";
import { PageHero } from "@/components/sections/PageHero";
import { Text } from "@/components/ui/Text";
import { legalSections } from "@/data/legal";

export const metadata: Metadata = { title: "Legal", description: "Read Digital Chautari policies and learn how we handle information and client relationships." };

export default function LegalPage() {
  return (
    <main>
      <PageHero eyebrow="Legal" title={<>Policies, <span className="text-gradient">plainly written.</span></>} description="How we handle your information and what to expect when working with us." />
      <section className="section">
        <div className="container faq-container">
          {legalSections.map((section) => (
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
