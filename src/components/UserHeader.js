// import DrawerNavbar from "./DrawerNavbar";
import Navbar from "./Navbar";

const links = [
  {
    to: "/profile/view",
    label: "Profil",
  },
  {
    to: "/logout",
    label: "Wyloguj",
  },
];

const UserHeader = () => {
  // const isMobile = useTheme();

  // if (!isMobile.getIsMobile()) return <Navbar links={links} />;
  // return <DrawerNavbar links={links} />;
  return <Navbar links={links} />;
};

export default UserHeader;
