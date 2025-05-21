import Image from '../images/image-placeholder.png';


const CartItem = () => {
    return (
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
        </div>
    );
  }
  
export default CartItem;
  