import { createContext, useContext, useEffect, useMemo, useState } from "react";
import {
  LoginParam,
  LoginResult,
  Props,
  UserContextType,
} from "./UserContext.type";
import { useServerContext } from "./ServerContext";
import { useRouterContext } from "./RouterContext";

const UserContextData = createContext<UserContextType>({
  isAuthenticated: false,
  doLogin: () => Promise.resolve(false),
  doLogout: () => {},
  getBreadcrumb: () => "",
});

export function useUserContext() {
  return useContext(UserContextData);
}

const TOKEN_KEY = "u_t";
export function UserContext(props: Props) {
  const { post } = useServerContext();
  const { moveToRoot } = useRouterContext();
  const [loggedIn, setLoggedIn] = useState<boolean>(false);
  const [isLogging, setIsLogging] = useState<boolean>(false);

  const saveTokenToStorage = (token: string) => {
    if (!token) return;
    localStorage.setItem(TOKEN_KEY, token);
  };

  const clearTokenFromStorage = () => {
    localStorage.removeItem(TOKEN_KEY);
  };

  const getTokenFromStorage = () => {
    return localStorage.getItem(TOKEN_KEY);
  };

  const login = async ({
    username,
    password,
  }: LoginParam): Promise<LoginResult | null> => {
    return new Promise(async (resolve) => {
      const result = await post("user/login", {
        email: username,
        password: password,
      });

      if (!result) return resolve(null);
      resolve(result);
    });
  };

  const doLogin = async (param: LoginParam) => {
    setIsLogging(true);
    const data = await login(param);
    if (!data) {
      setIsLogging(false);
      return false;
    }
    saveTokenToStorage(data?.token?.token);

    setLoggedIn(true);
    setIsLogging(false);
    return true;
  };

  const doLogout = () => {
    clearTokenFromStorage();
    setLoggedIn(false);
    moveToRoot();
  };

  const getBreadcrumb = () => {
    return "Page > Page 1 > Bla bla";
  };

  const isAuthenticated = useMemo(() => !!loggedIn, [loggedIn]);

  useEffect(() => {
    setIsLogging(true);
    const token = getTokenFromStorage();
    if (token) {
      setLoggedIn(true);
    }
    setIsLogging(false);
  }, []);

  return (
    <UserContextData.Provider
      value={{
        isLogging,
        isAuthenticated,
        doLogin,
        doLogout,
        getBreadcrumb,
      }}
    >
      {props.children}
    </UserContextData.Provider>
  );
}
