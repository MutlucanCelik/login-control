import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const usersApi = createApi({
  reducerPath: "users",
  baseQuery: fetchBaseQuery({
    baseUrl: "http://localhost:3004",
  }),
  endpoints(builder) {
    return {
      fetchUsers: builder.query({
        providesTags: ["User"],
        query: () => {
          return {
            url: "/users",
            method: "GET",
          };
        },
      }),
      addUser: builder.mutation({
        invalidatesTags: () => {
          return [{ type: "User" }];
        },
        query: ({ email, password }) => {
          return {
            url: "/users",
            method: "POST",
            body: {
              email: email,
              password: password,
            },
          };
        },
      }),
    };
  },
});

export const { useFetchUsersQuery, useAddUserMutation } = usersApi;
export { usersApi };
