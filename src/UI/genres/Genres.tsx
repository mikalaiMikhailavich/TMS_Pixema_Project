import { IGenres } from "../../services/types";
import styles from "./Genres.module.scss";

interface IProps {
  genres: IGenres[];
}

const Genres = (props: IProps) => {
  const { genres } = props;

  if (genres === undefined) {
    return null;
  }

  const slicedGenres = genres.slice(0, 4);
  return (
    <div className={styles.container}>
      {slicedGenres.map(({ name }, index) => (
        <p key={index} className={styles.item}>
          {name}
        </p>
      ))}
    </div>
  );
};

export default Genres;
