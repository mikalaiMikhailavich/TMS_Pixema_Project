import { IMovie } from "../../helpers/types";
import styles from "./Year.module.scss";

type Props = Pick<IMovie, "year">;

const Year = (props: Props) => {
  function fibonachi(n: any): any {
    // debugger;
    if (n < 0) return 0;
    if (n <= 2) return 1;
    // debugger;
    console.log(n);

    fibonachi(n - 1) + fibonachi(n - 2);
    return n;
  }
  console.log(fibonachi(7));

  const { year } = props;
  return (
    <div className={styles.container}>
      <div className={styles.name}>Year</div>
      <div className={styles.value}>{year}</div>
    </div>
  );
};

export default Year;
