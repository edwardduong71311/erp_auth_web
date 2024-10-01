import { login, LoginParam } from "@/repository/UserRepo";
import { createContext, ReactNode, useContext, useMemo, useState } from "react";

type UserContextType = {
  name?: string;
  isLogging?: boolean;
  isAuthenticated: boolean;
  doLogin: (param: LoginParam) => Promise<boolean>;
};
const UserContextData = createContext<UserContextType>({
  doLogin: () => Promise.resolve(false),
  isAuthenticated: false,
});

export function useUserContext() {
  return useContext(UserContextData);
}

type Props = {
  children: ReactNode;
};
export function UserContext(props: Props) {
  const [token, setToken] = useState<string | null>(null);
  const [name, setName] = useState<string>("");
  const [isLogging, setIsLogging] = useState<boolean>(false);

  const doLogin = async (param: LoginParam) => {
    setIsLogging(true);
    const data = await login(param);
    setName(data.data?.user.name || "");
    setToken(data.data?.token || null);
    setIsLogging(false);
    return data.status;
  };

  const isAuthenticated = useMemo(() => !!token, [token]);

  return (
    <UserContextData.Provider
      value={{
        isLogging,
        name,
        isAuthenticated,
        doLogin,
      }}
    >
      {props.children}
    </UserContextData.Provider>
  );
}
