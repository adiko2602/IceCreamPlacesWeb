import { useState } from "react";
import { Link } from "react-router-dom";
import { AppBar, Toolbar, Drawer, List, ListItem, Grid } from "@mui/material";
import { IoMdIceCream } from "react-icons/io";
import { FiMenu } from "react-icons/fi";
import { RiCloseFill } from "react-icons/ri";

const Navbar = () => {
  const [loginIn, setLoginIn] = useState(false);
  const [userType, setUserType] = useState("");
  const [openDrawer, setOpenDrawer] = useState(false);

  return (
    <AppBar position="static">
      <Toolbar className="navbar-container">
        <Drawer
          open={openDrawer}
          onClose={() =>
            setOpenDrawer(() => {
              return false;
            })
          }
          anchor="right"
          PaperProps={{
            sx: {
              backgroundColor: "#F6F6F6",
            },
          }}
        >
          <List>
            <ListItem style={{ display: "flex", justifyContent: "flex-end" }}>
              <Link
                onClick={() =>
                  setOpenDrawer(() => {
                    return false;
                  })
                }
              >
                <RiCloseFill />
              </Link>
            </ListItem>
            <ListItem>
              <Link to="/search">Szukaj</Link>
            </ListItem>
            {!loginIn && (
              <>
                <ListItem>
                  <Link to="/login">Zaloguj</Link>
                </ListItem>
                <ListItem>
                  <Link to="/register">Zarejestruj</Link>
                </ListItem>
              </>
            )}
            {loginIn && (
              <>
                <ListItem>
                  <Link to="/profile">Profil</Link>
                </ListItem>
                {userType === "owner" && (
                  <ListItem>
                    <Link to="/shop">Sklep</Link>
                  </ListItem>
                )}
                {userType === "admin" && (
                  <ListItem>
                    <Link to="/admin">Admin panel</Link>
                  </ListItem>
                )}
                <ListItem>
                  <Link to="/logout">Wyloguj</Link>
                </ListItem>
              </>
            )}
          </List>
        </Drawer>
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
            <Link
              onClick={() =>
                setOpenDrawer(() => {
                  return !openDrawer;
                })
              }
            >
              <FiMenu />
            </Link>
          </Grid>
        </Grid>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
