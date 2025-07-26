import { geistMono, geistSans } from "@/lib/fonts";
import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Godswill Ezihe",
  description:
    "Software Engineer building performant and scalable applications",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <div className="mx-auto px-6 py-32 max-w-xl">{children}</div>
      </body>
    </html>
  );
}
