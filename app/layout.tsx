import type { Metadata } from "next";
import { Inter as FontSans } from "next/font/google";
import "./globals.css";
const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
});

import Providers from "@/components/Providers";
import { poppins } from "@/lib/fonts";
import { cn } from "@/lib/utils";

export const metadata: Metadata = {
  title: "connect-platform",
  description: "Solution to creators and brands",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={cn(
          `${poppins.className} min-h-screen bg-background font-sans antialiased`
        )}
      >
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
