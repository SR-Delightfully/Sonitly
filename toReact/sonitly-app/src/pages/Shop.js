import { useEffect, useState } from "react";
import ImagePlaceholder from '../images/image-placeholder.png'; // Placeholder image
import Product from '../components/Product'; // Product component
import { fetchData } from '../data/fetchWrapper'; // Custom fetch function
import {Link} from 'react-router-dom';

const Shop = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function loadProducts() {
      setLoading(true);
      setError(null);
      try {
        console.log("Loading trending songs...");
  
        // Fetching top songs from iTunes API
        const uri = 'https://itunes.apple.com/us/rss/topsongs/limit=100/json';
        const result = await fetchData(uri);
        console.log("iTunes Trending Songs:", result);
  
        if (result && result.feed.entry) {
          const mappedSongs = result.feed.entry.map((song, index) => ({
            item_id: song.id.attributes['im:id'], // Unique ID for each song
            item_title: song.title.label + ' - ' + song['im:artist'].label,
            unit_price: song['im:price'] ? song['im:price'].label : 0.99, // Price fallback
            thumbnail_image: song['im:image'][2].label, // The largest image size available
          }));
  
          setProducts(mappedSongs);
        } else {
          setError("No trending songs found.");
        }
      } catch (error) {
        setError("Error occurred while fetching iTunes data.");
        console.log(error);
      } finally {
        setLoading(false);
      }
    }
  
    loadProducts();
  }, []);
  
   // Empty dependency array so it runs once when the component mounts

  if (loading) return <p>Loading products...</p>;
  if (error) return <p>{error}</p>;

  return (
    <div>
      <h2>Trending Music Gallery</h2>
      <div id="gallery-container">
        {products.map((product) => (
          <Link to={`/shop/product/${[product.item_id]}`}>
          <Product
            key={product.item_id}
            productName={product.item_title}
            price={product.unit_price}
            src={product.thumbnail_image}
          />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Shop;
