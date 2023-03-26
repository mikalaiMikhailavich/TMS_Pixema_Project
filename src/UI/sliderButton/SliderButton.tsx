import styles from "./SliderButton.module.scss";
interface IProps {
  type: "left" | "right";
  handler: () => void;
}
const SliderButton = (props: IProps) => {
  const { handler, type } = props;
  return (
    <div className={styles.container} onClick={handler}>
      {type === "left" ? (
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M9.5 17L4.5 12M4.5 12L9.5 7M4.5 12H21"
            stroke="#AFB2B6"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      ) : (
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M14.5 17L19.5 12M19.5 12L14.5 7M19.5 12H3"
            stroke="#80858B"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      )}
    </div>
  );
};

export default SliderButton;
