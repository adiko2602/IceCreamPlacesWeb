import { Button, TextField } from "@mui/material";
import { useState } from "react";
import validator from "validator";
import { ResetPasswordAuth } from "../services/auth";
import Loading from "./Loading";

const ResetPassword = () => {
  const [email, setEmail] = useState("");
  const [ok, setOk] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleResetPassword = async () => {
    setError("");
    setLoading(true);
    if (!validator.isEmail(email)) {
      setError("Nieprawidłowy adres email.");
      setLoading(false);
      return;
    }

    const resetPasswordData = await ResetPasswordAuth(email);
    if (!resetPasswordData.status) {
      setError(resetPasswordData.message);
      setLoading(false);
      return;
    }

    setOk(resetPasswordData.message);
    setEmail("");
    setLoading(false);
  };

  if (loading) return <Loading />;
  return (
    <>
      {error && <div className="error">{error}</div>}
      {ok && <div className="ok">{ok}</div>}
      <TextField
        fullWidth
        type="text"
        id="name"
        value={email}
        onChange={(e) => {
          setEmail(e.target.value);
        }}
      />
      <Button
        disabled={!email}
        fullWidth
        variant="contained"
        onClick={(e) => {
          e.preventDefault();
          handleResetPassword();
        }}
      >
        Resetuj hasło
      </Button>
    </>
  );
};

export default ResetPassword;
