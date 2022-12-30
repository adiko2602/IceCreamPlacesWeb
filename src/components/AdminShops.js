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
import { ColorRing } from "react-loader-spinner";

const AdminShops = () => {
  const [loading, setLoading] = useState(true);
  const [shops, setShops] = useState([]);

  useEffect(() => {
    const populateShops = async () => {
      setShops(await GetShops());
    };

    setLoading(true);
    populateShops();
    setLoading(false);
  }, []);

  if (loading)
    return (
      <div className="flex-row full-width flex-center">
        <ColorRing
          visible={true}
          height="80"
          width="80"
          ariaLabel="blocks-loading"
          wrapperStyle={{}}
          wrapperClass="blocks-wrapper"
          colors={["#e15b64", "#f47e60", "#f8b26a", "#abbd81", "#849b87"]}
        />
      </div>
    );

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
