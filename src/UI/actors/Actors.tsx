import { IMovie } from "../../helpers/types";
import styles from "./Actors.module.scss";

type Props = Pick<IMovie, "persons">;

const Actors = (props: Props) => {
  const { persons } = props;

  const sortedPersons = persons !== undefined ? persons.slice(0, 4) : null;
  console.log(sortedPersons);

  return (
    <div className={styles.container}>
      <div className={styles.name}>Actors</div>
      <div className={styles.value}>
        {sortedPersons?.map((element) => (
          <span key={element.name} className={styles.value}>
            {element.name},{" "}
          </span>
        ))}
      </div>
    </div>
  );
};

export default Actors;
