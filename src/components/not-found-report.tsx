"use client";

import { useEffect } from "react";
import { collectError } from "@/lib/collect";

export function NotFoundReport() {
  useEffect(() => {
    collectError({
      status: 404,
      kind: "not_found",
      path: window.location.pathname,
      query: window.location.search.replace(/^\?/, ""),
      message: "Page not found",
    });
  }, []);

  return null;
}
