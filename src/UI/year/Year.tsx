import { IMovie } from "../../helpers/types";
import styles from "./Year.module.scss";

type Props = Pick<IMovie, "year">;

const Year = (props: Props) => {
  const { year } = props;
  return (
    <div className={styles.container}>
      <div className={styles.name}>Year</div>
      <div className={styles.value}>{year}</div>
    </div>
  );
};

export default Year;
