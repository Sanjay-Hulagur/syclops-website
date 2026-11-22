import type { Metadata } from "next";
import { Suspense } from "react";
import { Geist, Syne } from "next/font/google";
import { Analytics } from "@/components/analytics";
import { Footer } from "@/components/footer";
import { Header } from "@/components/header";
import { JsonLd } from "@/components/interior";
import { FooterSwitch } from "@/components/landing-chrome";
import { LandingFooter } from "@/components/landing-footer";
import {
  jsonLdGraph,
  organizationNode,
  websiteNode,
} from "@/lib/seo";
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
    default: `${site.name} — Field Tracking, Referral Management & Subscription Software`,
    template: `%s | ${site.name}`,
  },
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
    title: `${site.name} — Field Tracking, Referral Management & Subscription Software`,
    description: site.description,
    url: site.url,
    siteName: site.name,
    type: "website",
    locale: "en_IN",
  },
  twitter: {
    card: "summary_large_image",
    title: `${site.name} — Field Tracking, Referral Management & Subscription Software`,
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
      lang="en-IN"
      className={`${geistSans.variable} ${syne.variable} h-full antialiased`}
    >
      <head>
        {/* Google tag. GTM receives data-layer events, including qualify_lead.
            Paid landing pages tag every event on the page with their variant. */}
        <script
          dangerouslySetInnerHTML={{
            __html: `window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
var lp = location.pathname.match(/^\\/lp\\/([a-z0-9-]+)/);
if (lp) gtag('set', { landing_variant: lp[1] });
gtag('config', 'G-S2DH48NBP5');`,
          }}
        />
        <script
          async
          src="https://www.googletagmanager.com/gtag/js?id=G-S2DH48NBP5"
        />
        <script
          async
          src="https://www.googletagmanager.com/gtm.js?id=GTM-KBKZ4GTS"
        />
      </head>
      <body
        className="flex min-h-full flex-col bg-paper text-ink"
        suppressHydrationWarning
      >
        {/* Google Tag Manager (noscript) */}
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-KBKZ4GTS"
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
          />
        </noscript>
        {/* End Google Tag Manager (noscript) */}
        <Suspense fallback={null}>
          <Analytics />
        </Suspense>
        <JsonLd data={jsonLdGraph([organizationNode, websiteNode])} />
        <Header />
        <main className="flex-1">{children}</main>
        <FooterSwitch landing={<LandingFooter />}>
          <Footer />
        </FooterSwitch>
      </body>
    </html>
  );
}
