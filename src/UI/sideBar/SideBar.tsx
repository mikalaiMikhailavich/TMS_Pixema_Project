import { useNavigate } from "react-router-dom";
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
        navigate("/");
      },
    },
    {
      id: 4,
      name: "Settings",
      onClick: () => {
        navigate("/");
      },
    },
  ];

  return (
    <div className={styles.container}>
      {navigationItems.map(({ id, name, onClick }) => (
        <div key={id} className={styles.item} onClick={onClick}>
          {name}
        </div>
      ))}
    </div>
  );
};

export default SideBar;
