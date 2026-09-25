import type { Metadata } from "next";
import { Inter, Sora } from "next/font/google";
import { ScrollReveal } from "@/components/layout/ScrollReveal";
import { QueryProvider } from "@/components/providers/QueryProvider";
import { SiteFooter } from "@/components/layout/SiteFooter";
import { SiteHeader } from "@/components/layout/SiteHeader";
import { getSiteUrl } from "@/lib/site";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
});

const sora = Sora({
  variable: "--font-sora",
  subsets: ["latin"],
  weight: ["600", "700", "800"],
});

const siteUrl = getSiteUrl();
const siteTitle = "Digital Chautari | Ideas → Impact";
const siteDescription = "Digital marketing, content creation, and health-tech software from Kathmandu to the world.";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: siteTitle,
    template: "%s | Digital Chautari",
  },
  description: siteDescription,
  keywords: ["digital marketing", "content creation", "software development", "health-tech", "Nepal"],
  authors: [{ name: "Digital Chautari" }],
  creator: "Digital Chautari",
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteUrl,
    siteName: "Digital Chautari",
    title: siteTitle,
    description: siteDescription,
    images: [{ url: "/opengraph-image", width: 1200, height: 630, alt: siteTitle }],
  },
  twitter: {
    card: "summary_large_image",
    title: siteTitle,
    description: siteDescription,
    images: ["/opengraph-image"],
  },
  robots: { index: true, follow: true },
};

const revealBootstrap = `document.documentElement.classList.add("reveal-ready")`;

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${sora.variable} h-full antialiased`}
      suppressHydrationWarning
    >
      <head>
        <script dangerouslySetInnerHTML={{ __html: revealBootstrap }} />
      </head>
      <body className="min-h-full flex flex-col font-sans">
        <QueryProvider>
          <SiteHeader />
          {children}
          <SiteFooter />
          <ScrollReveal />
        </QueryProvider>
      </body>
    </html>
  );
}
