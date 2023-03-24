import SignUpComponent from "../../components/SignUpComponent/SignUpComponent";
import FormSignUserTemplate from "../../hoc/formSignUserTemplate/FormSignUserTemplate";
import styles from "./SignUp.module.scss";

const SignIn = () => {
  return (
    <FormSignUserTemplate children={<SignUpComponent />} label={"Sing up"} />
  );
};

export default SignIn;
