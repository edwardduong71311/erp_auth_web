"use client";

import { useUserContext } from "@/state/UserContext";
import { useLayoutEffect } from "react";
import Header from "../common/Header";
import LeftMenu from "../common/LeftMenu";
import { useRouterContext } from "@/state/RouterContext";

export default function MainLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const { isAuthenticated } = useUserContext();
  const { moveToLogin } = useRouterContext();

  useLayoutEffect(() => {
    if (!isAuthenticated) {
      moveToLogin();
    }
  }, [isAuthenticated]);

  if (!isAuthenticated) {
    return <></>;
  }

  return (
    <>
      <LeftMenu className="w-[50px] hover:w-[250px] bg-blue-950" />
      <div className="flex ml-[50px] flex-col h-screen">
        <Header className="flex-none h-[50px] px-5 bg-blue-950 text-white" />
        <div className="flex-1 overflow-y-auto p-5 text-base">{children}</div>
      </div>
    </>
  );
}
