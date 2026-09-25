import { Briefcase, Compass, Handshake, Megaphone, Monitor, Server, TrendingUp, type LucideIcon } from "lucide-react";

export type TeamMember = {
  role: string;
  icon: LucideIcon;
  /** Seed for the illustrated portrait — change it to get a different illustration. */
  avatarSeed: string;
  /** Real headshot in /public/assets (e.g. "/assets/team/ceo.jpg"). When set, it replaces the illustration. */
  photo?: string;
  name?: string;
};

export const team: TeamMember[] = [
  { role: "Founder & CEO", icon: Compass, avatarSeed: "Aarav" },
  { role: "Co-Founder & COO", icon: Briefcase, avatarSeed: "Sita" },
  { role: "Front-End Developer", icon: Monitor, avatarSeed: "Kiran" },
  { role: "Back-End Developer", icon: Server, avatarSeed: "Bikash" },
  { role: "Marketing Lead", icon: Megaphone, avatarSeed: "Anisha" },
  { role: "Sales Executive", icon: TrendingUp, avatarSeed: "Rohan" },
  { role: "Business Development Officer", icon: Handshake, avatarSeed: "Priya" },
];
