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
    deleteOrder: builder.mutation({
      query: (id: string) => ({
        url: `/orders/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["orders"],
    }),
    updateOrder: builder.mutation({
      query: (orderData) => ({
        url: `/orders`,
        method: "PATCH",
        body: orderData,
      }),
      invalidatesTags: ["orders"],
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
      providesTags: ["orders"],
    }),
  }),
});

export const {
  useCreateOrderMutation,
  useVerifyOrderQuery,
  useGetOrdersQuery,
  useDeleteOrderMutation,
  useUpdateOrderMutation,
} = orderApi;
