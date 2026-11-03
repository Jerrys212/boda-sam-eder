import localFont from "next/font/local";

export const cormorant = localFont({
  src: [
    { path: "../public/fonts/cormorant-300-italic.woff2", weight: "300", style: "italic" },
    { path: "../public/fonts/cormorant-400-italic.woff2", weight: "400", style: "italic" },
    { path: "../public/fonts/cormorant-300-normal.woff2", weight: "300", style: "normal" },
    { path: "../public/fonts/cormorant-400-normal.woff2", weight: "400", style: "normal" },
    { path: "../public/fonts/cormorant-500-normal.woff2", weight: "500", style: "normal" },
  ],
  variable: "--font-cormorant",
  display: "swap",
  adjustFontFallback: false,
  declarations: [
    {
      prop: "unicode-range",
      value:
        "U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+0304, U+0308, U+0329, U+2000-206F, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD",
    },
  ],
});

export const montserrat = localFont({
  src: [
    { path: "../public/fonts/montserrat-300-normal.woff2", weight: "300", style: "normal" },
    { path: "../public/fonts/montserrat-400-normal.woff2", weight: "400", style: "normal" },
  ],
  variable: "--font-montserrat",
  display: "swap",
  adjustFontFallback: false,
  declarations: [
    {
      prop: "unicode-range",
      value:
        "U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+0304, U+0308, U+0329, U+2000-206F, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD",
    },
  ],
});

export const windsong = localFont({
  src: [
    { path: "../public/fonts/windsong-400-normal.woff2", weight: "400", style: "normal" },
    { path: "../public/fonts/windsong-500-normal.woff2", weight: "500", style: "normal" },
  ],
  variable: "--font-windsong",
  display: "swap",
  adjustFontFallback: false,
  declarations: [
    {
      prop: "unicode-range",
      value:
        "U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+0304, U+0308, U+0329, U+2000-206F, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD",
    },
  ],
});
