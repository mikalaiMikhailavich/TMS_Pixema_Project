import ActivationComponent from "../../components/activationComponent/ActivationComponent";
import SignInComponent from "../../components/signInComponent/SignInComponent";
import FormSignUserTemplate from "../../hoc/formSignUserTemplate/FormSignUserTemplate";
import styles from "./SignIn.module.scss";

const Activation = () => {
  return (
    <FormSignUserTemplate
      children={<ActivationComponent />}
      label={"Confirm registration"}
    />
  );
};

export default Activation;
