import ImagePlaceholder from '../images/image-placeholder.png';
import Product from '../components/Product';
import { fetchData } from '../data/fetchWrapper'; 
import { useEffect, useState } from "react";
import { Link } from 'react-router-dom';

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
          
            const apiKey = 'a6c0f430e1ec2b10d0155c7772a945d1'; 
            const uri = `http://ws.audioscrobbler.com/2.0/?method=chart.gettoptracks&api_key=${apiKey}&format=json`;



            const catalog = await fetchData(uri);
            console.log(catalog);

            console.log("catalog", catalog);
console.log("catalog.tracks", catalog.tracks);
console.log("catalog.tracks.track", catalog.tracks.track);
            
            
            if (catalog && catalog.tracks && catalog.tracks.track) {
              // Map the Last.fm track data to your product structure
              const mappedTracks = catalog.tracks.track.map((track, index) => ({
                item_id: index,
                item_title: `${track.name} - ${track.artist.name}`,
                unit_price: track.price, // fake "price" for visual
                thumbnail_image: track.image?.[2]?.['#text'] || ImagePlaceholder
              }));
    
              setProducts(mappedTracks);
            } else {
              setError("Failed to fetch products")
            }
         
        }
        catch (error) {
          setError("Error occurred")
          console.log(error);
        } finally {
          setLoading(false);
    }
  }
    loadProducts(); 
    }, []);
   
  return (
    
    <>
      <h2>Trending Music Gallery</h2>
    <div id="gallery-container">
    {products.map((d) => (
        <Link to={`/shop/product/${d.item_id}`}>
          <Product
            key={d.item_id}
            productName={d.item_title}
            price={d.unit_price}
            src={d.thumbnail_image || ImagePlaceholder}
          /></Link>
        ))}
    
    </div>
    </>
  );
};
export default Shop;
