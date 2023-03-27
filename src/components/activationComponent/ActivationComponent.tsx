import { useState } from "react";
import { useNavigate } from "react-router-dom";
import ModalMenu from "../../hoc/modalMenu/ModalMenu";
import { useInput } from "../../hooks/inputHook";
import { useAppDispatch, useAppSelector } from "../../store/hooks";
import modalMenu, {
  modalMenuClose,
  modalMenuOpen,
} from "../../store/reducers/modalMenu";
import { useActivationMutation } from "../../store/requests/registration";
import { Button } from "../../UI/button/Button";
import Input from "../../UI/input/Input";
import ActivationComplete from "../activationComplete/ActivationComplete";
import styles from "./ActivationComponent.module.scss";

const ActivationComponent = () => {
  const modalMenu = useAppSelector((state) => state.modal.isOpen);
  const dispatch = useAppDispatch();
  const uid = useInput("");
  const token = useInput("");
  const [confirmregistration] = useActivationMutation();
  const [error, setError] = useState({ data: { token: [""], uid: [""] } });
  const navigate = useNavigate();
  const submit = () => {
    confirmregistration({
      uid: uid.value,
      token: token.value,
    })
      .unwrap()
      .then((data) => {
        console.log(data);

        dispatch(modalMenuOpen());
      })
      .catch((error) => {
        setError(error);
      });
  };
  console.log(error);

  const handlerActivateButton = () => {
    dispatch(modalMenuClose());
    navigate("/signin");
  };
  console.log(error?.data?.uid?.[0]);

  return (
    <>
      <form className={styles.container}>
        <Input
          type={"text"}
          placeholder={"uid"}
          value={uid.value}
          label={"uid"}
          onChange={uid.handleChange}
          required={true}
        />
        {error?.data?.uid?.[0] === "Invalid user id or user doesn't exist." ? (
          <div style={{ color: "#ed4337" }}>Неверный uid или токен</div>
        ) : null}
        {error?.data?.uid?.[0] === "This field may not be blank." ? (
          <div style={{ color: "#ed4337" }}>Поле не заполнено</div>
        ) : null}
        <div className={styles.pasword}>
          <Input
            type={"text"}
            placeholder={"token"}
            value={token.value}
            label={"token"}
            onChange={token.handleChange}
            required={true}
          />
        </div>
        {error?.data?.uid?.[0] === "Invalid user id or user doesn't exist." ? (
          <div style={{ color: "#ed4337" }}>Неверный uid или токен</div>
        ) : null}
        {error?.data?.uid?.[0] === "This field may not be blank." ? (
          <div style={{ color: "#ed4337" }}>Поле не заполнено</div>
        ) : null}
        <Button
          value={"Confirm registration"}
          type={"primary"}
          handler={submit}
        />
      </form>
      {modalMenu && (
        <ModalMenu>
          <ActivationComplete handler={handlerActivateButton} />
        </ModalMenu>
      )}
    </>
  );
};

export default ActivationComponent;
