import ConfirmRegistrationComponent from "../../components/confirmRegistrationComponent/ConfirmRegistrationComponent";
import SignInComponent from "../../components/signInComponent/SignInComponent";
import FormSignUserTemplate from "../../hoc/formSignUserTemplate/FormSignUserTemplate";
import styles from "./SignIn.module.scss";

const ConfirmRegistration = () => {
  return (
    <FormSignUserTemplate
      children={<ConfirmRegistrationComponent />}
      label={"Confirm registration"}
    />
  );
};

export default ConfirmRegistration;
