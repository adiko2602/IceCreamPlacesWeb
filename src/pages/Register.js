import RegisterForm from "../components/RegisterForm";
import Loading from "../components/Loading";
import RegisterOk from "../components/RegisterOk";
import { useState } from "react";

const Register = () => {
  const [registerOk, setRegisterOk] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = (email, password) => {
    setRegisterOk(true);
  };

  if (loading) return <Loading />;
  if (registerOk) return <RegisterOk />;
  return <RegisterForm handleSubmit={handleSubmit} />;
};

export default Register;
