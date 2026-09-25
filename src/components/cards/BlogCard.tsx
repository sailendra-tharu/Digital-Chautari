import type { LucideIcon } from "lucide-react";
import { ArrowLink } from "@/components/ui/ArrowLink";
import { Icon } from "@/components/ui/Icon";
import { Text } from "@/components/ui/Text";

export function BlogCard({ icon, category, date, title, excerpt }: { icon: LucideIcon; category: string; date: string; title: string; excerpt: string }) {
  return <article className="blog-card lift-card reveal"><div className="blog-art"><Icon icon={icon} size={36} /></div><div className="blog-copy"><div className="blog-meta"><span>{category}</span><span>•</span><span>{date} · 4 min read</span></div><Text variant="h3">{title}</Text><Text>{excerpt}</Text><ArrowLink>Read more</ArrowLink></div></article>;
}
