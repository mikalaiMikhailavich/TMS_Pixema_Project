import styles from "./Input.module.scss";
interface IProps {
  type?: string;
  name?: string;
  placeholder?: string;
  onChange?: () => {};
}

const Input = (props: IProps) => {
  const { type, name, placeholder, onChange } = props;
  return (
    <input
      className={styles.input}
      type={type}
      name={name}
      placeholder={placeholder}
      onChange={onChange}
    />
  );
};

export default Input;
