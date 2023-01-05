import axios from "axios";
import { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";

const LoginGoogle = () => {
  const params = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    localStorage.setItem("token", JSON.stringify(params.key));
    navigate("/");
  }, []);
};

export default LoginGoogle;
