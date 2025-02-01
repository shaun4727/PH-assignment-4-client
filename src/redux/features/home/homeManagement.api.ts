import { baseApi } from "../../api/baseApi";
import { TResponseRedux, TCarouselImage, TBook } from "../../../types";

const homeManagementApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getCarouselImages: builder.query({
      query: () => ({
        url: "/carousel/get-carousel",
        method: "GET",
      }),
      transformResponse: (response: TResponseRedux<TCarouselImage[]>) =>
        response.data,
    }),
    getAllProducts: builder.query({
      query: () => ({
        url: "/products/tab-books",
        method: "GET",
      }),
      transformResponse: (response: TResponseRedux<TBook[]>) => response.data,
      providesTags: ["products"],
    }),
  }),
});

export const { useGetCarouselImagesQuery, useGetAllProductsQuery } =
  homeManagementApi;
