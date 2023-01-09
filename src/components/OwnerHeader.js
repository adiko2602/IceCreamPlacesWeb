// import DrawerNavbar from "./DrawerNavbar";
import Navbar from "./Navbar";

const links = [
  {
    to: "/shop",
    label: "Moje lodziarnie",
  },
  {
    to: "/profile/view",
    label: "Profil",
  },
  {
    to: "/logout",
    label: "Wyloguj",
  },
];

const OwnerHeader = () => {
  // const isMobile = useTheme();

  // if (!isMobile.getIsMobile()) return <Navbar links={links} />;
  // return <DrawerNavbar links={links} />;
  return <Navbar links={links} />;
};

export default OwnerHeader;
