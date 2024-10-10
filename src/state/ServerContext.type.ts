import { ReactNode } from "react";

export type ServerContextType = {
  get: (path: string, params: RequestParam) => Promise<any>;
  post: (path: string, body: any) => Promise<any>;
};
export interface RequestParam {
  [key: string]: string;
}

export type Props = {
  children: ReactNode;
};
