"use client";

import { motion, useInView, useMotionValue, useMotionValueEvent, useReducedMotion, useSpring } from "framer-motion";
import { useEffect, useRef, useState } from "react";

type ParsedValue = {
  prefix: string;
  target: number;
  suffix: string;
  decimals: number;
};

function parseValue(value: string): ParsedValue {
  const match = value.match(/^([^\d]*)([\d,]+(?:\.\d+)?)(.*)$/);
  if (!match) return { prefix: "", target: 0, suffix: value, decimals: 0 };

  const numericValue = match[2].replaceAll(",", "");
  return {
    prefix: match[1],
    target: Number(numericValue),
    suffix: match[3],
    decimals: numericValue.includes(".") ? numericValue.split(".")[1].length : 0,
  };
}

function formatValue(value: number, decimals: number) {
  return decimals > 0 ? value.toFixed(decimals) : Math.round(value).toString();
}

export function AnimatedStatValue({ value }: { value: string }) {
  const elementRef = useRef<HTMLElement>(null);
  const parsed = parseValue(value);
  const isInView = useInView(elementRef, { once: true, amount: 0.4 });
  const shouldReduceMotion = useReducedMotion();
  const sourceValue = useMotionValue(0);
  const animatedValue = useSpring(sourceValue, { bounce: 0, duration: 1300 });
  const [displayValue, setDisplayValue] = useState(formatValue(0, parsed.decimals));

  useMotionValueEvent(animatedValue, "change", (latest) => {
    setDisplayValue(formatValue(latest, parsed.decimals));
  });

  useEffect(() => {
    if (!isInView) return;

    if (shouldReduceMotion) {
      animatedValue.jump(parsed.target);
      return;
    }

    sourceValue.set(parsed.target);
  }, [animatedValue, isInView, parsed.target, shouldReduceMotion, sourceValue]);

  return (
    <motion.strong ref={elementRef}>
      {parsed.prefix}{displayValue}{parsed.suffix}
    </motion.strong>
  );
}
