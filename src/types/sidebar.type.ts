import { ReactNode } from "react";
import type { MenuProps } from "antd";

export type TRoute = {
  index?: boolean;
  path?: string;
  element: ReactNode;
};
export type TSidebarItem =
  | {
      key: string;
      label: ReactNode;
      children?: TSidebarItem[];
    }
  | undefined;

export type TUserPath = {
  name?: string;
  path?: string;
  element?: ReactNode;
  children?: TUserPath[];
};
export type MenuItem = Required<MenuProps>["items"][number];
