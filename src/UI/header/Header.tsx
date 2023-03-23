import UserInfo from "../userInfo/UserInfo";
import MainLogo from "../mainLogo/MainLogo";
import BurgerButton from "../burgerButton/BurgerButton";
import styles from "./Header.module.scss";
import { useLocation } from "react-router-dom";
import Search from "../../components/search/Search";
import FilterMenu from "../../components/filterMenu/FilterMenu";
import { useAppDispatch, useAppSelector } from "../../store/hooks";
import { closeFilterMenu } from "../../store/reducers/filter";

const Header = () => {
  const { pathname } = useLocation();
  const filterMenuisOpen = useAppSelector((state) => state.filter.isOpen);
  const dispatch = useAppDispatch();
  if (pathname === "/signin") {
    return (
      <div className="container">
        <div className={styles.container}>
          <MainLogo />
        </div>
      </div>
    );
  }
  const setCloseFilterMenu = () => {
    dispatch(closeFilterMenu());
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
        <FilterMenu
          opened={filterMenuisOpen}
          handlerToClose={setCloseFilterMenu}
        />
      </div>
    </header>
  );
};

export default Header;
