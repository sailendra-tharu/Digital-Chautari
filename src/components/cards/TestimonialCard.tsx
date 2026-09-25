import { Star } from "lucide-react";
import { Text } from "@/components/ui/Text";

export function TestimonialCard({ quote, name, role, avatar }: { quote: string; name: string; role: string; avatar: string }) {
  return <article className="testimonial-card lift-card reveal"><div className="stars" role="img" aria-label="Rated 5 out of 5">{Array.from({ length: 5 }, (_, index) => <Star key={index} size={14} fill="currentColor" aria-hidden="true" />)}</div><blockquote>“{quote}”</blockquote><div className="person"><span className="person-avatar">{avatar}</span><span><strong>{name}</strong><Text as="small" variant="caption">{role}</Text></span></div></article>;
}
