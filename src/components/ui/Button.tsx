import type { LucideIcon } from "lucide-react";
import Link from "next/link";
import type { ReactNode } from "react";
import { Icon } from "./Icon";

export function Button({ href, children, icon, secondary = false, light = false }: { href: string; children: ReactNode; icon?: LucideIcon; secondary?: boolean; light?: boolean }) {
  return (
    <Link href={href} className={`button ${secondary ? "button-secondary" : light ? "button-light" : "button-primary"}`}>
      {children}
      {icon ? <Icon icon={icon} size={16} /> : null}
    </Link>
  );
}
