import {
  Briefcase, Building2, Clapperboard, CodeXml, Cog, Cpu, Eye, GraduationCap, Heart, HeartHandshake, HeartPulse, Layers,
  Megaphone, Newspaper, Palette, PenTool, Plane, Repeat, Rocket, Search, ShoppingBag, Smile, Sparkles, TrendingUp, Users,
  type LucideIcon,
} from "lucide-react";
import type { Stat } from "@/components/sections/StatsBar";
import type { Tone } from "./types";

export const heroStats: Stat[] = [
  { icon: Layers, value: "3", label: "Products" },
  { icon: Users, value: "6+", label: "Team members" },
  { icon: Heart, value: "100%", label: "Commitment" },
];

export const impactStats: Stat[] = [
  { icon: Briefcase, value: "250+", label: "Projects delivered" },
  { icon: Smile, value: "40+", label: "Happy clients" },
  { icon: Eye, value: "1M+", label: "Content views" },
  { icon: Repeat, value: "98%", label: "Client retention" },
];

export type Feature = { icon: LucideIcon; title: string; description: string; tone: Tone };

export const features: Feature[] = [
  { icon: TrendingUp, title: "Growth-Driven", tone: "mint", description: "Every move is anchored to a clear business outcome and a way to measure momentum." },
  { icon: Sparkles, title: "Creative-First", tone: "gold", description: "We find the sharp, human idea hiding inside every brief and make it impossible to miss." },
  { icon: Cpu, title: "Tech-Powered", tone: "lilac", description: "Smart systems, clean code, and digital experiences built to keep working as you grow." },
  { icon: HeartHandshake, title: "Client-Centric", tone: "pink", description: "You get a thoughtful partner, a transparent process, and a team invested in your win." },
];

export const whoWeAre = {
  paragraphs: [
    "In Nepal, a chautari is a place to pause, share stories, and exchange ideas. Digital Chautari brings that same spirit to the digital world — a place where strategy, creativity, and technology sit at the same table.",
    "From a first sketch to the final launch, we stay close to the details that make work feel useful, memorable, and distinctly yours.",
  ],
  checklist: ["Creative strategy", "Brand storytelling", "Full-stack engineering", "Health-tech expertise"],
};

export const serviceTeasers: { icon: LucideIcon; title: string; tagline: string; tone: Tone }[] = [
  { icon: Megaphone, title: "Digital Marketing", tagline: "Find your next audience.", tone: "mint" },
  { icon: Clapperboard, title: "Content Creation", tagline: "Give your story a pulse.", tone: "gold" },
  { icon: CodeXml, title: "Software Development", tagline: "Build for what's next.", tone: "lilac" },
  { icon: Palette, title: "Branding & Design", tagline: "Make a lasting impression.", tone: "pink" },
];

export const ventures: { category: string; title: string; description: string; image: string; href: string }[] = [
  { category: "Creative marketing agency", title: "Eco Creative Marketing Agency", image: "/assets/services-chautari.jpg", href: "/products?venture=eco#ventures", description: "Purposeful strategy and creative campaigns for brands ready to grow with intention." },
  { category: "Content creation studio", title: "One Content Creation Studio", image: "/assets/products-hero.jpg", href: "/products?venture=one#ventures", description: "Stories with a pulse, made for brands that want to move people, not just fill a feed." },
  { category: "Health-tech platform", title: "Physio@Home", image: "/assets/about-team.jpg", href: "/products?venture=physio#ventures", description: "Personalized physiotherapy support that brings trusted clinical care into everyday life." },
];

export const industries: { icon: LucideIcon; label: string; tone: Tone }[] = [
  { icon: HeartPulse, label: "Healthcare", tone: "mint" },
  { icon: ShoppingBag, label: "E-Commerce", tone: "teal" },
  { icon: Building2, label: "Real Estate", tone: "gold" },
  { icon: GraduationCap, label: "Education", tone: "lilac" },
  { icon: Plane, label: "Tourism & Hospitality", tone: "pink" },
  { icon: Newspaper, label: "Media & Publishing", tone: "mint" },
];

export const processSteps: { icon: LucideIcon; step: string; title: string; description: string }[] = [
  { icon: Search, step: "Discover", title: "Start with why.", description: "We listen deeply, ask better questions, and find the real opportunity." },
  { icon: PenTool, step: "Design", title: "Make it feel right.", description: "Ideas become a focused direction, a clear story, and a considered experience." },
  { icon: Cog, step: "Develop", title: "Build with intent.", description: "We bring the work to life with craft, speed, and the right technology." },
  { icon: Rocket, step: "Deliver", title: "Keep it moving.", description: "Launch is only the beginning. We learn, improve, and grow together." },
];

export const testimonials: { quote: string; name: string; role: string; image: string }[] = [
  { quote: "Digital Chautari understood the heart of our brand before we had the words for it. The result felt like us, only sharper.", name: "Aarati Shrestha", role: "Founder, Katha Studio", image: "/assets/about-team.jpg" },
  { quote: "The rare team that can think strategically, move quickly, and care about the smallest details. We felt like partners from day one.", name: "Rohan Karki", role: "Director, Elevate Nepal", image: "/assets/about-team.jpg" },
  { quote: "They gave our product the clarity it needed to step into the world. The numbers followed, but the confidence came first.", name: "Dr. Nisha Rai", role: "Co-founder, Physio@Home", image: "/assets/about-team.jpg" },
];

export const blogPosts: { image: string; category: string; date: string; title: string; excerpt: string }[] = [
  { image: "/assets/services-chautari.jpg", category: "Perspective", date: "May 18, 2025", title: "Why the best brands feel more like people", excerpt: "A little more humanity can make a lot more room for connection." },
  { image: "/assets/products-hero.jpg", category: "Creative process", date: "Apr 26, 2025", title: "The quiet power of a clear point of view", excerpt: "Before you make more noise, make sure you know what you want to say." },
  { image: "/assets/about-team.jpg", category: "Technology", date: "Mar 09, 2025", title: "Building digital products people return to", excerpt: "Useful is a beautiful place to start — and a good place to keep going." },
];
