import { IMovie } from "../../services/types";
import styles from "./Actors.module.scss";

type Props = Pick<IMovie, "persons">;

const Actors = (props: Props) => {
  const { persons } = props;

  const sortedPersons =
    persons !== undefined
      ? persons
          .slice(0, 4)
          .map((element) => element.name)
          .join(", ")
      : null;

  return (
    <div className={styles.container}>
      <div className={styles.name}>Actors</div>
      <div className={styles.value}>{sortedPersons}</div>
    </div>
  );
};

export default Actors;
