import {
  Button,
  Card,
  CardContent,
  CardHeader,
  TextField,
  Typography,
  Link as MuiLink,
} from "@mui/material";
import { useState } from "react";
import { Link, useParams } from "react-router-dom";
import validator from "validator";
import Loading from "../components/Loading";
import { SetNewPasswordAuth } from "../services/auth";

const SetNewPassword = () => {
  const [password, setPassword] = useState("");
  const [password2, setPassword2] = useState("");
  const [error, setError] = useState("");
  const [ok, setOk] = useState("");
  const [loading, setLoading] = useState(false);

  const params = useParams();

  const handleSendNewPassword = async () => {
    setError("");
    setLoading(true);
    if (password !== password2) {
      setError("Hasła muszą się zgadzać");
      setLoading(false);
      return;
    }
    if (
      !validator.isStrongPassword(password, {
        minUppercase: 1,
        minSymbols: 1,
        minLenght: 8,
        returnScore: false,
      })
    ) {
      setError(
        "Hasło musi składać się z minimum 1 dużej litery, minimum 1 znaku specjalnego i zawierać minimum 8 znaków."
      );
      setLoading(false);
      return;
    }

    const sendNewPasswordData = await SetNewPasswordAuth(
      password,
      params.resetCode
    );
    if (!sendNewPasswordData.status) {
      setError(sendNewPasswordData.message);
      setLoading(false);
      return;
    }

    setOk(sendNewPasswordData.message);
    setLoading(false);
  };

  if (loading) return <Loading />;
  return (
    <Card className="card">
      <CardHeader title="Wpisz nowe hasło" />
      <CardContent className="card-content">
        {error && <div className="error">{error}</div>}
        {ok && (
          <div className="ok">
            {ok}
            <br />
            <Typography variant="body1">
              Kliknij{" "}
              <MuiLink color="text.secondary" component={Link} to="/login">
                <strong>tutaj</strong>
              </MuiLink>{" "}
              aby się zalogować.
            </Typography>
          </div>
        )}
        <TextField
          fullWidth
          type="password"
          id="password"
          label="Nowe hasło"
          onChange={(e) => setPassword(e.target.value)}
        />
        <TextField
          fullWidth
          type="password"
          id="password2"
          label="Powtórz hasło"
          onChange={(e) => setPassword2(e.target.value)}
        />
        <Button
          variant="contained"
          fullWidth
          onClick={(e) => {
            e.preventDefault();
            handleSendNewPassword();
          }}
        >
          Resetuj hasło
        </Button>
      </CardContent>
    </Card>
  );
};

export default SetNewPassword;
