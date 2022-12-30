// Hooks
import { useState, useEffect } from "react";

// Components
import ShopCard from "../components/ShopCard";

// MUI
import { Grid, Typography } from "@mui/material";
import { GetShops } from "../services/shop";
import { ColorRing } from "react-loader-spinner";

// Services

const Home = () => {
  const [shops, setShops] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const populateShops = async () => {
      const getRandomInt = (max) => {
        const rand = Math.floor(Math.random() * max);
        return rand;
      };

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
