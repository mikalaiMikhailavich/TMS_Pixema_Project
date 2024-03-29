import pic from "../../assets/logos/nofavposts.png";
import styles from "./NoFavoritePosts.module.scss";

const NoFavoritePosts = () => {
  return (
    <div className={styles.container}>
      <h2>Favorites list is empty</h2>
      <div className={styles.imageContainer}>
        <img src={pic} alt="" />
      </div>
    </div>
  );
};

export default NoFavoritePosts;
