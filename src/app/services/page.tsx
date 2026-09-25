import type { Metadata } from "next";
import { ArrowRight } from "lucide-react";
import Image from "next/image";
import { PricingCard } from "@/components/cards/PricingCard";
import { CenteredCta } from "@/components/sections/CenteredCta";
import { MediaHero } from "@/components/sections/MediaHero";
import { SectionHeading } from "@/components/sections/SectionHeading";
import { HeroNote } from "@/components/services/HeroNote";
import { IndustryTile } from "@/components/services/IndustryTile";
import { ServiceCategoryCard } from "@/components/services/ServiceCategoryCard";
import { industries, plans, serviceCategories } from "@/data/services";
import { WhyWorkWithUs } from "@/components/services/WhyWorkWithUs";
import { Button } from "@/components/ui/Button";

export const metadata: Metadata = { title: "Services", description: "Explore Digital Chautari services across digital marketing, content creation, branding, and software development." };

const CONSULTATION_HREF = "/contact#contact-form";

export default function ServicesPage() {
  return (
    <main>
      <MediaHero
        eyebrow="Local roots × Digital growth"
        title={<>Services that <span className="text-gradient">drive growth.</span></>}
        description="We help businesses, creators and communities turn ideas into impact with modern digital solutions — from strategy to software."
        actions={<Button href={CONSULTATION_HREF} icon={ArrowRight}>Book a Consultation</Button>}
        media={
          <Image
            src="/assets/services-chautari.jpg"
            alt="A community gathered under a chautari tree at sunrise, discussing ideas around a laptop"
            fill
            priority
            sizes="(max-width: 760px) 100vw, 64vw"
            className="media-hero-img"
            style={{ objectPosition: "right bottom" }}
          />
        }
        overlay={<HeroNote>From our chautari<br />to your digital future</HeroNote>}
      />

      <section className="section-tight services-section">
        <div className="container">
          <SectionHeading eyebrowStyle="plain" eyebrow="Our services" title="Service categories" />
          <div className="service-category-list">
            {serviceCategories.map((category) => <ServiceCategoryCard key={category.id} category={category} />)}
          </div>
        </div>
      </section>

      <section className="section-tight services-section services-pricing" id="pricing">
        <div className="container">
          <SectionHeading centered eyebrowStyle="plain" eyebrow="Pricing" title="Flexible plans for every stage" />
          <div className="plan-grid">
            {plans.map((plan) => <PricingCard key={plan.name} plan={plan} />)}
          </div>
        </div>
      </section>

      <section className="section-tight services-section">
        <div className="container">
          <SectionHeading eyebrowStyle="plain" eyebrow="Industries" title="Who we work with" />
          <div className="industry-tile-grid">
            {industries.map((industry) => <IndustryTile key={industry.label} {...industry} />)}
          </div>
        </div>
      </section>

      <WhyWorkWithUs />
      <CenteredCta title="Let's find the right service for you" button="Book a Consultation" href={CONSULTATION_HREF} />
    </main>
  );
}
