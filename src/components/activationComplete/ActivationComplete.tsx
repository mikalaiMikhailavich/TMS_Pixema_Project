import { Button } from "../../UI/button/Button";
import styles from "./ActivationComplete.module.scss";
interface IProps {
  handler: () => void;
}
const ActivationComplete = (props: IProps) => {
  const { handler } = props;
  return (
    <div>
      <div className={styles.complete}>
        <h2 className={styles.text}>Your activation completed</h2>
        <Button value={"ok"} type={"primary"} handler={handler} />
      </div>
    </div>
  );
};

export default ActivationComplete;
