import { Grid, Typography } from "@mui/material";
import { Box } from "@mui/system";
import ShopCard from "../components/ShopCard";

const Home = () => {
  // fetch data
  const shops = [
    {
      name: "Choise",
      address: "Legnica, Piastowska 2A/2",
      iceCreams: ["trusk", "czekol"],
    },
    {
      name: "Lody Naturalne",
      address: "Legnica, Chojnowska 27",
      iceCreams: ["malin", "cist"],
    },
    {
      name: "Choise",
      address: "Legnica, Piastowska 2A/2",
      iceCreams: ["trusk", "czekol"],
    },
    {
      name: "Lody Naturalne",
      address: "Legnica, Chojnowska 27",
      iceCreams: ["malin", "cist"],
    },
    {
      name: "Choise",
      address: "Legnica, Piastowska 2A/2",
      iceCreams: ["trusk", "czekol"],
    },
    {
      name: "Lody Naturalne",
      address: "Legnica, Chojnowska 27",
      iceCreams: ["malin", "cist"],
    },
    {
      name: "Choise",
      address: "Legnica, Piastowska 2A/2",
      iceCreams: ["trusk", "czekol"],
    },
    {
      name: "Lody Naturalne",
      address: "Legnica, Chojnowska 27",
      iceCreams: ["malin", "cist"],
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
              <ShopCard shop={shop} />
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
