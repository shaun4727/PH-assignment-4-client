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
      icon?: ReactNode;
    }
  | undefined;

export type TUserPath = {
  name?: string;
  path?: string;
  element?: ReactNode;
  icon?: ReactNode;
  children?: TUserPath[];
};

export type TNavItem = {
  index?: boolean;
  name: string;
  path: string;
  icon?: ReactNode;
  element: ReactNode;
};
export type MenuItem = Required<MenuProps>["items"][number];

export type NavMenu = {
  key: string;
  label: ReactNode;
  icon?: ReactNode;
  children?: NavMenu[];
};
