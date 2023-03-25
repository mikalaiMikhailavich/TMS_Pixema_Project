import { CardType, IMovie } from "../../services/types";
import { Button } from "../button/Button";
import Card from "../card/Card";
import SkeletonLoading from "../skeletonLoading/SkeletonLoading";
import styles from "./FilmListView.module.scss";
interface IProps {
  films: IMovie[];
  isFetching: boolean;
  increaseLimit: () => void;
  type: CardType;
  isLoading?: boolean;
}

const FilmListView = (props: IProps) => {
  const { films, isFetching, isLoading, increaseLimit, type } = props;

  return (
    <div>
      <div className={styles.container}>
        {films.map((filmItem: any) => (
          <Card
            key={filmItem.id}
            filmItem={filmItem}
            type={type}
            isFetching={isFetching}
            isLoading={isLoading}
          />
        ))}
        {(isLoading || isFetching) && <SkeletonLoading />}
        {(isLoading || isFetching) && <SkeletonLoading />}
        {(isLoading || isFetching) && <SkeletonLoading />}
        {(isLoading || isFetching) && <SkeletonLoading />}
        {(isLoading || isFetching) && <SkeletonLoading />}
        {(isLoading || isFetching) && <SkeletonLoading />}
        {(isLoading || isFetching) && <SkeletonLoading />}
        {(isLoading || isFetching) && <SkeletonLoading />}
        {(isLoading || isFetching) && <SkeletonLoading />}
        {(isLoading || isFetching) && <SkeletonLoading />}
      </div>
      {type !== "favorite" && (
        <Button
          value={"Show more"}
          type={"secondary"}
          isFetching={isFetching}
          handler={increaseLimit}
        />
      )}
    </div>
  );
};

export default FilmListView;
