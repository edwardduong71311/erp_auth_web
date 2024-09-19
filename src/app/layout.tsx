import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "ERP App",
  description: "Ptssss, wanna buy some milk?",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
