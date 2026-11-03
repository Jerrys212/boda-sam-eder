import type { Metadata, Viewport } from "next";
import { cormorant, montserrat, windsong } from "./fonts";
import { wedding } from "@/lib/wedding";
import "./globals.css";

const { meta } = wedding;

const ogImage = {
  url: meta.ogImage.src,
  width: meta.ogImage.width,
  height: meta.ogImage.height,
  alt: meta.ogImage.alt,
  type: "image/jpeg",
};

export const metadata: Metadata = {
  metadataBase: new URL(meta.siteUrl),
  title: meta.title,
  description: meta.description,
  applicationName: meta.shortName,
  alternates: { canonical: "/" },
  robots: { index: false, follow: false },
  openGraph: {
    type: "website",
    locale: "es_MX",
    url: "/",
    siteName: meta.shortName,
    title: meta.title,
    description: meta.description,
    images: [ogImage],
  },
  twitter: {
    card: "summary_large_image",
    title: meta.title,
    description: meta.description,
    images: [ogImage],
  },
  appleWebApp: { title: meta.shortName },
};

export const viewport: Viewport = {
  themeColor: meta.themeColors.paper,
};

const staticModeScript =
  "if(location.search.includes('static'))document.documentElement.classList.add('static')";

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="es"
      className={`${cormorant.variable} ${montserrat.variable} ${windsong.variable}`}
      suppressHydrationWarning
    >
      <head>
        <script dangerouslySetInnerHTML={{ __html: staticModeScript }} />
      </head>
      <body>{children}</body>
    </html>
  );
}
