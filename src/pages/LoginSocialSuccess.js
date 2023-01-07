import { Card, CardContent } from "@mui/material";
import { useNavigate, useParams } from "react-router-dom";

const LoginSocialSuccess = () => {
  const params = useParams();
  const navigate = useNavigate();

  if (!params.key)
    return (
      <Card className="card">
        <CardContent className="card-content">
          Błąd tokena autoryzacji
        </CardContent>
      </Card>
    );

  localStorage.setItem("token", JSON.stringify(params.key));

  navigate("/login/success");
  return null;
};

export default LoginSocialSuccess;
