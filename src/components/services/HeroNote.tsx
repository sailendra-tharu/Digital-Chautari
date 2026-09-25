import { Caveat } from "next/font/google";

// Loaded only on pages that render this note.
const caveat = Caveat({ subsets: ["latin"], weight: ["600"] });

export function HeroNote({ children }: { children: React.ReactNode }) {
  return (
    <p className={`hero-note ${caveat.className}`}>
      {children}
      <svg viewBox="0 0 120 14" aria-hidden="true"><path d="M2 10 Q60 0 118 6" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" /></svg>
    </p>
  );
}
