"use client";

import { useEffect } from "react";
import { isStaticMode, onWindowLoad } from "./motion";

const OBSERVED = ".reveal,.stagger,.breather-inner,.dress-fig,.menu,.day-fig";

export default function Reveal() {
  useEffect(() => {
    const isStatic = isStaticMode();
    let loadedTimer: number | undefined;

    const removeLoadListener = onWindowLoad(() => {
      loadedTimer = window.setTimeout(
        () => document.body.classList.add("loaded"),
        isStatic ? 0 : 150,
      );
      if (isStatic) {
        document.querySelectorAll(`${OBSERVED},.wipe`).forEach((el) => el.classList.add("in"));
      }
    });

    const observer = new IntersectionObserver(
      (entries) =>
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("in");
            observer.unobserve(entry.target);
          }
        }),
      { threshold: 0.16 },
    );
    document.querySelectorAll(OBSERVED).forEach((el) => observer.observe(el));

    return () => {
      removeLoadListener();
      window.clearTimeout(loadedTimer);
      observer.disconnect();
    };
  }, []);

  return null;
}
