import { useInput } from "../../hooks/inputHook";
import { useAppSelector } from "../../store/hooks";
import Input from "../../UI/input/Input";
import SwitchButton from "../../UI/switchButton/SwitchButton";
import styles from "./Settings.module.scss";

const Settings = () => {
  const user = useAppSelector((state) => state.auth.currentUser);
  const name = useInput(user.username);
  const email = useInput(user.email);
  const password = useInput("");
  const newPassword = useInput("");
  const confirmPassword = useInput("");
  return (
    <div className={styles.container}>
      {user.id ? (
        <div>
          <h2>Profile</h2>
          <div className={styles.component}>
            <Input
              type={"text"}
              placeholder={"Name"}
              onChange={name.handleChange}
              value={name.value}
              label={"Name"}
            />
            <Input
              type={"email"}
              placeholder={"Email"}
              onChange={email.handleChange}
              value={email.value}
              label={"Email"}
            />
          </div>

          <h2>Password</h2>
          <div className={styles.component}>
            <Input
              type={"password"}
              placeholder={"Your password"}
              onChange={password.handleChange}
              value={password.value}
              label={"Password"}
            />
            <div className={styles.resetPasword}>
              <Input
                type={"password"}
                placeholder={"New password"}
                onChange={newPassword.handleChange}
                value={newPassword.value}
                label={"New password"}
              />
              <Input
                type={"password"}
                placeholder={"Confirm password"}
                onChange={confirmPassword.handleChange}
                value={confirmPassword.value}
                label={"Confirm password"}
              />
            </div>
          </div>
        </div>
      ) : null}
      <h2>Color mode</h2>
      <div className={styles.theme}>
        <h4>Use dark thema</h4>
        <SwitchButton />
      </div>
      <div className={styles}></div>
    </div>
  );
};

export default Settings;
