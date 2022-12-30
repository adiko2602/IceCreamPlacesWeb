import { useEffect, useState } from "react";
import ShopCard from "../components/ShopCard";
import { useUser } from "../context/UserContext";
import { Grid } from "@mui/material";
import { GetUser } from "../services/user";
import { ColorRing } from "react-loader-spinner";

const Shops = () => {
  const [loading, setLoading] = useState(true);
  const [shops, setShops] = useState([]);
  const user = useUser();

  useEffect(() => {
    const populateShops = async () => {
      const userData = await GetUser();
      if (!userData.status) {
        return;
      }

      user.setUser(await userData.content);

      setShops(await userData.content.shops);
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
    <div className="flex-column">
      <Grid container>
        {shops.map((shop, i) => (
          <Grid item xs={12} sm={6} md={4} key={i}>
            <ShopCard
              shop={shop.id}
              params={{ showFlavors: false, query: "" }}
            />
          </Grid>
        ))}
      </Grid>
    </div>
  );
};

export default Shops;
