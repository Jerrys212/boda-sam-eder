"use client";

import { useEffect } from "react";

export default function Parallax() {
  useEffect(() => {
    const images = [...document.querySelectorAll<HTMLImageElement>(".plx")];
    const heroImg = document.getElementById("heroImg");
    const navbar = document.querySelector(".navbar");
    let frame = 0;

    const update = () => {
      frame = 0;
      for (const img of images) {
        const rect = img.parentElement!.getBoundingClientRect();
        const progress = (rect.top + rect.height / 2 - innerHeight / 2) / innerHeight;
        const speed = parseFloat(img.dataset.speed ?? "") || -18;
        img.style.transform = `translateY(${progress * speed}px) scale(1.1)`;
      }
      navbar?.classList.toggle("scrolled", scrollY > innerHeight * 0.6);
      const heroProgress = Math.min(1, Math.max(0, scrollY / innerHeight));
      if (heroImg && !heroImg.classList.contains("plx")) {
        heroImg.style.transform = `translateY(${heroProgress * 46}px) scale(${1.12 - heroProgress * 0.05})`;
      }
    };

    const onScroll = () => {
      if (!frame) frame = requestAnimationFrame(update);
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", onScroll);
      cancelAnimationFrame(frame);
    };
  }, []);

  return null;
}
