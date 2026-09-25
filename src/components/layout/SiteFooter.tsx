import Link from "next/link";
import { Brand } from "./Brand";
import { Text } from "@/components/ui/Text";

export function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="container footer-grid">
        <div className="footer-brand">
          <Brand />
          <Text variant="caption" tone="light">Building digital bridges between bold ideas and measurable impact from Kathmandu to the world.</Text>
          <div className="social-row" aria-label="Social links">
            <a href="#linkedin" aria-label="LinkedIn">in</a>
            <a href="#instagram" aria-label="Instagram">◎</a>
            <a href="#facebook" aria-label="Facebook">f</a>
          </div>
        </div>
        <FooterLinks title="Company" links={[["About us", "/about"], ["Our team", "/about#team"], ["FAQ", "/faq"], ["Contact", "/contact"]]} />
        <FooterLinks title="Services" links={[["Digital Marketing", "/services#digital-marketing"], ["Content Creation", "/services#content-creation"], ["Software Development", "/services#software-development"], ["Pricing", "/services#pricing"]]} />
        <FooterLinks title="Legal" links={[["Privacy policy", "/legal#privacy"], ["Terms of service", "/legal#terms"], ["Cookie policy", "/legal#cookies"]]} />
      </div>
      <div className="container footer-bottom">
        <span>© {new Date().getFullYear()} Digital Chautari. All rights reserved. <span className="footer-dot">•</span> Kathmandu, Nepal</span>
      </div>
    </footer>
  );
}

function FooterLinks({ title, links }: { title: string; links: [string, string][] }) {
  return (
    <div className="footer-links">
      <Text variant="h3">{title}</Text>
      {links.map(([label, href]) => (
        <Link href={href} key={label}>{label}</Link>
      ))}
    </div>
  );
}
