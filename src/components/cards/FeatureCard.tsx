import type { LucideIcon } from "lucide-react";
import type { ReactNode } from "react";
import { Icon } from "@/components/ui/Icon";
import { Text } from "@/components/ui/Text";

export function FeatureCard({ icon, title, children, tone = "mint" }: { icon: LucideIcon; title: string; children: ReactNode; tone?: string }) {
  return (
    <article className="feature-card lift-card reveal">
      <span className={`icon-chip ${tone}`}><Icon icon={icon} /></span>
      <Text variant="h3">{title}</Text>
      <Text>{children}</Text>
    </article>
  );
}
