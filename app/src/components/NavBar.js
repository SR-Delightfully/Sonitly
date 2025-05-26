import React, { useEffect, useState, useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { HashLink } from "react-router-hash-link";
import { CurrentUserContext } from "./CurrentUserContext";

const NavBar = () => {
  const { currentUser, logoutUser } = useContext(CurrentUserContext);
  const navigate = useNavigate();

  const [searchQuery, setSearchQuery] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const [isSearchVisible, setSearchVisible] = useState(false);
  const [isDropDownOpen, setDropDownOpen] = useState(false);

  useEffect(() => {
    if (!searchQuery.trim()) {
      setSearchResults([]);
      return;
    }

    const delayDebounce = setTimeout(() => {
      fetch(process.env.PUBLIC_URL + "/data/users.json")
        .then(res => res.json())
        .then(data => {
          const filtered = data.users.filter(user =>
            (user.user_name || "").toLowerCase().includes(searchQuery.toLowerCase())
          );
          setSearchResults(filtered);
        })
        .catch(err => console.error("Search error:", err));
    }, 300);

    return () => clearTimeout(delayDebounce);
  }, [searchQuery]);

  const handleSignOut = () => {
    logoutUser();
    navigate("/login");
  };

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      navigate(`/search?q=${encodeURIComponent(searchQuery)}`);
      setSearchQuery("");
      setSearchResults([]);
      setSearchVisible(false);
    }
  };

  const toggleDropDown = () => {
    setDropDownOpen(prev => !prev);
  };

  return (
    <header id="nav-bar">
      <div id="nav-bar-left">
        <Link to="#/">
          <img
            id="logo"
            src="https://cdn-icons-png.flaticon.com/512/812/812680.png"
            alt="logo"
          />
        </Link>
        <ol id="nav-bar-tabs">
          <li><Link to="/"><button>Home</button></Link></li>
          <li><Link to="/about"><button>About</button></Link></li>
          <li><Link to="/shop"><button>Shop</button></Link></li>
          <li><Link to="/explore"><button>Explore</button></Link></li>
        </ol>
      </div>

      <div id="nav-bar-right">
        <div id="nav-bar-misc">
          <div id="search-container" style={{ position: "relative" }}>
            <label
              id="search-label"
              htmlFor="search-input"
              onClick={() => setSearchVisible(prev => !prev)}
              style={{ cursor: "pointer" }}
            >
              {isSearchVisible ? "✖️" : "🔍"}
            </label>

            {isSearchVisible && (
              <form onSubmit={handleSearchSubmit} style={{ display: "inline" }}>
                <input
                  type="text"
                  id="search-input"
                  placeholder="Search users..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  style={{ marginLeft: "0.5rem" }}
                />
              </form>
            )}

            {searchResults.length > 0 && (
              <ul
                style={{
                  position: "absolute",
                  top: "2.5rem",
                  left: 0,
                  backgroundColor: "#fff",
                  border: "1px solid #ccc",
                  borderRadius: "4px",
                  zIndex: 1000,
                  listStyle: "none",
                  padding: "0.5rem",
                  width: "200px",
                  boxShadow: "0 2px 8px rgba(0,0,0,0.15)"
                }}
              >
                {searchResults.slice(0, 5).map((user) => (
                  <li key={user.user_id} style={{ marginBottom: "0.5rem" }}>
                    <Link
                      to={`/profile/${user.user_name}`}
                      onClick={() => {
                        setSearchQuery("");
                        setSearchResults([]);
                        setSearchVisible(false);
                      }}
                    >
                      {user.user_name}
                    </Link>
                  </li>
                ))}
                <li>
                  <button
                    onClick={() => {
                      navigate(`/search?q=${encodeURIComponent(searchQuery)}`);
                      setSearchQuery("");
                      setSearchResults([]);
                      setSearchVisible(false);
                    }}
                    style={{
                      background: "none",
                      border: "none",
                      color: "blue",
                      cursor: "pointer",
                      padding: 0
                    }}
                  >
                    View all results
                  </button>
                </li>
              </ul>
            )}
          </div>

          <span><Link to="/cart">🛒</Link></span>
        </div>

        <div id="nav-bar-user-drop">
          {currentUser ? (
            <span>
              <h3>How's it groovin' {currentUser.user_name}?</h3>
              <ul
                id="user-drop-options"
                style={{
                  minHeight: isDropDownOpen ? "12rem" : "2.3rem",
                  maxHeight: isDropDownOpen ? "12rem" : "2.3rem",
                  overflow: "hidden",
                  transition: "all 0.3s ease"
                }}
              >
                <li className="drop-option">
                  <button id="drop-down" onClick={toggleDropDown}>
                    User dropdown ➤
                  </button>
                </li>
                <li className="drop-option"><HashLink smooth to="/settings#user-settings">View Settings</HashLink></li>
                <li className="drop-option"><HashLink smooth to="/settings#accessibility-settings">View Accessibility</HashLink></li>
                <li className="drop-option"><HashLink smooth to="/settings#connection-settings">View More Settings</HashLink></li>
                <li className="drop-option"><button onClick={handleSignOut}>Sign Out</button></li>
              </ul>
            </span>
          ) : (
            <span>
              <h3>Welcome, Guest!</h3>
              <ul
                id="user-drop-options"
                style={{
                  minHeight: isDropDownOpen ? "12rem" : "2.3rem",
                  maxHeight: isDropDownOpen ? "12rem" : "2.3rem",
                  overflow: "hidden",
                  transition: "all 0.3s ease"
                }}
              >
                <li className="drop-option">
                  <button id="drop-down" onClick={toggleDropDown}>
                    User dropdown ➤
                  </button>
                </li>
                <li className="drop-option"><Link to="/login">Login</Link></li>
                <li className="drop-option"><Link to="/signup">Sign Up</Link></li>
              </ul>
            </span>
          )}

          {currentUser && (
            <Link to={`/profile/${currentUser.user_name}`}>
              <img id="pfp" src={currentUser.user_pfp_src || "default-avatar.png"} alt="pfp" />
            </Link>
          )}
        </div>
      </div>
    </header>
  );
};

export default NavBar;
