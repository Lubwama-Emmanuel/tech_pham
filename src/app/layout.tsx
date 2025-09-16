import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "TechGeeks - Professional Web & Mobile Development",
  description:
    "We build stunning websites, cross-platform mobile applications, and robust backend systems. Transform your ideas into digital reality with our expert development team.",
  keywords:
    "web development, mobile app development, backend development, React, Next.js, React Native, Node.js, TypeScript",
  authors: [{ name: "TechGeeks Team" }],
  creator: "TechGeeks",
  publisher: "TechGeeks",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://techpham.com",
    title: "TechGeeks - Professional Web & Mobile Development",
    description:
      "We build stunning websites, cross-platform mobile applications, and robust backend systems.",
    siteName: "TechGeeks",
  },
  twitter: {
    card: "summary_large_image",
    title: "TechGeeks - Professional Web & Mobile Development",
    description:
      "We build stunning websites, cross-platform mobile applications, and robust backend systems.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
        suppressHydrationWarning={true}
      >
        {children}
      </body>
    </html>
  );
}
