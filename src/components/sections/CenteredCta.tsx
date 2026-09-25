import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { Text } from "@/components/ui/Text";

/** Light, centered closing call-to-action. Use <DarkCta> for the teal panel variant. */
export function CenteredCta({ title, button, href }: { title: string; button: string; href: string }) {
  return (
    <section className="centered-cta">
      <div className="container">
        <Text variant="h2" className="centered-cta-title">{title}</Text>
        <Button href={href} icon={ArrowRight}>{button}</Button>
      </div>
    </section>
  );
}
