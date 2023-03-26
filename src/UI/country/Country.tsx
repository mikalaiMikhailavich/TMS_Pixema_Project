import { joinedArray } from "../../helpers/joinedArray";
import { IMovie } from "../../helpers/types";
import styles from "./Country.module.scss";

type Props = Pick<IMovie, "countries">;

const Country = (props: Props) => {
  const { countries } = props;

  if (countries === undefined) {
    return null;
  }

  const sortedCountries = joinedArray(countries, ", ", "name");

  return (
    <div className={styles.container}>
      <div className={styles.name}>Country</div>
      <div className={styles.value}>{sortedCountries}</div>
    </div>
  );
};

export default Country;
