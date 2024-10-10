"use client";

import { RouterContext } from "@/state/RouterContext";
import { ServerContext } from "@/state/ServerContext";
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
        <RouterContext>
          <ServerContext>
            <UserContext>{children}</UserContext>
          </ServerContext>
        </RouterContext>
        <ToastContainer />
      </body>
    </html>
  );
}
