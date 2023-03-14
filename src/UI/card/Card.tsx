// interface IProps {
//   filmItem: any;
// }
import Genres from "../genres/Genres";
import Rating from "../rating/Rating";
import styles from "./Card.module.scss";
const Card = (props: any) => {
  const { filmItem } = props;
  const { name, poster, rating, genres, similarMovies } = filmItem;
  const { previewUrl } = poster;
  const { kp } = rating;

  return (
    <div className={styles.container}>
      <div
        className={styles.poster}
        style={{ backgroundImage: `url(${previewUrl})` }}
      >
        <Rating rating={kp} />
      </div>
      <h4 className={styles.cardName}>{name}</h4>
      <Genres genres={genres} />
    </div>
  );
};

export default Card;
