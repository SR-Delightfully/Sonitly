import { useEffect, useState } from "react";
import ImagePlaceholder from '../images/image-placeholder.png'; // Placeholder image
import Product from '../components/Product'; // Product component
import TestBook from '../components/TestBook';
import { fetchData } from '../data/fetchWrapper'; // Custom fetch function
import { Link } from 'react-router-dom';

// Google Books API endpoint
const GOOGLE_BOOKS_API = "https://www.googleapis.com/books/v1/volumes?q=search+terms&maxResults=25";

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

        // fetching music data
        const musicUri = 'https://itunes.apple.com/search?term=top&entity=album&limit=25';
        const musicCatalog = await fetchData(musicUri);
        console.log("Music Catalog:", musicCatalog);

        // fetching book data
        const booksUri = GOOGLE_BOOKS_API.replace("search+terms", "fiction"); // example query for books
        const booksCatalog = await fetchData(booksUri);
        console.log("Books Catalog:", booksCatalog);

        
        // mapping music data
        const musicProducts = musicCatalog.results.map((item, index) => {
          const highResImage = item.artworkUrl100
            ? item.artworkUrl100.replace('100x100', '600x600')
            : ImagePlaceholder;
        
          return {
            item_id: index,
            item_title: item.collectionName,
            unit_price: parseFloat(item.collectionPrice || 10.00),
            thumbnail_image: highResImage,
            category: 'Music'
          };
        });
        

        // mapping books data
        const getBookThumbnail = (imageLinks) => {
          if (!imageLinks) return ImagePlaceholder;
          // Prefer larger thumbnail if available
          return imageLinks.thumbnail?.replace('http://', 'https://') ||
                 imageLinks.smallThumbnail?.replace('http://', 'https://') ||
                 ImagePlaceholder;
        };
        
        const bookProducts = (booksCatalog?.items || []).map((item, index) => ({
          item_id: index + musicProducts.length,
          item_title: item.volumeInfo?.title || "Untitled",
          unit_price: parseFloat((Math.random() * 20).toFixed(2)),
          thumbnail_image: getBookThumbnail(item.volumeInfo?.imageLinks),
          category: item.volumeInfo?.printType === 'BOOK' ? 'Book' : 'Ebook'
        }));

        // Combine both catalogs
        const allProducts = [...musicProducts, ...bookProducts];
        setProducts(allProducts);
        

      } catch (error) {
        setError("Error occurred");
        console.log(error);
      } finally {
        setLoading(false); // Update loading state once done
      }
    }

    loadProducts();  // Call the function to load the products
  }, []);  // Empty dependency array so it runs once when the component mounts

  if (loading) return <p>Loading products...</p>;
  if (error) return <p>{error}</p>;

  return (
    <div>
      <h2>Trending Products</h2>
      <div id="gallery-container">
        {products.map((product) => (
          <Link to={`/shop/product/${product.item_id}`} key={product.item_id}>
            {product.category === 'Music' ? (
              <Product
                productName={product.item_title}
                price={product.unit_price}
                src={product.thumbnail_image}
              />
            ) : (
              <TestBook
                bookName={product.item_title}
                author={product.author}
                price={product.unit_price}
                src={product.thumbnail_image}
              />
            )}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Shop;