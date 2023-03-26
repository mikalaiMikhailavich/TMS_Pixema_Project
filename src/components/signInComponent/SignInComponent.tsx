import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useInput } from "../../hooks/inputHook";
import { useAppDispatch } from "../../store/hooks";
import { setUser } from "../../store/reducers/auth";
import {
  useCreateTokenMutation,
  useGetUserInfoMutation,
} from "../../store/requests/auth";
import { Button } from "../../UI/button/Button";
import Input from "../../UI/input/Input";
import styles from "./SignInComponent.module.scss";

const SignInComponent = () => {
  const dispatch = useAppDispatch();
  const email = useInput("");
  const password = useInput("");
  const navigate = useNavigate();
  const [createToken, { data }] = useCreateTokenMutation();
  const [getUser] = useGetUserInfoMutation();
  const [error, setError] = useState({ data: { detail: "" } });
  const onSubmit = async () => {
    await createToken({ email: email.value, password: password.value })
      .unwrap()
      .then((data) => {
        getUser(data.access)
          .unwrap()
          .then((data) => {
            console.log(data);
            dispatch(setUser(data));
          })
          .catch((error) => console.log(error));

        // data && navigate("/", { replace: true });
      })
      .catch((error) => {
        console.log(error);

        setError(error);
      });
  };

  return (
    <form className={styles.container}>
      <Input
        type={"email"}
        placeholder={"Your email"}
        value={email.value}
        label={"Email"}
        onChange={email.handleChange}
        required={true}
      />
      <div className={styles.pasword}>
        <Input
          type={"password"}
          placeholder={"Your password"}
          value={password.value}
          label={"Password"}
          onChange={password.handleChange}
          required={true}
        />
        <h5>Forgot password</h5>
      </div>

      <Button value={"Sign in"} type={"primary"} handler={onSubmit} />
    </form>
  );
};

export default SignInComponent;
