import type { Metadata } from "next";
import { DarkCta } from "@/components/sections/DarkCta";
import { PageHero } from "@/components/sections/PageHero";
import { SectionHeading } from "@/components/sections/SectionHeading";
import { Text } from "@/components/ui/Text";

export const metadata: Metadata = { title: "FAQ" };

const faqs = [
  ["How do we get started?", "Send us a message through the contact form or email hello@digitalchautari.com. We'll set up a short discovery call to understand your goals, then share a proposal within 2–3 working days."],
  ["What does a typical project cost?", "Our retainers start at Rs 15,000/mo (Starter) and Rs 45,000/mo (Professional). Larger or multi-channel work is scoped as a custom Enterprise engagement."],
  ["How long does a project take?", "Campaigns can launch in 2–4 weeks. Websites and software typically take 6–12 weeks depending on scope — we'll give you a clear timeline before we begin."],
  ["Do you work with clients outside Kathmandu?", "Yes. We're based in Kathmandu and work with clients across Nepal and internationally, with remote collaboration built into our process."],
  ["Will I have a single point of contact?", "Every engagement gets a dedicated project manager who keeps communication clear and the work moving."],
  ["What happens after launch?", "We offer post-launch support, performance reporting, and ongoing improvements so your work keeps getting better."],
];

export default function FaqPage() {
  return (
    <main>
      <PageHero eyebrow="Quick answers" title={<>Frequently asked <span className="text-gradient">questions.</span></>} description="The small things you might want to know before we talk. Can't find your answer? Just ask." />
      <section className="section">
        <div className="container faq-container">
          <SectionHeading eyebrow="Good to know" title="Before we start" />
          <div className="faq-list">
            {faqs.map(([question, answer]) => (
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
