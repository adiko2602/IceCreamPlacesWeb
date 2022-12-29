import {
  Card,
  CardHeader,
  Typography,
  CardContent,
  Link as MuiLink,
} from "@mui/material";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { GetShops } from "../services/shop";

const AdminShops = () => {
  const [shops, setShops] = useState([]);

  useEffect(() => {
    const populateShops = async () => {
      setShops(await GetShops());
    };

    populateShops();
  }, []);

  if (!shops) return null;

  return (
    <Card className="card">
      <CardHeader
        className="card-header"
        title={<Typography variant="h5">Lodziarnie</Typography>}
      />
      <CardContent className="card-content">
        {shops.map((shop) => (
          <div style={{ borderBottom: "solid 1px black", padding: "10px 0" }}>
            <MuiLink component={Link} to={`/shop/${shop._id}`}>
              {shop._id}
              <br />
              <strong>{shop.name}</strong>
            </MuiLink>
          </div>
        ))}
      </CardContent>
    </Card>
  );
};

export default AdminShops;
