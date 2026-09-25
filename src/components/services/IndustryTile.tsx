import type { LucideIcon } from "lucide-react";
import { Icon } from "@/components/ui/Icon";
import { Text } from "@/components/ui/Text";
import type { Accent } from "./servicesData";

export function IndustryTile({ icon, label, accent }: { icon: LucideIcon; label: string; accent: Accent }) {
  return (
    <div className={`industry-tile lift-card accent-${accent}`}>
      <Icon icon={icon} size={30} />
      <Text as="span" variant="caption" tone="ink">{label}</Text>
    </div>
  );
}
