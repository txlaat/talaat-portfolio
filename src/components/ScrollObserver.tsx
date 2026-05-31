"use client";

import { useEffect } from "react";

export default function ScrollObserver() {
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        // 1. If element is in view -> animate it
        if (entry.isIntersecting) {
          entry.target.classList.add("show-animate");
        }
        // 2. If element leaves view -> check position
        else {
          // Only reset animation if we scrolled UP (element is now below viewport)
          if (entry.boundingClientRect.top > 0) {
            entry.target.classList.remove("show-animate");
          }
        }
      });
    });

    const hiddenElements = document.querySelectorAll(".animate-scroll");
    hiddenElements.forEach((el) => observer.observe(el));

    // Cleanup observer on unmount
    return () => {
      hiddenElements.forEach((el) => observer.unobserve(el));
      observer.disconnect();
    };
  }, []);

  return null;
}
