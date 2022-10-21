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

const Navbar = ({ navbarData }) => {
  const [openDrawer, setOpenDrawer] = useState(false);

  return (
    <AppBar position="static" elevation={0}>
      <Toolbar>
        <Drawer
          open={openDrawer}
          onClose={() =>
            setOpenDrawer(() => {
              return false;
            })
          }
          anchor="right"
        >
          <List className="half-width">
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
            {navbarData.map((nav, i) => (
              <ListItem key={i}>
                <Typography>
                  <MuiLink
                    color="text.secondary"
                    component={Link}
                    to={nav.to}
                    onClick={() =>
                      setOpenDrawer(() => {
                        return !openDrawer;
                      })
                    }
                  >
                    {nav.label}
                  </MuiLink>
                </Typography>
              </ListItem>
            ))}
          </List>
        </Drawer>
        <Typography>
          <MuiLink color="text.secondary" component={Link} to="/">
            <span className="logo">
              <CiIceCream />
            </span>
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
