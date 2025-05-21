import { useContext, useEffect, useState } from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import { CurrentUserContext } from "./components/CurrentUserContext";

import Home from "./pages/Home";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import About from "./pages/About";
import Shop from "./pages/Shop";
import Explore from "./pages/Explore";
import ProductDetails from "./pages/ProductDetails";
import UserDetails from "./pages/UserDetails";
import UserSettings from "./pages/UserSettings";
import UserCart from "./pages/UserCart";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import ResetPassword from "./pages/ResetPassword";
import SearchResults from "./pages/SearchResults";

const App = () => {
  const { currentUser, setCurrentUser } = useContext(CurrentUserContext);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchAndSetUser = async () => {
      try {
        const res = await fetch("/data/users.json");
        const data = await res.json();
        const blobUser = data.users.find(user => user.user_name === "blob");
        if (blobUser) {
          setCurrentUser(blobUser);
          localStorage.setItem("loggedInUser", JSON.stringify(blobUser));
        }
      } catch (err) {
        console.error("Failed to load users:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchAndSetUser();
  }, [setCurrentUser]);

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <Router>
      <div id="wrapper">
        {currentUser && <NavBar />}
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/sign-up" element={<Signup />} />
          <Route path="/resetPassword" element={<ResetPassword />} />

          {currentUser ? (
            <>
              <Route path="/" element={<Home />} />
              <Route path="/home" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/shop" element={<Shop />} />
              <Route path="/explore" element={<Explore />} />
              <Route path="/shop/product/:item_id" element={<ProductDetails />} />
              <Route path="/profile/:username" element={<UserDetails currentUser={currentUser} />} />
              <Route path="/settings" element={<UserSettings />} />
              <Route path="/cart" element={<UserCart />} />
              <Route path="/search" element={<SearchResults />} />
            </>
          ) : (
            <Route path="/" element={<Navigate to="/login" />} />
          )}

          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
