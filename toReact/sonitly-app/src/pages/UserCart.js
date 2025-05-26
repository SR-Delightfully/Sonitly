import Image from '../images/image-placeholder.png';
import ProductSuggestion from '../components/ProductSuggestion';
import React, {useContext, useEffect, useState} from "react";
import {CurrentUserContext} from "../components/CurrentUserContext";
import {Link} from "react-router-dom";
import CartItem from "../components/CartItem";

const UserCart = () => {
    const { currentUser, cart, updateCartQty, removeFromCart } = useContext(CurrentUserContext);

    const [catalog, setCatalog] = useState([]);
    const [loadingCatalog, setLoadingCatalog] = useState(true);

    useEffect(() => {
        const loadCatalog = async () => {
            try {
                const response = await fetch("/data/catalog.json");
                if (!response.ok) throw new Error("Failed to load catalog");

                const data = await response.json();
                setCatalog(data.products || []);
            } catch (error) {
                console.error("Failed to load catalog:", error);
            } finally {
                setLoadingCatalog(false);
            }
        };

        loadCatalog();
    }, []);

    const totalPrice = () => {
        return cart.reduce((total, item) => {
            const product = catalog.find(p => String(p.item_id) === String(item.item_id));
            if (!product) return total;
            return total + product.unit_price * item.quantity;
        }, 0).toFixed(2); // returns a string like "59.99"
    };



    return (
      <>
        <h1 id="cartTitle">Shopping Cart</h1>

          {cart.length === 0 ? (
              <>
                  <p className="empty-cart">Cart is empty... Shop some of our products first!</p>
                  <p><Link to="/shop"><button className="buyingOption">Shop</button></Link></p>
              </>
          ) : (
              <>
                  <ul>
                      {cart.map((item) => (
                          <li key={item.item_id}>
                              <CartItem
                                  item_id={item.item_id}
                                  quantity={item.quantity}
                                  onIncrease={() => updateCartQty(item.item_id, 1)}
                                  onDecrease={() => updateCartQty(item.item_id, -1)}
                                  onRemove={() => removeFromCart(item.item_id)}
                              />
                          </li>
                      ))}
                  </ul>

                  <h3>Total price : $ {totalPrice()} CA</h3>
              </>
          )
          }
      </>
    );
  }
  
  export default UserCart;
  
