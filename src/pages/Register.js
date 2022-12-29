// Hooks

// Services
import { Register } from "../services/auth";

import validator from "validator";

// Hooks
import { useState, useRef } from "react";

// MUI
import {
  TextField,
  Button,
  FormHelperText,
  FormControl,
  Card,
  CardContent,
  CardHeader,
} from "@mui/material";
import { useNavigate } from "react-router-dom";

const Registers = () => {
  const navigate = useNavigate();
  const [error, setError] = useState("");
  const email = useRef("");
  const password = useRef("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validator.isEmail(email.current.value)) {
      setError("Nieprawidłowy adres email.");
      return;
    }

    if (
      !validator.isStrongPassword(password.current.value, {
        minUppercase: 1,
        minSymbols: 1,
        minLenght: 8,
        returnScore: false,
      })
    ) {
      setError(
        "Hasło musi składać się z minimum 1 dużej litery, minimum 1 znaku specjalnego i zawierać minimum 8 znaków."
      );
      return;
    }

    const registerData = await Register(
      email.current.value,
      password.current.value
    );

    if (!registerData.status) {
      setError(registerData.message);
      return;
    }

    navigate("/login");
  };

  return (
    <Card className="card">
      <CardHeader className="card-header" title="Zarejestruj się" />
      <form
        onSubmit={(e) => {
          handleSubmit(e);
        }}
      >
        <CardContent className="card-content">
          {error && <div className="error">{error}</div>}
          <div className="flex-column">
            <FormControl>
              <TextField
                fullWidth
                inputRef={email}
                type="text"
                id="email"
                label="Email"
              />
              <FormHelperText></FormHelperText>
            </FormControl>

            <FormControl>
              <TextField
                fullWidth
                inputRef={password}
                type="password"
                id="password"
                label="Hasło"
              />
              <FormHelperText></FormHelperText>
            </FormControl>

            <Button fullWidth type="submit" variant="contained">
              Zarejestruj się
            </Button>
          </div>
        </CardContent>
      </form>
    </Card>
  );
};

export default Registers;
