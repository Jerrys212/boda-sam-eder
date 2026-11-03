import type { MetadataRoute } from "next";
import { wedding } from "@/lib/wedding";

export const dynamic = "force-static";

export default function manifest(): MetadataRoute.Manifest {
  const { meta } = wedding;
  return {
    name: meta.title,
    short_name: meta.shortName,
    description: meta.description,
    lang: "es-MX",
    start_url: "/",
    display: "standalone",
    background_color: meta.themeColors.paper,
    theme_color: meta.themeColors.sagedeep,
    icons: [
      { src: "/icons/icon-192.png", sizes: "192x192", type: "image/png" },
      { src: "/icons/icon-512.png", sizes: "512x512", type: "image/png" },
    ],
  };
}
