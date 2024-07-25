import type { Metadata } from "next";
import { manrope } from "@/lib/fonts";
import { cn } from "@/lib/utils";


import Providers from "@/components/Providers";

import "./globals.css";

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
      >
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
