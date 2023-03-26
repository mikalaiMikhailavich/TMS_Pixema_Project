import { ChangeEvent } from "react";
import styles from "./Input.module.scss";
interface IProps {
  type: string;
  placeholder: string;
  value: string;
  onChange?: (e: ChangeEvent<HTMLInputElement>) => void;
  label?: string;
  required?: boolean;
}

const Input = (props: IProps) => {
  const {
    type,
    placeholder,
    onChange,
    value,
    label = "",
    required = false,
  } = props;
  return (
    <div className={styles.container}>
      <h4 className={styles.label}>{label}</h4>
      <input
        className={styles.input}
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        required={required}
      />
    </div>
  );
};

export default Input;
