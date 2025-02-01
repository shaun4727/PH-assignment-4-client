import { baseApi } from "../../api/baseApi";

const productApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    createProduct: builder.mutation({
      query: (formData) => ({
        url: `/products`,
        method: "POST",
        body: formData,
      }),
      invalidatesTags: ["products"],
    }),
  }),
});

export const { useCreateProductMutation } = productApi;
