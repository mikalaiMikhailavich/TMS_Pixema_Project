import { useRef } from "react";
import { useOutsideClick } from "../../hooks/useOutsideClick";
import { useAppDispatch, useAppSelector } from "../../store/hooks";
import {
  closeAsideMenu,
  toggleAsideMenu,
} from "../../store/reducers/asideMenu";
import styles from "./BurgerButton.module.scss";

const BurgerButton = () => {
  const sideBarIsOpen = useAppSelector((state) => state.asideMenu.isOpen);
  const dispatch = useAppDispatch();
  const searchRef = useRef(null);

  const closeSideBar = () => {
    dispatch(closeAsideMenu());
  };
  useOutsideClick(searchRef, closeSideBar, sideBarIsOpen);

  const handleClick = () => {
    dispatch(toggleAsideMenu());
  };

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
              !sideBarIsOpen
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
