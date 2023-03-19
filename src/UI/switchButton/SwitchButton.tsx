import { useState } from "react";
import styles from "./SwitchButton.module.scss";

const SwitchButton = () => {
  const [nightMode, setNightMode] = useState<boolean>(false);
  const turnOnNightMode = () => {
    setNightMode((prev) => !prev);
  };
  return (
    <div className={styles.container} onClick={turnOnNightMode}>
      <div
        className={styles.toggler}
        style={nightMode ? { left: "13px", right: "20px" } : {}}
      >
        {" "}
      </div>
    </div>
  );
};

export default SwitchButton;
