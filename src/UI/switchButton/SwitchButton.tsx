import { useAppDispatch, useAppSelector } from "../../store/hooks";
import { setThemeDark, setThemeLight } from "../../store/reducers/theme";
import styles from "./SwitchButton.module.scss";

const SwitchButton = () => {
  const dispatch = useAppDispatch();
  const nightMode = useAppSelector((state) => state.theme.theme);
  const turnOnNightMode = () => {
    nightMode === "light"
      ? dispatch(setThemeDark())
      : dispatch(setThemeLight());
  };
  return (
    <div className={styles.container} onClick={turnOnNightMode}>
      <div
        className={styles.toggler}
        style={nightMode === "dark" ? { left: "13px", right: "20px" } : {}}
      ></div>
    </div>
  );
};

export default SwitchButton;
