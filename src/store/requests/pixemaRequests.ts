import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { IMovie } from "../../services/types";

const URL = `https://api.kinopoisk.dev/v1/`;
const key = `ZAEXZKF-RYRM40B-QRXAV1N-F1JX56B`;
export const pixemaApi = createApi({
  reducerPath: "pixemaApi",
  baseQuery: fetchBaseQuery({
    baseUrl: URL,
    headers: { "X-API-KEY": `${key}` },
  }),
  endpoints: (build) => ({
    getFilms: build.query({
      query: (limit) => `movie?page=1&limit=${limit}`,
    }),
    getFilmsById: build.query<IMovie, string>({
      query: (id) => `movie/${id}`,
    }),
  }),
});

export const { useGetFilmsQuery, useGetFilmsByIdQuery } = pixemaApi;

export const { getFilms } = pixemaApi.endpoints;
