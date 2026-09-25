import {
  Activity, Camera, ChartColumn, ClipboardList, Heart, House, Leaf, Megaphone, PenLine, Play, Share2, ShieldCheck, Sprout, Video,
  type LucideIcon,
} from "lucide-react";

export type Product = {
  id: "eco" | "one" | "physio";
  name: string;
  tabIcon: LucideIcon;
  kicker: string;
  description: string;
  features: { icon: LucideIcon; label: string }[];
  cta: { label: string; href: string };
  mockup: {
    art: "forest" | "studio" | "care";
    headline: string;
    caption: string;
    chartTitle: string;
    chartValue: string;
    chartNote: string;
    tags: string[];
  };
};

export const products: Product[] = [
  {
    id: "eco",
    name: "Eco Creative Marketing Agency",
    tabIcon: Leaf,
    kicker: "Marketing agency",
    description: "We help purpose-driven brands grow with creative strategies that are good for people and the planet. From brand storytelling to sustainable campaigns, we turn ideas into impact.",
    features: [
      { icon: Sprout, label: "Sustainable Branding" },
      { icon: Megaphone, label: "Digital Campaigns" },
      { icon: ChartColumn, label: "Social Media Growth" },
      { icon: Heart, label: "Impact Storytelling" },
    ],
    cta: { label: "Explore Our Services", href: "/services#digital-marketing" },
    mockup: {
      art: "forest",
      headline: "Better Choices Greener Tomorrow",
      caption: "Sustainable brands. Brighter future.",
      chartTitle: "Campaign Performance",
      chartValue: "+248%",
      chartNote: "Engagement growth",
      tags: ["Sustainability", "Creativity", "Impact", "Community"],
    },
  },
  {
    id: "one",
    name: "One Content Creation Studio",
    tabIcon: Play,
    kicker: "Content studio",
    description: "A full-service content studio for brands that want to move people, not just fill a feed. We plan, shoot, edit and publish stories with a pulse — made to be watched and built to be shared.",
    features: [
      { icon: Video, label: "Video Production" },
      { icon: Camera, label: "Photography" },
      { icon: PenLine, label: "Copywriting" },
      { icon: Share2, label: "Social Content" },
    ],
    cta: { label: "Start a Content Project", href: "/contact" },
    mockup: {
      art: "studio",
      headline: "Stories With a Pulse",
      caption: "Made to be watched. Built to be shared.",
      chartTitle: "Content Reach",
      chartValue: "1M+",
      chartNote: "Views this year",
      tags: ["Video", "Reels", "Photography", "Storytelling"],
    },
  },
  {
    id: "physio",
    name: "Physio@Home",
    tabIcon: House,
    kicker: "Health-tech platform",
    description: "Expert physiotherapy, right at your home. Book certified therapists, follow a personalized care plan and track your recovery — convenient, safe, and built around you.",
    features: [
      { icon: House, label: "In-home Sessions" },
      { icon: ShieldCheck, label: "Certified Therapists" },
      { icon: ClipboardList, label: "Personalized Care Plans" },
      { icon: Activity, label: "Progress Tracking" },
    ],
    cta: { label: "Book a Session", href: "/contact" },
    mockup: {
      art: "care",
      headline: "Move Better, Live Better",
      caption: "Care that comes to you.",
      chartTitle: "Recovery Progress",
      chartValue: "+86%",
      chartNote: "Mobility improvement",
      tags: ["Rehab", "Mobility", "Wellness", "Home Care"],
    },
  },
];
