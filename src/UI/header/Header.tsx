import Input from "../input/Input";
import UserInfo from "../userInfo/UserInfo";
import MainLogo from "../mainLogo/MainLogo";
import BurgerButton from "../burgerButton/BurgerButton";
import { useInput } from "../../hooks/inputHook";
import styles from "./Header.module.scss";
const Header = () => {
  const inputSearch = useInput("");
  return (
    <header>
      <div className="container">
        <div className={styles.container}>
          <MainLogo />
          <div className={styles.searchInput}>
            <Input
              type={"text"}
              placeholder={"Search"}
              value={inputSearch.value}
              onChange={inputSearch.onChange}
            />
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
