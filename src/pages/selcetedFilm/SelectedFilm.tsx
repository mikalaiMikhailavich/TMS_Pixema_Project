import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Slider from "../../components/Slider/Slider";
import { getSelectedFilm } from "../../helpers/getSelectedFilm";
import { IMovie } from "../../services/types";
import { useGetFilmsByIdQuery } from "../../store/requests/pixemaRequests";
import Actors from "../../UI/actors/Actors";
import BoxOffice from "../../UI/boxOffice/BoxOffice";
import Country from "../../UI/country/Country";
import FilmDuration from "../../UI/filmDuration/FilmDuration";
import Genres from "../../UI/genres/Genres";
import Rating from "../../UI/rating/Rating";
import Year from "../../UI/year/Year";
import styles from "./SelectedFilm.module.scss";

const SelectedFilm = () => {
  const params = useParams();
  const cardId = params.id;
  // debugger;

  // console.log(film);
  const { data, isFetching, isError } = useGetFilmsByIdQuery(cardId);
  console.log(isError);
  console.log(isFetching);

  console.log(data);

  const [selectedFilm, setSelectedFilm] = useState<IMovie>({} as IMovie);
  console.log(selectedFilm);
  // useEffect(() => {
  //   if (cardId) {
  //     getSelectedFilm(cardId).then((movie: any) => {
  //       console.log(movie.data);
  //       setSelectedFilm(movie.data);
  //     });
  //   }
  // }, [cardId]);

  if (isFetching) {
    return <h1>Loading</h1>;
  }

  if (isError) {
    return <h1>Cannot load files</h1>;
  }

  const {
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

  return (
    <div className={styles.container}>
      <div className={styles.left}>
        <img src={poster ? poster?.previewUrl : ""} alt="" />
        {/* <div
          className={styles.poster}
          style={{ backgroundImage: `url(${poster?.previewUrl})` }}
        ></div> */}
        <div className={styles.buttons}></div>
      </div>
      <div className={styles.right}>
        <Genres genres={genres} />
        <h2 className={styles.name}>{name}</h2>
        <div className={styles.ratingAndLength}>
          <Rating rating={rating?.kp} />
          <FilmDuration duration={movieLength} />
        </div>
        <div className={styles.description}>{description}</div>
        <Year year={year} />
        <Country countries={countries} />
        <BoxOffice fees={fees} />
        <Actors persons={persons} />
        <Slider similarMovies={similarMovies} />
      </div>
    </div>
  );
};

export default SelectedFilm;
