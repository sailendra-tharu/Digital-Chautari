"use client";

import { usePathname } from "next/navigation";
import { useEffect } from "react";

const REVEAL_GROUPS = [
  ".feature-grid", ".values-grid", ".product-grid", ".testimonial-grid", ".blog-grid", ".industries-grid",
  ".process-grid", ".teaser-grid", ".mission-grid",
  ".quality-grid", ".team-grid", ".contact-info-grid", ".department-grid", ".tile-grid", ".roadmap",
  ".service-category-list", ".plan-grid", ".industry-tile-grid",
].join(", ");

/** Fades cards up as they scroll into view, staggered ~70ms per item within a grid. */
export function ScrollReveal() {
  const pathname = usePathname();

  useEffect(() => {
    const root = document.documentElement;
    const targets = new Set<HTMLElement>(document.querySelectorAll<HTMLElement>(".reveal"));
    document.querySelectorAll<HTMLElement>(REVEAL_GROUPS).forEach((group) => {
      Array.from(group.children).forEach((child, index) => {
        const item = child as HTMLElement;
        item.style.setProperty("--reveal-delay", `${index * 70}ms`);
        targets.add(item);
      });
    });
    if (!("IntersectionObserver" in window)) return;

    targets.forEach((item) => item.classList.add("reveal-item"));
    root.classList.add("reveal-ready");
    const observer = new IntersectionObserver(
      (entries) => entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        entry.target.classList.add("is-visible");
        observer.unobserve(entry.target);
      }),
      { threshold: 0.12, rootMargin: "0px 0px -40px 0px" },
    );
    targets.forEach((item) => observer.observe(item));
    return () => observer.disconnect();
  }, [pathname]);

  return null;
}
