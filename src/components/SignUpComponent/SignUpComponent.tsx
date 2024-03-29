import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useInput } from "../../hooks/inputHook";
import { useRegistrationMutation } from "../../store/requests/registration";
import { Button } from "../../UI/button/Button";
import Input from "../../UI/input/Input";
import styles from "./SignUpComponent.module.scss";

const SignUpComponent = () => {
  const email = useInput("");
  const password = useInput("");
  const username = useInput("");
  const navigate = useNavigate();
  const [registration, { data }] = useRegistrationMutation();

  const [error, setError] = useState({
    data: { email: [""], username: [""], password: [""] },
  });
  const submitData = () => {
    registration({
      email: email.value,
      password: password.value,
      username: username.value,
    })
      .unwrap()
      .then((payload) => payload && navigate("/activation"))
      .catch((error) => {
        setError(error);
      });
  };

  return (
    <form className={styles.container}>
      <Input
        type={"text"}
        placeholder={"Your name"}
        value={username.value}
        label={"Name"}
        onChange={username.handleChange}
        required={true}
      />
      <div>
        {error?.data?.username?.[0] ===
        "A user with that username already exists." ? (
          <div style={{ color: "#ed4337" }}>Данный логин уже используется</div>
        ) : null}
        {error?.data?.username?.[0] === "This field may not be blank." ? (
          <div style={{ color: "#ed4337" }}>Поле не заполнено</div>
        ) : null}
      </div>
      <Input
        type={"email"}
        placeholder={"Your email"}
        value={email.value}
        label={"Email"}
        onChange={email.handleChange}
        required={true}
      />
      {error?.data?.email?.[0] === "user with this Email already exists." ? (
        <div style={{ color: "#ed4337" }}>Данная почта уже используется</div>
      ) : null}
      {error?.data?.email?.[0] === "This field may not be blank." ? (
        <div style={{ color: "#ed4337" }}>Поле не заполнено</div>
      ) : null}
      <div className={styles.pasword}>
        <Input
          type={"password"}
          placeholder={"Your password"}
          value={password.value}
          label={"Password"}
          onChange={password.handleChange}
          required={true}
        />
        {error?.data?.password?.[0] === "This field may not be blank." ? (
          <div style={{ color: "#ed4337" }}>Поле не заполнено</div>
        ) : null}
      </div>

      <Button value={"Sign up"} type={"primary"} handler={submitData} />
    </form>
  );
};

export default SignUpComponent;
