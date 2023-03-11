import { useInput } from "../../hooks/inputHook";
import Input from "../input/Input";
import UserInfo from "../userInfo/UserInfo";
import mainLogo from "../../assets/logos/PixemaLogo.svg";
import styles from "./Header.module.scss";
import BurgerButton from "../buttons/burgerButton/BurgerButton";
const Header = () => {
  const inputSearch = useInput("");
  return (
    <header className="container">
      <div className={styles.container}>
        <img src={mainLogo} alt="mainLogo" />
        <Input
          type={"text"}
          placeholder={"Search"}
          value={inputSearch.value}
          onChange={inputSearch.onChange}
        />
      </div>
      <UserInfo name={"Axscsc"} />
      <BurgerButton />
    </header>
  );
};

export default Header;
