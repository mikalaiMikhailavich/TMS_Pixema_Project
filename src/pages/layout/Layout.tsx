import Header from "../../UI/header/Header";
import Navigation from "../../UI/navigation/Navigation";
import { Outlet } from "react-router-dom";
import styles from "./Layout.module.scss";

const Layout = () => {
  return (
    <div className={"app"}>
      <Header />
      <main className={`container ${styles.layoutContainer}`}>
        <div className={`column-width ${styles.left}`}>
          <Navigation />
        </div>
        <div className={styles.right}>
          <Outlet />
        </div>
      </main>
      <footer></footer>
    </div>
  );
};

export default Layout;
