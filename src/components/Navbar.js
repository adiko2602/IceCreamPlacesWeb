import { useState } from "react";
import { Link } from "react-router-dom";
import { AppBar, Grid, Toolbar } from "@mui/material";
import { IoMdIceCream } from "react-icons/io";

const Navbar = () => {
  const [loginIn, setLoginIn] = useState(false);
  const [userType, setUserType] = useState("");

  return (
    <AppBar position="static">
      <Toolbar className="navbar-container">
        <Link to="/">
          <div className="logo">
            <IoMdIceCream />
            <span>IceCreamPlaces</span>
          </div>
        </Link>
        <Grid
          container
          direction="row"
          justifyContent="flex-end"
          alignItems="center"
          spacing={2}
        >
          <Grid item>
            <Link to="/search">Szukaj</Link>
          </Grid>
          {!loginIn && (
            <>
              <Grid item>
                <Link to="/login">Zaloguj</Link>
              </Grid>
              <Grid item>
                <Link to="/register">Zarejestruj</Link>
              </Grid>
            </>
          )}
          {loginIn && (
            <>
              <Grid item>
                <Link to="/profile">Profil</Link>
              </Grid>
              {userType === "owner" && (
                <Grid item>
                  <Link to="/shop">Sklep</Link>
                </Grid>
              )}
              {userType === "admin" && (
                <Grid item>
                  <Link to="/admin">Admin panel</Link>
                </Grid>
              )}
              <Grid item>
                <Link to="/logout">Wyloguj</Link>
              </Grid>
            </>
          )}
        </Grid>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
