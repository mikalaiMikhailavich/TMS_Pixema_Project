import { useEffect, useState } from "react";
import { getFilmNew } from "../../helpers/getNewFilms";
import Card from "../../UI/card/Card";
import styles from "./MainPage.module.scss";
const MainPage = () => {
  const [card, setCard] = useState<any>([]);

  useEffect(() => {
    getFilmNew().then((data) => {
      setCard(data.data);
      console.log(data.data);
    });
  }, []);

  console.log(card);
  return (
    <div className={styles.container}>
      {card.map((filmItem: any) => (
        <Card key={filmItem.id} filmItem={filmItem} />
      ))}
    </div>
  );
};

export default MainPage;
