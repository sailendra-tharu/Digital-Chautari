import type { Metadata } from "next";
import Image from "next/image";
import { Suspense } from "react";
import { PhysioSpotlight } from "@/components/products/PhysioSpotlight";
import { ProductSwitcher } from "@/components/products/ProductSwitcher";
import { ProductSwitcherView } from "@/components/products/ProductSwitcherView";
import { DarkCta } from "@/components/sections/DarkCta";
import { MediaHero } from "@/components/sections/MediaHero";

export const metadata: Metadata = { title: "Products" };

export default function ProductsPage() {
  return (
    <main>
      <MediaHero
        eyebrow="Products"
        title={<>Three ventures,<br /><span className="text-gradient">one vision.</span></>}
        description="Digital Chautari brings together creativity, content and care — building digital solutions that make a real difference."
        media={
          <Image
            src="/images/products-hero.jpg"
            alt="Three friends sitting on a rocky ledge, watching sunrise over the Himalayas"
            fill
            priority
            sizes="(max-width: 760px) 100vw, 64vw"
            className="media-hero-img"
          />
        }
      />
      <section className="products-ventures" id="ventures">
        <div className="container">
          <Suspense fallback={<ProductSwitcherView />}>
            <ProductSwitcher />
          </Suspense>
        </div>
      </section>
      <PhysioSpotlight />
      <DarkCta title={<>Have a bold idea of your <span className="text-gradient">own?</span></>} button="Start a conversation">
        We love meeting the ideas that are still taking shape. Bring us the spark and let&apos;s see where it can go.
      </DarkCta>
    </main>
  );
}
