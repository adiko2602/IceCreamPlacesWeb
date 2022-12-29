import { Link, useNavigate } from "react-router-dom";

// Hooks

// MUI
import { Link as MuiLink } from "@mui/material";

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

import { useUser } from "../context/UserContext";
import { Login } from "../services/auth";
import { GetUser } from "../services/user";

const Logins = () => {
  const navigate = useNavigate();
  const email = useRef("");
  const password = useRef("");
  const [error, setError] = useState("");

  const user = useUser();

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

    const loginData = await Login(email.current.value, password.current.value);
    if (!loginData.status) {
      setError(loginData.message);
      return;
    }

    const userData = await GetUser();
    if (!userData.status) {
      setError("Bład pobierania danych o użytkowniku.");
      return;
    }

    user.setUser(userData.content);
    navigate("/");
  };

  return (
    <Card className="card">
      <CardHeader className="card-header" title="Zaloguj się" />
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
              Zaloguj się
            </Button>
          </div>
        </CardContent>
      </form>
    </Card>
  );
};

export default Logins;
