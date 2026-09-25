import { Icon } from "@/components/ui/Icon";
import { Text } from "@/components/ui/Text";
import type { ServiceCategory } from "@/data/services";

export function ServiceCategoryCard({ category }: { category: ServiceCategory }) {
  return (
    <article className={`service-category accent-${category.accent}`} id={category.id}>
      <div className="service-category-intro">
        <span className="service-category-icon"><Icon icon={category.icon} size={26} /></span>
        <div>
          <Text variant="h3">{category.title}</Text>
          <Text variant="caption">{category.description}</Text>
        </div>
      </div>
      <ul className="service-chips">
        {category.services.map((service) => (
          <li key={service.label}>
            <Icon icon={service.icon} size={20} />
            <Text as="span" variant="caption" tone="ink">{service.label}</Text>
          </li>
        ))}
      </ul>
    </article>
  );
}
