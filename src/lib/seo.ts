import type { Metadata } from "next";
import { site } from "@/lib/site";

export function pageSeo({
  title,
  description,
  path,
  keywords,
}: {
  title: string;
  description: string;
  path: string;
  keywords?: string[];
}): Metadata {
  const url = path === "/" ? site.url : `${site.url}${path}`;
  const branded = title.includes(site.name) ? title : `${title} · ${site.name}`;

  return {
    title,
    description,
    keywords,
    alternates: { canonical: url },
    openGraph: {
      title: branded,
      description,
      url,
      siteName: site.name,
      type: "website",
      locale: "en_IN",
    },
    twitter: {
      card: "summary_large_image",
      title: branded,
      description,
    },
  };
}

export function faqJsonLd(items: { q: string; a: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: items.map((item) => ({
      "@type": "Question",
      name: item.q,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.a,
      },
    })),
  };
}

export function breadcrumbJsonLd(items: { name: string; path: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: item.path === "/" ? site.url : `${site.url}${item.path}`,
    })),
  };
}

export const organizationJsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: site.name,
  url: site.url,
  description: site.description,
  logo: `${site.url}/icon.svg`,
  areaServed: "IN",
};

export const websiteJsonLd = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: site.name,
  url: site.url,
  description: site.description,
  inLanguage: "en-IN",
  publisher: {
    "@type": "Organization",
    name: site.name,
    url: site.url,
  },
};

export const softwareJsonLd = {
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  name: site.name,
  url: site.url,
  applicationCategory: "BusinessApplication",
  applicationSubCategory: "Referral Management Software",
  operatingSystem: "Web, iOS, Android",
  description: site.description,
  featureList: [
    "GPS field check-in, routes, and TADA",
    "Partner and member referral portal",
    "Referral status from sent to paying",
    "Referral rewards on invoices",
    "Subscription plans and dunning that create field tasks",
    "Loop health analytics",
  ],
  offers: {
    "@type": "AggregateOffer",
    priceCurrency: "INR",
    lowPrice: "1499",
    highPrice: "4499",
    offerCount: 3,
    url: `${site.url}/pricing`,
  },
  publisher: {
    "@type": "Organization",
    name: site.name,
    url: site.url,
  },
};
