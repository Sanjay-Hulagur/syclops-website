import type { Metadata } from "next";
import { WorkspaceCreatedPanel } from "@/components/start-form";
import { StartLayout } from "@/components/start-layout";
import { pageSeo } from "@/lib/seo";

export const metadata: Metadata = {
  ...pageSeo({
    title: "Your workspace is ready",
    description:
      "Your Syclops workspace is ready. Check your email for the link to set your admin password.",
    path: "/start/created",
  }),
  robots: { index: false, follow: false },
};

export default function WorkspaceCreatedPage() {
  return (
    <StartLayout
      breadcrumbs={[
        { name: "Home", path: "/" },
        { name: "Start", path: "/start" },
        { name: "Ready", path: "/start/created" },
      ]}
      panel={<WorkspaceCreatedPanel />}
    />
  );
}
