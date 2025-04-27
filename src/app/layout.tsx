import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import "@/styles/globals.css";

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "Appscrip E-Commerce Store | Discover Products",
  description:
    "Browse and discover our latest collection of products. Find the perfect items that match your style with our curated selections.",
  keywords:
    "e-commerce, products, online shopping, fashion, accessories, premium brands",
  authors: [{ name: "Appscrip Task" }],
  creator: "Appscrip Task",
  openGraph: {
    title: "Appscrip E-Commerce Store | Discover Products",
    description:
      "Browse and discover our latest collection of products. Find the perfect items that match your style with our curated selections.",
    url: "https://appscrip-task.netlify.app",
    siteName: "Appscrip E-Commerce",
    locale: "en_US",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
