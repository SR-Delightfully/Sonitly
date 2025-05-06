const Product = ({ productName, description, price, src }) => {
  
  return (
    <div className="gallery-img">
      <img
        src={src}
        alt="Album cover"
        width='300'
        height='300'
      />
      <p>{productName}</p>
      <p>{description}</p>
      <p>${price}</p>
    </div>
  );
};




export default Product;
