// import DrawerNavbar from "./DrawerNavbar";
import Navbar from "./Navbar";

const links = [
  {
    to: "/login",
    label: "Zaloguj",
  },
  {
    to: "/register",
    label: "Zarejestruj",
  },
];

const Header = () => {
  // const isMobile = useTheme();

  // if (!isMobile.getIsMobile()) return <Navbar links={links} />;
  // return <DrawerNavbar links={links} />;
  return <Navbar links={links} />;
};

export default Header;
