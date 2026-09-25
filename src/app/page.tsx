import { ArrowRight, ArrowUpRight, Check, Rocket, Sparkles, TrendingUp } from "lucide-react";
import { BlogCard } from "@/components/cards/BlogCard";
import { FeatureCard } from "@/components/cards/FeatureCard";
import { ProductCard } from "@/components/cards/ProductCard";
import { TestimonialCard } from "@/components/cards/TestimonialCard";
import { DarkCta } from "@/components/sections/DarkCta";
import { SectionHeading } from "@/components/sections/SectionHeading";
import { StatsBar } from "@/components/sections/StatsBar";
import { ArrowLink } from "@/components/ui/ArrowLink";
import { Button } from "@/components/ui/Button";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Icon } from "@/components/ui/Icon";
import { Text } from "@/components/ui/Text";
import {
  blogPosts, features, heroStats, impactStats, industries, processSteps, serviceTeasers, testimonials, ventures, whoWeAre,
} from "@/data/home";

export default function Home() {
  return (
    <main>
      <section className="hero">
        <div className="hero-glow" />
        <div className="container hero-grid">
          <div className="hero-copy reveal">
            <Eyebrow><Rocket size={14} aria-hidden="true" /> Welcome to Digital Chautari</Eyebrow>
            <Text variant="h1">We build <span className="text-gradient">digital bridges</span> between ideas and impact.</Text>
            <Text variant="lede">We are a creative technology company helping ambitious organizations grow through thoughtful marketing, compelling content, and technology that works.</Text>
            <div className="hero-actions">
              <Button href="/services" icon={ArrowRight}>Explore Services</Button>
              <Button href="/products" secondary>View Products</Button>
            </div>
          </div>
          <div className="hero-art reveal">
            <div className="hero-stage">
              <div className="hero-card">
                <div className="hero-card-header"><span>Impact dashboard</span><b>Live <ArrowUpRight size={12} aria-hidden="true" /></b></div>
                <Text variant="h3">Small moves. Meaningful momentum.</Text>
                <div className="hero-chart"><span /><span /><span /><span /><span /><span /></div>
                <div className="hero-card-foot"><span>Growth this quarter</span><strong>+68.4%</strong></div>
              </div>
              <div className="floating-note note-one"><span className="note-icon"><Sparkles size={16} aria-hidden="true" /></span><span><strong>250+</strong><Text as="small" variant="caption">projects delivered</Text></span></div>
              <div className="floating-note note-two"><span className="note-icon"><TrendingUp size={16} aria-hidden="true" /></span><span><strong>98%</strong><Text as="small" variant="caption">client retention</Text></span></div>
            </div>
          </div>
        </div>
      </section>
      <div className="container"><StatsBar stats={heroStats} /></div>

      <section className="section section-tight">
        <div className="container">
          <SectionHeading centered eyebrow="Why Digital Chautari" title={<>The right mix of <span className="text-gradient">curiosity and craft.</span></>} description="We bring creative thinking and technical depth together to make good ideas go further." />
          <div className="feature-grid">
            {features.map((feature) => (
              <FeatureCard key={feature.title} icon={feature.icon} title={feature.title} tone={feature.tone}>{feature.description}</FeatureCard>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container split-grid">
          <div className="story-copy">
            <SectionHeading eyebrow="Who we are" title={<>A Chautari where ideas meet <span className="text-gradient">execution.</span></>} />
            {whoWeAre.paragraphs.map((paragraph) => <Text key={paragraph}>{paragraph}</Text>)}
            <ul className="checklist">
              {whoWeAre.checklist.map((item) => (
                <li key={item}><span className="check-dot"><Check size={12} strokeWidth={3} aria-hidden="true" /></span>{item}</li>
              ))}
            </ul>
            <Button href="/about#team" icon={ArrowRight}>Meet the Team</Button>
          </div>
          <div className="teaser-grid">
            {serviceTeasers.map((teaser, index) => (
              <div className="teaser-card" key={teaser.title}>
                <div className="teaser-top">
                  <span className={`icon-chip ${teaser.tone}`}><Icon icon={teaser.icon} /></span>
                  <span>{String(index + 1).padStart(2, "0")}</span>
                </div>
                <div>
                  <Text variant="h3">{teaser.title}</Text>
                  <Text as="small" variant="caption">{teaser.tagline}</Text>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="dark-section dark-stats">
        <div className="container">
          <SectionHeading light eyebrow="A little proof" title={<>Good work leaves <span className="text-gradient">a mark.</span></>} description="A few numbers that remind us to keep raising the bar." />
          <StatsBar dark stats={impactStats} />
        </div>
      </section>

      <section className="section">
        <div className="container">
          <SectionHeading eyebrow="Our ventures" title={<>Three ventures, <span className="text-gradient">one vision.</span></>} description="Different expressions of the same belief: thoughtful work can make everyday life better." />
          <div className="product-grid">
            {ventures.map((venture) => (
              <ProductCard key={venture.title} image={venture.image} category={venture.category} title={venture.title} href={venture.href}>
                {venture.description}
              </ProductCard>
            ))}
          </div>
        </div>
      </section>

      <section className="section section-tight">
        <div className="container">
          <SectionHeading centered eyebrow="Across every sector" title={<>Built for people who <span className="text-gradient">want to move forward.</span></>} />
          <div className="industries-grid">
            {industries.map((industry) => (
              <div className="industry-card lift-card" key={industry.label}>
                <span className={`icon-chip ${industry.tone}`}><Icon icon={industry.icon} /></span>
                <Text variant="h3">{industry.label}</Text>
                <Text as="small" variant="caption">Explore possibilities <ArrowRight size={12} aria-hidden="true" /></Text>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="dark-section">
        <div className="container">
          <SectionHeading light eyebrow="How we work" title={<>Four steps from <span className="text-gradient">hunch to hello world.</span></>} description="Clear thinking, close collaboration, and a little bit of healthy obsession at every stage." />
          <div className="process-grid">
            {processSteps.map((step, index) => (
              <div className="process-card" key={step.step}>
                <div className="process-number">
                  <span className="icon-chip process-chip"><Icon icon={step.icon} size={18} /></span>
                  {String(index + 1).padStart(2, "0")} · {step.step}
                </div>
                <Text variant="h3">{step.title}</Text>
                <Text tone="light">{step.description}</Text>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <SectionHeading centered eyebrow="Kind words" title={<>The work speaks. <span className="text-gradient">So do our clients.</span></>} />
          <div className="testimonial-grid">
            {testimonials.map((testimonial) => <TestimonialCard key={testimonial.name} {...testimonial} />)}
          </div>
        </div>
      </section>

      <section className="section section-tight">
        <div className="container">
          <div className="section-heading-row">
            <SectionHeading eyebrow="From the chautari" title={<>Latest from <span className="text-gradient">our blog.</span></>} />
            <ArrowLink href="#blog">View all articles</ArrowLink>
          </div>
          <div className="blog-grid" id="blog">
            {blogPosts.map((post) => <BlogCard key={post.title} {...post} />)}
          </div>
        </div>
      </section>

      <DarkCta title={<>Ready to build something <span className="text-gradient">extraordinary</span> together?</>} secondary={{ label: "View Services", href: "/services" }}>
        Tell us where you want to go. We&apos;ll bring the map, the tools, and the energy to get there.
      </DarkCta>
    </main>
  );
}
