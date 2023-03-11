import { divide } from "lodash";
import styles from "./BurgerButton.module.scss";

const BurgerButton = () => {
  const burgerItems = [
    { id: 1, location: "top" },
    { id: 2, location: "middle" },
    { id: 3, location: "bottom" },
  ];

  return (
    <div className={styles.container}>
      <div className={styles.itemsContainer}>
        {burgerItems.map((element) => (
          <div key={element.id} className={styles.burgerItem}></div>
        ))}
      </div>
    </div>
  );
};

export default BurgerButton;
