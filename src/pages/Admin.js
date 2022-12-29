import { Card, CardHeader, Typography, Grid, CardContent } from "@mui/material";
import AdminNavigation from "../components/AdminNavigation";
import { Outlet } from "react-router-dom";

const Admin = () => {
  return (
    <Card className="card">
      <CardHeader
        title={<Typography variant="h5">Zarządzaj profilem</Typography>}
        className="card-header"
      />
      <CardContent className="card-content">
        <Grid container>
          <Grid item xs={12} sm={3}>
            <AdminNavigation />
          </Grid>
          <Grid item xs={12} sm={9}>
            <Outlet />
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  );
};

export default Admin;
