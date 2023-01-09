import { List, ListItemButton, ListItemText, Stack } from "@mui/material";
import { useState } from "react";
import { Link } from "react-router-dom";
import { useTheme } from "../context/ThemeContext";

const AdminNavigation = () => {
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
        to="shops"
      >
        <ListItemText primary="Lodziarnie" />
      </ListItemButton>
      <ListItemButton
        selected={selectedIndex === 1}
        onClick={(event) => handleListItemClick(1)}
        component={Link}
        to="users"
      >
        <ListItemText primary="Użytkownicy" />
      </ListItemButton>
    </List>

    // return (
    //   <Card className="card">
    //     <CardContent className="card-content">
    //       <Grid container>
    //         <Grid item xs={12} sm={3}>
    //           <MuiLink
    //             to="shops"
    //             component={Link}
    //             className={pathname.includes("shops") ? "active-link" : ""}
    //           >
    //             Lodziarnie
    //           </MuiLink>
    //         </Grid>
    //         <Grid item xs={12} sm={3}>
    //           <MuiLink
    //             to="users"
    //             component={Link}
    //             className={pathname.includes("users") ? "active-link" : ""}
    //           >
    //             Użytkownicy
    //           </MuiLink>
    //         </Grid>
    //       </Grid>
    //     </CardContent>
    //   </Card>
  );
};

export default AdminNavigation;
