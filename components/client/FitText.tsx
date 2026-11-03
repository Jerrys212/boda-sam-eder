"use client";

import { useEffect } from "react";

export default function FitText({ selector }: { selector: string }) {
  useEffect(() => {
    const el = document.querySelector<HTMLElement>(selector);
    if (!el?.parentElement) return;
    const parent = el.parentElement;

    const fit = () => {
      el.style.fontSize = "100px";
      const width = el.scrollWidth;
      el.style.fontSize = `${Math.min(150, (100 * (parent.clientWidth * 0.88)) / width)}px`;
    };

    fit();
    window.addEventListener("resize", fit);
    return () => window.removeEventListener("resize", fit);
  }, [selector]);

  return null;
}
