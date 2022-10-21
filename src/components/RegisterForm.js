import {
  TextField,
  Container,
  Typography,
  Button,
  FormHelperText,
  FormControl,
  FormControlLabel,
  Switch,
  Card,
  CardContent,
  CardHeader,
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
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  useEffect(() => {
    let ignore = false;

    if (email !== "" && password !== "")
      if (!ignore) setButton(false);
      else if (!ignore) setButton(true);

    return () => (ignore = true);
  }, [email, password, shopOwner]);

  useEffect(() => {
    let ignore = false;

    if (email === "") {
      if (!ignore) {
        setEmailError(false);
        setEmailHelperText("");
      }
    } else {
      if (!validator.isEmail(email)) {
        if (!ignore) {
          setEmailError(true);
          setEmailHelperText("Nieprawidłowy adres email");
        }
      } else {
        if (!ignore) {
          setEmailError(false);
          setEmailHelperText("");
        }
      }
    }
    return () => (ignore = true);
  }, [email]);

  useEffect(() => {
    let ignore = false;

    if (password === "") {
      if (!ignore) {
        setPasswordError(false);
        setPasswordHelperText("");
      }
    } else {
      if (
        !validator.isStrongPassword(password, {
          minUppercase: 0,
          minSymbols: 0,
          minLenght: 8,
          returnScore: false,
        })
      ) {
        if (!ignore) {
          setPasswordError(true);
          setPasswordHelperText(
            "Hasło musi zawierać minimum 8 znaków (w tym conajmniej 1 literę oraz 1 cyfrę)"
          );
        }
      } else {
        if (!ignore) {
          setPasswordError(false);
          setPasswordHelperText("");
        }
      }
    }

    return () => (ignore = true);
  }, [password]);

  return (
    <Card className="max-width" elevation={0}>
      <CardHeader title="Zarejestruj się" />
      <form
        onSubmit={(e) => {
          e.preventDefault();
          props.handleSubmit(email, password, shopOwner);
        }}
      >
        <CardContent className="flex-col flex-gap-2">
          <FormControl error={emailError}>
            <TextField
              onChange={handleEmailChange}
              value={email}
              type="text"
              id="email"
              label="Email"
              error={emailError}
            />
            <FormHelperText>{emailHelperText}</FormHelperText>
          </FormControl>

          <FormControl error={passwordError}>
            <TextField
              onChange={handlePasswordChange}
              value={password}
              type="password"
              id="password"
              label="Hasło"
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
                checked={shopOwner}
              />
            }
            label={<Typography>Jestem właścicielem lodziarni</Typography>}
          />

          <Button
            disabled={emailError || passwordError || button}
            type="submit"
            variant="contained"
          >
            Zarejestruj się
          </Button>
        </CardContent>
      </form>
    </Card>
  );
};

export default RegisterForm;
