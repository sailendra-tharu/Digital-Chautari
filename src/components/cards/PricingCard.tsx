import { ArrowRight, Check } from "lucide-react";
import Link from "next/link";
import { Text } from "@/components/ui/Text";
import type { Plan } from "@/components/services/servicesData";

export function PricingCard({ plan }: { plan: Plan }) {
  const tone = plan.featured ? "light" : "muted";
  return (
    <article className={`plan-card ${plan.featured ? "featured" : ""}`}>
      {plan.featured ? <span className="plan-badge">Most Popular</span> : null}
      <Text variant="h3">{plan.name}</Text>
      <Text variant="caption" tone={tone} className="plan-description">{plan.description}</Text>
      <div className="plan-price">
        {plan.price}
        {plan.period ? <Text as="small" variant="caption" tone={tone}>{plan.period}</Text> : null}
      </div>
      <ul className="plan-features">
        {plan.features.map((feature) => (
          <li key={feature}>
            <Check size={16} aria-hidden="true" />
            <Text as="span" variant="caption" tone={plan.featured ? "inherit" : "ink"}>{feature}</Text>
          </li>
        ))}
      </ul>
      <Link href={plan.cta.href} className={`button ${plan.featured ? "button-primary" : "button-outline"} button-block`}>
        {plan.cta.label} <ArrowRight size={16} aria-hidden="true" />
      </Link>
    </article>
  );
}
