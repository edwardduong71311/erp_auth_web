"use client";

import { useUserContext } from "@/state/UserContext";

export default function Main() {
  const data = useUserContext();
  return (
    <div className="flex justify-center items-center h-screen">
      <input
        type="text"
        className="mt-0 block w-full px-0.5 border-0 border-b-2 border-gray-200 focus:ring-0 focus:border-black"
        placeholder=""
      />
      {data.name || "No name"}
    </div>
  );
}
