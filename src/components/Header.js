import { useState } from "react";
import Navbar from "./Navbar";
import DrawerNavbar from "./DrawerNavbar";

const Header = () => {
  const [isMobile, setIsMobile] = useState(false);

  if (isMobile) return <DrawerNavbar />;
  return <Navbar />;
};

export default Header;
