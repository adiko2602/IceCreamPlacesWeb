import { Card, CardContent, Typography } from "@mui/material";
import { Link as MuiLink } from "@mui/material";
import { Link } from "react-router-dom";

const LoginFailed = () => {
  const params = new URL(window.location.href);

  return (
    <Card className="card">
      <CardContent className="card-content">
        <Typography variant="body1">
          Coś poszło nie tak... <br />
          {params.searchParams.get("message") ? (
            <div className="error">{params.searchParams.get("message")}</div>
          ) : (
            ""
          )}
          <br />
          Kliknij{" "}
          <MuiLink color="text.secondary" component={Link} to="/login">
            <strong>tutaj</strong>
          </MuiLink>{" "}
          aby spróbować ponownie.
        </Typography>
      </CardContent>
    </Card>
  );
};

export default LoginFailed;
