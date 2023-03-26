import { useParams } from "react-router-dom";
import Slider from "../../components/Slider/Slider";
import { IMovie } from "../../helpers/types";
import { useAppDispatch, useAppSelector } from "../../store/hooks";
import {
  addToFavorites,
  deleteFromFavorites,
} from "../../store/reducers/favorites";
import { useGetFilmsByIdQuery } from "../../store/requests/pixemaRequests";
import Actors from "../../UI/actors/Actors";
import BoxOffice from "../../UI/boxOffice/BoxOffice";
import { Button } from "../../UI/button/Button";
import Country from "../../UI/country/Country";
import FilmDuration from "../../UI/filmDuration/FilmDuration";
import Genres from "../../UI/genres/Genres";
import Rating from "../../UI/rating/Rating";
import Year from "../../UI/year/Year";
import styles from "./SelectedFilm.module.scss";

const SelectedFilm = () => {
  const params = useParams();
  const cardId = params.id;
  const favorites = useAppSelector((state) => state.favorites.favorites);
  const dispatch = useAppDispatch();

  if (cardId === undefined) {
    return null;
  }

  const { data, isFetching, isError } = useGetFilmsByIdQuery(cardId);

  if (isFetching) {
    return <h1>Loading</h1>;
  }

  if (isError) {
    return <h1>Cannot load files</h1>;
  }

  const {
    id,
    poster,
    genres,
    name,
    rating,
    movieLength,
    description,
    year,
    countries,
    fees,
    persons,
    similarMovies,
  } = data as IMovie;

  const isFavorite = (id: number) => {
    return favorites.includes(id) ? "В избранном" : "Не в избранном";
  };

  const handlerButton = (id: number) => {
    if (favorites.includes(id)) {
      dispatch(deleteFromFavorites(id));
    } else {
      dispatch(addToFavorites(id));
    }
  };
  return (
    <div className={styles.container}>
      <div className={styles.left}>
        <img
          className={styles.poster}
          src={poster ? poster?.previewUrl : ""}
          alt=""
        />
        <div className={styles.buttons}>
          <Button
            value={isFavorite(id)}
            type={"secondary"}
            handler={() => handlerButton(id)}
          />
        </div>
      </div>
      <div className={styles.right}>
        <Genres genres={genres} />
        <h2 className={styles.name}>{name}</h2>
        <div className={styles.ratingAndLength}>
          <Rating rating={rating?.kp} />
          <FilmDuration duration={movieLength} />
        </div>
        <div className={styles.center}>
          <img
            className={styles.poster}
            src={poster ? poster?.previewUrl : ""}
            alt=""
          />
          <div className={styles.buttons}></div>
        </div>
        <div className={styles.description}>{description}</div>
        <div className={styles.descriptionItems}>
          <Year year={year} />
          <Country countries={countries} />
          <BoxOffice fees={fees} />
          <Actors persons={persons} />
          <Slider similarMovies={similarMovies} />
        </div>
      </div>
    </div>
  );
};

export default SelectedFilm;
