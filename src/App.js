import { BrowserRouter, Route, Routes } from "react-router-dom";

// Hooks
import { useMediaQuery, useTheme } from "@mui/material";
import { useGlobalContext } from "./hooks/useGlobalContext";
import { useUserContext } from "./hooks/useUserContext";
import { useEffect } from "react";

// Components
import Header from "./components/Header";

// Pages
import Register from "./pages/Register";
import Search from "./pages/Search";
import Login from "./pages/Login";
import Shop from "./pages/Shop";
import ShopAdd from "./pages/ShopAdd";
import Test from "./pages/Test";
import Home from "./pages/Home";
import Profile from "./pages/Profile";
import Lost from "./pages/Lost";

const App = () => {
  const { dispatch, global } = useGlobalContext();
  const { user } = useUserContext();
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  useEffect(() => {
    dispatch({ type: "SET_IS_MOBILE", payload: isMobile });
  }, [isMobile, dispatch]);

  return (
    <BrowserRouter>
      <Header />
      <div className="relative">
        {/* {global.isLoading && <Loading />} */}
        <div className="container">
          <div className="max-width flex-col">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/register" element={<Register />} />
              <Route path="/search" element={<Search />} />
              <Route path="/shop/:id" element={<Shop />} />
              <Route exact path="/shop/add" element={<ShopAdd />} />
              <Route
                path="/profile"
                element={user.type === "default" ? <Lost /> : <Profile />}
              />
              <Route path="/login" element={<Login />} />
              <Route path="/test" element={<Test />} />
            </Routes>
          </div>
        </div>
      </div>
    </BrowserRouter>
  );
};

export default App;
