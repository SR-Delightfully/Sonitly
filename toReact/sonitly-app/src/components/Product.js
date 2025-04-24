const Product = ({ productName, price, src }) => {
  
  return (
    <div className="gallery-img">
      <img
        src={src}
        alt="Album cover"
        width='300'
        height='300'
      />
      <p>{productName}</p>
      <p>S{price}</p>
    </div>
  );
};




export default Product;
