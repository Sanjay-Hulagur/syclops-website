import type { Metadata } from "next";
import { canonicalUrl } from "@/lib/routes";
import { site } from "@/lib/site";

export const organizationId = `${site.url}/#organization`;
export const websiteId = `${site.url}/#website`;
export const softwareId = `${site.url}/#software`;

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
  const url = canonicalUrl(path);
  const branded = title.includes(site.name) ? title : `${title} | ${site.name}`;

  return {
    title: { absolute: branded },
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
      item: canonicalUrl(item.path),
    })),
  };
}

export const organizationNode = {
  "@type": "Organization",
  "@id": organizationId,
  name: site.name,
  url: site.url,
  description: site.description,
  logo: `${site.url}/syclops-logo.svg`,
  areaServed: { "@type": "Country", name: "India" },
  brand: { "@type": "Brand", name: site.name },
};

export const websiteNode = {
  "@type": "WebSite",
  "@id": websiteId,
  name: site.name,
  url: site.url,
  description: site.description,
  inLanguage: "en-IN",
  publisher: { "@id": organizationId },
};

export const softwareNode = {
  "@type": "SoftwareApplication",
  "@id": softwareId,
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
  publisher: { "@id": organizationId },
};

export const organizationJsonLd = {
  "@context": "https://schema.org",
  ...organizationNode,
};

export const websiteJsonLd = {
  "@context": "https://schema.org",
  ...websiteNode,
};

export const softwareJsonLd = {
  "@context": "https://schema.org",
  ...softwareNode,
};

export function jsonLdGraph(nodes: Record<string, unknown>[]) {
  return {
    "@context": "https://schema.org",
    "@graph": nodes,
  };
}

export const pricingOfferNodes = [
  {
    "@type": "Offer",
    name: "Team",
    price: "1499",
    priceCurrency: "INR",
    url: `${site.url}/pricing`,
    description:
      "Field tracking, TADA, routes, referral workspace, up to 3 managers, WhatsApp and Maps. Per field seat per month.",
  },
  {
    "@type": "Offer",
    name: "Growth",
    price: "2499",
    priceCurrency: "INR",
    url: `${site.url}/pricing`,
    description:
      "Team plus partner/member portal, subscription plans and dunning, referral rewards on invoices, analytics by referrer and region. Per field seat per month.",
  },
  {
    "@type": "Offer",
    name: "Scale",
    price: "4499",
    priceCurrency: "INR",
    url: `${site.url}/pricing`,
    description:
      "Growth plus multi-brand / multi-city, SSO and audit logs, HIS/ERP connectors, India hosting region picker. Per field seat per month.",
  },
];
