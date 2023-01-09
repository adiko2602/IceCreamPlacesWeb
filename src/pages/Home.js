// Hooks
import { useState, useEffect } from "react";

// Components
import ShopCard from "../components/ShopCard";

// MUI
import { Button, Grid, Typography } from "@mui/material";
import { GetShops } from "../services/shop";
import Loading from "../components/Loading";
import { GetUser } from "../services/user";
import { useUser } from "../context/UserContext";
import { CheckIfLogin } from "../services/auth";

// Services

const Home = () => {
  const user = useUser();

  const [shops, setShops] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [showMore, setShowMore] = useState(false);

  const compare = (a, b) => {
    if (a.rating < b.rating) {
      return 1;
    }
    if (a.rating > b.rating) {
      return -1;
    }
    return 0;
  };

  useEffect(() => {
    const populateUser = async () => {
      if (await CheckIfLogin()) {
        const userData = await GetUser();
        if (!userData.status) return;
        user.setUser(await userData.content);
      }
    };

    populateUser();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    setError("");
    const populateShops = async () => {
      const getShopsData = await GetShops();

      if (!getShopsData.status) {
        setError(getShopsData.message);
        setLoading(false);
        return;
      }

      const arr = getShopsData.content;
      if (arr) {
        await arr.sort(compare);
      }

      setShops(arr);
      setLoading(false);
    };

    setLoading(true);
    populateShops();
  }, []);

  if (loading) return <Loading />;
  if (shops <= 0 || !shops)
    return (
      <>
        <Typography variant="h5" gutterBottom>
          Witaj na stronie poświęconej lodziarniom. Tutaj znajdziesz każdą
          lodziarnię w Twojej okolicy.
        </Typography>
        <Typography variant="body1">
          Niestety w naszej bazie są pustki... Możesz założyć konto i dodać
          swoją lodziarnię :D
        </Typography>
      </>
    );

  return (
    <div className="flex-column">
      <Typography variant="h5" gutterBottom>
        Witaj na stronie poświęconej lodziarniom. Tutaj znajdziesz każdą
        lodziarnię w Twojej okolicy.
      </Typography>
      {error && <div className="error">{error}</div>}
      <Grid container>
        {!showMore &&
          shops.map((shop, i) =>
            i < 6 ? (
              <Grid key={i} item xs={12} sm={6} md={4}>
                <ShopCard shop={shop} params={{ showFlavors: false }} />
              </Grid>
            ) : (
              ""
            )
          )}
        {showMore &&
          shops.map((shop, i) => (
            <Grid key={i} item xs={12} sm={6} md={4}>
              <ShopCard shop={shop} params={{ showFlavors: false }} />
            </Grid>
          ))}
      </Grid>

      {shops.length > 6 && (
        <Button
          fullWidth
          variant="contained"
          onClick={(e) => {
            e.preventDefault();
            setShowMore(() => !showMore);
          }}
        >
          {!showMore && "Pokaż więcej"}
          {showMore && "Pokaż mniej"}
        </Button>
      )}
    </div>
  );
};

export default Home;
