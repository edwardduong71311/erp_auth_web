import { login, LoginParam } from "@/repository/user";
import { createContext, ReactNode, useContext, useState } from "react";

type UserContextType = {
  name?: string;
  isLogging?: boolean;
  doLogin: (param: LoginParam) => Promise<boolean>;
};
const UserContextData = createContext<UserContextType>({
  doLogin: () => Promise.resolve(false),
});

export function useUserContext() {
  return useContext(UserContextData);
}

type Props = {
  children: ReactNode;
};
export function UserContext(props: Props) {
  const [name, setName] = useState<string>("");
  const [isLogging, setIsLogging] = useState<boolean>(false);

  const doLogin = async (param: LoginParam) => {
    setIsLogging(true);
    const data = await login(param);
    setName(data.data?.user.name || "");
    setIsLogging(false);
    return data.status;
  };

  return (
    <UserContextData.Provider
      value={{
        isLogging,
        name,
        doLogin,
      }}
    >
      {props.children}
    </UserContextData.Provider>
  );
}
