import Header from "../../UI/header/Header";
import SideBar from "../../components/sideBar/SideBar";
import { Outlet } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../../store/hooks";
import { memo, useCallback, useEffect } from "react";
import { useElementWidth } from "../../hooks/useElementWidth";
import { closeAsideMenu } from "../../store/reducers/asideMenu";
import styles from "./Layout.module.scss";

const Layout = () => {
  const sidebarIsOpen = useAppSelector((store) => store.asideMenu.isOpen);
  const themeColor = useAppSelector((store) => store.theme.theme);
  const dispatch = useAppDispatch();
  const [ref, width] = useElementWidth();

  useEffect(() => {
    if (width > 999) {
      dispatch(closeAsideMenu());
    }
  }, [width]);

  return (
    <div
      ref={ref}
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

export const LayoutMemo = memo(Layout);
// export default Layout;
