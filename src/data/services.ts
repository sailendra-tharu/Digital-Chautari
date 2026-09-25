import {
  ChartColumn, Clapperboard, CodeXml, FileText, Globe, GraduationCap, HeartPulse, House, ImageIcon, Link, Megaphone, Plane,
  PenTool, Search, Settings, ShoppingCart, Smartphone, SquarePlay, Target, Users, Video,
  type LucideIcon,
} from "lucide-react";

export type Accent = "teal" | "gold" | "leaf" | "lilac" | "pink";

export type ServiceCategory = {
  id: string;
  icon: LucideIcon;
  accent: Accent;
  title: string;
  description: string;
  services: { icon: LucideIcon; label: string }[];
};

export const serviceCategories: ServiceCategory[] = [
  {
    id: "digital-marketing",
    icon: Megaphone,
    accent: "teal",
    title: "Digital Marketing",
    description: "Boost your online presence, attract the right audience, and turn clicks into customers.",
    services: [
      { icon: Search, label: "SEO & SEM" },
      { icon: Users, label: "Social Media Marketing" },
      { icon: Target, label: "Paid Advertising" },
      { icon: ChartColumn, label: "Analytics & Reporting" },
    ],
  },
  {
    id: "content-creation",
    icon: Clapperboard,
    accent: "gold",
    title: "Content Creation",
    description: "Powerful content that tells your story, builds trust, and drives engagement.",
    services: [
      { icon: ImageIcon, label: "Social Media Content" },
      { icon: Video, label: "Video Production" },
      { icon: PenTool, label: "Graphic Design" },
      { icon: FileText, label: "Copywriting" },
    ],
  },
  {
    id: "software-development",
    icon: CodeXml,
    accent: "leaf",
    title: "Software Development",
    description: "Scalable, secure, and innovative solutions tailored to your business needs.",
    services: [
      { icon: Globe, label: "Web Development" },
      { icon: Smartphone, label: "Mobile App Development" },
      { icon: Settings, label: "Custom Software" },
      { icon: Link, label: "API Integration" },
    ],
  },
];

export type Plan = {
  name: string;
  description: string;
  price: string;
  period?: string;
  features: string[];
  cta: { label: string; href: string };
  featured?: boolean;
};

export const plans: Plan[] = [
  {
    name: "Starter",
    description: "Perfect for small businesses and startups.",
    price: "Rs 15,000",
    period: "/mo",
    features: ["Basic SEO & content strategy", "Social media management (2 platforms)", "Monthly performance report", "Email support"],
    cta: { label: "Get Started", href: "/contact#contact-form" },
  },
  {
    name: "Professional",
    description: "Ideal for growing businesses that need more.",
    price: "Rs 45,000",
    period: "/mo",
    features: ["Advanced SEO & SEM", "Social media management (4 platforms)", "Content creation (custom)", "Bi-weekly performance report", "Priority support"],
    cta: { label: "Get Started", href: "/contact#contact-form" },
    featured: true,
  },
  {
    name: "Enterprise",
    description: "Custom solutions for large businesses with complex needs.",
    price: "Custom",
    features: ["Everything in Professional", "Dedicated account manager", "Advanced analytics & insights", "Custom development & integrations", "24/7 priority support"],
    cta: { label: "Contact Us", href: "/contact" },
  },
];

export const industries: { icon: LucideIcon; label: string; accent: Accent }[] = [
  { icon: HeartPulse, label: "Healthcare", accent: "pink" },
  { icon: ShoppingCart, label: "E-Commerce", accent: "teal" },
  { icon: House, label: "Real Estate", accent: "gold" },
  { icon: GraduationCap, label: "Education", accent: "lilac" },
  { icon: Plane, label: "Tourism", accent: "leaf" },
  { icon: SquarePlay, label: "Media", accent: "teal" },
];

export const reasons = [
  "Dedicated project manager",
  "Agile development cycle",
  "Transparent pricing",
  "Post-launch support",
  "Scalable architecture",
  "Cross-platform expertise",
];
