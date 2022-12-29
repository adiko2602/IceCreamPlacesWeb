import { Logout } from "../services/auth";
import { useNavigate } from "react-router-dom";
import { useUser } from "../context/UserContext";
import { useEffect } from "react";

const Logouts = () => {
  const user = useUser();
  const navigate = useNavigate();

  useEffect(() => {
    user.deleteUser();
    Logout();
    navigate("/");
  });
  return <div>Wylogowany</div>;
};

export default Logouts;
