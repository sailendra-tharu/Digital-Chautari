import { Award, BadgeCheck, Eye, Globe, Handshake, Heart, Network, ShieldCheck, Sparkles, Target, type LucideIcon } from "lucide-react";
import type { Milestone } from "@/components/sections/Roadmap";
import type { Feature } from "./home";
import type { Tone } from "./types";

export const story = {
  paragraphs: [
    "Digital Chautari started with a simple idea: the best work happens when different ways of thinking have room to meet. What began as conversations around a shared table has grown into a creative technology company with a distinctly Nepali point of view.",
    "We are building a team and a culture where strategy is practical, creativity is generous, and technology is always in service of people.",
  ],
  /** Rendered as teal / navy / white / gold tiles, in this order. */
  tiles: [
    { value: "2025", label: "Founded with a clear point of view" },
    { value: "3", label: "Products growing from one vision" },
    { value: "Kathmandu", label: "HQ — rooted in Nepal, reaching outward" },
    { value: "7+", label: "People making the work happen" },
  ],
};

export const purpose: { icon: LucideIcon; title: string; description: string; tone: Tone }[] = [
  { icon: Target, title: "Our mission", tone: "mint", description: "To make thoughtful digital work more accessible to ambitious people and organizations — and to help good ideas become useful, lasting impact." },
  { icon: Eye, title: "Our vision", tone: "gold", description: "A Nepal where creativity and technology are trusted tools for progress, and where a great idea can start anywhere and travel everywhere." },
];

export const values: Feature[] = [
  { icon: Heart, title: "Passion", tone: "pink", description: "We care loudly, stay curious, and bring energy to the details that others might miss." },
  { icon: Sparkles, title: "Creativity", tone: "gold", description: "We keep looking for the more human, more surprising, more useful answer." },
  { icon: Award, title: "Excellence", tone: "lilac", description: "We sweat the craft, own the outcome, and keep improving after the handoff." },
  { icon: Handshake, title: "Collaboration", tone: "mint", description: "We make space for different perspectives because better work rarely comes from one voice." },
];

export const commitments: { icon: LucideIcon; title: string; description: string }[] = [
  { icon: BadgeCheck, title: "ISO 9001 Ready", description: "Processes built for consistency." },
  { icon: ShieldCheck, title: "Data Protection", description: "Respect for every piece of information." },
  { icon: Globe, title: "Global Delivery", description: "Local understanding, global standards." },
  { icon: Network, title: "Pan-Nepal Network", description: "Close to the communities we serve." },
];

export const milestones: Milestone[] = [
  { year: "2025", title: "The Idea", copy: "A shared table, a clear point of view, and the first brave conversation." },
  { year: "2025", title: "First Products", copy: "Eco Creative, One Studio, and the early shape of Physio@Home." },
  { year: "2026", title: "Health-Tech Entry", copy: "Bringing thoughtful digital care closer to the people who need it." },
  { year: "2026", title: "Company Registration", copy: "The next chapter becomes official — with plenty more ahead." },
];
