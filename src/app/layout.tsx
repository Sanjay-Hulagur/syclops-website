import type { Metadata } from "next";
import { Geist, Syne } from "next/font/google";
import { Footer } from "@/components/footer";
import { Header } from "@/components/header";
import { JsonLd } from "@/components/interior";
import { organizationJsonLd, softwareJsonLd, websiteJsonLd } from "@/lib/seo";
import { site } from "@/lib/site";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const syne = Syne({
  variable: "--font-syne",
  subsets: ["latin"],
  weight: ["500", "600", "700"],
});

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: `${site.name} — Field tracking, referral management, subscriptions`,
    template: `%s · ${site.name}`,
  },
  alternates: { canonical: site.url },
  description: site.description,
  applicationName: site.name,
  category: "Referral management software",
  keywords: [
    "referral management software",
    "referral management system",
    "referral tracking software",
    "partner referral software",
    "healthcare referral management software",
    "clinic referral software",
    "member referral program software",
    "referral management software India",
    "field tracking software",
    "GPS field check-in",
    "subscription management",
    "partner portal",
  ],
  openGraph: {
    title: `${site.name} — Referral management software`,
    description: site.description,
    url: site.url,
    siteName: site.name,
    type: "website",
    locale: "en_IN",
  },
  twitter: {
    card: "summary_large_image",
    title: `${site.name} — Referral management software`,
    description: site.description,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${syne.variable} h-full antialiased`}
    >
      <body className="flex min-h-full flex-col bg-paper text-ink">
        <JsonLd data={[organizationJsonLd, websiteJsonLd, softwareJsonLd]} />
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
