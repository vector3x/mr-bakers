import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Mr Bakers | Order Online",
  description: "Order the best pizza, burgers, cakes, and more in Reoti, Ballia (UP) from Mr Bakers. Fast COD delivery and premium quality.",
  keywords: "Mr Bakers, pizza Reoti, cake shop Ballia, order online Mr Bakers",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.variable} font-sans antialiased bg-white text-neutral-900`}
      >
        <div className="relative flex min-h-screen flex-col">
          {children}
        </div>
      </body>
    </html>
  );
}
