import cn from "classnames";
import { roundedNumber } from "../../helpers/roundedNumber";
import styles from "./Rating.module.scss";
interface IProps {
  rating: number;
}

const Rating = (props: IProps) => {
  const { rating } = props;

  if (rating === undefined) {
    return null;
  }

  const roundedRaiting = roundedNumber(rating, 1);

  const style = cn(styles.container, {
    [styles.middleRating]: rating < 6 && rating > 5.5,
    [styles.badRating]: rating < 5.5,
  });

  return <div className={style}>{roundedRaiting}</div>;
};

export default Rating;
