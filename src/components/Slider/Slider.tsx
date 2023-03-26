import { useState } from "react";
import Card from "../../UI/card/Card";
import SliderButton from "../../UI/sliderButton/SliderButton";
import styles from "./Slider.module.scss";

const Slider = (props: any) => {
  const { similarMovies } = props;
  const [value, setValue] = useState(0);

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

  const swipeLeft = () => {
    if (value === 0) {
      return;
    }
    setValue((prev) => prev - 1);
  };

  return (
    <div className={styles.slider}>
      <div className={styles.sliderButtonContainer}>
        <SliderButton type={"left"} handler={swipeLeft} />
        <SliderButton type={"right"} handler={swipeRight} />
      </div>

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
