import {
  Card,
  CardContent,
  Link as MuiLink,
  Grid,
  List,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import { Link, useLocation } from "react-router-dom";
import { useState } from "react";
import { Stack } from "@mui/system";
import { useTheme } from "../context/ThemeContext";

const ProfileNavigation = () => {
  const { pathname } = useLocation();
  const isMobile = useTheme();
  const [selectedIndex, setSelectedIndex] = useState(0);

  const handleListItemClick = (index) => {
    setSelectedIndex(index);
  };

  return (
    <List
      component={Stack}
      direction={isMobile.getIsMobile() ? "column" : "row"}
      style={{ paddingBottom: 0 }}
    >
      <ListItemButton
        selected={selectedIndex === 0}
        onClick={(event) => handleListItemClick(0)}
        component={Link}
        to="view"
      >
        <ListItemText primary="Przeglądaj" />
      </ListItemButton>
      <ListItemButton
        selected={selectedIndex === 1}
        onClick={(event) => handleListItemClick(1)}
        component={Link}
        to="edit"
      >
        <ListItemText primary="Edytuj" />
      </ListItemButton>
      <ListItemButton
        selected={selectedIndex === 2}
        onClick={(event) => handleListItemClick(2)}
        component={Link}
        to="favorite"
      >
        <ListItemText primary="Ulubione" />
      </ListItemButton>
      <ListItemButton
        selected={selectedIndex === 3}
        onClick={(event) => handleListItemClick(3)}
        component={Link}
        to="/shop"
      >
        <ListItemText primary="Lodziarnie" />
      </ListItemButton>
    </List>
  );
};

export default ProfileNavigation;
