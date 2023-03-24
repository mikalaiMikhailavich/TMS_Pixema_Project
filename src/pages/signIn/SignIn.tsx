import SignInComponent from "../../components/signInComponent/SignInComponent";
import FormSignUserTemplate from "../../hoc/formSignUserTemplate/FormSignUserTemplate";
import styles from "./SignIn.module.scss";

const SignIn = () => {
  return (
    <FormSignUserTemplate children={<SignInComponent />} label={"Sing in"} />
  );
};

export default SignIn;
