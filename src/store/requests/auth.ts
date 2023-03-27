import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
const AUTH_URL = "https://studapi.teachmeskills.by/auth";

export const authRequests = createApi({
  reducerPath: "authRequests",
  baseQuery: fetchBaseQuery({ baseUrl: AUTH_URL }),
  endpoints: (build) => ({
    createToken: build.mutation({
      query: ({ email, password }) => ({
        url: "/jwt/create/",
        headers: {
          "Content-Type": "application/json",
        },
        method: "POST",
        body: JSON.stringify({
          email: email,
          password: password,
        }),
      }),
    }),
    refreshToken: build.mutation({
      query: (refreshToken) => ({
        url: "/jwt/refresh/",
        headers: {
          "Content-Type": "application/json",
        },
        method: "POST",
        body: JSON.stringify({
          refresh: refreshToken,
        }),
      }),
    }),
    getUserInfo: build.mutation({
      query: (token) => ({
        url: "/users/me/",
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
        },
      }),
    }),

    activateEmail: build.mutation({
      query: ({ uid, token }) => ({
        url: "/users/activation/",
        headers: {
          "Content-Type": "application/json",
        },
        method: "POST",
        body: JSON.stringify({
          uid: uid,
          token: token,
        }),
      }),
    }),
  }),
});

export const {
  useGetUserInfoMutation,
  useRefreshTokenMutation,
  useCreateTokenMutation,
  useActivateEmailMutation,
} = authRequests;
