import { useInput } from "../../hooks/inputHook";
import ClearButton from "../clearButton/ClearButton";
import FilterButton from "../filterButton/FilterButton";
import styles from "./Search.module.scss";

const Search = () => {
  const { value, onChange, clearValue } = useInput("");

  return (
    <div className={styles.container}>
      <input
        type="text"
        className={styles.input}
        placeholder={"Search"}
        value={value}
        onChange={onChange}
      />
      {value ? <ClearButton handler={clearValue} /> : <FilterButton />}
    </div>
  );
};

export default Search;
