import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import Home from "./pages/Home";
import Register from "./pages/Register";

const App = () => {
  return (
    <BrowserRouter>
      <Header />
      <div style={{ marginTop: "2rem" }}></div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
