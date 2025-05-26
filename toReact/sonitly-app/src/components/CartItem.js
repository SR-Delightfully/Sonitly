import Image from '../images/image-placeholder.png';
import React, {useEffect, useState} from "react";
import {Link} from "react-router-dom";


const CartItem = ({ item_id, quantity, onIncrease, onDecrease, onRemove }) => {
    const [product, setProduct] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        // Don't try to load if item_id is missing
        if (!item_id) {
            setError("Missing product ID");
            setLoading(false);
            return;
        }

        const loadProduct = async () => {
            try {
                const response = await fetch('/data/catalog.json');
                if (!response.ok) throw new Error('Failed to load catalog');

                const data = await response.json();
                const found = data.products.find(p => String(p.item_id) === String(item_id));

                if (!found) throw new Error(`Product ${item_id} not found in catalog`);
                setProduct(found);
            } catch (err) {
                console.error('Error loading product:', err);
                setError(err.message);
            } finally {
                setLoading(false);
            }
        };

        loadProduct();
    }, [item_id]);

    if (loading) return <div>Loading product details...</div>;
    if (!product) return <div>Product not found.</div>;

    return (
        <div id="productInCart">
            <Link to={`/shop/product/${product.item_id}`}>
              <img id="productInCartImage"
                src={product?.thumbnail_image || Image}
                alt="product image"/>
            </Link>

          <span id="productInCartInfo">
            <span id="productIdentification">
              <h3>{product?.item_title}</h3>
              <p>"ID : " {product?.item_id}</p>
            </span>

            <span id="productNumbers">
              <span id="buttonSeparator">
                <button id="addProductToCart"
                onClick={onIncrease}>+</button>
                <button id="removeProductFromCart"
                onClick={onDecrease}>-</button>
              </span>

              <p>QTY : {quantity}</p>
              <p>Price : $ {product.unit_price} CA</p>
              <button id="removeFromCart"
              onClick={onRemove}>Remove</button>
            </span>
          </span>
        </div>
    );
  }
  
export default CartItem;
  
