import { Text } from "@/components/ui/Text";

export function RoadmapItem({ year, title, copy }: { year: string; title: string; copy: string }) {
  return <div className="roadmap-item"><span className="roadmap-dot" /><div className="roadmap-copy"><span className="roadmap-year">{year}</span><Text variant="h3">{title}</Text><Text variant="caption" tone="light">{copy}</Text></div></div>;
}
