import { useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import { firstCapitalLetter } from "../../helpers/firstCapitalLetter";
import { useOutsideClick } from "../../hooks/useOutsideClick";
import { useAppDispatch, useAppSelector } from "../../store/hooks";
import { closeAsideMenu } from "../../store/reducers/asideMenu";
import { logout } from "../../store/reducers/auth";
import styles from "./UserInfo.module.scss";

const UserInfo = () => {
  const userName = useAppSelector((state) => state.auth.currentUser.username);
  const isAuth = useAppSelector((state) => state.auth.isAuth);
  const [open, setOpen] = useState(false);

  const closeRef = useRef(null);
  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  const closeSideBar = () => {
    dispatch(closeAsideMenu());
  };
  const toogleUserMenu = () => {
    if (isAuth) {
      setOpen((prev) => !prev);
    } else {
      navigate("/signin");
      closeSideBar();
    }
  };
  useOutsideClick(closeRef, toogleUserMenu, open);
  const buttonContent = [
    {
      id: 1,
      text: "Edit profile",
      onClick: () => {
        navigate("/settings");
        closeSideBar();
      },
    },
    {
      id: 2,
      text: "Log Out",
      onClick: () => {
        navigate("/");
        dispatch(logout());
        closeSideBar();
      },
    },
  ];

  const firstLetterName = firstCapitalLetter(userName);

  return (
    <div className={styles.accountInfo} onClick={toogleUserMenu} ref={closeRef}>
      <div className={styles.accountCapitals}>{firstLetterName}</div>
      <div className={styles.accountName}>{isAuth ? userName : "Sign in"}</div>
      <div
        className={
          open ? `${styles.arrow} ${styles.rotatedArrow}` : styles.arrow
        }
      >
        {">"}
      </div>
      <div className={styles.dropDown}>
        {open ? (
          <div className={styles.container}>
            {buttonContent.map((element) => (
              <div
                key={element.id}
                className={styles.button}
                onClick={element.onClick}
              >
                {element.text}
              </div>
            ))}
          </div>
        ) : null}
      </div>
    </div>
  );
};

export default UserInfo;
