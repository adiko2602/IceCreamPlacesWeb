// Hooks
import { useState, useEffect } from "react";

// Components
import ShopCard from "../components/ShopCard";

// MUI
import {
  TextField,
  Box,
  Typography,
  Grid,
  Card,
  CardHeader,
  CardContent,
} from "@mui/material";

// Services
import { GetShops } from "../services/shop";

const Search = () => {
  const [shopList, setShopList] = useState([]);
  const [filteredShop, setFilteredShop] = useState([]);
  const [query, setQuery] = useState("");

  useEffect(() => {
    const populateShopList = async () => {
      setShopList(await GetShops());
    };

    populateShopList();
  }, []);

  useEffect(() => {
    if (query === "") {
      setFilteredShop([]);
    } else {
      setFilteredShop(
        shopList.filter((shop) => {
          if (
            shop.name.toLowerCase().includes(query.toLowerCase()) ||
            shop.flavors.some((flavor) =>
              flavor.name.toLowerCase().includes(query.toLowerCase())
            )
          )
            return shop;
          return null;
        })
      );
    }
  }, [query]);

  return (
    <Card className="card">
      <CardHeader
        className="card-header"
        title="
        Wyszukaj lodziarnię po nazwie lub smaku :D."
      />
      <CardContent className="card-content">
        <div className="flex-column">
          <Typography variant="h5" gutterBottom></Typography>
          <TextField
            onChange={(e) => setQuery(e.target.value)}
            value={query}
            type="text"
            label="Szukaj"
            fullWidth
          />
          <Grid container>
            {filteredShop.map((shop, i) => {
              return (
                <Grid item key={i} xs={12} sm={6} md={4}>
                  <ShopCard shop={shop} params={{ showFlavors: true }} />
                </Grid>
              );
            })}
          </Grid>
        </div>
      </CardContent>
    </Card>
  );
};

export default Search;
