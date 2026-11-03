export const isStaticMode = () => document.documentElement.classList.contains("static");

export const prefersReducedMotion = () => matchMedia("(prefers-reduced-motion: reduce)").matches;

export function onWindowLoad(callback: () => void) {
  if (document.readyState === "complete") {
    callback();
    return () => {};
  }
  window.addEventListener("load", callback, { once: true });
  return () => window.removeEventListener("load", callback);
}
