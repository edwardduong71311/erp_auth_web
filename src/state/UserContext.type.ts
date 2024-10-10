import { ReactNode } from "react";

export type LoginParam = {
  username: string;
  password: string;
};

export type TokenInfo = {
  email: string;
  token: string;
};

export type LoginResult = {
  email: string;
  name: string;
  token: TokenInfo;
};

export type UserContextType = {
  name?: string;
  isLogging?: boolean;
  isAuthenticated: boolean;
  doLogin: (param: LoginParam) => Promise<boolean>;
  doLogout: () => void;
  getBreadcrumb: () => string;
};

export type Props = {
  children: ReactNode;
};
