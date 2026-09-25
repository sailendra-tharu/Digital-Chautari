import { ArrowRight, CircleHelp } from "lucide-react";
import Link from "next/link";
import { Text } from "@/components/ui/Text";

export function FaqCallout() {
  return (
    <Link href="/faq" className="faq-callout">
      <span className="faq-callout-icon"><CircleHelp size={26} aria-hidden="true" /></span>
      <span>
        <Text as="span" variant="h3" className="faq-callout-title">Need quick answers?</Text>
        <Text as="span" variant="caption" tone="light" className="faq-callout-link">Visit FAQ page <ArrowRight size={14} aria-hidden="true" /></Text>
      </span>
    </Link>
  );
}
