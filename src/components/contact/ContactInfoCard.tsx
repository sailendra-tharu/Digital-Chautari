import { Icon } from "@/components/ui/Icon";
import { Text } from "@/components/ui/Text";
import type { ContactInfo } from "@/data/contact";

export function ContactInfoCard({ info }: { info: ContactInfo }) {
  return (
    <article className={`contact-info-card lift-card tone-${info.tone}`}>
      <span className="contact-info-icon"><Icon icon={info.icon} size={20} /></span>
      <Text variant="h3">{info.title}</Text>
      <div className="contact-info-lines">
        {info.lines.map((line) =>
          info.href ? <a key={line} href={info.href}>{line}</a> : <Text key={line} variant="caption">{line}</Text>,
        )}
      </div>
      <span className="contact-info-accent" aria-hidden="true"><Icon icon={info.accent} size={30} /></span>
    </article>
  );
}
