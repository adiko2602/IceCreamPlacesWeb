// Hooks
import { useState, useEffect } from "react";

// Components
import ShopCard from "../components/ShopCard";

// MUI
import { Grid, Typography } from "@mui/material";
import { GetShops } from "../services/shop";

// Services

const Home = () => {
  const [shops, setShops] = useState([]);

  useEffect(() => {
    const getRandomInt = (max) => {
      const rand = Math.floor(Math.random() * max);
      return rand;
    };

    const populateShops = async () => {
      const arr = await GetShops();
      if (arr.length <= 6) {
        setShops(arr);
        return;
      }
      const repNum = arr.length;
      for (let i = 6; i < repNum; i++) {
        arr.splice(getRandomInt(arr.length - 1), 1);
      }
      setShops(arr);
    };

    populateShops();
  }, []);

  return (
    <div className="flex-column">
      <Typography variant="h5" gutterBottom>
        Witaj na stronie poświęconej lodziarniom. Tutaj znajdziesz każdą
        lodziarnię w Twojej okolicy.
      </Typography>
      <Grid container>
        {shops.map((shop, i) =>
          i < 6 ? (
            <Grid item xs={12} sm={6} md={4} key={i}>
              <ShopCard shop={shop} params={{ showFlavors: false }} />
            </Grid>
          ) : (
            ""
          )
        )}
      </Grid>
    </div>
  );
};

export default Home;
