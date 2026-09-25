import type { ComponentPropsWithoutRef } from "react";

type HeadingVariant = "h1" | "h2" | "h3";
type TextVariant = HeadingVariant | "lede" | "body" | "caption";
type TextTone = "muted" | "ink" | "light" | "inverse" | "inherit";
type TextElement = "h1" | "h2" | "h3" | "h4" | "p" | "span" | "small" | "div";

type TextProps = {
  /** Defaults to the heading tag for heading variants, otherwise `p`. */
  as?: TextElement;
  /**
   * h1 46px/800 (32px mobile) · h2 30px/700 (28px mobile) · h3 17px/700 — Sora
   * lede 17px · body 15px · caption 13px/500 — Inter
   */
  variant?: TextVariant;
  /** muted on light backgrounds, light on navy, inverse on teal, inherit to follow the parent. Headings default to inherit. */
  tone?: TextTone;
} & ComponentPropsWithoutRef<"p">;

const headingVariants: TextVariant[] = ["h1", "h2", "h3"];

export function Text({ as, variant = "body", tone, className, ...props }: TextProps) {
  const isHeading = headingVariants.includes(variant);
  const Component = as ?? (isHeading ? (variant as HeadingVariant) : "p");
  const resolvedTone = tone ?? (isHeading ? "inherit" : "muted");
  const classes = ["text", `text-${variant}`, `text-${resolvedTone}`, className].filter(Boolean).join(" ");
  return <Component className={classes} {...props} />;
}
