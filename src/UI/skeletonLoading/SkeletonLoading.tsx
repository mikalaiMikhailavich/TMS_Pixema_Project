import styles from "./SkeletonLoading.module.scss";

const SkeletonLoading = () => {
  return (
    <div className={styles.skeletonContainer}>
      <div className={styles.skeleton}></div>
    </div>
  );
};

export default SkeletonLoading;
