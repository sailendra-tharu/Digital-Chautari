import type { Metadata } from "next";
import Image from "next/image";
import { TeamMemberCard } from "@/components/about/TeamMemberCard";
import { FeatureCard } from "@/components/cards/FeatureCard";
import { DarkCta } from "@/components/sections/DarkCta";
import { MediaHero } from "@/components/sections/MediaHero";
import { Roadmap } from "@/components/sections/Roadmap";
import { SectionHeading } from "@/components/sections/SectionHeading";
import { Icon } from "@/components/ui/Icon";
import { Text } from "@/components/ui/Text";
import { commitments, milestones, purpose, story, values } from "@/data/about";
import { team } from "@/data/team";

export const metadata: Metadata = { title: "About" };

export default function AboutPage() {
  return (
    <main>
      <MediaHero
        eyebrow="About"
        title={<>The people behind <span className="text-gradient">Digital Chautari.</span></>}
        description="A passionate team, building digital solutions for a better tomorrow."
        media={
          <Image
            src="/assets/about-team.jpg"
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
        <div className="container story-grid">
          <div>
            <SectionHeading eyebrow="Where it began" title={<>From a chautari to a <span className="text-gradient">digital powerhouse.</span></>} />
            {story.paragraphs.map((paragraph) => <Text key={paragraph}>{paragraph}</Text>)}
          </div>
          <div className="tile-grid">
            {story.tiles.map((tile) => (
              <div className="info-tile" key={tile.value}>
                <strong>{tile.value}</strong>
                <Text as="small" variant="caption" tone="inherit">{tile.label}</Text>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section section-tight">
        <div className="container">
          <SectionHeading centered eyebrow="What guides us" title={<>Purpose gives the work its <span className="text-gradient">shape.</span></>} />
          <div className="mission-grid">
            {purpose.map((item) => (
              <div className="mission-card lift-card" key={item.title}>
                <span className={`icon-chip ${item.tone}`}><Icon icon={item.icon} /></span>
                <Text variant="h3">{item.title}</Text>
                <Text>{item.description}</Text>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section section-tight">
        <div className="container">
          <SectionHeading centered eyebrow="The way we show up" title={<>Four values. <span className="text-gradient">One standard.</span></>} />
          <div className="values-grid">
            {values.map((value) => (
              <FeatureCard key={value.title} icon={value.icon} title={value.title} tone={value.tone}>{value.description}</FeatureCard>
            ))}
          </div>
        </div>
      </section>

      <section className="dark-section">
        <div className="container">
          <SectionHeading light eyebrow="Our promise" title={<>Committed to <span className="text-gradient">quality & trust.</span></>} />
          <div className="quality-grid">
            {commitments.map((commitment) => (
              <div className="quality-card" key={commitment.title}>
                <span className="quality-icon"><Icon icon={commitment.icon} /></span>
                <Text variant="h3">{commitment.title}</Text>
                <Text variant="caption" tone="light">{commitment.description}</Text>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section" id="team">
        <div className="container">
          <SectionHeading eyebrow="The people" title={<>Different strengths. <span className="text-gradient">Same table.</span></>} description="Meet the people bringing the curiosity, care, and craft to every project." />
          <div className="team-grid">
            {team.map((member) => <TeamMemberCard key={member.role} member={member} />)}
          </div>
        </div>
      </section>

      <section className="dark-section">
        <div className="container">
          <SectionHeading light centered eyebrow="Where we're going" title={<>A journey still <span className="text-gradient">unfolding.</span></>} />
          <Roadmap milestones={milestones} />
        </div>
      </section>

      <DarkCta title={<>Want to join <span className="text-gradient">our journey?</span></>} button="Get in Touch">
        Whether you have a project, a question, or a seat at the table to fill, we&apos;d love to hear from you.
      </DarkCta>
    </main>
  );
}
