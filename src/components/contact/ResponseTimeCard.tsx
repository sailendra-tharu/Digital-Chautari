import { Clock } from "lucide-react";
import { Icon } from "@/components/ui/Icon";
import { Text } from "@/components/ui/Text";
import { responseTimes } from "./contactDetails";

export function ResponseTimeCard() {
  return (
    <div className="response-card">
      <div className="response-card-header">
        <Clock size={18} aria-hidden="true" />
        <Text variant="h3">Response Time</Text>
      </div>
      <ul>
        {responseTimes.map((item) => (
          <li key={item.title}>
            <Icon icon={item.icon} size={16} />
            <span>
              <Text as="span" variant="caption" tone="ink" className="response-title">{item.title}</Text>
              <Text as="span" variant="caption">{item.description}</Text>
            </span>
            <strong>{item.time}</strong>
          </li>
        ))}
      </ul>
    </div>
  );
}
