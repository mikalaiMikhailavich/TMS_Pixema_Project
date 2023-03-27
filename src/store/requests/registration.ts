import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { IAuth, IRegister, IRegisterResponce } from "../../helpers/types";

const URL = `https://api.kinopoisk.dev/v1/`;

export const registration = createApi({
  reducerPath: "registration",
  baseQuery: fetchBaseQuery({}),
  endpoints: (build) => ({
    registration: build.mutation<IRegisterResponce, IRegister>({
      query: (body) => ({
        url: "https://studapi.teachmeskills.by/auth/users/",
        method: "POST",
        body,
      }),
    }),
    activation: build.mutation<IAuth, IAuth>({
      query: (body) => ({
        url: "https://studapi.teachmeskills.by/auth/users/activation/",
        method: "POST",
        body,
      }),
    }),
  }),
});

export const { useRegistrationMutation, useActivationMutation } = registration;
