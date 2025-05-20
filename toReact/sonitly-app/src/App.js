import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import { useContext, useEffect, useState } from "react";
import { CurrentUserContext } from "./components/CurrentUserContext";

import Home from "./pages/Home";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import About from "./pages/About";
import Shop from "./pages/Shop";
import ShopBooks from "./pages/ShopBooks";
import Explore from "./pages/Explore";
import ProductDetails from "./pages/ProductDetails";
import UserDetails from "./pages/UserDetails";
import UserSettings from "./pages/UserSettings";
import UserCart from "./pages/UserCart";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";

const App = () => {
  const { currentUser, setCurrentUser } = useContext(CurrentUserContext);
  const [loading, setLoading] = useState(true); // Loading state for user authentication

  useEffect(() => {
    const storedUser = localStorage.getItem("loggedInUser");
    if (storedUser && !currentUser) {
      // Set the currentUser from localStorage if it's not already set
      setCurrentUser(JSON.parse(storedUser));
    }
    // Once the user state is set, stop loading
    setLoading(false);
  }, [currentUser, setCurrentUser]);

  if (loading) {
    // Show a loading screen while checking user authentication
    return <div>Loading...</div>;
  }

  return (
    <Router>
      <div id="wrapper">
        {currentUser && <NavBar />}

        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/sign-up" element={<Signup />} />

          {currentUser ? (
            <>
              <Route path="/" element={<Home />} />
              <Route path="/home" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/shop" element={<Shop />} />
              {/*<Route path="/shopBooks" element={<ShopBooks />} />*/}
              <Route path="/explore" element={<Explore />} />
              <Route path="/shop/product/:item_id" element={<ProductDetails />} />
              <Route path="/profile/:username" element={<UserDetails currentUser={currentUser} />} />
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
