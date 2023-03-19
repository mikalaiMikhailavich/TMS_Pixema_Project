import { useEffect, useState } from "react";
import Card from "../../UI/card/Card";
import styles from "./Slider.module.scss";

const Slider = (props: any) => {
  const { similarMovies } = props;
  const [value, setValue] = useState(0);

  console.log("render");
  useEffect(() => {
    setValue((prev) => (prev = 0));
    return () => {
      console.log("unmount");
    };
  }, []);

  if (similarMovies === undefined || similarMovies.length === 0) {
    return null;
  }

  const totalSlides = similarMovies.length;
  console.log(totalSlides);

  const swipeRight = () => {
    if (value === totalSlides) {
      return;
    }
    setValue((prev) => prev + 1);
  };

  return (
    <div className={styles.slider}>
      <div onClick={swipeRight}>{"next>"}</div>
      <div>{"<prev"}</div>
      <div
        className={styles.slides}
        style={{ transform: `translateX(-${value * 200}px)` }}
      >
        {similarMovies.map((filmItem: any) => (
          <div key={filmItem.id} className={styles.slide}>
            <Card key={filmItem.id} filmItem={filmItem} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Slider;
