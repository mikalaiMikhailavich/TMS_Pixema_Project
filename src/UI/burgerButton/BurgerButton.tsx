import { divide } from "lodash";
import { useState } from "react";
import styles from "./BurgerButton.module.scss";

const BurgerButton = () => {
  const [active, setActive] = useState(false);

  const toogle = () => {
    setActive((prev) => !prev);
    console.log(active);
  };

  const burgerItems = [
    { id: 1, location: "top" },
    { id: 2, location: "middle" },
    { id: 3, location: "bottom" },
  ];

  return (
    <div className={styles.container} onClick={toogle}>
      <div className={styles.burgerItemContainer}>
        {burgerItems.map((element) => (
          <div
            key={element.id}
            className={
              !active
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
