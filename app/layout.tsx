import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "धर्मक्षेत्रे कुरुक्षेत्रे | Bhagavad Gita 1.1",
  description:
    "Bhagavad Gita 1.1 shloka with transliteration and Hindi meaning, rendered as a meditative reading experience.",
  keywords: [
    "Bhagavad Gita",
    "Chapter 1",
    "Verse 1",
    "धर्मक्षेत्रे कुरुक्षेत्रे",
    "Hindi meaning",
    "Transliteration"
  ]
};

export default function RootLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="hi">
      <body>{children}</body>
    </html>
  );
}
