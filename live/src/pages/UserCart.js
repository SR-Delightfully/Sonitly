import Image from '../images/image-placeholder.png';
import ProductSuggestion from '../components/ProductSuggestion';
import CartITem from '../components/CartItem';

const UserCart = () => {
    return (
      <>
        <h1 id="cartTitle">Shopping Cart</h1>

        <ol>
          <CartITem></CartITem>
        </ol>

        <ProductSuggestion></ProductSuggestion>
      </>
    );
  }
  
  export default UserCart;
  