"use client";

import { useEffect, useRef, useState } from "react";
import { Text } from "@/components/ui/Text";

export type Milestone = { year: string; title: string; copy: string };

/** Where the "water" front sits in the viewport while scrolling (0 = top, 1 = bottom). */
const WATER_LINE = 0.62;
/** Vertical centre of each dot, measured from the top of its milestone (keep in sync with CSS). */
const DOT_CENTER = 30;

/**
 * Alternating timeline whose centre pipe fills with flowing "water" as the user scrolls.
 * Each milestone lights up and slides in once the water reaches its dot.
 */
export function Roadmap({ milestones }: { milestones: Milestone[] }) {
  const rootRef = useRef<HTMLDivElement>(null);
  const pipeRef = useRef<HTMLDivElement>(null);
  const itemRefs = useRef<(HTMLLIElement | null)[]>([]);
  const [reached, setReached] = useState(0);

  useEffect(() => {
    const root = rootRef.current;
    const pipe = pipeRef.current;
    if (!root || !pipe) return;

    root.classList.add("is-enhanced");
    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    let frame = 0;

    const update = () => {
      frame = 0;
      // Run the pipe from the first dot to the last one.
      const last = itemRefs.current[itemRefs.current.length - 1];
      if (last) pipe.style.bottom = `${last.offsetHeight - DOT_CENTER}px`;

      const pipeRect = pipe.getBoundingClientRect();
      const progress = reducedMotion
        ? 1
        : Math.min(1, Math.max(0, (window.innerHeight * WATER_LINE - pipeRect.top) / pipeRect.height));
      root.style.setProperty("--progress", progress.toFixed(4));

      // Count milestones whose dot is at or above the water front.
      const waterY = pipeRect.top + progress * pipeRect.height;
      const count = progress === 0 ? 0 : itemRefs.current.filter((item) => {
        return item ? item.getBoundingClientRect().top + DOT_CENTER <= waterY + 1 : false;
      }).length;
      setReached(count);
    };

    const schedule = () => {
      if (!frame) frame = requestAnimationFrame(update);
    };

    schedule();
    window.addEventListener("scroll", schedule, { passive: true });
    window.addEventListener("resize", schedule);
    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener("scroll", schedule);
      window.removeEventListener("resize", schedule);
    };
  }, []);

  return (
    <div className="roadmap" ref={rootRef}>
      <div className="roadmap-pipe" ref={pipeRef} aria-hidden="true">
        <div className="roadmap-water">
          <span className="roadmap-drop" />
        </div>
      </div>
      <ol className="roadmap-list">
        {milestones.map((milestone, index) => (
          <li
            key={`${milestone.year}-${milestone.title}`}
            ref={(element) => { itemRefs.current[index] = element; }}
            className={`roadmap-item ${index % 2 === 0 ? "is-left" : "is-right"} ${index < reached ? "is-reached" : ""}`}
          >
            <span className="roadmap-dot" aria-hidden="true" />
            <article className="roadmap-card">
              <span className="roadmap-year">{milestone.year}</span>
              <Text variant="h3">{milestone.title}</Text>
              <Text variant="caption" tone="light">{milestone.copy}</Text>
            </article>
          </li>
        ))}
      </ol>
    </div>
  );
}
