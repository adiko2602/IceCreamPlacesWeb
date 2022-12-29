import { Card, CardContent, CardHeader, Typography } from "@mui/material";

const ProfileFavorite = () => {
  return (
    <Card className="card">
      <CardHeader
        className="card-header"
        title={<Typography variant="h5">Ulubione</Typography>}
      />
      <CardContent className="card-content">
        jestem konentent ulubione profil
      </CardContent>
    </Card>
  );
};

export default ProfileFavorite;
