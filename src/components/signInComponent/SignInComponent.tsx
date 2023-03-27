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
  const [createToken] = useCreateTokenMutation();
  const [getUser] = useGetUserInfoMutation();
  const [error, setError] = useState({ data: { detail: "" } });
  const onSubmit = async () => {
    await createToken({ email: email.value, password: password.value })
      .unwrap()
      .then((data) => {
        getUser(data.access)
          .unwrap()
          .then((data) => {
            dispatch(setUser(data));
            navigate("/");
          })
          .catch();

        data && navigate("/", { replace: true });
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
        {error?.data?.detail ===
        "No active account found with the given credentials" ? (
          <div style={{ color: "#ed4337" }}>Неверная почта или пароль</div>
        ) : null}
      </div>

      <Button value={"Sign in"} type={"primary"} handler={onSubmit} />
      <h4>
        Don’t have an account?{" "}
        <span className={styles.link} onClick={() => navigate("/signup")}>
          Sign Up
        </span>
      </h4>
    </form>
  );
};

export default SignInComponent;
