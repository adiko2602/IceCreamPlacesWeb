import { useUser } from "../context/UserContext";

const NotLoginPermission = ({ children }) => {
  const user = useUser();

  if (!user.user) {
    return children;
  }
  return null;
};

export default NotLoginPermission;
