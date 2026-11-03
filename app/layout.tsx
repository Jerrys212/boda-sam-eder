import type { Metadata } from "next";
import { cormorant, montserrat, windsong } from "./fonts";
import { wedding } from "@/lib/wedding";
import "./globals.css";

const { meta } = wedding;

export const metadata: Metadata = {
  metadataBase: new URL(meta.siteUrl),
  title: meta.title,
  robots: { index: false },
  openGraph: {
    title: meta.title,
    type: "website",
    images: [{ url: meta.ogImage }],
  },
};

const staticModeScript =
  "if(location.search.includes('static'))document.documentElement.classList.add('static')";

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="en"
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
