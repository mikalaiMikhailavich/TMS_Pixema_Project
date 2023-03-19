import styles from "./Button.module.scss";
interface IProps {
  value: string;
  disabled?: boolean;
  type: "primary" | "secondary";
  handler?: () => void;
  isFetching?: boolean;
}

export const Button = (props: IProps) => {
  const {
    value,
    disabled = false,
    type,
    handler = () => {},
    isFetching = false,
  } = props;
  return (
    <input
      type="button"
      value={isFetching ? "Loading" : value}
      disabled={disabled}
      className={type === "primary" ? styles.primary : styles.secondary}
      onClick={handler}
    />
  );
};
