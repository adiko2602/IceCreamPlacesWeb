// Hooks
import { Link, useParams } from "react-router-dom";
import { useEffect, useState } from "react";

// Services
import {
  Grid,
  Typography,
  FormGroup,
  FormControlLabel,
  Checkbox,
  Card,
  CardHeader,
  CardContent,
  Link as MuiLink,
  Button,
} from "@mui/material";

// Icons
import { CiIceCream } from "react-icons/ci";
import { FaHeart } from "react-icons/fa";
import { CiMapPin } from "react-icons/ci";
import { CiTrash } from "react-icons/ci";
import { CiEdit } from "react-icons/ci";
import { GetShopById } from "../services/shop";
import Map from "../components/Map";
import { useUser } from "../context/UserContext";

const Shop = () => {
  const [showMap, setShowMap] = useState(false);
  const [shop, setShop] = useState(null);
  const params = useParams();
  const userContext = useUser();

  useEffect(() => {
    const populateShop = async (id) => {
      setShop(await GetShopById(id));
    };

    populateShop(params.id);
  }, [params.id]);

  if (!shop) return null;
  return (
    <Card className="card">
      <CardHeader
        className="card-header"
        title={
          <div className="flex-space-between flex-row full-width">
            <div>
              <div className="flex-row">
                <Typography variant="h4">
                  <CiIceCream />
                </Typography>
                <Typography variant="h5">{shop.name}</Typography>
              </div>
            </div>
            {userContext.user
              ? userContext.user.shops.map((shop) =>
                  shop.id._id === params.id ? (
                    <div>
                      {" "}
                      <MuiLink
                        style={{ margin: "0 20px" }}
                        color="text.primary"
                        component={Link}
                        to={`/shop/${params.id}/edit`}
                      >
                        <span>
                          <CiEdit />
                        </span>
                      </MuiLink>
                      {shop.jobPosition === "owner" && (
                        <MuiLink
                          color="text.primary"
                          component={Link}
                          to={`/shop/${params.id}/delete`}
                        >
                          <span>
                            <CiTrash />
                          </span>
                        </MuiLink>
                      )}
                    </div>
                  ) : null
                )
              : ""}
          </div>
        }
        subheader={
          <div className="flex-row">
            <Typography variant="h4">
              <CiMapPin />
            </Typography>
            <Typography variant="h6">
              {shop.address.streetName} {shop.address.streetNumber},{" "}
              {shop.address.postCode} {shop.address.city},{" "}
              {shop.address.country}
            </Typography>
          </div>
        }
      />
      <CardContent className="card-content">
        <div className="flex-column">
          {showMap && <Map mapData={shop.address} pinDraggable={false} />}
          <Button
            fullWidth
            variant="contained"
            onClick={(e) => {
              e.preventDefault();
              setShowMap(() => !showMap);
            }}
          >
            {!showMap ? "Pokaż na mapie" : "Zamknij mapę"}
          </Button>
        </div>
      </CardContent>
      <CardContent className="card-content">
        <div className="flex-column">
          <Card className="card">
            <CardHeader className="card-header" title="Smaki do wyboru" />
            <CardContent className="card-content">
              <Grid container>
                {shop.flavors.map((flavor, i) => (
                  <Grid item xs={12} sm={6} md={4}>
                    <FormGroup key={i}>
                      <FormControlLabel
                        disabled
                        control={<Checkbox defaultChecked={flavor.available} />}
                        label={flavor.name}
                      />
                    </FormGroup>
                  </Grid>
                ))}
              </Grid>
            </CardContent>
          </Card>
        </div>
      </CardContent>
    </Card>
  );
};

export default Shop;
