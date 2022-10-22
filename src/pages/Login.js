import { useUserContext } from "../hooks/useUserContext";

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
    </div>
  );
};

export default Login;
