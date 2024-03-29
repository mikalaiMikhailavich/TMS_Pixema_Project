import styles from "./FilterButton.module.scss";
interface IProps {
  handler: () => void;
}
const FilterButton = (props: IProps) => {
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
          d="M5 6L19 6M10 12H19M14 18H19"
          stroke="#AFB2B6"
          strokeWidth="2"
          strokeLinecap="round"
        />
      </svg>
    </div>
  );
};

export default FilterButton;
