import RegisterForm from "../components/RegisterForm";
import { Link } from "react-router-dom";
import { Link as MuiLink } from "@mui/material";

import { useState } from "react";
import { useGlobalContext } from "../hooks/useGlobalContext";
import { register } from "../services/authService";

const Register = () => {
  const { dispatch } = useGlobalContext();
  const [registerOk, setRegisterOk] = useState(false);
  const [registerError, setRegisterError] = useState(false);
  const [registerHelperText, setRegisterHelperText] = useState("");

  const handleSubmit = async (email, password, owner) => {
    dispatch({ type: "SET_IS_LOADING", payload: true });
    setRegisterError(false);
    setRegisterHelperText("");

    const res = await register(email, password, owner);

    if (res.data.status === false) {
      setRegisterError(true);
      setRegisterHelperText(res.data.message);
      dispatch({ type: "SET_IS_LOADING", payload: false });
      return;
    }

    dispatch({ type: "SET_IS_LOADING", payload: false });
    setRegisterOk(true);
  };

  if (registerOk) {
    return (
      <div>
        Rejestracja przebiegła pomyślnie, możesz się{" "}
        <MuiLink component={Link} to="/login">
          zalogować
        </MuiLink>
      </div>
    );
  }
  return (
    <>
      <RegisterForm
        registerError={registerError}
        registerHelperText={registerHelperText}
        handleSubmit={handleSubmit}
      />
    </>
  );
};

export default Register;
