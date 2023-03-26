import { slicedArray } from "../../helpers/slicedArray";
import { IGenres } from "../../helpers/types";
import styles from "./Genres.module.scss";

interface IProps {
  genres: IGenres[];
}

const Genres = (props: IProps) => {
  const { genres } = props;

  if (!genres) {
    return null;
  }

  const slicedGenres = slicedArray<IGenres>(genres);

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
