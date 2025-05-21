import { useLocation, useNavigate } from "react-router-dom"; 
import { useEffect, useState } from "react";
import axios from "axios";

const SearchResults = () => {
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const query = queryParams.get("q") || "";
  const [results, setResults] = useState({ users: [], products: [] });
  const navigate = useNavigate(); 

  useEffect(() => {
    const fetchResults = async () => {
      try {
        const res = await axios.get(`http://localhost:5000/api/search?q=${encodeURIComponent(query)}`);
        setResults(res.data);
      } catch (error) {
        console.error("Search error:", error);
      }
    };

    if (query) {
      fetchResults();
    }
  }, [query]);

  return (
    <div id="search-results-container">
      <h2>Search Results for: "{query}"</h2>

      <div className="search-section">
        <h3>Products</h3>
        {results.products.length > 0 ? (
          <ul className="search-products">
            {results.products.map((item) => (
              <li key={item.item_id} onClick={() => navigate(`/shop/product/${item.item_id}`)}>
                <img src={item.thumbnail_image} alt={item.item_title} />
                <h4>{item.item_title}</h4>
                <p>{item.brand}</p>
                <p>${item.unit_price}</p>
              </li>
            ))}
          </ul>
        ) : (
          <p>No matching products.</p>
        )}
      </div>

      <div className="search-section">
        <h3>Users</h3>
        {results.users.length > 0 ? (
          <ul className="search-users">
            {results.users.map((user) => (
              <li key={user.user_id} onClick={() => navigate(`/profile/${user.user_name}`)}>
                <img src={user.user_pfp_src} alt={user.user_name} />
                <div>
                  <h4>{user.user_name}</h4>
                  <p>{user.user_about_me}</p>
                </div>
              </li>
            ))}
          </ul>
        ) : (
          <p>No matching users.</p>
        )}
      </div>
    </div>
  );
};

export default SearchResults;
