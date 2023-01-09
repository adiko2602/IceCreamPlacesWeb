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

  useEffect(() => {
    const populateUser = async () => {
      const userData = await GetUser();
      if (!userData.status) {
        setError(userData.message);
        setLoading(false);
        return;
      }

      userContext.setUser(userData.content);

      await delay(3000);
      navigate("/");
    };

    setLoading(true);
    populateUser();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const delay = (delayInms) => {
    return new Promise((resolve) => setTimeout(resolve, delayInms));
  };

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
