"use client";

import { useSearchParams } from "next/navigation";
import { products } from "@/data/products";
import { ProductSwitcherView } from "./ProductSwitcherView";

/** Reads ?venture= so "Learn more" links on Home open the matching tab. Wrap in <Suspense>. */
export function ProductSwitcher() {
  const requested = useSearchParams().get("venture");
  const initial = products.find((product) => product.id === requested)?.id ?? products[0].id;
  return <ProductSwitcherView key={initial} initial={initial} />;
}
