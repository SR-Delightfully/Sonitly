import React from "react";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import { HashLink } from "react-router-hash-link";


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
    <>
        <header id="nav-bar">
            <div id="nav-bar-left">
                {/* CLICKABLE LOGO */}
                <a href="/"><img id="logo" src="https://cdn-icons-png.flaticon.com/512/812/812680.png" /></a>
                {/* TABS TO NAVIGATE THROUGH PAGES */}
                <ol id="nav-bar-tabs">
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
                            <li className="drop-option"><HashLink smooth to="/settings#user-settings">View Settings</HashLink></li>
                            <li className="drop-option"><HashLink smooth to="/settings#accessibility-settings">View Accessibility</HashLink></li>
                            <li className="drop-option"><HashLink smooth to="/settings#connection-settings">view More Settings</HashLink></li>
                        </ul>
                    </span>
                    <a href="/profile"><img id="pfp" src="https://i.pinimg.com/236x/17/57/1c/17571cdf635b8156272109eaa9cb5900.jpg" /></a>
                </div>
            </div>
        </header>
        <div id="paletteSquares">
            <span className="paletteSquare background-primary"> </span>
            <span className="paletteSquare background-secondary"></span>
            <span className="paletteSquare color-accent-1"></span>
            <span className="paletteSquare color-accent-2"></span>
            <span className="paletteSquare color-accent-3"></span>
            <span className="paletteSquare color-accent-4"></span>
            <span className="paletteSquare color-accent-5"></span>
            <span className="paletteSquare color-accent-6"></span>
            <span className="paletteSquare color-accent-7"></span>
            <span className="paletteSquare color-accent-8"></span>
            <span className="paletteSquare color-accent-9"></span>
            <span className="paletteSquare color-accent-10"></span>
        </div>
        </>
  );
}

export default NavBar;
