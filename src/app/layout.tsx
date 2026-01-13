import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import WhatsAppButton from "@/components/layout/WhatsAppButton";

const inter = Inter({
  subsets: ["latin"],
  display: 'swap',
  variable: '--font-inter',
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  display: 'swap',
  variable: '--font-playfair',
});

export const metadata: Metadata = {
  title: "M MANI & CO - Chartered Accountants | Bengaluru",
  description: "Tax, audit, accounting, and compliance support for individuals and businesses. Professional chartered accountancy services in Bengaluru, Karnataka.",
  keywords: "chartered accountant, tax compliance, audit, accounting, GST, income tax, Bengaluru, Karnataka",
  authors: [{ name: "M MANI & CO" }],
  openGraph: {
    type: "website",
    locale: "en_IN",
    siteName: "M MANI & CO",
    title: "M MANI & CO - Chartered Accountants",
    description: "Professional chartered accountancy services in Bengaluru",
  },
  robots: {
    index: true,
    follow: true,
  },
  viewport: {
    width: 'device-width',
    initialScale: 1,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${playfair.variable}`}>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      </head>
      <body className={`${inter.className} antialiased`}>
        <Header />
        <main className="min-h-screen">
          {children}
        </main>
        <Footer />
        <WhatsAppButton />
      </body>
    </html>
  );
}
