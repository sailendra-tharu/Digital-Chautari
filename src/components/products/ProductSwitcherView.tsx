"use client";

import { ArrowRight } from "lucide-react";
import { useState } from "react";
import { Button } from "@/components/ui/Button";
import { Icon } from "@/components/ui/Icon";
import { Text } from "@/components/ui/Text";
import { ProductMockup } from "./ProductMockup";
import { products, type Product } from "@/data/products";

export function ProductSwitcherView({ initial = products[0].id }: { initial?: Product["id"] }) {
  const [active, setActive] = useState(initial);
  const selected = products.find((product) => product.id === active) ?? products[0];

  return (
    <div className="product-switcher">
      <div className="product-tabs" role="tablist" aria-label="Our ventures">
        {products.map((product) => (
          <button
            key={product.id}
            id={`tab-${product.id}`}
            className={active === product.id ? "active" : undefined}
            type="button"
            role="tab"
            aria-selected={active === product.id}
            aria-controls="product-panel"
            onClick={() => setActive(product.id)}
          >
            <Icon icon={product.tabIcon} size={18} />
            <span>{product.name}</span>
          </button>
        ))}
      </div>

      <div className="product-panel" id="product-panel" role="tabpanel" aria-labelledby={`tab-${selected.id}`} key={selected.id}>
        <div className="product-panel-copy">
          <span className="card-kicker">{selected.kicker}</span>
          <Text variant="h2">{selected.name}</Text>
          <Text>{selected.description}</Text>
          <ul className="product-features">
            {selected.features.map((feature) => (
              <li key={feature.label}>
                <Icon icon={feature.icon} size={18} />
                <Text as="span" variant="caption" tone="ink">{feature.label}</Text>
              </li>
            ))}
          </ul>
          <Button href={selected.cta.href} icon={ArrowRight}>{selected.cta.label}</Button>
        </div>
        <ProductMockup mockup={selected.mockup} />
      </div>
    </div>
  );
}
