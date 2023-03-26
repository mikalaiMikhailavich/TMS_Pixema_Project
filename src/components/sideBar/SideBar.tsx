import { useNavigate } from "react-router-dom";
import UserInfo from "../../UI/userInfo/UserInfo";
import styles from "./SideBar.module.scss";
const SideBar = () => {
  const navigate = useNavigate();
  const navigationItems = [
    {
      id: 1,
      name: "Home",
      onClick: () => {
        navigate("/");
      },
    },
    {
      id: 2,
      name: "Trends",
      onClick: () => {
        navigate("/");
      },
    },
    {
      id: 3,
      name: "Favorites",
      onClick: () => {
        navigate("/favorites");
      },
    },
    {
      id: 4,
      name: "Settings",
      onClick: () => {
        navigate("/settings");
      },
    },
  ];

  return (
    <div className={styles.container}>
      <div className={styles.userContainer}>
        <UserInfo name={"Nick"} />
      </div>
      {navigationItems.map(({ id, name, onClick }) => (
        <div key={id} className={styles.item} onClick={onClick}>
          {name}
        </div>
      ))}
    </div>
  );
};

export default SideBar;
