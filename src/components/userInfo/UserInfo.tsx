import styles from "./UserInfo.module.scss";
interface IProps {
  name: string;
}

const UserInfo = (props: IProps) => {
  const { name } = props;

  const firstCapitalLetter = (word: string) => word[0].toUpperCase();

  const firstLetterName = firstCapitalLetter(name);

  return (
    <div className={styles.accountInfo}>
      <div className={styles.accountCapitals}>{firstLetterName}</div>
      <div className={styles.accountName}>{name}</div>
    </div>
  );
};

export default UserInfo;
