import type { ReactNode } from "react";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Kicker } from "@/components/ui/Kicker";
import { Text } from "@/components/ui/Text";

export function SectionHeading({
  eyebrow,
  eyebrowStyle = "pill",
  title,
  description,
  light = false,
  centered = false,
}: {
  eyebrow?: string;
  eyebrowStyle?: "pill" | "plain";
  title: ReactNode;
  description?: string;
  light?: boolean;
  centered?: boolean;
}) {
  return (
    <div className={`section-heading ${light ? "section-heading-light" : ""} ${centered ? "centered" : ""}`}>
      {eyebrow ? eyebrowStyle === "plain" ? <Kicker>{eyebrow}</Kicker> : <Eyebrow dark={light}>{eyebrow}</Eyebrow> : null}
      <Text variant="h2">{title}</Text>
      {description ? <Text tone={light ? "light" : "muted"}>{description}</Text> : null}
    </div>
  );
}
