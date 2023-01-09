import {
  Card,
  CardHeader,
  Typography,
  CardContent,
  Link as MuiLink,
  TextField,
} from "@mui/material";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { GetShops } from "../services/shop";
import Loading from "./Loading";

const AdminShops = () => {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [shops, setShops] = useState([]);
  const [filteredShop, setFilteredShop] = useState([]);
  const [query, setQuery] = useState("");

  useEffect(() => {
    if (query === "") {
      setFilteredShop([]);
    } else {
      setFilteredShop(
        shops.filter((shop) => {
          if (
            shop.name.toLowerCase().includes(query.toLowerCase()) ||
            shop._id.toLowerCase().includes(query.toLowerCase())
          )
            return shop;
          return null;
        })
      );
    }
  }, [query, shops]);

  useEffect(() => {
    setError("");
    const populateShops = async () => {
      const getShopsData = await GetShops();
      if (!getShopsData.status) {
        setError(getShopsData.message);
        setLoading(false);
        return;
      }
      setShops(getShopsData.content);
      setLoading(false);
    };

    setLoading(true);
    populateShops();
  }, []);

  if (loading) return <Loading />;

  if (!shops)
    return (
      <Card className="card-profile">
        <CardContent className="card-content">
          Brak Lodziarni w bazie
        </CardContent>
      </Card>
    );

  return (
    <Card className="card-profile">
      <CardHeader
        className="card-header"
        title={<Typography variant="h5">Lodziarnie</Typography>}
      />
      <CardContent className="card-content">
        <TextField
          onChange={(e) => setQuery(e.target.value)}
          value={query}
          type="text"
          label="Szukaj"
          fullWidth
        />
      </CardContent>
      <CardContent className="card-content">
        {error && <div className="error">{error}</div>}
        {filteredShop.length <= 0 &&
          shops.map((shop) => (
            <div
              key={shop._id}
              style={{ borderBottom: "solid 1px black", padding: "10px 0" }}
            >
              <MuiLink component={Link} to={`/shop/${shop._id}`}>
                {shop._id}
                <br />
                <strong>{shop.name}</strong>
              </MuiLink>
            </div>
          ))}
        {filteredShop.length > 0 &&
          filteredShop.map((shop) => (
            <div
              key={shop._id}
              style={{ borderBottom: "solid 1px black", padding: "10px 0" }}
            >
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
