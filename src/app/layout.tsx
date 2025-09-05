// app/layout.tsx
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/global/Navbar";
import Footer from "@/components/global/Footer";
import AIChatbotGlobal from "@/components/global/AIChatbotGlobal";
import CursorGlow from "@/components/global/CursorGlow";


const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://hanstrix.com";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: "Hanstrix Technologies",
  description: "Leading Digital Transformation Solutions",
  openGraph: {
    url: siteUrl,
    siteName: "Hanstrix Technologies",
  },
  twitter: { card: "summary_large_image" },
};


export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head />
      <body className={`${inter.variable} font-sans antialiased`}>
        <div className="relative w-full min-h-screen flex flex-col bg-[#030303] text-white">
          <Navbar />
          <CursorGlow />
          <main className="stack-below-nav no-anchoring flex-grow relative z-10">{children}</main>
          <Footer />
          {/* Global chatbot (hide on routes if needed) */}
          <AIChatbotGlobal />
        </div>
      </body>
    </html>
  );
}
