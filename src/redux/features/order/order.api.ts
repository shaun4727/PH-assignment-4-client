import { baseApi } from "../../api/baseApi";
import { TOrderSchema } from "../../../types";

const orderApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    createOrder: builder.mutation({
      query: (userInfo: TOrderSchema) => ({
        url: "/orders",
        method: "POST",
        body: userInfo,
      }),
    }),
    verifyOrder: builder.query({
      query: (order_id) => ({
        url: "/orders/verify",
        params: { order_id },
        method: "GET",
      }),
    }),
  }),
});

export const { useCreateOrderMutation, useVerifyOrderQuery } = orderApi;
