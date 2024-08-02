import React from "react";

export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <div className="bg-auth-primary h-screen py-12 px-8">
          <div className="w-full h-full bg-auth-secondary flex items-center justify-center rounded-[20px]">
            {children}
          </div>
        </div>
      </body>
    </html>
  );
}
