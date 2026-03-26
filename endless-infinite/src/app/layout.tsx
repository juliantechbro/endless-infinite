import type { Metadata } from "next";
import { Manrope, Outfit } from "next/font/google";
import "./globals.css";

const manrope = Manrope({
  variable: "--font-body",
  subsets: ["latin"],
});

const outfit = Outfit({
  variable: "--font-display",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Endless Infinite | Augmenting Human Potential",
  description: "Architecting the future of human-machine synergy.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${manrope.variable} ${outfit.variable} antialiased scroll-smooth`}
    >
      <body className="font-body bg-[var(--surface)] text-[var(--on-surface)]">
        {children}
      </body>
    </html>
  );
}
