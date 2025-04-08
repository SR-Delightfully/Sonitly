import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";
import Home from "../pages/Home";
import Shop from "../pages/Shop";
import About from "../pages/About";
import Explore from "../pages/Explore";
import ProductDetails from "../pages/ProductDetails";
import Signup from "../pages/Signup";
import Login from "../pages/Login";

// Importing pages:

const NavBar = () => {
  return (
    <Router>
        <header id="nav-bar">
            <div id="nav-bar-left">
                {/* CLICKABLE LOGO */}
                <a href="/"><img id="logo" src="https://cdn-icons-png.flaticon.com/512/812/812680.png" /></a>
                {/* TABS TO NAVIGATE THROUGH PAGES */}
                <ol id="nav-bar-tables">
                    <li><Link to="/"><button>Home</button></Link></li>
                    <li><Link to="/about"><button>About</button></Link></li>
                    <li><Link to="/shop"><button>Shop</button></Link></li>
                    <li><Link to="/explore"><button>Explore</button></Link></li>
                </ol>
            </div>
            <div id="nav-bar-right">
                <div id="nav-bar-misc">
                    <span id="search-container">  
                        <label id="search-label" for="search-input">🔍</label>
                        <input type="text" id="search-input" />
                    </span>
                    <span>
                        <a href="#cart">🛒</a>
                    </span>
                </div>
                <div id="nav-bar-user-drop">
                    <span>
                        <h3>Hellow, username</h3>
                        <ul id="user-drop-options">
                            <li class="drop-option"><button id="drop-down" onclick="handleDropDown()">User dropdown ➤</button></li>
                            <li class="drop-option"><a href="#profile">view profile</a></li>
                            <li class="drop-option"><a href="#profile">view accessibility</a></li>
                            <li class="drop-option"><a href="#profile">view more settings</a></li>
                        </ul>
                    </span>
                    <img id="pfp" src="https://i.pinimg.com/236x/17/57/1c/17571cdf635b8156272109eaa9cb5900.jpg" />
                </div>
            </div>
        </header>

        <Routes>
            <Route path="/" element={<Home />}></Route>
            <Route path="/about" element={<About />}></Route>
            <Route path="/shop" element={<Shop />}></Route>
            <Route path="/explore" element={<Explore />}></Route>
            <Route path="/signup" element={<Signup />}></Route>
            <Route path="/login" element={<Login />}></Route>
            <Route path="/productDetails" element={<ProductDetails />}></Route>
        </Routes>
    </Router>
 
 
// </header>
  );
}

export default NavBar;
