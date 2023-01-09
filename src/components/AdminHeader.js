// import DrawerNavbar from "./DrawerNavbar";
import Navbar from "./Navbar";

const links = [
  {
    to: "/profile/view",
    label: "Profil",
  },
  {
    to: "/admin/shops",
    label: "Administrator",
  },
  {
    to: "/logout",
    label: "Wyloguj",
  },
];

const AdminHeader = () => {
  // const isMobile = useTheme();

  // if (!isMobile.getIsMobile()) return <Navbar links={links} />;
  // return <DrawerNavbar links={links} />;
  return <Navbar links={links} />;
};

export default AdminHeader;
