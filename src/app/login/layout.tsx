"use client";

import { useUserContext } from "@/state/UserContext";
import { redirect } from "next/navigation";
import { useLayoutEffect } from "react";

export default function LoginLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const { isAuthenticated } = useUserContext();

  useLayoutEffect(() => {
    if (isAuthenticated) {
      redirect("/main");
    }
  }, [isAuthenticated]);

  return (
    <>
      <title>Login</title>
      {children}
    </>
  );
}
