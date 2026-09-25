import type { Metadata } from "next";
import Image from "next/image";
import { ContactForm } from "@/components/contact/ContactForm";
import { ContactInfoCard } from "@/components/contact/ContactInfoCard";
import { contactInfo, departments } from "@/data/contact";
import { DepartmentCard } from "@/components/contact/DepartmentCard";
import { FaqCallout } from "@/components/contact/FaqCallout";
import { MapCard } from "@/components/contact/MapCard";
import { ResponseTimeCard } from "@/components/contact/ResponseTimeCard";
import { MediaHero } from "@/components/sections/MediaHero";
import { SectionHeading } from "@/components/sections/SectionHeading";

export const metadata: Metadata = { title: "Contact", description: "Start a conversation with Digital Chautari about your next project, partnership, or idea." };

export default function ContactPage() {
  return (
    <main>
      <MediaHero
        eyebrow="Contact"
        title={<>Let&apos;s start a <span className="text-gradient">conversation.</span></>}
        description="Have a project in mind, a question, or just want to say hi? We'd love to hear from you. Our team is here to help."
        media={
          <Image
            src="/assets/contact-kathmandu.jpg"
            alt="Kathmandu's pagoda temples beneath the snow-capped Himalayas"
            fill
            priority
            sizes="(max-width: 760px) 100vw, 64vw"
            className="media-hero-img"
            style={{ objectPosition: "right 80%" }}
          />
        }
      />

      <section className="section-tight">
        <div className="container contact-info-grid">
          {contactInfo.map((info) => <ContactInfoCard key={info.title} info={info} />)}
        </div>
      </section>

      <section className="section-tight contact-direct">
        <div className="container">
          <SectionHeading eyebrowStyle="plain" eyebrow="Direct lines" title="Reach the right team" description="Need to talk to a specific department? Drop them a line directly." />
          <div className="department-grid">
            {departments.map((department) => <DepartmentCard key={department.title} department={department} />)}
          </div>
        </div>
      </section>

      <section className="section-tight contact-main" id="contact-form">
        <div className="container contact-layout">
          <ContactForm />
          <aside className="contact-side">
            <MapCard />
            <FaqCallout />
            <ResponseTimeCard />
          </aside>
        </div>
      </section>
    </main>
  );
}
