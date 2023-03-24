import { useInput } from "../../hooks/inputHook";
import { Button } from "../../UI/button/Button";
import Input from "../../UI/input/Input";
import styles from "./ConfirmRegistrationComponent.module.scss";

const ConfirmRegistrationComponent = () => {
  const uid = useInput("");
  const token = useInput("");

  return (
    <form className={styles.container}>
      <Input
        type={"text"}
        placeholder={"uid"}
        value={uid.value}
        label={"Email"}
        onChange={uid.handleChange}
      />
      <div className={styles.pasword}>
        <Input
          type={"text"}
          placeholder={"token"}
          value={token.value}
          label={"Password"}
          onChange={token.handleChange}
        />
        <h5>Forgot password</h5>
      </div>

      <Button
        value={"Confirm registration"}
        type={"primary"}
        handler={() => {}}
      />
    </form>
  );
};

export default ConfirmRegistrationComponent;
