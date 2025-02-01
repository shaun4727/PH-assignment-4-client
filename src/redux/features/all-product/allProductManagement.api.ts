import { baseApi } from "../../api/baseApi";
import { TResponseRedux, TBook, TQueryParam } from "../../../types";

const homeManagementApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getAllProductProductPage: builder.query({
      query: (args) => {
        const params = new URLSearchParams();
        if (args) {
          args.forEach((item: TQueryParam) => {
            params.append(item.name, item.value as string);
          });
        }
        return {
          url: "/products",
          method: "GET",
          params: params,
        };
      },
      transformResponse: (
        response: TResponseRedux<{ data: TBook[]; count: number }>
      ) => {
        return {
          data: response.data!.data,
          count: response.data!.count,
        };
      },
      providesTags: ["products"],
    }),
  }),
});

export const { useGetAllProductProductPageQuery } = homeManagementApi;
