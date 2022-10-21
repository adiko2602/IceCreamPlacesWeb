import { Link } from "react-router-dom";
import {
  Link as MuiLink,
  AppBar,
  Grid,
  Toolbar,
  Typography,
} from "@mui/material";
import { CiIceCream } from "react-icons/ci";

const Navbar = ({ navbarData }) => {
  return (
    <AppBar position="static" elevation={0}>
      <div className="center">
        <Toolbar className="min-width max-width">
          <Grid
            container
            direction="row"
            justifyContent="space-between"
            alignItems="center"
          >
            <Grid item>
              <Typography>
                <MuiLink color="text.secondary" component={Link} to="/">
                  <span className="logo">
                    <CiIceCream />
                  </span>
                </MuiLink>
              </Typography>
            </Grid>
            {navbarData.map((nav, i) => (
              <Grid item key={i}>
                <Typography>
                  <MuiLink color="text.secondary" component={Link} to={nav.to}>
                    {nav.label}
                  </MuiLink>
                </Typography>
              </Grid>
            ))}
          </Grid>
        </Toolbar>
      </div>
    </AppBar>
  );
};

export default Navbar;
