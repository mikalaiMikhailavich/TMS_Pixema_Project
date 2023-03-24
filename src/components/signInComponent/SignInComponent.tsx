import { useInput } from "../../hooks/inputHook";
import { Button } from "../../UI/button/Button";
import Input from "../../UI/input/Input";
import styles from "./SignInComponent.module.scss";

const SignInComponent = () => {
  const email = useInput("");
  const password = useInput("");

  return (
    <form className={styles.container}>
      <Input
        type={"email"}
        placeholder={"Your email"}
        value={email.value}
        label={"Email"}
        onChange={email.handleChange}
      />
      <div className={styles.pasword}>
        <Input
          type={"password"}
          placeholder={"Your password"}
          value={password.value}
          label={"Password"}
          onChange={password.handleChange}
        />
        <h5>Forgot password</h5>
      </div>

      <Button value={"Sign in"} type={"primary"} handler={() => {}} />
    </form>
  );
};

export default SignInComponent;
