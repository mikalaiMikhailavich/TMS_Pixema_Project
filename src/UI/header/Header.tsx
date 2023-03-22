import UserInfo from "../userInfo/UserInfo";
import MainLogo from "../mainLogo/MainLogo";
import BurgerButton from "../burgerButton/BurgerButton";
import styles from "./Header.module.scss";
import { useLocation } from "react-router-dom";
import Search from "../../components/search/Search";
import FilterMenu from "../../components/filterMenu/FilterMenu";
import { useState } from "react";

const Header = () => {
  const { pathname } = useLocation();
  const [filterOpen, setFilterOpen] = useState(true);
  if (pathname === "/signin") {
    return (
      <div className="container">
        <div className={styles.container}>
          <MainLogo />
        </div>
      </div>
    );
  }
  const closeFilterMenu = () => {
    setFilterOpen((prev) => !prev);
  };
  return (
    <header>
      <div className="container">
        <div className={styles.container}>
          <MainLogo />
          <div className={styles.searchInput}>
            <Search />
          </div>
          <div className={styles.userInfoContainer}>
            <UserInfo name={"Axscsc"} />
          </div>
          <BurgerButton />
        </div>
        <FilterMenu opened={filterOpen} handlerToClose={closeFilterMenu} />
      </div>
    </header>
  );
};

export default Header;
