import { useEffect, useState } from "react";
import ShopCard from "../components/ShopCard";
import { useUser } from "../context/UserContext";
import { Grid } from "@mui/material";
import { GetUser } from "../services/user";

const Shops = () => {
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

    populateShops();
  }, []);

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
