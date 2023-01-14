import { Button, Typography } from "@mui/material";
import { Link } from "react-router-dom";

const NotificationShopInvitation = ({ notifi }) => {
  return (
    <div className="flex-column">
      <Typography variant="h6">
        Lodziarnia <strong>{notifi.shop.name}</strong> zaprasza Cię do pracy na
        stanowisko <strong>{notifi.shop.jobPosition}</strong>
      </Typography>
      <Button variant="outlined" component={Link} to="/shop">
        Więcej
      </Button>
    </div>
  );
};
export default NotificationShopInvitation;
