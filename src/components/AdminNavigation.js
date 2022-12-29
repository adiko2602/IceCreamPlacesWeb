import { Card, CardContent, Link as MuiLink } from "@mui/material";
import { Link } from "react-router-dom";

const AdminNavigation = () => {
  return (
    <Card className="card">
      <CardContent className="card-content">
        <MuiLink component={Link} to="users">
          Użytkownicy
        </MuiLink>
        <MuiLink component={Link} to="shops">
          Lodziarnie
        </MuiLink>
      </CardContent>
    </Card>
  );
};

export default AdminNavigation;
