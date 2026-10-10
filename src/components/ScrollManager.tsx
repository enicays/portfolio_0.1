"use client";

import { useEffect } from "react";

export default function ScrollManager() {
  useEffect(() => {
    // Disable automatic browser scroll restoration on refresh or navigation
    if (typeof window !== "undefined" && "scrollRestoration" in window.history) {
      window.history.scrollRestoration = "manual";
    }

    // If loaded with a hash in the URL (e.g. #projects from prior click), clear it so browser doesn't anchor jump
    if (typeof window !== "undefined") {
      if (window.location.hash) {
        window.history.replaceState(null, "", window.location.pathname);
      }
      // Force scroll to the top of the page on initial entry
      window.scrollTo({ top: 0, left: 0, behavior: "instant" as ScrollBehavior });
    }
  }, []);

  return null;
}
