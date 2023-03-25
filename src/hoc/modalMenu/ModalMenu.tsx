import styles from "./ModalMenu.module.scss";

interface IProps {
  children: JSX.Element;
}

const ModalMenu = (props: IProps) => {
  return <div className={styles.container}>{props.children}</div>;
};

export default ModalMenu;
