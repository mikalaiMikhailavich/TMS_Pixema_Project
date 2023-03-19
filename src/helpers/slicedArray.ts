import { IGenres } from "../services/types";

export const slicedArray = <T>(array: T[], start = 0, end = 4): T[] =>
  array.slice(start, end);
