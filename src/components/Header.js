import { useEffect, useState } from "react";
import Navbar from "./Navbar";
import DrawerNavbar from "./DrawerNavbar";
import { useMediaQuery, useTheme } from "@mui/material";

const Header = () => {
  const [userType, setUserType] = useState("default");
  const [navbarData, setNavbarData] = useState([]);

  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  useEffect(() => {
    switch (userType) {
      case "user":
        setNavbarData([
          {
            to: "/search",
            label: "Szukaj",
          },
          {
            to: "/profile",
            label: "Profil",
          },
          {
            to: "/logout",
            label: "Wyloguj",
          },
        ]);
        break;

      case "owner":
        setNavbarData([
          {
            to: "/search",
            label: "Szukaj",
          },
          {
            to: "/profile",
            label: "Profil",
          },
          {
            to: "/shop",
            label: "Lodziarnia",
          },
          {
            to: "/logout",
            label: "Wyloguj",
          },
        ]);
        break;

      case "admin":
        setNavbarData([
          {
            to: "/search",
            label: "Szukaj",
          },
          {
            to: "/profile",
            label: "Profil",
          },
          {
            to: "/admin",
            label: "Admin panel",
          },
          {
            to: "/logout",
            label: "Wyloguj",
          },
        ]);
        break;

      default:
        setNavbarData([
          {
            to: "/search",
            label: "Szukaj",
          },
          {
            to: "/login",
            label: "Zaloguj",
          },
          {
            to: "/register",
            label: "Zarejestruj",
          },
        ]);
        break;
    }
  }, [userType]);

  if (isMobile) return <DrawerNavbar navbarData={navbarData} />;
  return <Navbar navbarData={navbarData} />;
};

export default Header;
