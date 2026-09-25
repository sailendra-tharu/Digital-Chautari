import { CircleCheck } from "lucide-react";
import { Kicker } from "@/components/ui/Kicker";
import { Text } from "@/components/ui/Text";
import { reasons } from "./servicesData";

export function WhyWorkWithUs() {
  return (
    <section className="why-band">
      <div className="container why-band-inner">
        <div>
          <Kicker className="why-band-kicker">Why work with us</Kicker>
          <Text variant="h2">Why work with us</Text>
        </div>
        <ul className="why-list">
          {reasons.map((reason) => (
            <li key={reason}>
              <CircleCheck size={20} aria-hidden="true" />
              <Text as="span" variant="caption" tone="inherit">{reason}</Text>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
