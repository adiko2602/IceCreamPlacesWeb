// Hooks
import { useState, useEffect } from "react";

// Components
import ShopCard from "../components/ShopCard";

// MUI
import { TextField, Box, Typography, Grid } from "@mui/material";

// Services
import { getShops } from "../services/shopService";

const Search = () => {
  const [shopList, setShopList] = useState([]);
  const [filteredShop, setFilteredShop] = useState([]);
  const [query, setQuery] = useState("");

  useEffect(() => {
    let ignore = false;

    getShops()
      .then((response) => {
        console.log(response.data.content);
        if (!ignore) {
          setShopList(response.data.content);
        }
      })
      .catch((error) => {
        console.log(error);
      });

    return () => (ignore = true);
  }, []);

  useEffect(() => {
    let ignore = false;
    if (query === "") {
      if (!ignore) setFilteredShop([]);
    } else {
      if (!ignore) {
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
    }

    return () => (ignore = true);
  }, [query]);

  return (
    <Box className="flex-col flex-gap-2 min-width max-width">
      <Typography variant="h5" gutterBottom>
        Wyszukaj lodziarnię po nazwie lub smaku :D.
      </Typography>
      <TextField
        onChange={(e) => setQuery(e.target.value)}
        value={query}
        type="text"
        label="Szukaj"
      />
      <Grid
        container
        gap={3}
        direction="row"
        justifyContent="center"
        alignItems="flex-start"
      >
        {filteredShop.map((shop, i) => {
          return (
            <Grid key={i} item xs={12} sm={6} md={4} lg={3}>
              <ShopCard
                shop={shop}
                params={{ showFlavors: true, query: query }}
              />
            </Grid>
          );
        })}
      </Grid>
    </Box>
  );
};

export default Search;
