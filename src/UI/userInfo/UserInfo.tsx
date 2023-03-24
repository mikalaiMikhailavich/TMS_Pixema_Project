import { useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import { firstCapitalLetter } from "../../helpers/firstCapitalLetter";
import { useOutsideClick } from "../../hooks/useOutsideClick";
import styles from "./UserInfo.module.scss";

interface IProps {
  name: string;
}

const UserInfo = (props: IProps) => {
  const [open, setOpen] = useState(false);
  const { name } = props;
  const closeRef = useRef(null);
  const navigate = useNavigate();
  const toogleUserMenu = () => {
    setOpen((prev) => !prev);
    console.log("user");
  };
  useOutsideClick(closeRef, toogleUserMenu, open);
  const buttonContent = [
    {
      id: 1,
      text: "Edit profile",
      onClick: () => {
        navigate("/signin");
      },
    },
    {
      id: 2,
      text: "Log Out",
      onClick: () => {
        navigate("/signup");
      },
    },
  ];

  const firstLetterName = firstCapitalLetter(name);

  return (
    <div className={styles.accountInfo} onClick={toogleUserMenu} ref={closeRef}>
      <div className={styles.accountCapitals}>{firstLetterName}</div>
      <div className={styles.accountName}>{name}</div>
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
