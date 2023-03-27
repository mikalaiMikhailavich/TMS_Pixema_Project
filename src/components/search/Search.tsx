import { useRef, useState } from "react";
import { useInput } from "../../hooks/inputHook";
import ClearButton from "../../UI/clearButton/ClearButton";
import FilterButton from "../../UI/filterButton/FilterButton";
import SearchList from "../../UI/searchList/SearchList";
import { useDebounce } from "usehooks-ts";
import { useOutsideClick } from "../../hooks/useOutsideClick";
import styles from "./Search.module.scss";
import { useAppDispatch } from "../../store/hooks";
import { openFilterMenu } from "../../store/reducers/filter";

const Search = () => {
  const dispatch = useAppDispatch();
  const [opened, setOpened] = useState(false);
  const { value, handleChange, clearValue } = useInput("");
  const debounceValue = useDebounce(value, 500);
  const searchRef = useRef(null);
  const onClose = () => {
    setOpened((prev) => !prev);
  };
  useOutsideClick(searchRef, onClose, opened);
  const isActive = debounceValue && opened;
  const setOpenFilterMenu = () => {
    dispatch(openFilterMenu());
  };
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
      {value ? (
        <ClearButton handler={clearValue} />
      ) : (
        <FilterButton handler={setOpenFilterMenu} />
      )}
      {isActive && <SearchList searchValue={debounceValue} onClose={onClose} />}
    </div>
  );
};

export default Search;
