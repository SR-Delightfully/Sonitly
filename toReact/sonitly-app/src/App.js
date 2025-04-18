import NavBar from "./components/NavBar";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";

// Importing pages:
import Home from "./pages/Home";
import Shop from "./pages/Shop";
import About from "./pages/About";
import Explore from "./pages/Explore";
import SmallProduct from "./components/SmallProduct";
import ProductDetails from "./pages/ProductDetails";
import Signup from "./pages/Signup";
import Login from "./pages/Login";
import UserDetails from "./pages/UserDetails";
import UserSettings from "./pages/UserSettings";
import UserCart from "./pages/UserCart";


const App = () => {
  return (
    <Router>
    <div id="wrapper">
      <NavBar />
      <Routes>
            <Route path="/" element={<Home />}></Route>
            <Route path="/about" element={<About />}></Route>
            <Route path="/shop" element={<Shop />}></Route>
            <Route path="/explore" element={<Explore />}></Route>
            <Route path="/signup" element={<Signup />}></Route>
            <Route path="/login" element={<Login />}></Route>
            <Route path="/productDetails" element={<ProductDetails />}></Route>
            <Route path="/profile" element={<UserDetails />}></Route>
            <Route path="/settings" element={<UserSettings />}></Route>
            <Route path="/cart" element={<UserCart />}></Route>
        </Routes>
    </div>
    </Router>
  );
}

export default App;
