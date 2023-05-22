import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const api = createApi({
  baseQuery: fetchBaseQuery({ baseUrl: import.meta.env.VITE_APP_BASE_URL }),
  reducerPath: "adminApi",
  tagTypes: [
    "User",
    "Products",
    "User2"
    // "Customers",
    // "Transactions",
    // "Geography",
    // "Sales",
    // "Admins",
    // "Performance",
    // "Dashboard",
  ],
  endpoints: (build) => ({
    getUser: build.query({
      query: (id) => `users/${id}`,
      providesTags: ["User"],
    }),
    getProducts: build.query({
      query: () => "client/products",
      providesTags: ["Products"],
    }),
    getUsers: build.query({
      query: () => "client/users",
      providesTags: ["Customers"],
    }),
    getUsers2: build.query({
      query: () => "users",
      providesTags: ["User2"],
    }),
    createUser: build.mutation({
      query: (formData) => ({
        url: "users",
        method: "POST",
        body: formData,
      }),
    }),
    LoginUser: build.mutation({
      query: (formData) => ({
        url: "users/login",
        method: "POST",
        body: formData,
      }),
    }),
    RegisterUser: build.mutation({
      query: (formData) => ({
        url: "users/register",
        method: "POST",
        body: formData,
      }),
    }),
    createBuilding: build.mutation(
      {
      query: (formData) => (
        {
        url: "building",
        method: "POST",
        body: formData,
      }),
    }),
    editUser: build.mutation({
      query: (updatedUser) => {
        console.log(updatedUser);
        console.log(updatedUser.id);
        return {
          url: `users/${updatedUser.id}`,
          method: "PUT",
          body: updatedUser,
        };
      },
    }),
    deleteUser: build.mutation({
      query: (id) => (
        {
        url: `users/${id}`,
        method: "DELETE",
      }),
    }),
    // getTransactions: build.query({
    //   query: ({ page, pageSize, sort, search }) => ({
    //     url: "client/transactions",
    //     method: "GET",
    //     params: { page, pageSize, sort, search },
    //   }),
    //   providesTags: ["Transactions"],
    // }),
    // getGeography: build.query({
    //   query: () => "client/geography",
    //   providesTags: ["Geography"],
    // }),
    // getSales: build.query({
    //   query: () => "sales/sales",
    //   providesTags: ["Sales"],
    // }),
    // getAdmins: build.query({
    //   query: () => "management/admins",
    //   providesTags: ["Admins"],
    // }),
    // getUserPerformance: build.query({
    //   query: (id) => `management/performance/${id}`,
    //   providesTags: ["Performance"],
    // }),
    // getDashboard: build.query({
    //   query: () => "general/dashboard",
    //   providesTags: ["Dashboard"],
    // }),
  }),
});

export const {
  useGetUserQuery,
  useGetProductsQuery,
  useGetUsersQuery,
  useGetUsers2Query,
  useCreateUserMutation,
  useEditUserMutation,
  useDeleteUserMutation,
  useCreateBuildingMutation,
  useLoginUserMutation,
  useRegisterUserMutation
  
  // useGetTransactionsQuery,
  // useGetGeographyQuery,
  // useGetSalesQuery,
  // useGetAdminsQuery,
  // useGetUserPerformanceQuery,
  // useGetDashboardQuery,
} = api;


