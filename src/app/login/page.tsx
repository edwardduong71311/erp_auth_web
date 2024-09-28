"use client";

import Button from "@/components/Button";
import TextInput from "@/components/TextInput";
import { useUserContext } from "@/state/UserContext";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { Bounce, toast } from "react-toastify";

export default function Login() {
  const router = useRouter();
  const { isLogging, doLogin } = useUserContext();

  const [username, setUserName] = useState("");
  const [password, setPassword] = useState("");

  const onLogin = async () => {
    const isOk = await doLogin({
      username: username,
      password: password,
    });

    if (isOk) {
      router.push("/dashboard");
    } else {
      toast.error("Login failed. Please provided information", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
        transition: Bounce,
      });
    }
  };

  return (
    <div className="flex justify-center items-center h-screen">
      <div className="w-80 p-5 flex flex-col justify-center items-center rounded-md shadow-lg shadow-slate-300">
        <article className="prose lg:prose-xl mb-4">
          <h3>Login</h3>
        </article>

        <TextInput
          className="block w-full"
          placeholer="Username"
          value={username}
          onChange={(event) => setUserName(event.target.value)}
          onEnter={onLogin}
        />
        <TextInput
          className="mt-3 block w-full"
          placeholer="Password"
          type="password"
          value={password}
          onChange={(event) => setPassword(event.target.value)}
          onEnter={onLogin}
        />
        <Button
          spinning={isLogging}
          className="mt-3 py-2 block w-full"
          onClick={onLogin}
          text="Go"
        />
      </div>
    </div>
  );
}
