import {
  Card,
  CardHeader,
  CardContent,
  Typography,
  Link as MuiLink,
} from "@mui/material";
import { Link } from "react-router-dom";

const ShopCard = (props) => {
  const { _id, name, address, iceCreams } = props.shop;

  console.log(props.shop);
  return (
    <Card className="shop-card" elevation={0}>
      <CardHeader title={name} />
      <CardContent color="secondary">
        <Typography type="h5">{address}</Typography>
        <Typography>
          <MuiLink component={Link} color="text.primary" to={_id}>
            Pokaż szczegóły
          </MuiLink>
        </Typography>
      </CardContent>
    </Card>
  );
};

export default ShopCard;
