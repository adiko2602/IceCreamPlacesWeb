import { useState } from "react";
import { Link } from "react-router-dom";
import {
  AppBar,
  Toolbar,
  Drawer,
  List,
  ListItem,
  Grid,
  Typography,
  Link as MuiLink,
} from "@mui/material";
import { CiIceCream } from "react-icons/ci";
import { FiMenu } from "react-icons/fi";
import { RiCloseFill } from "react-icons/ri";

const Navbar = () => {
  const [loginIn, setLoginIn] = useState(false);
  const [userType, setUserType] = useState("");
  const [openDrawer, setOpenDrawer] = useState(false);

  return (
    <AppBar position="static">
      <Toolbar className="max-width">
        <Drawer
          open={openDrawer}
          onClose={() =>
            setOpenDrawer(() => {
              return false;
            })
          }
          anchor="right"
        >
          <List className="min-width">
            <ListItem>
              <Typography>
                <MuiLink
                  color="text.secondary"
                  component={Link}
                  onClick={() =>
                    setOpenDrawer(() => {
                      return false;
                    })
                  }
                >
                  <RiCloseFill />
                </MuiLink>
              </Typography>
            </ListItem>
            <ListItem>
              <Typography>
                <MuiLink
                  color="text.secondary"
                  component={Link}
                  to="/search"
                  onClick={() =>
                    setOpenDrawer(() => {
                      return !openDrawer;
                    })
                  }
                >
                  Szukaj
                </MuiLink>
              </Typography>
            </ListItem>
            {!loginIn && (
              <>
                <ListItem>
                  <Typography>
                    <MuiLink
                      color="text.secondary"
                      component={Link}
                      to="/login"
                      onClick={() =>
                        setOpenDrawer(() => {
                          return !openDrawer;
                        })
                      }
                    >
                      Zaloguj
                    </MuiLink>
                  </Typography>
                </ListItem>
                <ListItem>
                  <Typography>
                    <MuiLink
                      color="text.secondary"
                      component={Link}
                      to="/register"
                      onClick={() =>
                        setOpenDrawer(() => {
                          return !openDrawer;
                        })
                      }
                    >
                      Zarejestruj
                    </MuiLink>
                  </Typography>
                </ListItem>
              </>
            )}
            {loginIn && (
              <>
                <ListItem>
                  <Typography>
                    <MuiLink
                      color="text.secondary"
                      component={Link}
                      to="/profile"
                      onClick={() =>
                        setOpenDrawer(() => {
                          return !openDrawer;
                        })
                      }
                    >
                      Profil
                    </MuiLink>
                  </Typography>
                </ListItem>
                {userType === "owner" && (
                  <ListItem>
                    <Typography>
                      <MuiLink
                        color="text.secondary"
                        component={Link}
                        to="/shop"
                        onClick={() =>
                          setOpenDrawer(() => {
                            return !openDrawer;
                          })
                        }
                      >
                        Sklep
                      </MuiLink>
                    </Typography>
                  </ListItem>
                )}
                {userType === "admin" && (
                  <ListItem>
                    <Typography>
                      <MuiLink
                        color="text.secondary"
                        component={Link}
                        to="/admin"
                        onClick={() =>
                          setOpenDrawer(() => {
                            return !openDrawer;
                          })
                        }
                      >
                        Admin panel
                      </MuiLink>
                    </Typography>
                  </ListItem>
                )}
                <ListItem>
                  <Link to="/logout">Wyloguj</Link>
                </ListItem>
              </>
            )}
          </List>
        </Drawer>
        <Typography>
          <MuiLink color="text.secondary" component={Link} to="/">
            <div className="logo">
              <CiIceCream />
            </div>
          </MuiLink>
        </Typography>
        <Grid
          container
          direction="row"
          justifyContent="flex-end"
          alignItems="center"
          spacing={2}
        >
          <Grid item>
            <MuiLink
              color="text.secondary"
              component={Link}
              onClick={() =>
                setOpenDrawer(() => {
                  return !openDrawer;
                })
              }
            >
              <FiMenu />
            </MuiLink>
          </Grid>
        </Grid>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
