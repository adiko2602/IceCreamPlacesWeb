import DrawerNavbar from "./DrawerNavbar";
import Navbar from "./Navbar";

// Context
import { useTheme } from "../context/ThemeContext";

const links = [
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
];

const AdminHeader = () => {
  const isMobile = useTheme();

  if (!isMobile.getIsMobile()) return <Navbar links={links} />;
  return <DrawerNavbar links={links} />;
};

export default AdminHeader;
