import { IMovie } from "../../services/types";
import styles from "./Country.module.scss";

type Props = Pick<IMovie, "countries">;

const Country = (props: Props) => {
  const { countries } = props;

  const sortedCountries =
    countries !== undefined
      ? countries.map((element) => element.name).join(", ")
      : null;

  return (
    <div className={styles.container}>
      <div className={styles.name}>Country</div>
      <div className={styles.value}>{sortedCountries}</div>
    </div>
  );
};

export default Country;
