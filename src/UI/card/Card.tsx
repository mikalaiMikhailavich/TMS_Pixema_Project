import { useNavigate } from "react-router-dom";
import Genres from "../genres/Genres";
import Rating from "../rating/Rating";
import styles from "./Card.module.scss";
const Card = (props: any) => {
  const { filmItem } = props;
  const { id, name, poster, rating, genres, similarMovies } = filmItem;
  const { previewUrl } = poster;
  const navigate = useNavigate();

  // const navigateToSelectedCard = (type = "film") => {
  //   switch (type) {
  //     case "film":
  //       navigate("/");
  //       break;

  //     default:
  //       break;
  //   }
  // };

  const navigateToSelectedCard = (id: number) => {
    navigate(`/film/${id}`);
  };

  return (
    <div
      className={styles.container}
      onClick={() => navigateToSelectedCard(id)}
    >
      <img className={styles.poster} src={previewUrl} alt="" />

      <div className={styles.ratingContainer}>
        <Rating rating={rating?.kp} />
      </div>

      <h4 className={styles.cardName}>{name}</h4>
      <Genres genres={genres} />
    </div>
  );
};

export default Card;
