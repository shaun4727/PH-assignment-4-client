import { TResponseRedux, TUserRetrieve } from "../../../types";
import { baseApi } from "../../api/baseApi";

const authApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    login: builder.mutation({
      query: (userInfo) => ({
        url: "/auth/login",
        method: "POST",
        body: userInfo,
      }),
      invalidatesTags: ["orders"],
    }),
    register: builder.mutation({
      query: (userInfo) => ({
        url: "/auth/register",
        method: "POST",
        body: userInfo,
      }),
    }),
    getUsers: builder.query({
      query: () => {
        return {
          url: "/auth/get-users",
          method: "GET",
        };
      },
      transformResponse: (response: TResponseRedux<TUserRetrieve[]>) => {
        return {
          data: response!.data,
        };
      },
      providesTags: ["users"],
    }),
    updateUserStatus: builder.mutation({
      query: (args) => ({
        url: `/auth/change-status/${args.id}`,
        method: "PATCH",
      }),
      invalidatesTags: ["users"],
    }),
  }),
});

export const {
  useLoginMutation,
  useRegisterMutation,
  useGetUsersQuery,
  useUpdateUserStatusMutation,
} = authApi;
