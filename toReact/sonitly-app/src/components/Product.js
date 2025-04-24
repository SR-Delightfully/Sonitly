import ImagePlaceholder from '../images/image-placeholder.png';


const Product = ({ productName, price, src }) => {
  console.log('Product src:', src); // Log the src
  return (
    <div className="gallery-img">
      <img
        src={src}
        alt="Album cover"
        
      />
      <p>{productName}</p>
      <p>S{price}</p>
    </div>
  );
};




export default Product;
