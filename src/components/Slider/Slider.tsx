import { useState } from "react";
import Card from "../../UI/card/Card";
import styles from "./Slider.module.scss";

const Slider = (props: any) => {
  const { cards } = props;
  console.log(cards);
  const totalSlides = cards.length;
  console.log(totalSlides);
  const [value, setValue] = useState(0);

  const swipeRight = () => {
    setValue((prev) => prev + 1);
  };

  return (
    <div className={styles.slider}>
      <div onClick={swipeRight}>{"next>"}</div>
      <div>{"<prev"}</div>
      <div className={styles.slides}>
        {cards.map((filmItem: any) => (
          <div
            key={filmItem.name}
            className={styles.slide}
            style={{ transform: `translateX(-${value * 200}px)` }}
          >
            <Card key={filmItem.id} filmItem={filmItem} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Slider;
