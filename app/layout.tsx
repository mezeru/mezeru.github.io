import type { Metadata, Viewport } from "next";
import localFont from "next/font/local";
import { person } from "@/content/portfolio";
import { SiteBackground } from "@/components/site-background";
import "./globals.css";

const geist = localFont({
  src: "../public/fonts/geist-latin-wght-normal.woff2",
  variable: "--font-geist",
  display: "swap",
  weight: "100 900",
});
const mono = localFont({
  src: "../public/fonts/geist-mono-latin-wght-normal.woff2",
  variable: "--font-geist-mono",
  display: "swap",
  weight: "100 900",
});

export const metadata: Metadata = {
  metadataBase: new URL(person.url),
  title: "Yash Chaudhari — Senior Software Engineer",
  description:
    "Senior software engineer in Dallas building enterprise applications, backend services, and practical AI workflows. React, Next.js, Java, Spring Boot, and distributed systems.",
  authors: [{ name: person.name, url: person.url }],
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "/",
    siteName: person.name,
    title: "Yash Chaudhari — Senior Software Engineer",
    description:
      "Thoughtful software. At every layer. Full-stack engineering, backend systems, and applied AI.",
    images: [
      {
        url: "/social-card.png",
        width: 1200,
        height: 630,
        alt: "Yash Chaudhari — Senior software engineer. Thoughtful software. At every layer.",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Yash Chaudhari — Senior Software Engineer",
    description: "Full-stack engineering, backend systems, and applied AI.",
    images: ["/social-card.png"],
  },
  robots: { index: true, follow: true },
};

export const viewport: Viewport = { themeColor: "#080808", colorScheme: "dark" };

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${geist.variable} ${mono.variable}`}>
      <body>
        {children}
        <SiteBackground />
      </body>
    </html>
  );
}
