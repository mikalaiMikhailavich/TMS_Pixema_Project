export interface IMovie {
  alternativeName: string;
  enName: null | string;
  id: number;
  year: number;
  genres: IGenres[];
  type: string;
  rating: {
    kp: number;
  };
  countries: ICountry[];
  budget: {
    value: number;
    currency: string;
  };
  description: string;
  movieLength: number;
  name: string;
  poster: {
    previewUrl: string;
    url: string;
  };
  fees: {
    world: {
      value: number;
      currency: string;
    };
  };
  persons: IPerson[];
  similarMovies: SimilarMovie[];
}

type SimilarMovie = Pick<IMovie, "id" | "name" | "poster">;

interface IPerson {
  enName: string;
  enProfession: string;
  id: number;
  name: string;
  photo: string;
  profession: string;
}

interface ExternalId {
  kpHD: string[];
  imdb: string[];
  tmdb: string[];
}

interface ICountry {
  name: string;
}

export interface IGenres {
  name: genreNameType;
}

export type genreNameType =
  | "аниме"
  | "биография"
  | "боевик"
  | "вестерн"
  | "военный"
  | "детектив"
  | "детский"
  | "для взрослых"
  | "документальный"
  | "драма"
  | "игра"
  | "история"
  | "комедия"
  | "концерт"
  | "короткометражка"
  | "криминал"
  | "мелодрама"
  | "музыка"
  | "мультфильм"
  | "мюзикл"
  | "новости"
  | "приключения"
  | "реальное ТВ"
  | "семейный"
  | "спорт"
  | "ток-шоу"
  | "триллер"
  | "ужасы"
  | "фантастика"
  | "фильм-нуар"
  | "фэнтези"
  | "церемония";

export interface ISearchTab {
  type: number;
  value: "Фильмы" | "Сериалы" | "Мультфильмы";
}

export type CardType = "ordinary" | "search" | "favorite";

export interface IAuth {
  uid: string;
  token: string;
}

export interface IRegister {
  username: string;
  email: string;
  password: string;
}

export interface IRegisterResponce {
  username: string;
  email: string;
  id: number;
}
