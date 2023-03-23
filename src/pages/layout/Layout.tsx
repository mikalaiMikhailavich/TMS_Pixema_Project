import Header from "../../UI/header/Header";
import SideBar from "../../components/sideBar/SideBar";
import { Outlet } from "react-router-dom";
import { useAppSelector } from "../../store/hooks";
import styles from "./Layout.module.scss";

const Layout = () => {
  const sidebarIsOpen = useAppSelector((store) => store.asideMenu.isOpen);
  const themeColor = useAppSelector((store) => store.theme.theme);
  return (
    <div
      className={`app ${themeColor === "light" ? "light-theme" : "dark-theme"}`}
    >
      <Header />
      <main className={`container ${styles.layoutContainer}`}>
        <div className={`column-width ${styles.left}`}>
          <SideBar />
        </div>
        <div className={styles.middle}>
          <Outlet />
        </div>
        {sidebarIsOpen && (
          <div className={styles.right}>
            <SideBar />
          </div>
        )}
      </main>

      <footer></footer>
    </div>
  );
};

export default Layout;
