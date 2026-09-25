import type { Metadata } from "next";
import Image from "next/image";
import {
  Award, BadgeCheck, Briefcase, Compass, Eye, Globe, Handshake, Heart, Megaphone, Monitor, Network, Server,
  ShieldCheck, Sparkles, Target, TrendingUp,
} from "lucide-react";
import { FeatureCard } from "@/components/cards/FeatureCard";
import { DarkCta } from "@/components/sections/DarkCta";
import { MediaHero } from "@/components/sections/MediaHero";
import { RoadmapItem } from "@/components/sections/RoadmapItem";
import { SectionHeading } from "@/components/sections/SectionHeading";
import { Icon } from "@/components/ui/Icon";
import { Text } from "@/components/ui/Text";

const team = [
  { icon: Compass, role: "Founder & CEO" }, { icon: Briefcase, role: "Co-Founder & COO" }, { icon: Monitor, role: "Front-End Developer" },
  { icon: Server, role: "Back-End Developer" }, { icon: Megaphone, role: "Marketing Lead" }, { icon: TrendingUp, role: "Sales Executive" },
  { icon: Handshake, role: "Business Development Officer" },
];

const commitments = [
  { icon: BadgeCheck, title: "ISO 9001 Ready", copy: "Processes built for consistency." },
  { icon: ShieldCheck, title: "Data Protection", copy: "Respect for every piece of information." },
  { icon: Globe, title: "Global Delivery", copy: "Local understanding, global standards." },
  { icon: Network, title: "Pan-Nepal Network", copy: "Close to the communities we serve." },
];

export const metadata: Metadata = { title: "About" };

export default function AboutPage() {
  return (
    <>
      <main>
        <MediaHero
          eyebrow="About"
          title={<>The people behind <span className="text-gradient">Digital Chautari.</span></>}
          description="A passionate team, building digital solutions for a better tomorrow."
          media={
            <Image
              src="/images/about-team.jpg"
              alt="The Digital Chautari team sitting together, looking out over Kathmandu"
              fill
              priority
              sizes="(max-width: 760px) 100vw, 64vw"
              className="media-hero-img"
              style={{ objectPosition: "92% center" }}
            />
          }
        />
        <section className="section" id="story">
          <div className="container story-grid"><div><SectionHeading eyebrow="Where it began" title={<>From a chautari to a <span className="text-gradient">digital powerhouse.</span></>} /><Text>Digital Chautari started with a simple idea: the best work happens when different ways of thinking have room to meet. What began as conversations around a shared table has grown into a creative technology company with a distinctly Nepali point of view.</Text><Text>We are building a team and a culture where strategy is practical, creativity is generous, and technology is always in service of people.</Text></div><div className="tile-grid"><div className="info-tile"><strong>2025</strong><Text as="small" variant="caption" tone="inherit">Founded with a clear point of view</Text></div><div className="info-tile"><strong>3</strong><Text as="small" variant="caption" tone="inherit">Products growing from one vision</Text></div><div className="info-tile"><strong>Kathmandu</strong><Text as="small" variant="caption" tone="inherit">HQ — rooted in Nepal, reaching outward</Text></div><div className="info-tile"><strong>7+</strong><Text as="small" variant="caption" tone="inherit">People making the work happen</Text></div></div></div>
        </section>
        <section className="section section-tight"><div className="container"><SectionHeading centered eyebrow="What guides us" title={<>Purpose gives the work its <span className="text-gradient">shape.</span></>} /><div className="mission-grid"><div className="mission-card lift-card"><span className="icon-chip mint"><Icon icon={Target} /></span><Text variant="h3">Our mission</Text><Text>To make thoughtful digital work more accessible to ambitious people and organizations — and to help good ideas become useful, lasting impact.</Text></div><div className="mission-card lift-card"><span className="icon-chip gold"><Icon icon={Eye} /></span><Text variant="h3">Our vision</Text><Text>A Nepal where creativity and technology are trusted tools for progress, and where a great idea can start anywhere and travel everywhere.</Text></div></div></div></section>
        <section className="section section-tight"><div className="container"><SectionHeading centered eyebrow="The way we show up" title={<>Four values. <span className="text-gradient">One standard.</span></>} /><div className="values-grid"><FeatureCard icon={Heart} title="Passion" tone="pink">We care loudly, stay curious, and bring energy to the details that others might miss.</FeatureCard><FeatureCard icon={Sparkles} title="Creativity" tone="gold">We keep looking for the more human, more surprising, more useful answer.</FeatureCard><FeatureCard icon={Award} title="Excellence" tone="lilac">We sweat the craft, own the outcome, and keep improving after the handoff.</FeatureCard><FeatureCard icon={Handshake} title="Collaboration" tone="mint">We make space for different perspectives because better work rarely comes from one voice.</FeatureCard></div></div></section>
        <section className="dark-section"><div className="container"><SectionHeading light eyebrow="Our promise" title={<>Committed to <span className="text-gradient">quality & trust.</span></>} /><div className="quality-grid">{commitments.map(({ icon, title, copy }) => <div className="quality-card" key={title}><span className="quality-icon"><Icon icon={icon} /></span><Text variant="h3">{title}</Text><Text variant="caption" tone="light">{copy}</Text></div>)}</div></div></section>
        <section className="section" id="team"><div className="container"><SectionHeading eyebrow="The people" title={<>Different strengths. <span className="text-gradient">Same table.</span></>} description="Meet the people bringing the curiosity, care, and craft to every project." /><div className="team-grid">{team.map(({ icon, role }) => <div className="team-card lift-card" key={role}><div className="team-avatar"><Icon icon={icon} size={32} /></div><strong>{role}</strong><Text as="small" variant="caption">Digital Chautari</Text></div>)}</div></div></section>
        <section className="dark-section"><div className="container"><SectionHeading light centered eyebrow="Where we&apos;re going" title={<>A journey still <span className="text-gradient">unfolding.</span></>} /><div className="roadmap"><RoadmapItem year="2025" title="The Idea" copy="A shared table, a clear point of view, and the first brave conversation." /><RoadmapItem year="2025" title="First Products" copy="Eco Creative, One Studio, and the early shape of Physio@Home." /><RoadmapItem year="2026" title="Health-Tech Entry" copy="Bringing thoughtful digital care closer to the people who need it." /><RoadmapItem year="2026" title="Company Registration" copy="The next chapter becomes official — with plenty more ahead." /></div></div></section>
        <DarkCta title={<>Want to join <span className="text-gradient">our journey?</span></>} button="Get in Touch">Whether you have a project, a question, or a seat at the table to fill, we&apos;d love to hear from you.</DarkCta>
      </main>
    </>
  );
}
