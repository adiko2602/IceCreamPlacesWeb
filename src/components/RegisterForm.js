import {
  TextField,
  Container,
  Typography,
  Button,
  FormHelperText,
  FormControl,
  FormControlLabel,
  Switch,
} from "@mui/material";
import { useEffect, useState } from "react";
import validator from "validator";

const RegisterForm = (props) => {
  const [button, setButton] = useState(true);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [emailError, setEmailError] = useState(false);
  const [passwordError, setPasswordError] = useState(false);
  const [emailHelperText, setEmailHelperText] = useState("");
  const [passwordHelperText, setPasswordHelperText] = useState("");
  const [shopOwner, setShopOwner] = useState(false);

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
    if (!validator.isEmail(e.target.value)) {
      setEmailError(true);
      setEmailHelperText("Nieprawidłowy adres email");
    } else {
      setEmailError(false);
      setEmailHelperText("");
    }
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
    if (
      !validator.isStrongPassword(e.target.value, {
        minUppercase: 0,
        minSymbols: 0,
        minLenght: 8,
        returnScore: false,
      })
    ) {
      setPasswordError(true);
      setPasswordHelperText(
        "Hasło musi zawierać minimum 8 znaków (w tym conajmniej 1 literę oraz 1 cyfrę)"
      );
    } else {
      setPasswordError(false);
      setPasswordHelperText("");
    }
  };

  useEffect(() => {
    if (email !== "" && password !== "") setButton(false);
    else setButton(true);
  }, [email, password, shopOwner]);

  return (
    <Container className="register-container">
      <form
        onSubmit={(e) => {
          e.preventDefault();
          props.handleSubmit(email, password, shopOwner);
        }}
      >
        <div className="register-paper">
          <Typography variant="h5" color="secondary">
            Zarejestruj się
          </Typography>

          <FormControl error={emailError}>
            <TextField
              color="secondary"
              onChange={handleEmailChange}
              value={email}
              type="text"
              id="email"
              name="email"
              label="Email"
              variant="outlined"
              error={emailError}
            />
            <FormHelperText>{emailHelperText}</FormHelperText>
          </FormControl>

          <FormControl error={passwordError}>
            <TextField
              color="secondary"
              onChange={handlePasswordChange}
              value={password}
              type="password"
              id="password"
              label="Hasło"
              variant="outlined"
              error={passwordError}
            />
            <FormHelperText>{passwordHelperText}</FormHelperText>
          </FormControl>
          <FormControlLabel
            control={
              <Switch
                onClick={(e) => {
                  e.preventDefault();
                  setShopOwner(() => {
                    return !shopOwner;
                  });
                }}
                color="secondary"
                checked={shopOwner}
              />
            }
            label={
              <Typography color="secondary">
                Jestem właścicielem lodziarni
              </Typography>
            }
          />

          <Button
            color="secondary"
            disabled={emailError || passwordError || button}
            type="submit"
            size="large"
            variant="contained"
          >
            Zarejestruj się
          </Button>
        </div>
      </form>
    </Container>
  );
};

export default RegisterForm;
