const NavBar = () => {
    return (
        <header id="nav-bar">
        <div id="nav-bar-left">
            <a href="#home"><img id="logo" src="https://cdn-icons-png.flaticon.com/512/812/812680.png" /></a>
            <ol id="nav-bar-tabs">
                <li class="tab"><a href="#home"><button>Tab 1</button></a></li>
                <li class="tab"><a href=""><button>Tab 2</button></a></li>
                <li class="tab"><a href=""><button>Tab 3</button></a></li>
                <li class="tab"><a href=""><button>Tab 4</button></a></li>
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
                    <!-- ▼ -->
                    <h3>Hellow, {user}</h3>
                   
                    <ul id="user-drop-options">
                        <li class="drop-option"><button id="drop-down" onclick="handleDropDown()">User dropdown ➤</button></li>
                        <li class="drop-option"><a href="#profile">view profile</a></li>
                        <li class="drop-option"><a href="#profile">view accessibility</a></li>
                        <li class="drop-option"><a href="#profile">view more settings</a></li>
                    </ul>
                </span>
                <img id="pfp" src="https://i.pinimg.com/236x/17/57/1c/17571cdf635b8156272109eaa9cb5900.jpg" />
     `      </div>
        </div>
    </header>
   
    );
}

export default NavBar;
