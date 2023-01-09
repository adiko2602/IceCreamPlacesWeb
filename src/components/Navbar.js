import { Link } from "react-router-dom";

// MUI
import {
  Link as MuiLink,
  AppBar,
  Toolbar,
  Typography,
  Avatar,
  // Badge,
  Menu,
  MenuItem,
  Button,
} from "@mui/material";

// Icons
import { CiIceCream, CiSearch } from "react-icons/ci";
import { useUser } from "../context/UserContext";
import { useState } from "react";

const Navbar = ({ links }) => {
  const userContext = useUser();
  const [anchorEl, setAnchorEl] = useState();

  const open = Boolean(anchorEl);

  const handleClose = () => {
    setAnchorEl(null);
  };

  if (!userContext.user) return;
  return (
    <AppBar position="static">
      <Toolbar>
        <div className="flex-row flex-center flex-space-between full-width">
          <div className="flex-row flex-center">
            <MuiLink color="text.secondary" component={Link} to="/">
              <Typography variant="h4" style={{ margin: "0.4rem" }}>
                <CiIceCream />
              </Typography>
            </MuiLink>
            <MuiLink color="text.secondary" component={Link} to="/search">
              <Typography variant="h5" style={{ margin: "0.4rem" }}>
                <CiSearch />
              </Typography>
            </MuiLink>
          </div>
          <div>
            <Button
              onClick={(e) => {
                setAnchorEl(e.currentTarget);
              }}
            >
              {/* <Badge badgeContent={4} color="secondary"> */}
              <Avatar style={{ backgroundColor: "#6b6b6b" }}>
                {userContext.user && userContext.user.email[0].toUpperCase()}
              </Avatar>
              {/* </Badge> */}
            </Button>
            <Menu
              id="basic-menu"
              anchorEl={anchorEl}
              open={open}
              onClose={handleClose}
              MenuListProps={{
                "aria-labelledby": "basic-button",
              }}
            >
              {links.map((link, i) => (
                <MenuItem
                  key={i}
                  component={Link}
                  onClick={handleClose}
                  to={link.to}
                >
                  {link.label}
                </MenuItem>
              ))}
            </Menu>
          </div>
        </div>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
