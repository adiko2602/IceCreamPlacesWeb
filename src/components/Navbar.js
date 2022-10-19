import { useState } from "react";
import { Link } from "react-router-dom";
import {
  Link as MuiLink,
  AppBar,
  Grid,
  Toolbar,
  Typography,
} from "@mui/material";
import { CiIceCream } from "react-icons/ci";

const Navbar = () => {
  const [loginIn, setLoginIn] = useState(false);
  const [userType, setUserType] = useState("");

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
                  <div className="logo">
                    <CiIceCream />
                  </div>
                </MuiLink>
              </Typography>
            </Grid>
            <Grid item>
              <Typography>
                <MuiLink color="text.secondary" component={Link} to="/search">
                  Szukaj
                </MuiLink>
              </Typography>
            </Grid>
            {!loginIn && (
              <>
                <Grid item>
                  <Typography>
                    <MuiLink
                      color="text.secondary"
                      component={Link}
                      to="/login"
                    >
                      Zaloguj
                    </MuiLink>
                  </Typography>
                </Grid>
                <Grid item>
                  <Typography>
                    <MuiLink
                      color="text.secondary"
                      component={Link}
                      to="/register"
                    >
                      Zarejestruj
                    </MuiLink>
                  </Typography>
                </Grid>
              </>
            )}
            {loginIn && (
              <>
                <Grid item>
                  <Typography>
                    <MuiLink
                      color="text.secondary"
                      component={Link}
                      to="/profile"
                    >
                      Profil
                    </MuiLink>
                  </Typography>
                </Grid>
                {userType === "owner" && (
                  <Grid item>
                    <Typography>
                      <MuiLink
                        color="text.secondary"
                        component={Link}
                        to="/shop"
                      >
                        Sklep
                      </MuiLink>
                    </Typography>
                  </Grid>
                )}
                {userType === "admin" && (
                  <Grid item>
                    <Typography>
                      <MuiLink
                        color="text.secondary"
                        component={Link}
                        to="/admin"
                      >
                        Admin panel
                      </MuiLink>
                    </Typography>
                  </Grid>
                )}
                <Grid item>
                  <Typography>
                    <MuiLink
                      color="text.secondary"
                      component={Link}
                      to="/logout"
                    >
                      Wyloguj
                    </MuiLink>
                  </Typography>
                </Grid>
              </>
            )}
          </Grid>
        </Toolbar>
      </div>
    </AppBar>
  );
};

export default Navbar;
