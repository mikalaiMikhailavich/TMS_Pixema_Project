import { useNavigate } from "react-router-dom";
import { IMovie } from "../../services/types";
import Genres from "../genres/Genres";
import Rating from "../rating/Rating";
import styles from "./Card.module.scss";

interface IProps {
  filmItem: IMovie;
  type?: "ordinary" | "search";
}

const Card = (props: IProps) => {
  const navigate = useNavigate();

  const {
    filmItem: { id, name, poster, rating, genres },
    type = "ordinary",
  } = props;

  const { previewUrl } = poster || {};
  const { kp } = rating || {};

  const navigateToSelectedCard = (id: number) => {
    navigate(`/film/${id}`);
  };

  if (type === "search") {
    return (
      <div
        className={styles.containerSearch}
        onClick={() => navigateToSelectedCard(id)}
      >
        <img className={styles.poster} src={previewUrl} alt="poster" />

        <div className={styles.ratingContainer}>
          <Rating rating={kp} />
        </div>

        <h4 className={styles.cardName}>{name}</h4>
      </div>
    );
  }

  return (
    <div
      className={styles.container}
      onClick={() => navigateToSelectedCard(id)}
    >
      <img className={styles.poster} src={previewUrl} alt="" />
      {/* <img className={styles.poster} src={previewUrl} alt="" /> */}

      <div className={styles.ratingContainer}>
        <Rating rating={kp} />
      </div>

      <h4 className={styles.cardName}>{name}</h4>
      <Genres genres={genres} />
    </div>
  );
};

export default Card;
