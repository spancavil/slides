import type { Metadata } from "next";
import { Inter, Lato } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });
const lato = Lato({subsets: ["latin"], weight: "400" })

export const metadata: Metadata = {
  title: "Challenge - Slides",
  description: "Technical challenge for slides",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="flex h-dvh">{children}</body>
    </html>
  );
}
