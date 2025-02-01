import { baseApi } from "../../api/baseApi";
import {
  TOrderSchema,
  TOrderSchemaWithId,
  TResponseRedux,
} from "../../../types";

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
    getOrders: builder.query({
      query: () => {
        return {
          url: "/orders",
          method: "GET",
        };
      },
      transformResponse: (response: TResponseRedux<TOrderSchemaWithId[]>) => {
        return {
          data: response.data,
        };
      },
    }),
  }),
});

export const {
  useCreateOrderMutation,
  useVerifyOrderQuery,
  useGetOrdersQuery,
} = orderApi;
