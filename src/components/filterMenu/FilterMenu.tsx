import cn from "classnames";
import { useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useInput } from "../../hooks/inputHook";
import { useOutsideClick } from "../../hooks/useOutsideClick";
import { useAppDispatch, useAppSelector } from "../../store/hooks";
import { reset, setFilter } from "../../store/reducers/filter";
import { Button } from "../../UI/button/Button";
import CloseButton from "../../UI/closeButton/CloseButton";
import Input from "../../UI/input/Input";
import Tabs from "../../UI/tabs/Tabs";
import styles from "./FilterMenu.module.scss";

interface IProps {
  opened: boolean;
  handlerToClose: () => void;
}
const FilterMenu = (props: IProps) => {
  const navigate = useNavigate();
  const { opened, handlerToClose } = props;
  const dispatch = useAppDispatch();
  const closeRef = useRef(null);
  useOutsideClick(closeRef, handlerToClose, opened);
  console.log();
  document.body.style.overflowY = opened ? "hidden" : "";

  const { sortByYears, sortByRating, sortBy, sortGenre } = useAppSelector(
    (state) => state.filter
  );

  const fromYearValueSelector = sortByYears.from;
  const toYearValueSelector = sortByYears.to;
  const fromRatingValueSelector = sortByRating.from;
  const toRatingValueSelector = sortByRating.to;

  const fromYear = useInput(fromYearValueSelector);
  const toYear = useInput(toYearValueSelector);
  const fromRating = useInput(fromRatingValueSelector);
  const toRating = useInput(toRatingValueSelector);

  const [tab, setTab] = useState(sortBy);
  const [genre, setGenre] = useState(sortGenre);
  const setSortBy = (tabName: string) => {
    setTab(tabName);
  };

  const tabs = [
    {
      tab: "Рейтинг",
      querySelector: "rating.kp",
      handler: () => setSortBy("rating.kp"),
    },
    {
      tab: "Год",
      querySelector: "year",
      handler: () => setSortBy("year"),
    },
    {
      tab: "Популярность",
      querySelector: "votes.kp",
      handler: () => setSortBy("votes.kp"),
    },
  ];

  const genresTab = [
    {
      tab: "Комедия",
      querySelector: "комедия",
      handler: () => setGenre("комедия"),
    },
    {
      tab: "Боевик",
      querySelector: "боевик",
      handler: () => setGenre("боевик"),
    },
    {
      tab: "Концерт",
      querySelector: "концерт",
      handler: () => setGenre("концерт"),
    },
  ];

  const style = cn(styles.container, { [styles.active]: opened });
  console.log(sortGenre);

  console.log(genre);

  const allParams = () => {
    dispatch(
      setFilter({
        sortBy: tab,
        genre: genre,
        fromYear: fromYear.value,
        toYear: toYear.value,
        fromRating: fromRating.value,
        toRating: toRating.value,
      })
    );
    handlerToClose();
    navigate("/filter");
  };

  const resetAll = () => {
    dispatch(reset());

    fromYear.setToDefault();
    toYear.setToDefault();
    fromRating.setToDefault();
    toRating.setToDefault();
    setTab("rating.kp");
    setGenre("");
  };

  return (
    <div className={style}>
      <div className={styles.blur}></div>
      <form
        className={cn(styles.filterForm, { [styles.active]: opened })}
        ref={closeRef}
      >
        <div className={styles.headerForm}>
          <h4 className={styles.title}>Filters</h4>
          <CloseButton handler={handlerToClose} />
        </div>
        <div>
          <h4 className={styles.text}>Sort by</h4>
          <Tabs currentTab={tab} tabs={tabs} />
        </div>
        <div className={styles.components}>
          <Input
            type={"number"}
            placeholder={"From"}
            onChange={fromYear.handleChange}
            value={fromYear.value}
            label={"Years"}
          />
          <Input
            type={"number"}
            placeholder={"To"}
            onChange={toYear.handleChange}
            value={toYear.value}
          />
        </div>
        <div>
          <h4 className={styles.text}>Genres</h4>
          <Tabs currentTab={genre} tabs={genresTab} />
        </div>
        <div className={styles.components}>
          <Input
            type={"number"}
            placeholder={"From"}
            onChange={fromRating.handleChange}
            value={fromRating.value}
            label={"Rating"}
          />
          <Input
            type={"number"}
            placeholder={"To"}
            onChange={toRating.handleChange}
            value={toRating.value}
          />
        </div>
        <div className={styles.components}>
          <Button
            value={"Clear filter"}
            type={"secondary"}
            handler={resetAll}
          />
          <Button value={"Show results"} type={"primary"} handler={allParams} />
        </div>
      </form>
    </div>
  );
};

export default FilterMenu;
