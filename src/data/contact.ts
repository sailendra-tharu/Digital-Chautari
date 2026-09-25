import {
  ChartLine, Clock, CodeXml, FileText, Landmark, Mail, MapPin, Megaphone, Phone, PhoneCall, Send, SquarePen, Zap,
  type LucideIcon,
} from "lucide-react";

export type { Tone } from "./types";
import type { Tone } from "./types";

export const office = {
  name: "Digital Chautari",
  address: "Kathmandu, Nepal",
  position: [27.7172, 85.324] as [number, number],
};

export const officeMapsUrl = `https://www.google.com/maps/search/?api=1&query=${office.position.join(",")}`;

export type ContactInfo = { icon: LucideIcon; accent: LucideIcon; title: string; lines: string[]; href?: string; tone: Tone };

export const contactInfo: ContactInfo[] = [
  { icon: MapPin, accent: Landmark, title: "Address", lines: ["Kathmandu, Nepal"], tone: "teal" },
  { icon: Mail, accent: Send, title: "Email", lines: ["hello@digitalchautari.com"], href: "mailto:hello@digitalchautari.com", tone: "mint" },
  { icon: Phone, accent: PhoneCall, title: "Phone", lines: ["+977 9800000000"], href: "tel:+9779800000000", tone: "lilac" },
  { icon: Clock, accent: Clock, title: "Business Hours", lines: ["Sun – Fri: 10:00 AM – 6:00 PM", "Saturday: Closed"], tone: "gold" },
];

export type Department = { icon: LucideIcon; title: string; description: string; email: string; tone: Tone };

export const departments: Department[] = [
  { icon: Megaphone, title: "Marketing", description: "Campaigns, brand, growth and partnerships.", email: "marketing@digitalchautari.com", tone: "pink" },
  { icon: SquarePen, title: "Content Studio", description: "Content, design, video and creative.", email: "studio@digitalchautari.com", tone: "lilac" },
  { icon: CodeXml, title: "Software Dev", description: "Product, engineering and tech support.", email: "tech@digitalchautari.com", tone: "teal" },
  { icon: ChartLine, title: "Business Dev", description: "Sales, accounts and strategic opportunities.", email: "partnerships@digitalchautari.com", tone: "mint" },
];

export const responseTimes: { icon: LucideIcon; title: string; description: string; time: string }[] = [
  { icon: Mail, title: "Email", description: "We typically respond within 24 hours.", time: "24h" },
  { icon: FileText, title: "Proposals", description: "Expect a detailed proposal in 2–3 days.", time: "2–3 days" },
  { icon: Zap, title: "Urgent", description: "For urgent matters, we aim to respond the same day.", time: "Same day" },
];
