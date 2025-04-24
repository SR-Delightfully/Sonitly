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
          console.log("Loading the products");

          // Fetching top tracks from the MusicBrainz API
          const uri = 'https://musicbrainz.org/ws/2/recording/?query=release:top&fmt=json';
          const catalog = await fetchData(uri);
          console.log(catalog); // Log the response for inspection

          // Map through the data and fetch cover art from Cover Art Archive
          if (catalog && catalog.recordings) {
              const mappedTracks = await Promise.all(
                  catalog.recordings.map(async (track, index) => {
                      // Try to get the cover art from Cover Art Archive (if available)
                      const releaseGroupId = track.release_groups && track.release_groups[0]?.id;
                      let thumbnail_image = ImagePlaceholder; // Default placeholder

                      if (releaseGroupId) {
                          // Fetch cover art from Cover Art Archive
                          const coverUri = `https://coverartarchive.org/release-group/${releaseGroupId}`;
                          const coverRes = await fetchData(coverUri);
                          if (coverRes && coverRes.images && coverRes.images[0]) {
                              thumbnail_image = coverRes.images[0].image;
                          }
                      }

                      return {
                          item_id: index,
                          item_title: `${track.title} - ${track.artist ? track.artist.name : 'Unknown Artist'}`,
                          unit_price: parseFloat((track.score / 1000).toFixed(2)), // fake "price" for visual
                          thumbnail_image: thumbnail_image
                      };
                  })
              );

              setProducts(mappedTracks);
          } else {
              setError("Failed to fetch products");
          }
      } catch (error) {
          setError("Error occurred");
          console.log(error);
      } finally {
        setLoading(false)
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
