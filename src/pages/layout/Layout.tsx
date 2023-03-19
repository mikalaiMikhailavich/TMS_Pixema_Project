import Header from "../../UI/header/Header";
import SideBar from "../../UI/sideBar/SideBar";
import { Outlet } from "react-router-dom";
import styles from "./Layout.module.scss";

const Layout = () => {
  return (
    <div className={"app"}>
      <Header />
      <main className={`container ${styles.layoutContainer}`}>
        <div className={`column-width ${styles.left}`}>
          <SideBar />
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
