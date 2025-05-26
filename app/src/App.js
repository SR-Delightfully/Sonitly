import { useContext, useEffect } from "react";
import { HashRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import { CurrentUserContext } from "./components/CurrentUserContext";

import Home from "./pages/Home";
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

  useEffect(() => {
    setCurrentUser({
      user_id: 2,
      user_name: "boop",
      user_password: "qwerty",
      user_email: "boop@boop.ca",
      user_phone: "000-000-0000",
      user_about_me: "get booped",
      user_friends: [],
      user_followers: ["blob"],
      user_following: ["blobby"],
      user_likes: [],
      user_favorite_song: "",
      user_banner_src: "https://i.imgur.com/x0HR8cj.png",
      user_pfp_src: "https://i.imgur.com/f7obwfH.png",
      user_books: [{ item_id: 1 }, { item_id: 1 }, { item_id: 1 }],
      user_music: {
        CDs: [{ item_id: 3 }, { item_id: 3 }, { item_id: 3 }],
        Vinyls: [{ item_id: 2 }, { item_id: 6 }, { item_id: 7 }],
      },
      user_cart: [],
      user_wishlist: [],
    });
  }, [setCurrentUser]);

  return (
    <Router>
      <div id="wrapper">
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/shop" element={<Shop />} />
          <Route path="/explore" element={<Explore />} />
          <Route path="/shop/product/:item_id" element={<ProductDetails />} />
          <Route path="/profile/:username" element={<UserDetails />} />
          <Route path="/settings" element={<UserSettings />} />
          <Route path="/cart" element={<UserCart />} />
          <Route path="/reset-password" element={<ResetPassword />} />
          <Route path="/search" element={<SearchResults />} />

          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
