import UserInfo from "../userInfo/UserInfo";
import MainLogo from "../mainLogo/MainLogo";
import BurgerButton from "../burgerButton/BurgerButton";
import { useInput } from "../../hooks/inputHook";
import styles from "./Header.module.scss";
import { useLocation } from "react-router-dom";
import Search from "../search/Search";
const Header = () => {
  const { pathname } = useLocation();
  if (pathname === "/signin") {
    return (
      <div className="container">
        <div className={styles.container}>
          <MainLogo />
        </div>
      </div>
    );
  }

  const inputSearch = useInput("");
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
      </div>
    </header>
  );
};

export default Header;
