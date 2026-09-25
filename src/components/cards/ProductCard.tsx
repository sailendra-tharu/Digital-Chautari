import { ArrowUpRight, type LucideIcon } from "lucide-react";
import type { ReactNode } from "react";
import { ArrowLink } from "@/components/ui/ArrowLink";
import { Icon } from "@/components/ui/Icon";
import { Text } from "@/components/ui/Text";

export function ProductCard({ icon, category, title, children, tone = "mint", href = "/products" }: { icon: LucideIcon; category: string; title: string; children: ReactNode; tone?: string; href?: string }) {
  return (
    <article className="product-card lift-card reveal">
      <div className="product-card-top"><span className={`icon-chip ${tone}`}><Icon icon={icon} /></span><span className="card-arrow"><ArrowUpRight size={20} aria-hidden="true" /></span></div>
      <span className="card-kicker">{category}</span>
      <Text variant="h3">{title}</Text>
      <Text>{children}</Text>
      <ArrowLink href={href}>Learn more</ArrowLink>
    </article>
  );
}
