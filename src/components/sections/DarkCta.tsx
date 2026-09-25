import { ArrowRight, type LucideIcon } from "lucide-react";
import Link from "next/link";
import type { ReactNode } from "react";
import { Button } from "@/components/ui/Button";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Text } from "@/components/ui/Text";

export function DarkCta({ title, children, button = "Start a Project", buttonIcon = ArrowRight, href = "/contact", secondary }: { title: ReactNode; children: ReactNode; button?: string; buttonIcon?: LucideIcon; href?: string; secondary?: { label: string; href: string } }) {
  return (
    <section className="dark-cta-section">
      <div className="container">
        <div className="dark-cta reveal">
          <div><Eyebrow dark>Let&apos;s make it happen</Eyebrow><Text variant="h2">{title}</Text><Text tone="inverse">{children}</Text></div>
          <div className="dark-cta-actions">
            <Button href={href} icon={buttonIcon} light>{button}</Button>
            {secondary ? <Link href={secondary.href} className="button button-outline-light">{secondary.label}</Link> : null}
          </div>
        </div>
      </div>
    </section>
  );
}
