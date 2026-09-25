import { Ellipsis, Heart, House, ImageIcon, Leaf, Mail, MessageCircle, Send, Settings, TrendingUp } from "lucide-react";
import { Text } from "@/components/ui/Text";
import type { Product } from "@/data/products";

const sidebarIcons = [House, ImageIcon, Mail, Settings];

/** Decorative app preview for the selected venture — hidden from assistive tech. */
export function ProductMockup({ mockup }: { mockup: Product["mockup"] }) {
  return (
    <div className="mockup" aria-hidden="true">
      <div className="mockup-window">
        <div className="mockup-sidebar">
          <span className="mockup-logo"><Leaf size={12} /></span>
          {sidebarIcons.map((SidebarIcon, index) => <SidebarIcon key={index} size={14} />)}
        </div>

        <div className="mockup-post">
          <div className={`mockup-art mockup-art-${mockup.art}`}>
            <div className="mockup-art-top"><span className="mockup-badge"><Leaf size={11} /></span><Ellipsis size={14} /></div>
            <Text as="span" variant="h3" tone="inherit" className="mockup-headline">{mockup.headline}</Text>
            <ArtHills />
          </div>
          <Text as="span" variant="caption" tone="ink" className="mockup-caption">{mockup.caption}</Text>
          <div className="mockup-actions"><Heart size={13} fill="currentColor" /><MessageCircle size={13} /><Send size={13} /></div>
        </div>

        <div className="mockup-side">
          <div className="mockup-card">
            <Text as="span" variant="caption" tone="ink">{mockup.chartTitle}</Text>
            <div className="mockup-chart">
              <Sparkline />
              <span className="mockup-metric">
                <TrendingUp size={12} />
                <strong>{mockup.chartValue}</strong>
                <small>{mockup.chartNote}</small>
              </span>
            </div>
          </div>
          <div className="mockup-card">
            <Text as="span" variant="caption" tone="ink">Brand Tags</Text>
            <div className="mockup-tags">{mockup.tags.map((tag) => <span key={tag}>{tag}</span>)}</div>
            <span className="mockup-bar" />
          </div>
        </div>
      </div>
    </div>
  );
}

function Sparkline() {
  const points = "0,46 14,40 26,42 38,30 50,33 62,22 74,25 86,12 100,6";
  return (
    <svg className="mockup-sparkline" viewBox="0 0 100 52" preserveAspectRatio="none">
      <defs>
        <linearGradient id="spark-fill" x1="0" x2="0" y1="0" y2="1">
          <stop offset="0%" stopColor="currentColor" stopOpacity=".25" />
          <stop offset="100%" stopColor="currentColor" stopOpacity="0" />
        </linearGradient>
      </defs>
      <polygon points={`0,52 ${points} 100,52`} fill="url(#spark-fill)" />
      <polyline points={points} fill="none" stroke="currentColor" strokeWidth="2" vectorEffect="non-scaling-stroke" strokeLinejoin="round" />
    </svg>
  );
}

function ArtHills() {
  return (
    <svg className="mockup-hills" viewBox="0 0 200 80" preserveAspectRatio="none">
      <path d="M0 50 L30 28 L52 44 L84 16 L112 40 L140 22 L170 42 L200 30 V80 H0 Z" fill="currentColor" opacity=".35" />
      <path d="M0 64 L24 48 L50 60 L78 42 L104 58 L136 44 L164 60 L200 50 V80 H0 Z" fill="currentColor" opacity=".6" />
    </svg>
  );
}
