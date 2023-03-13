import Header from "../../UI/header/Header";
import styles from "./Layout.module.scss";
const Layout = () => {
  return (
    <div className={"app"}>
      <Header />
      <main className={`container ${styles.layoutContainer}`}>
        <div className={styles.right}>fdfdsf</div>
        <div className={styles.left}>fdsfds</div>
      </main>
      <footer></footer>
    </div>
  );
};

export default Layout;
