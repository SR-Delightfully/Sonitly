import Image from '../images/image-placeholder.png';
import ProductSuggestion from '../components/ProductSuggestion';

const UserCart = () => {
    return (
      <>
        <h1 id="cartTitle">Shopping Cart</h1>
        <div id="productInCart">
          <img id="productInCartImage"
            src={Image}
            alt="product image"/>

          <span id="productInCartInfo">
            <span id="productIdentification">
              <h3>productName</h3>
              <p>prudctSerialNumer</p>
            </span>

            <span id="productNumbers">
              <span id="buttonSeparator">
                <button id="addProductToCart">+</button>
                <button id="removeProductFromCart">-</button>
              </span>

              <p>QTY : 00</p>
              <p>Price : $00.00 CA</p>
              <button id="removeFromCart">Remove</button>
            </span>
          </span>

          <ProductSuggestion></ProductSuggestion>
        </div>

      </>
    );
  }
  
  export default UserCart;
  