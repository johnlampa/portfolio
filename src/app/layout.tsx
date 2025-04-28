import type { Metadata } from "next";
import { poppins } from "./font";
import "./globals.css";

export const metadata: Metadata = {
  title: "John Lampa | Portfolio",
  description: "Portfolio of John Lampa, a front end developer.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${poppins.variable}`}>
      <body className={`${poppins.className} antialiased`}>{children}</body>
    </html>
  );
}
