import ImagePlaceholder from '../images/image-placeholder.png';
import Product from '../components/Product';
import { Link } from 'react-router-dom';
import { fetchData } from '../data/fetchWrapper'; 
import { useEffect, useState } from "react";

const Shop = () => {
    const [products, setProducts] = useState([]);
    useEffect(() => {
        async function loadProducts() {
            console.log("Loading the products");
            const uri = './data/catalog.json';
            const catalog = await fetchData(uri);
            setProducts(catalog.products);
    }
    loadProducts(); 
    }, []);

  return (
    
    <>
    <h2>Product Gallery</h2>
    <div id="gallery-container">
    {products.map((d) => (
          <Link to={`/shop/product/${d.item_id}`}>
          <Product type={'product'}
            key={d.item_id}
            productName={d.item_title}
            description={d.description}
            price={d.unit_price}
            src={d.thumbnail_image || ImagePlaceholder}>
            </Product>
        </Link>
        ))}
    
    </div>
    </>
)}

export default Shop;