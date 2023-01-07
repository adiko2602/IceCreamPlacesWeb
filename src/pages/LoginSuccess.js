import { Card, CardContent } from "@mui/material";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useUser } from "../context/UserContext";
import { GetUser } from "../services/user";
import { useState } from "react";
import { Link as MuiLink } from "@mui/material";
import { Link } from "react-router-dom";
import Loading from "../components/Loading";

const LoginSuccess = () => {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const navigate = useNavigate();
  const userContext = useUser();

  function timeout(delay) {
    return new Promise((res) => setTimeout(res, delay));
  }

  useEffect(() => {
    const populateUser = async () => {
      const userData = GetUser();
      if (!userData.status) {
        setError(userData.message);
        setLoading(false);
        return;
      }

      userContext.setUser(userData.content);
      await timeout(5000);
    };

    setLoading(true);
    populateUser();
    navigate("/");
  }, []);

  if (loading) return <Loading />;
  return (
    <Card className="card">
      <CardContent className="card-content">
        {error ? (
          <>
            <div className="error">{error}</div>
            Kliknij{" "}
            <MuiLink component={Link} to="/login">
              <strong>tutaj</strong>
            </MuiLink>{" "}
            aby spróbować ponownie
          </>
        ) : (
          "Zalogowanie przebiegło pomyślnie za chwile nastąpi przekierowanie na stronę główną :D"
        )}
      </CardContent>
    </Card>
  );
};

export default LoginSuccess;
