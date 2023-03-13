import styles from "./Button.module.scss";
interface IProps {
  value: string;
  disabled: boolean;
  type: "primary" | "secondary";
  onClick?: () => void;
}

export const Button = (props: IProps) => {
  const { value, disabled, type, onClick = () => {} } = props;
  return (
    <input
      type="button"
      value={value}
      disabled={disabled}
      className={type === "primary" ? styles.primary : styles.secondary}
      onClick={onClick}
    />
  );
};
