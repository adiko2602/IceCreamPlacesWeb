import { Card, CardHeader, Typography, CardContent } from "@mui/material";

const AdminUsers = () => {
  return (
    <Card className="card">
      <CardHeader
        className="card-header"
        title={<Typography variant="h5">Edytuj profil</Typography>}
      />
      <CardContent className="card-content">
        jestem konentent edytuj profil
      </CardContent>
    </Card>
  );
};

export default AdminUsers;
