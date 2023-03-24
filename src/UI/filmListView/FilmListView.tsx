import { IMovie } from "../../services/types";
import { Button } from "../button/Button";
import Card from "../card/Card";
import styles from "./FilmListView.module.scss";
interface IProps {
  films: IMovie[];
  isFetching: boolean;
  increaseLimit: () => void;
}

const FilmListView = (props: IProps) => {
  const { films, isFetching, increaseLimit } = props;
  return (
    <div>
      <div className={styles.container}>
        {films.map((filmItem: any) => (
          <Card key={filmItem.id} filmItem={filmItem} />
        ))}
      </div>

      <Button
        value={"Show more"}
        type={"secondary"}
        isFetching={isFetching}
        handler={increaseLimit}
      />
    </div>
  );
};

export default FilmListView;
