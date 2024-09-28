"use client";

import { UserContext } from "@/state/UserContext";
import "@/style/globals.css";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <title>ERP App</title>
      </head>
      <body>
        <UserContext>{children}</UserContext>
        <ToastContainer />
      </body>
    </html>
  );
}
