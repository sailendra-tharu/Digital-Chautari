import type { Metadata } from "next";
import { DarkCta } from "@/components/sections/DarkCta";
import { PageHero } from "@/components/sections/PageHero";
import { SectionHeading } from "@/components/sections/SectionHeading";
import { Text } from "@/components/ui/Text";
import { faqs } from "@/data/faq";

export const metadata: Metadata = { title: "FAQ", description: "Find answers to common questions about Digital Chautari services, process, and partnerships." };

export default function FaqPage() {
  return (
    <main>
      <PageHero eyebrow="Quick answers" title={<>Frequently asked <span className="text-gradient">questions.</span></>} description="The small things you might want to know before we talk. Can't find your answer? Just ask." />
      <section className="section">
        <div className="container faq-container">
          <SectionHeading eyebrow="Good to know" title="Before we start" />
          <div className="faq-list">
            {faqs.map(({ question, answer }) => (
              <details className="faq-item" key={question}>
                <summary>{question}</summary>
                <Text>{answer}</Text>
              </details>
            ))}
          </div>
        </div>
      </section>
      <DarkCta title={<>Still have a <span className="text-gradient">question?</span></>} button="Get in Touch">We usually reply within 24 hours.</DarkCta>
    </main>
  );
}
