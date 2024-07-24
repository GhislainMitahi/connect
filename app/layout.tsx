import type { Metadata } from "next";
import { Inter as FontSans, Manrope } from "next/font/google";
import { cn } from "@/lib/utils";
import Providers from "@/components/Providers";


import "./globals.css";

// const fontSans = FontSans({
//   subsets: ["latin"],
//   variable: "--font-sans",
// });

const manrope = Manrope({
  subsets: ["latin"],
})

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
          `${manrope.className} min-h-screen bg-background antialiased`
        )}
        // className="min-h-screen bg-background"
      >
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
