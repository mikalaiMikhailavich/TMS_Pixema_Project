import { useRef, useState } from "react";
import { useInput } from "../../hooks/inputHook";
import ClearButton from "../clearButton/ClearButton";
import FilterButton from "../filterButton/FilterButton";
import SearchList from "../searchList/SearchList";
import { useDebounce } from "usehooks-ts";
import { useOutsideClick } from "../../hooks/useOutsideClick";
import styles from "./Search.module.scss";

const Search = () => {
  const [opened, setOpened] = useState(false);
  const { value, handleChange, clearValue } = useInput("");
  const debounceValue = useDebounce(value, 500);
  const searchRef = useRef(null);
  const onClose = () => {
    setOpened((prev) => !prev);
  };
  useOutsideClick(searchRef, onClose, opened);
  const isActive = debounceValue && opened;

  return (
    <div className={styles.container} ref={searchRef}>
      <input
        type="text"
        className={styles.input}
        placeholder={"Search"}
        value={value}
        onChange={(e) => {
          handleChange(e);
          setOpened(true);
        }}
        onClick={() => setOpened(true)}
      />
      {value ? <ClearButton handler={clearValue} /> : <FilterButton />}
      {isActive && <SearchList searchValue={debounceValue} onClose={onClose} />}
    </div>
  );
};

export default Search;
