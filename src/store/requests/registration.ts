import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const URL = `https://api.kinopoisk.dev/v1/`;

export const registration = createApi({
  reducerPath: "registration",
  baseQuery: fetchBaseQuery({}),
  endpoints: (build) => ({
    registration: build.mutation({
      query: (body: { username: string; email: string; password: string }) => ({
        url: "https://studapi.teachmeskills.by/auth/users/",
        method: "POST",
        body,
      }),
      transformErrorResponse: (response: { status: any }, meta, arg) =>
        response.status,
    }),
  }),
});

export const { useRegistrationMutation } = registration;
