import { useAppSelector } from "../../store/hooks";
import styles from "./FormSignUserTemplate.module.scss";
interface IProps {
  children: JSX.Element;
  label: string;
}

const FormSignUserTemplate = (props: IProps) => {
  const theme = useAppSelector((state) => state.theme.theme);
  const { children, label } = props;
  return (
    <div className={styles.container}>
      <div className={styles.childrenContainer}>
        <h2 className={styles.label}>{label}</h2>
        {children}
      </div>
    </div>
  );
};

export default FormSignUserTemplate;
