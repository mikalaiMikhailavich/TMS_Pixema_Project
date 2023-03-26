import cn from "classnames";
import { useLocation, useNavigate } from "react-router-dom";
import { useAppDispatch } from "../../store/hooks";
import { closeAsideMenu } from "../../store/reducers/asideMenu";
import UserInfo from "../userInfo/UserInfo";
import styles from "./SideBar.module.scss";
const SideBar = () => {
  const location = useLocation();
  const dispatch = useAppDispatch();

  const closeSideBar = () => {
    dispatch(closeAsideMenu());
  };
  const navigate = useNavigate();
  const navigationItems = [
    {
      id: 1,
      name: "Home",
      onClick: () => {
        navigate("/");
        closeSideBar();
      },

      path: "/",
    },

    {
      id: 2,
      name: "Favorites",
      onClick: () => {
        navigate("/favorites");
        closeSideBar();
      },
      path: "/favorites",
    },
    {
      id: 3,
      name: "Settings",
      onClick: () => {
        navigate("/settings");
        closeSideBar();
      },
      path: "/settings",
    },
  ];

  return (
    <div className={styles.container}>
      <div className={styles.userContainer}>
        <UserInfo />
      </div>
      {navigationItems.map(({ id, name, onClick, path }) => (
        <div
          key={id}
          className={cn(styles.item, {
            [styles.active]: location.pathname === path,
          })}
          onClick={onClick}
        >
          {name}
        </div>
      ))}
    </div>
  );
};

export default SideBar;
