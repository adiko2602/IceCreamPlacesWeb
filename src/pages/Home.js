// Components
import ShopCard from "../components/ShopCard";

// MUI
import { Grid, Typography } from "@mui/material";
import { Box } from "@mui/system";

const Home = () => {
  // fetch data
  const shops = [
    {
      _id: "123",
      name: "Choise",
      address: "Legnica, Piastowska 2A/2",
      flavors: ["trusk", "czekol"],
    },
    {
      _id: "123",
      name: "Lody Naturalne",
      address: "Legnica, Chojnowska 27",
      flavors: ["malin", "cist"],
    },
    {
      _id: "123",
      name: "Choise",
      address: "Legnica, Piastowska 2A/2",
      flavors: ["trusk", "czekol"],
    },
    {
      _id: "123",
      name: "Lody Naturalne",
      address: "Legnica, Chojnowska 27",
      flavors: ["malin", "cist"],
    },
    {
      _id: "123",
      name: "Choise",
      address: "Legnica, Piastowska 2A/2",
      flavors: ["trusk", "czekol"],
    },
    {
      _id: "123",
      name: "Lody Naturalne",
      address: "Legnica, Chojnowska 27",
      flavors: ["malin", "cist"],
    },
    {
      _id: "123",
      name: "Choise",
      address: "Legnica, Piastowska 2A/2",
      flavors: ["trusk", "czekol"],
    },
    {
      _id: "123",
      name: "Lody Naturalne",
      address: "Legnica, Chojnowska 27",
      flavors: ["malin", "cist"],
    },
  ];

  return (
    <Box>
      <Typography variant="h5" gutterBottom>
        Witaj na stronie poświęconej lodziarniom. Tutaj znajdziesz każdą
        lodziarnię w Twojej okolicy.
      </Typography>
      <Grid
        container
        gap={3}
        direction="row"
        justifyContent="center"
        alignItems="flex-start"
      >
        {shops.map((shop, i) =>
          i < 6 ? (
            <Grid key={i} item xs={12} sm={6} md={4} lg={3}>
              <ShopCard shop={shop} params={{ showFlavors: false }} />
            </Grid>
          ) : (
            ""
          )
        )}
      </Grid>
    </Box>
  );
};

export default Home;
