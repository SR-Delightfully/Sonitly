import ImagePlaceholder from '../images/image-placeholder.png';


const Product = ({ productName, price, src }) => {
  console.log('Product src:', src); // Log the src
  return (
    <div className="gallery-img">
      <img
        src={src}
        alt="Album cover"
        width="174"
        height="174"
      />
      <p>{productName}</p>
      <p>${price}</p>
    </div>
  );
};




export default Product;
