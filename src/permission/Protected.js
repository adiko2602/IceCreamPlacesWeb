import { useUser } from "../context/UserContext";
import Lost from "../pages/Lost";

const Protected = ({ children, access, header }) => {
  const userContext = useUser();

  if (access.length === 0) {
    return children;
  }

  if (access.indexOf("notlogin") >= 0 && !userContext.user) {
    return children;
  }

  if (userContext.user) {
    if (access.some((a) => userContext.user.roles.indexOf(a) >= 0)) {
      return children;
    }
  }

  if (header) return null;
  return <Lost />;
};

export default Protected;
