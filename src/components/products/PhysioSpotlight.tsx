import { Activity, ArrowRight, CalendarCheck, Heart, House, ShieldCheck, Star } from "lucide-react";
import Link from "next/link";
import { Icon } from "@/components/ui/Icon";
import { Text } from "@/components/ui/Text";

const highlights = [
  { icon: House, label: "In-home sessions" },
  { icon: ShieldCheck, label: "Certified therapists" },
  { icon: Heart, label: "Personalized care plans" },
];

export function PhysioSpotlight() {
  return (
    <section className="physio-spotlight-section">
      <div className="container">
        <div className="physio-spotlight reveal">
          <div className="physio-copy">
            <span className="card-kicker physio-kicker">Featured venture</span>
            <Text variant="h2">
              Physio@Home —<br />
              <span className="text-gradient-care">healthcare reimagined</span>
            </Text>
            <Text tone="light">Expert physiotherapy, right at your home. Convenient, safe, and personalized care for a healthier you.</Text>
            <Link href="/products?venture=physio#ventures" className="button button-outline-light">
              Learn More <ArrowRight size={16} aria-hidden="true" />
            </Link>
          </div>

          <div className="physio-art" aria-hidden="true">
            <span className="physio-orb"><Activity size={56} strokeWidth={1.6} /></span>
            <span className="physio-chip physio-chip-top"><CalendarCheck size={14} /> Session booked · 4:00 PM</span>
            <span className="physio-chip physio-chip-bottom"><Star size={14} fill="currentColor" /> 4.9 patient rating</span>
          </div>

          <ul className="physio-highlights">
            {highlights.map((item) => (
              <li key={item.label}>
                <Icon icon={item.icon} size={22} />
                <Text as="span" variant="caption" tone="inherit">{item.label}</Text>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
