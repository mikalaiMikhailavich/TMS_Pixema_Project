import { useState } from "react";
import styles from "./UserInfo.module.scss";

interface IProps {
  name: string;
}

const UserInfo = (props: IProps) => {
  const [open, setOpen] = useState(false);
  const { name } = props;

  const buttonContent = [
    {
      id: 1,
      text: "Edit profile",
      onClick: () => {},
    },
    {
      id: 2,
      text: "Log Out",
      onClick: () => {},
    },
  ];
  const toogleUserMenu = () => {
    setOpen((prev) => !prev);
  };
  const firstCapitalLetter = (word: string) => word[0].toUpperCase();

  const firstLetterName = firstCapitalLetter(name);

  return (
    <div
      className={`column-width ${styles.accountInfo}`}
      onClick={toogleUserMenu}
    >
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
