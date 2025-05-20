import Image from '../images/image-placeholder.png';
import ProductSuggestion from '../components/ProductSuggestion';
import CartITem from '../components/CartItem';

const UserCart = () => {
    /*let price = 0;
    //TODO trying to check the quantity
    const checkQuantity = (productId, quantity) => {
        const stockQuantity = productId.quantity;
        quantity = (quantity < 1) ? 0 : (quantity > stockQuantity) ? stockQuantity : quantity;
    }

    const updatePrice = () => {
        let prices = 0; //variables
        foreach (Product in users.json) {
            prices += (price * cartITem.quantity);
        }

        return prices;
    }*/

    return (
      <>
        <h1 id="cartTitle">Shopping Cart</h1>

        <ol>
          <CartITem></CartITem>
        </ol>

          {/*<h2>Total Price : {price}</h2>*/}

        <ProductSuggestion></ProductSuggestion>
      </>
    );
  }
  
  export default UserCart;
  