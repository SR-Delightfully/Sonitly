import React, { createContext, useState, useEffect } from "react";

export const CurrentUserContext = createContext(null);

export const CurrentUserProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(null);

  useEffect(() => {
    const storedUser = localStorage.getItem("loggedInUser");
    try {
      if (storedUser && storedUser !== "undefined") {
        setCurrentUser(JSON.parse(storedUser));
      }
    } catch (e) {
      console.error("Error parsing loggedInUser from localStorage:", e);
      localStorage.removeItem("loggedInUser"); // Remove bad data
    }
  }, []);

  const loginUser = (user) => {
    if (user) {
      localStorage.setItem("loggedInUser", JSON.stringify(user));
      setCurrentUser(user);
    } else {
      console.warn("loginUser was called with undefined user");
    }
  };

  const logoutUser = () => {
    localStorage.removeItem("loggedInUser");
    setCurrentUser(null);
  };

  return (
    <CurrentUserContext.Provider value={{ currentUser, loginUser, logoutUser, setCurrentUser }}>
      {children}
    </CurrentUserContext.Provider>
  );
};
