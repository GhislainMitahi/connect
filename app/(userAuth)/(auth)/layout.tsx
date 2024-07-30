import type { Metadata } from "next";

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
      <body>
        <main
          style={{ backgroundImage: "url('/bg-pattern.svg')" }}
          className="flex h-full md:min-h-screen flex-col items-center justify-center bg-custom-green-night text-custom-light bg-no-repeat bg-cover"
        >
          <div className="w-full h-full md:h-[100vh] flex items-center justify-center signup-gb">
            {children}
          </div>
        </main>
      </body>
    </html>
  );
}
