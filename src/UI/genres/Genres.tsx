import styles from "./Genres.module.scss";

interface IGenres {
  name: string;
}

interface IProps {
  genres: IGenres[];
}

const Genres = (props: IProps) => {
  const { genres } = props;

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
