import { useAppDispatch, useAppSelector } from "../../store/hooks";
import { toggle } from "../../store/reducers/asideMenu/asideMenu.slice";
import styles from "./BurgerButton.module.scss";

const BurgerButton = () => {
  const value = useAppSelector((state) => state.asideMenu.isOpen);
  const dispatch = useAppDispatch();
  const handleClick = () => {
    dispatch(toggle());
  };
  console.log(value);

  const burgerItems = [
    { id: 1, location: "top" },
    { id: 2, location: "middle" },
    { id: 3, location: "bottom" },
  ];

  return (
    <div className={styles.container} onClick={handleClick}>
      <div className={styles.burgerItemContainer}>
        {burgerItems.map((element) => (
          <div
            key={element.id}
            className={
              !value
                ? styles.burgerItem
                : `${styles.burgerItem} ${
                    styles[`burgerItem${element.location}`]
                  }`
            }
          ></div>
        ))}
      </div>
    </div>
  );
};

export default BurgerButton;
