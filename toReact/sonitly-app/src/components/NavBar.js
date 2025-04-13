import React from "react";
import { useEffect } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";

// Importing pages:

import Home from "../pages/Home";
import Shop from "../pages/Shop";
import About from "../pages/About";
import Explore from "../pages/Explore";
import ProductDetails from "../pages/ProductDetails";
import Signup from "../pages/Signup";
import Login from "../pages/Login";
import UserDetails from "../pages/UserDetails";
import UserSettings from "../pages/UserSettings";
import UserCart from "../pages/UserCart";


const NavBar = () => {
    useEffect(() => {
        const label = document.getElementById("search-label");
        const input = document.getElementById("search-input");
        const dropDownBTN = document.getElementById("drop-down");

        input.classList.add("invisible");

        const handleSearchBar = () => {
            try {
                if (input.classList.contains("invisible")) {
                    label.innerHTML = "✖️";
                    console.log("INPUT BAR IS INVISIBLE");
                    input.classList.remove("invisible");
                } else {
                    label.innerHTML = "🔍";
                    console.log("INPUT BAR IS VISIBLE");
                    input.classList.add("invisible");
                throw new Error(`Failed to load search bar. please try again.`);
                }
            } catch (error) {
                console.log(error.message);
            }
        }

        if (label && input) {
            label.addEventListener("click", handleSearchBar);
        }

        const handleDropDown = () => {
            try {
                const dropOptions = document.getElementById("user-drop-options");

                if (dropDownBTN) {
                    if(dropOptions.style.minHeight === "12rem") {
                        dropOptions.style.maxHeight = "2.3rem";
                        dropOptions.style.minHeight = "2.3rem";
                    } else {
                        dropOptions.style.minHeight = "12rem";
                        dropOptions.style.maxHeight = "12rem";
                    }
                } else {
                    throw new Error(`Failed to load drop down. please try again.`);
                }
            } catch (error) {
                console.log(error.message);
            }
        }

        if (dropDownBTN) {
            dropDownBTN.addEventListener("click", handleDropDown);
        }

        return () => {
            if (label) label.removeEventListener("click", handleSearchBar);
            if (input) input.removeEventListener("click", handleSearchBar);
            if (dropDownBTN) dropDownBTN.removeEventListener("click", handleDropDown);
          };
        }, []);

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
                        <label id="search-label" htmlFor="search-input">🔍</label>
                        <input type="text" id="search-input" />
                    </span>
                    <span>
                        <a href="/cart">🛒</a>
                    </span>
                </div>
                <div id="nav-bar-user-drop">
                    <span>
                        <h3>How's it groovin' {"Username"} ?</h3>
                        <ul id="user-drop-options">
                            <li className="drop-option"><button id="drop-down">User dropdown ➤</button></li>
                            <li className="drop-option"><a href="/profile">view profile</a></li>
                            <li className="drop-option"><a href="/settings">view accessibility</a></li>
                            <li className="drop-option"><a href="/settings">view more settings</a></li>
                        </ul>
                    </span>
                    <a href="/profile"><img id="pfp" src="https://i.pinimg.com/236x/17/57/1c/17571cdf635b8156272109eaa9cb5900.jpg" /></a>
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
            <Route path="/profile" element={<UserDetails />}></Route>
            <Route path="/settings" element={<UserSettings />}></Route>
            <Route path="/cart" element={<UserCart />}></Route>
        </Routes>
    </Router>
  );
}

export default NavBar;
