import BannerPlaceholder from '../images/banner-placeholder.png';
import Book from '../components/Book';
const UserDetails = (currentUser) => {
  const authors = ["username"];
    const pages = ["page1","page2", "page3"];
    return (
        <ol id="containers">
          <li>
            <div id="hero-container" className="profile-container">
               <img id="banner-picture-img" className='profile-banner' src={currentUser.currentUser.user_banner_src} />
               <div id="profile-gallery">
                <ul id='profile-gallery-tabs'>
                  <li><button>Books</button></li>
                  <li><button>Music</button></li>
                  {/* do we really need books cds and vinyls? arent cds and vinyls both music?? */}
                </ul>
                <ol>
                  <li><Book title="small book example" authors={authors} pages={pages} size="small" type="hard" /></li>
                  
                </ol>
               </div>
               <div id="profile-info">
                  <img id="pfp" className='profile-pfp' src={currentUser.currentUser.user_pfp_src} />
                  <h3>Username</h3>
                  <ul id="profile-buttons">
                    <li><button id="add-user-btn">Add User</button></li>
                    <li><button id="dm-user-btn">Dm User</button></li>
                    <li><button id="ignore-user-btn">Ignore User</button></li>
                    <li><button id="block-user-btn">Block User</button></li>
                  </ul>
               </div>                  
            </div>
          </li>
          </ol>
    );
  }
  
  export default UserDetails;
  