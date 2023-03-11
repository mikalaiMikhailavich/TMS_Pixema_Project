import { ChangeEvent } from "react";
import styles from "./Input.module.scss";
interface IProps {
  type: string;
  placeholder: string;
  value: string;
  onChange?: (e: ChangeEvent<HTMLInputElement>) => void;
}

const Input = (props: IProps) => {
  const { type, placeholder, onChange, value } = props;
  return (
    <input
      className={styles.input}
      type={type}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
    />
  );
};

export default Input;
