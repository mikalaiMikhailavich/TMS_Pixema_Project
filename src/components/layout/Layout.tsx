import Header from "../../UI/header/Header";
import Navigation from "../../UI/navigation/Navigation";
import styles from "./Layout.module.scss";

import { useEffect, useState } from "react";
import { getFilmNew } from "../../helpers/getNewFilms";
import Card from "../../UI/card/Card";

const Layout = () => {
  const [card, setCard] = useState<any>([]);

  useEffect(() => {
    getFilmNew().then((data) => {
      setCard(data.data);
    });
  }, []);

  console.log(card);

  return (
    <div className={"app"}>
      <Header />
      <main className={`container ${styles.layoutContainer}`}>
        <div className={`column-width ${styles.left}`}>
          <Navigation />
        </div>
        <div className={`column-width5 ${styles.right}`}>
          {card.map((filmItem: any) => (
            <Card key={filmItem.id} filmItem={filmItem} />
          ))}
        </div>
      </main>
      <footer></footer>
    </div>
  );
};

export default Layout;
