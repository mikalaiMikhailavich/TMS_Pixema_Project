import styles from "./ClearButton.module.scss";
interface IProps {
  handler: () => void;
}
const ClearButton = (props: IProps) => {
  const { handler } = props;
  return (
    <div className={styles.container} onClick={handler}>
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M13.4301 11.8427L17.3646 7.6249L16.2332 6.49353L12.2797 10.7317L8.15085 6.74377L7 7.85532L11.1888 11.9011L7.25432 16.1189L8.38569 17.2503L12.3392 13.0122L16.468 17L17.6188 15.8885L13.4301 11.8427Z"
          fill="black"
        />
      </svg>
    </div>
  );
};

export default ClearButton;
