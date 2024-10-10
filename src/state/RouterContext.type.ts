import { ReactNode } from "react";

export type Props = {
  children: ReactNode;
};

export type RouterContextType = {
  moveToLogin: () => void;
  moveToMain: () => void;
  moveToRoot: () => void;
};
