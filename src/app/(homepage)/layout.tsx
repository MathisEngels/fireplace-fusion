import "@/app/globals.css";
import type { Metadata } from "next";
import React from "react";
import Footer from "./components/Footer";

export const metadata: Metadata = {
  title: "Fireplace Fusion",
  description: "A demo app made with Next.js and PayloadCMS",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="bg-[#230c0c] text-[#fce6e6] outline">
        <main className="h-[100dvh]">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
