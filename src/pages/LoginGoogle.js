import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useUser } from "../context/UserContext";
import { CheckIfLogin, LoginWithGoogle } from "../services/auth";
import { baseUrl } from "../services/axios";
import { GetUser } from "../services/user";

const LoginGoogle = () => {
  const [error, setError] = useState(false);
  const navigate = useNavigate();
  const userContext = useUser();

  useEffect(() => {
    // const log = async () => {
    //   const dataLoginWithGoogle = await LoginWithGoogle();
    //   if (!dataLoginWithGoogle.status) {
    //     setError(dataLoginWithGoogle.message);
    //     return;
    //   }
    //   if (await CheckIfLogin()) {
    //     const userData = await GetUser();
    //     if (!userData.status) {
    //       setError(userData.message);
    //       return;
    //     }
    //     await userContext.setUser(userData.content);
    //   }
    // };

    window.open(`${baseUrl}/auth/google/success`, "_self");

    navigate("/");

    // log();
  }, []);

  return <div>{error && <div className="error">{error}</div>}</div>;
};

export default LoginGoogle;
