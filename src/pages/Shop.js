// Hooks
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";

// Services
import { getShop } from "../services/shopService";
import {
  Container,
  Grid,
  Typography,
  FormGroup,
  FormControlLabel,
  Checkbox,
} from "@mui/material";

const Shop = () => {
  const [shop, setShop] = useState();
  const [shopDataHelperText, setShopDataHelperText] = useState("");

  const params = useParams();

  useEffect(() => {
    getShop(params.id)
      .then((response) => {
        setShop(response.data.content);
        console.log(response.data.content);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [params.id]);

  return (
    <>
      {/* <div>{JSON.stringify(shop)}</div> */}
      {shop && (
        <Container className="max-width">
          <Grid container direction="row" justifyContent="center">
            <Grid item xs={6}>
              <Typography>Lodziarnia</Typography>
            </Grid>
            <Grid item xs={6}>
              <Typography>{shop.name}</Typography>
            </Grid>
            <Grid item xs={6}>
              <Typography>Adres</Typography>
            </Grid>
            <Grid item xs={6}>
              <Typography>
                {shop.address.streetName} {shop.address.streetNumber}
                {", "}
                {shop.address.postCode} {shop.address.city}{" "}
                {shop.address.country}
              </Typography>
            </Grid>
            {shop.flavors.map((flavor, i) => (
              <Grid item key={i} xs={12}>
                <FormGroup>
                  <FormControlLabel
                    disabled
                    control={<Checkbox defaultChecked={flavor.available} />}
                    label={flavor.name}
                  />
                </FormGroup>
              </Grid>
            ))}
          </Grid>
        </Container>
      )}
    </>
  );
};

export default Shop;
