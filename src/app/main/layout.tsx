"use client";

import { useUserContext } from "@/state/UserContext";
import { redirect } from "next/navigation";
import { useLayoutEffect } from "react";
import Header from "../common/Header";
import LeftMenu from "../common/LeftMenu";

export default function MainLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const { isAuthenticated } = useUserContext();

  useLayoutEffect(() => {
    if (!isAuthenticated) {
      redirect("/login");
    }
  }, [isAuthenticated]);

  if (!isAuthenticated) {
    return <></>;
  }

  return (
    <>
      <LeftMenu className="w-[50px] hover:w-[250px] bg-base-700" />
      <div className="flex ml-[50px] flex-col h-screen">
        <Header className="flex-none h-[50px] px-5 bg-base-700 text-white" />
        <div className="flex-1 overflow-y-auto p-5 text-base">{children}</div>
      </div>
    </>
  );
}
