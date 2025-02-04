import { BaseQueryApi } from "@reduxjs/toolkit/query";

export type TMeta = {
  limit: number;
  page: number;
  total: number;
  totalPage: number;
};

export type TError = {
  data: {
    message: string;
    stack: string;
    success: boolean;
  };
  status: number;
};

export type TResponse<T> = {
  data?: T;
  error?: TError;
  count?: number;
  meta?: TMeta;
  success: boolean;
  message: string;
};

export type TQueryParam = {
  name: string;
  value: number | string | FilterQuery;
};

type Range = {
  $gte?: number;
  $lte?: number;
};

export type FilterQuery = {
  author?: string;
  category?: string;
  price?: Range;
  inStock?: boolean;
};

export type TResponseRedux<T> = TResponse<T> & BaseQueryApi;
export type TUser = {
  userId: string;
  role: string;
  iat: number;
  exp: number;
  userEmail: string;
  name: string;
};

export type TAuthState = {
  user: null | TUser;
  token: null | string;
};
type TProductData = {
  title: string;
  author: string;
  category: string;
  image: string;
};
export type TProduct = {
  product: TProductData | string; // String if not directly using ObjectId type from mongoose
  quantity: number;
  price: number;
};
export interface TOrderSchema {
  products: TProduct[];
  user: string | TUser;
  totalPrice: number;
  objectTwo: TCustomerDetails;
  status?: string;
}
export interface TUserRetrieve {
  name: string;
  email: string;
  role: "admin" | "user";
  isBlocked: boolean;
  _id: string;
}
export interface TOrderSchemaWithId extends TOrderSchema {
  _id: string;
  createdAt: string;
}
export type TCustomerDetails = {
  customer_email: string;
  customer_name: string;
  customer_address: string;
  customer_phone: number;
  customer_city: string;
};

export type UpdatePassword = {
  oldPassword: string;
  newPassword: string;
};
