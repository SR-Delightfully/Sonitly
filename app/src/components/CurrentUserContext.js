import React, { createContext, useState, useEffect } from "react";

export const CurrentUserContext = createContext(null);

export const CurrentUserProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(null);
  const [cart, setCart] = useState([]);
  const [wishlist, setWishlist] = useState([]);
  const [likedList, setLikedList] = useState([]);

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

  /**
   * updates the localStorage when a change to the cart or the wishlist has been made
   */
  useEffect(() => {
    if (currentUser) {
      const userData = {...currentUser, cart, wishlist};
      localStorage.setItem("loggedInUser", JSON.stringify(userData));
    }
  }, [currentUser, cart, wishlist]);

  /**
   * Adds an item to the cart of the user. Checks if the item is already in the cart, if yes, then adds 1 to the qty
   * @param product the product to add to the cart
   */
  const addToCart = product => {
    setCart(prevCart => {
      const alreadyInCart = prevCart.find(item => item.item_id === product.item_id);
      if (alreadyInCart) {
        console.log("Already InCart, adding qty ++");
        return prevCart.map((item) => item.item_id === product.item_id ? { ...item, quantity: item.quantity + 1 } : item);
      } else {
        console.log("adding to cart");
        return [...prevCart, { item_id: product.item_id, quantity: 1 }];
      }
    });
  }

  /**
   * removes a product from the userCart
   * @param item_id the id of the product to remove
   */
  const removeFromCart = (item_id) => {
    setCart(prevCart => prevCart.filter(item => item.item_id !== item_id));
  }

  const updateCartQty = (item_id, change) => {
    setCart(prevCart => {
      const updatedCart = prevCart.map(item => {
        if (item.item_id === item_id) {
          const newQuantity = item.quantity + change;
          return newQuantity > 0 ? {...item, quantity: newQuantity} : null;
        }
        return item;
      }).filter(Boolean);

      return updatedCart;
    });
  };

  /**
   * adds or removes a product to the user's wishlist
   * @param product the product to add
   */
  const editWishlist = (product) => {
    setWishlist(prevWishlist => {
      if (prevWishlist.includes(product.item_id)) {
        console.log("Already in the wishlist, remove item from list");
        return prevWishlist.filter(id => id !== product.item_id);
      }
      console.log("adding to wishilist");
      return [...prevWishlist, product.item_id];
    });
  };

  const editLikedList = product => {
    setLikedList(prevLikedList => {
      if (prevLikedList.includes(product.item_id)) {
        console.log("Already liked and in the list, remove item from list");
        return prevLikedList.filter(id => id !== product.item_id);
      }
      console.log("adding to liked list");
      return [...prevLikedList, product.item_id];
    });
  }

  return (
    <CurrentUserContext.Provider value={{
      currentUser,
      loginUser,
      logoutUser,
      setCurrentUser,
      cart,
      wishlist,
      likedList,
      addToCart,
      removeFromCart,
      updateCartQty,
      editWishlist,
      editLikedList,}}>
      {children}
    </CurrentUserContext.Provider>
  );
};
