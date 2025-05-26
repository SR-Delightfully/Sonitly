import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const StaticSearchResults = ({ query }) => {
  const [results, setResults] = useState({ users: [], products: [] });
  const navigate = useNavigate();

  useEffect(() => {
    const fetchResults = async () => {
      try {
        const res = await fetch(process.env.PUBLIC_URL + '/data/searchResults.json');
        const data = await res.json();

        const filteredUsers = data.users.filter(user =>
          user.user_name.toLowerCase().includes(query.toLowerCase())
        );
        const filteredProducts = data.products.filter(product =>
          product.item_title.toLowerCase().includes(query.toLowerCase())
        );

        setResults({ users: filteredUsers, products: filteredProducts });
      } catch (error) {
        console.error("Error fetching search results:", error);
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

export default StaticSearchResults;
