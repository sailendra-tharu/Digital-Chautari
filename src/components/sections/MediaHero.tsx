import type { ReactNode } from "react";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Text } from "@/components/ui/Text";

/** Left-aligned hero with a full-height visual (e.g. next/image with `fill`) that fades in from the right. */
export function MediaHero({
  eyebrow,
  title,
  description,
  media,
  actions,
  overlay,
}: {
  eyebrow: string;
  title: ReactNode;
  description: string;
  media: ReactNode;
  actions?: ReactNode;
  /** Decorative element pinned to the top-right of the visual. */
  overlay?: ReactNode;
}) {
  return (
    <section className="media-hero">
      <div className="media-hero-art">
        {media}
        {overlay ? <div className="media-hero-overlay">{overlay}</div> : null}
      </div>
      <div className="hero-glow" />
      <div className="container media-hero-content reveal">
        <Eyebrow>{eyebrow}</Eyebrow>
        <Text variant="h1">{title}</Text>
        <Text variant="lede">{description}</Text>
        {actions ? <div className="hero-actions">{actions}</div> : null}
      </div>
    </section>
  );
}
