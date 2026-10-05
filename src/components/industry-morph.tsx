"use client";

import { useMemo, useState } from "react";
import { ProductStage } from "@/components/product-stage";
import { industries, type IndustryId } from "@/lib/industries";

export function IndustryMorph({
  initial = "gyms",
}: {
  initial?: IndustryId;
}) {
  const [id, setId] = useState<IndustryId>(initial);
  const industry = useMemo(
    () => industries.find((item) => item.id === id) ?? industries[0],
    [id],
  );

  return (
    <div>
      <div
        className="flex flex-wrap gap-2"
        role="tablist"
        aria-label="Choose an industry"
      >
        {industries.map((item) => {
          const active = item.id === industry.id;
          return (
            <button
              key={item.id}
              type="button"
              role="tab"
              aria-selected={active}
              onClick={() => setId(item.id)}
              className={`rounded-full px-3.5 py-1.5 text-sm transition ${
                active
                  ? "bg-ink text-cream"
                  : "border border-line bg-cream text-muted hover:text-ink"
              }`}
            >
              {item.label}
            </button>
          );
        })}
      </div>
      <p className="mt-8 max-w-2xl text-lg leading-8 text-muted">
        {industry.body}
      </p>
      <div className="mt-8">
        <ProductStage industry={industry} />
      </div>
    </div>
  );
}
