import type { LucideIcon } from "lucide-react";
import { Icon } from "@/components/ui/Icon";
import { Text } from "@/components/ui/Text";

export type Stat = { icon: LucideIcon; value: string; label: string };

export function StatsBar({ stats, dark = false }: { stats: Stat[]; dark?: boolean }) {
  return (
    <div className={`stats-bar ${dark ? "stats-bar-dark" : ""}`}>
      {stats.map((stat) => (
        <div className="stat-item" key={stat.label}>
          <span className="stat-icon"><Icon icon={stat.icon} /></span>
          <span><strong>{stat.value}</strong><Text as="small" variant="caption" tone={dark ? "light" : "muted"}>{stat.label}</Text></span>
        </div>
      ))}
    </div>
  );
}
