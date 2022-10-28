// Hooks
import { useUserContext } from "../hooks/useUserContext";

// Services
import { login } from "../services/authService";

const Login = () => {
  const { user, dispatch } = useUserContext();

  return (
    <div>
      <button
        onClick={(e) => {
          e.preventDefault();
          dispatch({ type: "SET_USER_TYPE", payload: "user" });
        }}
      >
        Login user
      </button>
      <button
        onClick={(e) => {
          e.preventDefault();
          login("seweryn1@gmail.com", "seweryn1");
        }}
      >
        Login test
      </button>
    </div>
  );
};

export default Login;
