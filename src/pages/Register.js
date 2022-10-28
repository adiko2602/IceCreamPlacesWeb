import { Link } from "react-router-dom";

// Hooks
import { useState } from "react";

// Components
import RegisterForm from "../components/forms/RegisterForm";

// MUI
import { Link as MuiLink } from "@mui/material";

// Services
import { register } from "../services/authService";

const Register = () => {
  const [registerOk, setRegisterOk] = useState(false);
  const [registerHelperText, setRegisterHelperText] = useState("");

  const handleSubmit = async (email, password, owner) => {
    setRegisterHelperText("");

    const res = await register(email, password, owner);

    if (res.data.status === false) {
      setRegisterHelperText(res.data.message);
      return;
    }

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
        registerHelperText={registerHelperText}
        handleSubmit={handleSubmit}
      />
    </>
  );
};

export default Register;
