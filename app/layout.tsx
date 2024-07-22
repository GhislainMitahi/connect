import type { Metadata } from "next";
import "./globals.css";

import Providers from "@/components/Providers";
import { manrope } from "@/lib/fonts";
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
          `${manrope.className} min-h-screen bg-background font-sans antialiased`
        )}
      >
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
