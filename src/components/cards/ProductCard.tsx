import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import type { ReactNode } from "react";
import { ArrowLink } from "@/components/ui/ArrowLink";
import { Text } from "@/components/ui/Text";

export function ProductCard({ image, category, title, children, tone = "mint", href = "/products" }: { image: string; category: string; title: string; children: ReactNode; tone?: string; href?: string }) {
  return (
    <article className="product-card lift-card reveal">
      <div className={`product-image-panel ${tone}`}>
        <Image src={image} alt={`${title} preview`} fill sizes="(max-width: 760px) 100vw, 33vw" />
        <span className="card-arrow"><ArrowUpRight size={20} aria-hidden="true" /></span>
      </div>
      <div className="product-card-body">
        <span className="card-kicker">{category}</span>
        <Text variant="h3">{title}</Text>
        <Text>{children}</Text>
        <ArrowLink href={href}>Learn more</ArrowLink>
      </div>
    </article>
  );
}
