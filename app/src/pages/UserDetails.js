import { useEffect, useState } from "react";
import { BsVinyl, BsVinylFill } from "react-icons/bs";
import { FaBook } from "react-icons/fa6";
import { PiListStarFill } from "react-icons/pi";

import Shelf from '../components/Shelf';
import Book from '../components/Book';
import Vinyl from "../components/Vinyl";
import CD from "../components/CD";

const UserDetails = () => {
  const [profileUser, setProfileUser] = useState(null);
  const [products, setProducts] = useState([]);
  const [activeTab, setActiveTab] = useState("Vinyls");
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 9;

  useEffect(() => {
    const fetchData = async () => {
      try {
        const userRes = await fetch(process.env.PUBLIC_URL + '/data/users.json');
        const userData = await userRes.json();
        const blobUser = userData.users.find(user => user.user_name === "boop");
        setProfileUser(blobUser);

        const productRes = await fetch(process.env.PUBLIC_URL + '/data/catalog.json');
        const productData = await productRes.json();
        setProducts(productData.products);
      } catch (error) {
        console.error("[ERROR] Failed to fetch data:", error);
      }
    };

    fetchData();
  }, []);

  useEffect(() => {
    setCurrentPage(1);
  }, [activeTab]);

  const getProductById = (id) => products.find(product => product.item_id === id);

  const getActiveItems = () => {
    if (!profileUser) return [];
    switch (activeTab) {
      case "Vinyls":
        return profileUser.user_music?.Vinyls || [];
      case "CDs":
        return profileUser.user_music?.CDs || [];
      case "Books":
        return profileUser.user_books || [];
      case "Wishlist":
        return profileUser.user_wishlist || [];
      default:
        return [];
    }
  };

  const renderGallery = () => {
    const items = getActiveItems();
    const startIndex = (currentPage - 1) * itemsPerPage;
    const paginatedItems = items.slice(startIndex, startIndex + itemsPerPage);

    switch (activeTab) {
      case "Vinyls":
        return paginatedItems.map((vinyl, index) => {
          const product = getProductById(vinyl.item_id);
          if (!product) return null;
          return (
            <li key={`vinyl-${index}`}>
              <Vinyl
                title={product.item_title}
                authors={product.brand}
                coverUrl={product.thumbnail_image}
              />
            </li>
          );
        });

      case "CDs":
        return paginatedItems.map((cd, index) => {
          const product = getProductById(cd.item_id);
          if (!product) return null;
          return (
            <li key={`cd-${index}`} style={{ maxHeight: "10.75rem", maxWidth: "10.75rem", margin: "8rem 2rem 0rem 2rem" }}>
              <CD
                title={product.item_title}
                authors={product.brand}
                coverUrl={product.thumbnail_image}
              />
            </li>
          );
        });

      case "Books":
        return paginatedItems.map((item, index) => {
          const product = getProductById(item.item_id);
          if (!product) return null;
          return (
            <li key={`book-${index}`}>
              <p>{product.item_title} - {product.brand}</p>
            </li>
          );
        });

      case "Wishlist":
        return paginatedItems.map((item, index) => {
          const product = getProductById(item.item_id);
          if (!product) return null;
          return (
            <li key={`wishlist-${index}`}>
              <p>{product.item_title} - {product.brand}</p>
            </li>
          );
        });

      default:
        return <li><p>This user has nothing to show!</p></li>;
    }
  };

  if (!profileUser || products.length === 0) return <p>Loading . . .</p>;

  const allItems = getActiveItems();
  const startIndex = (currentPage - 1) * itemsPerPage;
  const currentItems = allItems.slice(startIndex, startIndex + itemsPerPage);
  const shelfCount = currentItems.length <= 3 ? 1 : currentItems.length <= 6 ? 2 : 3;
  const totalPages = Math.ceil(allItems.length / itemsPerPage);

  return (
    <ol id="containers">
      <li>
        <div id="hero-container" className="profile-container">
          <img
            id="banner-picture-img"
            className='profile-banner'
            src={profileUser.user_banner_src}
            alt="User banner"
          />

          <div id="profile-gallery">
            {/* Tabs */}
            <ul id='profile-gallery-tabs'>
              <li><button onClick={() => setActiveTab("Vinyls")} title="Vinyls"><BsVinylFill /></button></li>
              <li><button onClick={() => setActiveTab("CDs")} title="CDs"><BsVinyl /></button></li>
              <li><button onClick={() => setActiveTab("Books")} title="Books"><FaBook /></button></li>
              <li style={{ cursor: "not-allowed" }}>
                <button disabled title="Wishlist"><PiListStarFill /></button>
              </li>
            </ul>

            <ol id="shelves">
              {Array.from({ length: shelfCount }, (_, i) => (
                <Shelf key={i} className="profile-shelves" />
              ))}
            </ol>

            <ol id="user-display" key={`${activeTab}-${currentPage}`}>
              {renderGallery()}
            </ol>

            {totalPages > 1 && (
              <div className="gallery-controls">
                <button
                  onClick={() => setCurrentPage(prev => Math.max(prev - 1, 1))}
                  disabled={currentPage === 1}
                >
                  Prev
                </button>
                <span>Page {currentPage} of {totalPages}</span>
                <button
                  onClick={() => setCurrentPage(prev => Math.min(prev + 1, totalPages))}
                  disabled={currentPage === totalPages}
                >
                  Next
                </button>
              </div>
            )}
          </div>

          <div id="profile-info">
            <img
              id="pfp"
              className='profile-pfp'
              src={profileUser.user_pfp_src}
              alt="Profile"
            />
            <div id="profile-info-content">
              <h3 id="usersname">{profileUser.user_name}#{profileUser.user_id}</h3>
              <span id="userStats">
                <h5><p>Followers:</p><p>{profileUser.user_followers.length}</p></h5>
                <h5><p>Following:</p><p>{profileUser.user_following.length}</p></h5>
              </span>
            </div>
            <p>{profileUser.user_about_me}</p>

            <ul id="profile-buttons">
              <li><button disabled id="add-user-btn">Add User</button></li>
              <li><button disabled id="dm-user-btn">Dm User</button></li>
              <li><button disabled id="ignore-user-btn">Ignore User</button></li>
              <li><button disabled id="block-user-btn">Block User</button></li>
            </ul>
          </div>
        </div>
      </li>
    </ol>
  );
};

export default UserDetails;
