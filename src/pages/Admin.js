import { Card, CardHeader, Typography, Grid, CardContent } from "@mui/material";
import AdminNavigation from "../components/AdminNavigation";
import { Outlet } from "react-router-dom";

const Admin = () => {
  return (
    <Card className="card">
      <CardHeader
        title={<Typography variant="h5">Panel Administratora</Typography>}
        className="card-header"
      />
      <CardContent className="card-content">
        <Grid container>
          <Grid item xs={12}>
            <AdminNavigation />
          </Grid>

          <Grid item xs={12}>
            <Outlet />
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  );
};

export default Admin;
