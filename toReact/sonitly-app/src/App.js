import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import { useContext, useEffect } from "react";
import { CurrentUserContext } from "./components/CurrentUserContext";

import Home from "./pages/Home";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import About from "./pages/About";
import Shop from "./pages/Shop";
import ProductDetails from "./pages/ProductDetails";
import UserDetails from "./pages/UserDetails";
import UserSettings from "./pages/UserSettings";
import UserCart from "./pages/UserCart";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";

const App = () => {
  const { currentUser } = useContext(CurrentUserContext);

  useEffect(() => {
    const storedUser = localStorage.getItem("loggedInUser");
    if (storedUser && !currentUser) {
      // Optionally set currentUser here if it wasn't set via context before
    }
  }, [currentUser]);

  return (
    <Router>
      <div id="wrapper">
        {currentUser && <NavBar currentUser={currentUser} />}

        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/sign-up" element={<Signup />} />

          {currentUser ? (
            <>
              <Route path="/" element={<Home />} />
              <Route path="/home" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/shop" element={<Shop />} />
              <Route path="/profile/:username" element={<UserDetails />} />
              <Route path="/settings" element={<UserSettings />} />
              <Route path="/cart" element={<UserCart />} />
            </>
          ) : (
            <Route path="/" element={<Navigate to="/login" />} />
          )}

          <Route path="*" element={<Navigate to="/" />} />
        </Routes>

        {currentUser && <Footer />}
      </div>
    </Router>
  );
};

export default App;
