import { IMovie } from "../../helpers/types";
import styles from "./BoxOffice.module.scss";

type Props = Pick<IMovie, "fees">;

const BoxOffice = (props: Props) => {
  const { fees } = props;

  const formattedFees =
    fees !== undefined
      ? `${fees.world.currency ? fees.world.currency : "Don't know"} ${
          fees.world.value
            ? `${fees.world.value}`
                .split("")
                .reverse()
                .map((el, index) => (index % 3 !== 2 ? el : ` ${el}`))
                .reverse()
                .join("")
            : ""
        }`
      : null;

  return (
    <div className={styles.container}>
      <div className={styles.name}>BoxOffice</div>
      <div className={styles.value}>{formattedFees}</div>
    </div>
  );
};

export default BoxOffice;
