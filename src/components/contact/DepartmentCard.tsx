import { ArrowRight } from "lucide-react";
import { Icon } from "@/components/ui/Icon";
import { Text } from "@/components/ui/Text";
import type { Department } from "@/data/contact";

export function DepartmentCard({ department }: { department: Department }) {
  return (
    <article className={`department-card lift-card tone-${department.tone}`}>
      <span className={`icon-chip ${department.tone}`}><Icon icon={department.icon} size={20} /></span>
      <Text variant="h3">{department.title}</Text>
      <Text variant="caption">{department.description}</Text>
      <a className="department-email" href={`mailto:${department.email}`}>
        <span>{department.email}</span>
        <ArrowRight size={16} aria-hidden="true" />
      </a>
    </article>
  );
}
