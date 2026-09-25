import type { LucideIcon } from "lucide-react";

export function Icon({ icon: IconComponent, size = 20, className }: { icon: LucideIcon; size?: number; className?: string }) {
  return <IconComponent size={size} strokeWidth={2} className={className} aria-hidden="true" />;
}
