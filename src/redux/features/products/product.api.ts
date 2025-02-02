import { baseApi } from "../../api/baseApi";

const productApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    createProduct: builder.mutation({
      query: (formData) => ({
        url: `/products`,
        method: "POST",
        body: {
          file: formData.file,
          data: formData.data,
        },
      }),
      invalidatesTags: ["products"],
    }),
    updateProduct: builder.mutation({
      query: (formData) => ({
        url: `/products/${formData.id}`,
        method: "PUT",
        body: {
          file: formData.file,
          data: formData.data,
        },
      }),
      invalidatesTags: ["products"],
    }),
    deleteProduct: builder.mutation({
      query: (id) => ({
        url: `/products/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["products"],
    }),
  }),
});

export const {
  useCreateProductMutation,
  useUpdateProductMutation,
  useDeleteProductMutation,
} = productApi;
