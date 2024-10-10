"use client";

import { useRouterContext } from "@/state/RouterContext";
import { useUserContext } from "@/state/UserContext";
import { useLayoutEffect } from "react";

export default function LoginLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const { isAuthenticated } = useUserContext();
  const { moveToMain } = useRouterContext();

  useLayoutEffect(() => {
    if (isAuthenticated) {
      moveToMain();
    }
  }, [isAuthenticated]);

  return (
    <>
      <title>Login</title>
      {children}
    </>
  );
}
