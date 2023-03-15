import styles from "./FilmDuration.module.scss";

interface IProps {
  duration: number;
}

const FilmDuration = (props: IProps) => {
  const { duration } = props;
  return <div className={styles.container}>{duration} min</div>;
};

export default FilmDuration;
