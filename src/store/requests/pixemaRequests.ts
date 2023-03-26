import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { IMovie } from "../../helpers/types";

const URL = `https://api.kinopoisk.dev/v1/`;
const key = `ZAEXZKF-RYRM40B-QRXAV1N-F1JX56B`;
const defaultCardFields = ["id", "name", "poster", "rating"];
const detailsCardFields = [...defaultCardFields, "genres"];
export const pixemaApi = createApi({
  reducerPath: "pixemaApi",
  baseQuery: fetchBaseQuery({
    baseUrl: URL,
    headers: { "X-API-KEY": `${key}`, accept: "application/json" },
  }),
  endpoints: (build) => ({
    getCards: build.query({
      query: (limit) =>
        `movie?selectFields=${detailsCardFields.join(
          " "
        )}&page=1&limit=${limit}`,
    }),
    getFilms: build.query({
      query: (limit) => `movie?page=1&limit=${limit}`,
    }),
    getFilmsById: build.query<IMovie, string>({
      query: (id) => `movie/${id}`,
    }),
    searchFilms: build.query({
      query: ({ searchText, typeNumber = 1, limit = 15 }) =>
        `movie?selectFields=${defaultCardFields.join(
          " "
        )}&page=1&limit=${limit}&name=${searchText}&typeNumber=${typeNumber}&sortField=rating.kp&sortType=-1`,
    }),
    filterFilms: build.query({
      query: ({
        fromYear,
        toYear,
        fromRating,
        toRating,
        sortBy = "rating.kp",
        limit,
      }) =>
        `movie?selectFields=${detailsCardFields.join(
          " "
        )}&sortField=${sortBy}&sortType=-1&page=1&limit=${limit}&year=${fromYear}-${toYear}&rating.kp=${fromRating}-${toRating}`,
    }),
    getFavoriteCards: build.query({
      query: ({ query, limit }) =>
        `/movie?${query}&limit=${limit}&sortField=rating.kp&sortType=-1&selectFields=genres year name typeNumber id poster rating`,
    }),
  }),
});

export const {
  useGetFilmsQuery,
  useGetFilmsByIdQuery,
  useSearchFilmsQuery,
  useGetCardsQuery,
  useFilterFilmsQuery,
  useGetFavoriteCardsQuery,
} = pixemaApi;

export const { getFilms } = pixemaApi.endpoints;
