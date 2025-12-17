import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const geistSans = Inter({
  variable: "--font-inter-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Saman Sathenjeri's Portfolio",
  description: "Portfolio Website to show Saman Sathenjeri's work",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
