import cn from "classnames";
import { useRef } from "react";
import { useInput } from "../../hooks/inputHook";
import { useOutsideClick } from "../../hooks/useOutsideClick";
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
  const closeRef = useRef(null);
  const { opened, handlerToClose } = props;
  useOutsideClick(closeRef, handlerToClose, opened);
  const fromYear = useInput("");
  const toYear = useInput("");
  const fromRating = useInput("");
  const toRating = useInput("");
  const tabs = [
    {
      tab: "Рейтинг",
      handler: () => {},
    },
    {
      tab: "Год",
      handler: () => {},
    },
  ];

  const style = cn(styles.container, { [styles.active]: opened });

  const allParams = () => {
    console.log(fromYear.value);
    console.log(toYear.value);
    console.log(fromRating.value);
    console.log(toRating.value);
  };
  const clearAll = () => {
    fromYear.clearValue();
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
          <Tabs currentTab={"Рейтинг"} tabs={tabs} />
        </div>
        <div className={styles.sortedYear}>
          <Input
            type={"text"}
            placeholder={"From"}
            onChange={fromYear.handleChange}
            value={fromYear.value}
            label={"Years"}
          />
          <Input
            type={"text"}
            placeholder={"To"}
            onChange={toYear.handleChange}
            value={toYear.value}
          />
        </div>
        <div className={styles.sortedRating}>
          <Input
            type={"text"}
            placeholder={"From"}
            onChange={fromRating.handleChange}
            value={fromRating.value}
            label={"Rating"}
          />
          <Input
            type={"text"}
            placeholder={"To"}
            onChange={toRating.handleChange}
            value={toRating.value}
          />
        </div>
        <div className={styles.buttonsContainer}>
          <Button
            value={"Clear filter"}
            type={"secondary"}
            handler={clearAll}
          />
          <Button value={"Show results"} type={"primary"} handler={allParams} />
        </div>
      </form>
    </div>
  );
};

export default FilterMenu;

{
  /* <div className="modal-filter__genre">
            <h3>Жанры</h3>
            <div className="genre-block">
              <Controller
                name="genres"
                control={control}
                render={({ field: { value, onChange } }) => {
                  return (
                    <>
                      <ul>
                        <>
                          {value.map(
                            (genre) =>
                              genre.value && (
                                <li key={genre.value}>
                                  {genre.label}
                                  <HiOutlineX
                                    onClick={() => {
                                      onChange(
                                        value.filter(
                                          (item) => item.label !== genre.label
                                        )
                                      );
                                    }}
                                  />
                                </li>
                              )
                          )}
                          {value.length !== 10 && (
                            <input
                              type="text"
                              maxLength={20}
                              value={text}
                              onChange={(e) => onChangeHandler(e.target.value)}
                              placeholder={
                                value[1]?.label ? "" : "Выберите жанр"
                              }
                            />
                          )}
                        </>
                      </ul>
                      {suggestions && (
                        <div className="suggestions" ref={genresRef}>
                          {suggestions.map((item, index) => (
                            <div
                              key={index}
                              onClick={() => {
                                onChange([
                                  ...value.filter(
                                    (i) => i.label !== item.label
                                  ),
                                  item,
                                ]);
                                onSuggestHandler();
                              }}
                              className="suggestion"
                            >
                              {item.label}
                              {value.map(
                                (element) =>
                                  element.label === item.label && (
                                    <FiCheck key={index} />
                                  )
                              )}
                            </div>
                          ))}
                        </div>
                      )}
                    </>
                  );
                }}
              />
            </div>
          </div> */
}
