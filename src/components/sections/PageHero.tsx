import { Sparkles } from "lucide-react";
import type { ReactNode } from "react";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Text } from "@/components/ui/Text";

export function PageHero({
  eyebrow,
  title,
  description,
  actions,
}: {
  eyebrow: string;
  title: ReactNode;
  description: string;
  actions?: ReactNode;
}) {
  return (
    <section className="page-hero">
      <div className="hero-glow" />
      <div className="container page-hero-content reveal">
        <Eyebrow><Sparkles size={14} aria-hidden="true" /> {eyebrow}</Eyebrow>
        <Text variant="h1">{title}</Text>
        <Text variant="lede">{description}</Text>
        {actions ? <div className="hero-actions">{actions}</div> : null}
      </div>
    </section>
  );
}
