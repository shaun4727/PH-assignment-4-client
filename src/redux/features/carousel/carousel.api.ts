import { baseApi } from "../../api/baseApi";

const productApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    uploadCarouselImages: builder.mutation({
      query: (formData) => ({
        url: `/carousel/create-carousel`,
        method: "POST",
        body: formData,
      }),
      invalidatesTags: ["carousel"],
    }),
  }),
});

export const { useUploadCarouselImagesMutation } = productApi;
