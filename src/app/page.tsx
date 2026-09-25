import {
  ArrowRight, ArrowUpRight, Briefcase, Check, Building2, Clapperboard, CodeXml, Cog, Cpu, Eye, GraduationCap, Heart,
  HeartHandshake, HeartPulse, Layers, Leaf, Lightbulb, Megaphone, Newspaper, Palette, PenTool, Plane, Repeat,
  Rocket, Search, ShoppingBag, Smartphone, Smile, Sparkles, Stethoscope, TrendingUp, Users,
} from "lucide-react";
import { BlogCard } from "@/components/cards/BlogCard";
import { FeatureCard } from "@/components/cards/FeatureCard";
import { ProductCard } from "@/components/cards/ProductCard";
import { TestimonialCard } from "@/components/cards/TestimonialCard";
import { DarkCta } from "@/components/sections/DarkCta";
import { SectionHeading } from "@/components/sections/SectionHeading";
import { StatsBar, type Stat } from "@/components/sections/StatsBar";
import { ArrowLink } from "@/components/ui/ArrowLink";
import { Button } from "@/components/ui/Button";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Icon } from "@/components/ui/Icon";
import { Text } from "@/components/ui/Text";

const heroStats: Stat[] = [
  { icon: Layers, value: "3", label: "Products" },
  { icon: Users, value: "6+", label: "Team members" },
  { icon: Heart, value: "100%", label: "Commitment" },
];

const impactStats: Stat[] = [
  { icon: Briefcase, value: "250+", label: "Projects delivered" },
  { icon: Smile, value: "40+", label: "Happy clients" },
  { icon: Eye, value: "1M+", label: "Content views" },
  { icon: Repeat, value: "98%", label: "Client retention" },
];

const tones = ["mint", "teal", "gold", "lilac", "pink"];

const industries = [
  { icon: HeartPulse, label: "Healthcare" }, { icon: ShoppingBag, label: "E-Commerce" }, { icon: Building2, label: "Real Estate" },
  { icon: GraduationCap, label: "Education" }, { icon: Plane, label: "Tourism & Hospitality" }, { icon: Newspaper, label: "Media & Publishing" },
];

export default function Home() {
  return (
    <>
      <main>
        <section className="hero">
          <div className="hero-glow" />
          <div className="container hero-grid">
            <div className="hero-copy reveal">
              <Eyebrow><Rocket size={14} aria-hidden="true" /> Welcome to Digital Chautari</Eyebrow>
              <Text variant="h1">We build <span className="text-gradient">digital bridges</span> between ideas and impact.</Text>
              <Text variant="lede">We are a creative technology company helping ambitious organizations grow through thoughtful marketing, compelling content, and technology that works.</Text>
              <div className="hero-actions"><Button href="/services" icon={ArrowRight}>Explore Services</Button><Button href="/products" secondary>View Products</Button></div>
            </div>
            <div className="hero-art reveal">
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
        </section>
        <div className="container"><StatsBar stats={heroStats} /></div>

        <section className="section section-tight">
          <div className="container">
            <SectionHeading centered eyebrow="Why Digital Chautari" title={<>The right mix of <span className="text-gradient">curiosity and craft.</span></>} description="We bring creative thinking and technical depth together to make good ideas go further." />
            <div className="feature-grid">
              <FeatureCard icon={TrendingUp} title="Growth-Driven" tone="mint">Every move is anchored to a clear business outcome and a way to measure momentum.</FeatureCard>
              <FeatureCard icon={Sparkles} title="Creative-First" tone="gold">We find the sharp, human idea hiding inside every brief and make it impossible to miss.</FeatureCard>
              <FeatureCard icon={Cpu} title="Tech-Powered" tone="lilac">Smart systems, clean code, and digital experiences built to keep working as you grow.</FeatureCard>
              <FeatureCard icon={HeartHandshake} title="Client-Centric" tone="pink">You get a thoughtful partner, a transparent process, and a team invested in your win.</FeatureCard>
            </div>
          </div>
        </section>

        <section className="section">
          <div className="container split-grid">
            <div className="story-copy">
              <SectionHeading eyebrow="Who we are" title={<>A Chautari where ideas meet <span className="text-gradient">execution.</span></>} />
              <Text>In Nepal, a chautari is a place to pause, share stories, and exchange ideas. Digital Chautari brings that same spirit to the digital world — a place where strategy, creativity, and technology sit at the same table.</Text>
              <Text>From a first sketch to the final launch, we stay close to the details that make work feel useful, memorable, and distinctly yours.</Text>
              <ul className="checklist">{["Creative strategy", "Brand storytelling", "Full-stack engineering", "Health-tech expertise"].map((item) => <li key={item}><span className="check-dot"><Check size={12} strokeWidth={3} aria-hidden="true" /></span>{item}</li>)}</ul>
              <Button href="/about#team" icon={ArrowRight}>Meet the Team</Button>
            </div>
            <div className="teaser-grid">
              <div className="teaser-card"><div className="teaser-top"><span className="icon-chip mint"><Icon icon={Megaphone} /></span><span>01</span></div><div><Text variant="h3">Digital Marketing</Text><Text as="small" variant="caption">Find your next audience.</Text></div></div>
              <div className="teaser-card"><div className="teaser-top"><span className="icon-chip gold"><Icon icon={Clapperboard} /></span><span>02</span></div><div><Text variant="h3">Content Creation</Text><Text as="small" variant="caption">Give your story a pulse.</Text></div></div>
              <div className="teaser-card"><div className="teaser-top"><span className="icon-chip lilac"><Icon icon={CodeXml} /></span><span>03</span></div><div><Text variant="h3">Software Development</Text><Text as="small" variant="caption">Build for what&apos;s next.</Text></div></div>
              <div className="teaser-card"><div className="teaser-top"><span className="icon-chip pink"><Icon icon={Palette} /></span><span>04</span></div><div><Text variant="h3">Branding &amp; Design</Text><Text as="small" variant="caption">Make a lasting impression.</Text></div></div>
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
              <ProductCard icon={Leaf} category="Creative marketing agency" title="Eco Creative Marketing Agency" tone="mint" href="/products?venture=eco#ventures">Purposeful strategy and creative campaigns for brands ready to grow with intention.</ProductCard>
              <ProductCard icon={Clapperboard} category="Content creation studio" title="One Content Creation Studio" tone="lilac" href="/products?venture=one#ventures">Stories with a pulse, made for brands that want to move people, not just fill a feed.</ProductCard>
              <ProductCard icon={Stethoscope} category="Health-tech platform" title="Physio@Home" tone="gold" href="/products?venture=physio#ventures">Personalized physiotherapy support that brings trusted clinical care into everyday life.</ProductCard>
            </div>
          </div>
        </section>

        <section className="section section-tight">
          <div className="container">
            <SectionHeading centered eyebrow="Across every sector" title={<>Built for people who <span className="text-gradient">want to move forward.</span></>} />
            <div className="industries-grid">{industries.map(({ icon, label }, index) => <div className="industry-card lift-card" key={label}><span className={`icon-chip ${tones[index % tones.length]}`}><Icon icon={icon} /></span><Text variant="h3">{label}</Text><Text as="small" variant="caption">Explore possibilities <ArrowRight size={12} aria-hidden="true" /></Text></div>)}</div>
          </div>
        </section>

        <section className="dark-section">
          <div className="container">
            <SectionHeading light eyebrow="How we work" title={<>Four steps from <span className="text-gradient">hunch to hello world.</span></>} description="Clear thinking, close collaboration, and a little bit of healthy obsession at every stage." />
            <div className="process-grid">
              <div className="process-card"><div className="process-number"><span className="icon-chip process-chip"><Icon icon={Search} size={18} /></span>01 · Discover</div><Text variant="h3">Start with why.</Text><Text tone="light">We listen deeply, ask better questions, and find the real opportunity.</Text></div>
              <div className="process-card"><div className="process-number"><span className="icon-chip process-chip"><Icon icon={PenTool} size={18} /></span>02 · Design</div><Text variant="h3">Make it feel right.</Text><Text tone="light">Ideas become a focused direction, a clear story, and a considered experience.</Text></div>
              <div className="process-card"><div className="process-number"><span className="icon-chip process-chip"><Icon icon={Cog} size={18} /></span>03 · Develop</div><Text variant="h3">Build with intent.</Text><Text tone="light">We bring the work to life with craft, speed, and the right technology.</Text></div>
              <div className="process-card"><div className="process-number"><span className="icon-chip process-chip"><Icon icon={Rocket} size={18} /></span>04 · Deliver</div><Text variant="h3">Keep it moving.</Text><Text tone="light">Launch is only the beginning. We learn, improve, and grow together.</Text></div>
            </div>
          </div>
        </section>

        <section className="section">
          <div className="container">
            <SectionHeading centered eyebrow="Kind words" title={<>The work speaks. <span className="text-gradient">So do our clients.</span></>} />
            <div className="testimonial-grid">
              <TestimonialCard quote="Digital Chautari understood the heart of our brand before we had the words for it. The result felt like us, only sharper." name="Aarati Shrestha" role="Founder, Katha Studio" avatar="AS" />
              <TestimonialCard quote="The rare team that can think strategically, move quickly, and care about the smallest details. We felt like partners from day one." name="Rohan Karki" role="Director, Elevate Nepal" avatar="RK" />
              <TestimonialCard quote="They gave our product the clarity it needed to step into the world. The numbers followed, but the confidence came first." name="Dr. Nisha Rai" role="Co-founder, Physio@Home" avatar="NR" />
            </div>
          </div>
        </section>

        <section className="section section-tight">
          <div className="container">
            <div className="section-heading-row"><SectionHeading eyebrow="From the chautari" title={<>Latest from <span className="text-gradient">our blog.</span></>} /><ArrowLink href="#blog">View all articles</ArrowLink></div>
            <div className="blog-grid" id="blog">
              <BlogCard icon={Leaf} category="Perspective" date="May 18, 2025" title="Why the best brands feel more like people" excerpt="A little more humanity can make a lot more room for connection." />
              <BlogCard icon={Lightbulb} category="Creative process" date="Apr 26, 2025" title="The quiet power of a clear point of view" excerpt="Before you make more noise, make sure you know what you want to say." />
              <BlogCard icon={Smartphone} category="Technology" date="Mar 09, 2025" title="Building digital products people return to" excerpt="Useful is a beautiful place to start — and a good place to keep going." />
            </div>
          </div>
        </section>
        <DarkCta title={<>Ready to build something <span className="text-gradient">extraordinary</span> together?</>} secondary={{ label: "View Services", href: "/services" }}>Tell us where you want to go. We&apos;ll bring the map, the tools, and the energy to get there.</DarkCta>
      </main>
    </>
  );
}
