import Image from "next/image";
import { ArrowLink } from "@/components/ui/ArrowLink";
import { Text } from "@/components/ui/Text";

export function BlogCard({ image, category, date, title, excerpt }: { image: string; category: string; date: string; title: string; excerpt: string }) {
  return <article className="blog-card lift-card reveal"><div className="blog-art"><Image src={image} alt={title} fill sizes="(max-width: 760px) 100vw, 33vw" /></div><div className="blog-copy"><div className="blog-meta"><span>{category}</span><span>•</span><span>{date} · 4 min read</span></div><Text variant="h3">{title}</Text><Text>{excerpt}</Text><ArrowLink>Read more</ArrowLink></div></article>;
}
