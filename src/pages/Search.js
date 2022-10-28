// Hooks
import { useState, useEffect } from "react";

// Components
import ShopCard from "../components/ShopCard";

// MUI
import { TextField, Box, Typography, Grid } from "@mui/material";

const Search = () => {
  const [shopList, setShopList] = useState([]);
  const [filteredShop, setFilteredShop] = useState([]);
  const [query, setQuery] = useState("");

  useEffect(() => {
    let ignore = false;
    // fetch data

    const shops = [
      {
        name: "Choise",
        address: "Legnica, Piastowska 2A/2",
        flavors: ["trusk", "czekol"],
      },
      {
        name: "Lody Naturalne",
        address: "Legnica, Chojnowska 27",
        flavors: ["malin", "cist"],
      },
      {
        name: "Choise",
        address: "Legnica, Piastowska 2A/2",
        flavors: ["trusk", "czekol"],
      },
      {
        name: "Lody Naturalne",
        address: "Legnica, Chojnowska 27",
        flavors: ["malin", "cist"],
      },
      {
        name: "Choise",
        address: "Legnica, Piastowska 2A/2",
        flavors: ["trusk", "czekol"],
      },
      {
        name: "Lody Naturalne",
        address: "Legnica, Chojnowska 27",
        flavors: ["malin", "cist"],
      },
      {
        name: "Choise",
        address: "Legnica, Piastowska 2A/2",
        flavors: ["trusk", "czekol"],
      },
      {
        name: "Lody Naturalne",
        address: "Legnica, Chojnowska 27",
        flavors: ["malin", "cist"],
      },
    ];

    if (!ignore) {
      setShopList(shops);
    }
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
                flavor.toLowerCase().includes(query.toLowerCase())
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
              <ShopCard shop={shop} params={{ showFlavors: true }} />
            </Grid>
          );
        })}
      </Grid>
    </Box>
  );
};

export default Search;
