import { ArrowRight } from "lucide-react";
import Link from "next/link";
import type { ReactNode } from "react";

export function ArrowLink({ href = "#", children, light = false }: { href?: string; children: ReactNode; light?: boolean }) {
  return (
    <Link href={href} className={`arrow-link ${light ? "arrow-link-light" : ""}`}>
      {children} <ArrowRight size={16} aria-hidden="true" />
    </Link>
  );
}
