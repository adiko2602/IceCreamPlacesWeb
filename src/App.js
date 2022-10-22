import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import Home from "./pages/Home";
import Profile from "./pages/Profile";
import Lost from "./pages/Lost";
import { useMediaQuery, useTheme } from "@mui/material";
import Register from "./pages/Register";
import Search from "./pages/Search";
import Login from "./pages/Login";
import { useGlobalContext } from "./hooks/useGlobalContext";
import { useUserContext } from "./hooks/useUserContext";
import { useEffect } from "react";

const App = () => {
  const { dispatch } = useGlobalContext();
  const { user } = useUserContext();
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  useEffect(() => {
    dispatch({ type: "SET_IS_MOBILE", payload: isMobile });
  }, [isMobile, dispatch]);

  return (
    <BrowserRouter>
      <Header />
      <div className="container">
        <div className="max-width flex-col">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/register" element={<Register />} />
            <Route path="/search" element={<Search />} />
            <Route
              path="/profile"
              element={user.type === "default" ? <Lost /> : <Profile />}
            />
            <Route path="/login" element={<Login />} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
};

export default App;
