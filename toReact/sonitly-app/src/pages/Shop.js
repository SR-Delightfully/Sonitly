import ImagePlaceholder from '../images/image-placeholder.png';
import Product from '../components/Product';


const Shop = () => {
    const data = [
        {productName: "one", price: 0, src: ""},
        {productName: "two", price: 0, src: ""},
        {productName: "three", price: 0, src: ""}
    ];
  return (
    <>
    <h2>Product Gallery</h2>
    <div id="gallery-container">
        {data.map((d) => {
            <Product
            productName={d.productName}
            price={d.price}
            src={d.src} />
        })
        };
        
    </div>
    </>
  );
}

export default Shop;
