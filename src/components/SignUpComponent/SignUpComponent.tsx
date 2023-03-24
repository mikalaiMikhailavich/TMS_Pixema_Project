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
  const [registration, createResult] = useRegistrationMutation();
  // console.log(createResult);
  // useEffect(() => {
  //   if (createResult.isLoading === false && createResult.isSuccess) {
  //     console.log(createResult.status);
  //     console.log(createResult.error);
  //     console.log(createResult);

  //     console.log("create post", createResult.data);
  //     // navigate("/");
  //   }
  // }, [createResult]);
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
      .then((payload) => console.log(payload))
      .catch((error) => {
        console.log(error);
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
      />
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

      <Button value={"Sign up"} type={"primary"} handler={submitData} />
    </form>
  );
};

export default SignUpComponent;
