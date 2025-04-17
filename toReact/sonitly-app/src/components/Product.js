import ImagePlaceholder from '../images/image-placeholder.png';


const Product = ({productName, price, src}) => {
  return (
    <div className="gallery-img">
    <img 
    src={ImagePlaceholder} 
    alt="Image Placeholder" 
    width="200" 
    height="200" 
    /> 

    <p>{productName}</p>
    <p>${price}</p>
    </div>
    
    
  );
}

export default Product;
