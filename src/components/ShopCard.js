import {
  Card,
  CardHeader,
  CardContent,
  Typography,
  Link as MuiLink,
  Grid,
  FormGroup,
  Checkbox,
  FormControlLabel,
} from "@mui/material";
import { Link } from "react-router-dom";

const ShopCard = ({ shop, params }) => {
  const { name, address, flavors } = shop;
  const { showFlavors } = params;
  return (
    <Card className="shop-card" elevation={0}>
      <CardHeader title={name} />
      <CardContent color="secondary">
        <Typography type="h5">{address}</Typography>
        <Typography>
          <MuiLink component={Link} color="text.primary" to={"_id"}>
            Pokaż szczegóły
          </MuiLink>
        </Typography>
        {showFlavors && (
          <>
            <Typography>Lista smaków</Typography>
            <Grid container>
              {flavors.map((flavor, i) => (
                <Grid xs={12} key={i} item>
                  <FormGroup>
                    <FormControlLabel
                      disabled
                      control={<Checkbox defaultChecked />}
                      label={flavor}
                    />
                  </FormGroup>
                </Grid>
              ))}
            </Grid>
          </>
        )}
      </CardContent>
    </Card>
  );
};

export default ShopCard;
