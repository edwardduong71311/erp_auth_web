import { createContext, useContext } from "react";
import { Props, RouterContextType } from "./RouterContext.type";
import { useRouter } from "next/navigation";

const RouterContextData = createContext<RouterContextType>({
  moveToLogin: () => {},
  moveToMain: () => {},
  moveToRoot: () => {},
});

export function useRouterContext() {
  return useContext(RouterContextData);
}

export function RouterContext(props: Props) {
  const router = useRouter();

  const moveToLogin = () => {
    router.push("/login");
  };

  const moveToMain = () => {
    router.push("/main");
  };

  const moveToRoot = () => {
    router.push("/");
  };

  return (
    <RouterContextData.Provider
      value={{
        moveToLogin,
        moveToMain,
        moveToRoot,
      }}
    >
      {props.children}
    </RouterContextData.Provider>
  );
}
