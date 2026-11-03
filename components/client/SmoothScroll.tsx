"use client";

import Lenis from "lenis";
import { useEffect } from "react";
import { isStaticMode, prefersReducedMotion } from "./motion";

export default function SmoothScroll() {
  useEffect(() => {
    let lenis: Lenis | undefined;
    let frame = 0;

    if (!isStaticMode() && !prefersReducedMotion()) {
      const instance = new Lenis({ lerp: 0.05 });
      const raf = (time: number) => {
        instance.raf(time);
        frame = requestAnimationFrame(raf);
      };
      frame = requestAnimationFrame(raf);
      lenis = instance;
    }

    const onAnchorClick = (event: MouseEvent) => {
      event.preventDefault();
      const target = (event.currentTarget as HTMLAnchorElement).getAttribute("href");
      if (!target) return;
      if (lenis) lenis.scrollTo(target);
      else document.querySelector(target)?.scrollIntoView({ behavior: "smooth" });
    };

    const anchors = document.querySelectorAll<HTMLAnchorElement>('a[href^="#"]');
    anchors.forEach((anchor) => anchor.addEventListener("click", onAnchorClick));

    return () => {
      anchors.forEach((anchor) => anchor.removeEventListener("click", onAnchorClick));
      cancelAnimationFrame(frame);
      lenis?.destroy();
    };
  }, []);

  return null;
}
