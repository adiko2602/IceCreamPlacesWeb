import { Logout } from "../services/auth";
import { useNavigate } from "react-router-dom";
import { useUser } from "../context/UserContext";
import { useEffect, useState } from "react";
import { ColorRing } from "react-loader-spinner";

const Logouts = () => {
  const [loading, setLoading] = useState(true);
  const user = useUser();
  const navigate = useNavigate();

  useEffect(() => {
    setLoading(true);
    user.deleteUser();
    Logout();
    navigate("/");
  });

  if (loading)
    return (
      <div className="flex-row full-width flex-center">
        <ColorRing
          visible={true}
          height="80"
          width="80"
          ariaLabel="blocks-loading"
          wrapperStyle={{}}
          wrapperClass="blocks-wrapper"
          colors={["#e15b64", "#f47e60", "#f8b26a", "#abbd81", "#849b87"]}
        />
      </div>
    );
  return <div>Wylogowany</div>;
};

export default Logouts;
