import { createAvatar } from "@dicebear/core";
import * as notionists from "@dicebear/notionists";
import Image from "next/image";
import { Icon } from "@/components/ui/Icon";
import { Text } from "@/components/ui/Text";
import type { TeamMember } from "@/data/team";

/** Illustrated portrait (DiceBear "Notionists", CC0), rendered at build time — no external requests. */
function illustratedPortrait(seed: string) {
  return createAvatar(notionists, { seed, backgroundColor: ["transparent"], scale: 110, translateY: 4 }).toDataUri();
}

export function TeamMemberCard({ member }: { member: TeamMember }) {
  const label = member.name ? `${member.name}, ${member.role}` : member.role;
  return (
    <article className="team-card lift-card">
      <div className="team-portrait">
        {member.photo ? (
          <Image src={member.photo} alt={label} fill sizes="(max-width: 480px) 50vw, 260px" className="team-photo" />
        ) : (
          <Image src={illustratedPortrait(member.avatarSeed)} alt="" width={150} height={150} unoptimized className="team-illustration" />
        )}
        <span className="team-role-badge"><Icon icon={member.icon} size={16} /></span>
      </div>
      <Text variant="h3" className="team-role">{member.name ?? member.role}</Text>
      <Text as="small" variant="caption">{member.name ? member.role : "Digital Chautari"}</Text>
    </article>
  );
}
