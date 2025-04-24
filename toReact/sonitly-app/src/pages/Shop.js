import { useEffect, useState } from "react"; // For state and effect handling in React
import ImagePlaceholder from '../images/image-placeholder.png'; // Placeholder image for when album art is not available
import Product from '../components/Product'; // Component to display individual product (album) details
import { fetchData } from '../data/fetchWrapper'; // Function for fetching data (from MusicBrainz or any API)



const Shop = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
      async function loadProducts() {
          setLoading(true);
          setError(null);
          try {
              const uri = "https://musicbrainz.org/ws/2/recording?query=*&fmt=json";
              const catalog = await fetchData(uri);
              
              if (catalog && catalog.recordings) {
                  const mappedTracks = catalog.recordings.map((track, index) => ({
                      item_id: index,
                      item_title: track.title,
                      unit_price: parseFloat((track.score / 1000000).toFixed(2)), // Fake price for visualization
                      thumbnail_image: track['release-group']?.['cover-art-archive']?.front || ImagePlaceholder
                  }));

                  setProducts(mappedTracks);
              } else {
                  setError("Failed to fetch products");
              }
          } catch (error) {
              setError("Error occurred");
              console.log(error);
          }
      }

      loadProducts();
  }, []);

  if (loading) return <p>Loading products...</p>;
  if (error) return <p>{error}</p>;

  return (
      <div>
          <h2>Trending Music Gallery</h2>
          <div id="gallery-container">
              {products.map((product) => (
                  <Product
                      key={product.item_id}
                      productName={product.item_title}
                      price={product.unit_price}
                      src={product.thumbnail_image}
                  />
              ))}
          </div>
      </div>
  );
};

export default Shop;
