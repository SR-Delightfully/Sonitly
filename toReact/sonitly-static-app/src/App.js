import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import { useContext, useEffect, useState } from "react";
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

const App = () => {
  const { currentUser, setCurrentUser } = useContext(CurrentUserContext);
  const [loading, setLoading] = useState(true); // Loading state for user authentication

  
  setCurrentUser({
            "user_id": 1, 
            "user_name": "blobby",
            "user_password": "123456",
            "user_email": "blobby@blob.com",
            "user_phone": "000-000-0000",
            "user_about_me": "just blobby being blobby",
            "user_friends": ["blob"],
            "user_followers": ["blob","boop"],
            "user_following": ["blob"],
            "user_likes": [],
            "user_favorite_song": "",
            "user_banner_src":"https://i.imgur.com/qUv2rGN.png",
            "user_pfp_src": "https://i.imgur.com/8eQyfZj.png",
            "user_books": [],
            "user_music": []
        });

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
          <Route path="/signup" element={<Signup />} />

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
