import { useNavigate } from "react-router-dom";
import { CardType, IMovie } from "../../helpers/types";
import FavoritesButton from "../favoritesButton/FavoritesButton";
import Genres from "../genres/Genres";
import Rating from "../rating/Rating";
import SkeletonLoading from "../skeletonLoading/SkeletonLoading";
import styles from "./Card.module.scss";

interface IProps {
  filmItem: IMovie;
  type?: CardType;
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

      <div className={styles.ratingContainer}>
        <Rating rating={kp} />
        {type === "favorite" && <FavoritesButton id={id} />}
      </div>

      <h4 className={styles.cardName}>{name}</h4>
      <Genres genres={genres} />
    </div>
  );
};

export default Card;
