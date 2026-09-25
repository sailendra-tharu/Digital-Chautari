import type { ReactNode } from "react";
import { Text } from "./Text";

/** Plain uppercase label above a heading, e.g. "DIRECT LINES". Use <Eyebrow> for the pill style. */
export function Kicker({ children, className }: { children: ReactNode; className?: string }) {
  return <Text as="span" variant="caption" tone="inherit" className={["kicker", className].filter(Boolean).join(" ")}>{children}</Text>;
}
