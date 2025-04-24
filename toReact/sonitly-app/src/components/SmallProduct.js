import Image from '../images/carousel-placeholder.jpg';

const SmallProduct = () => {
    return (
    <div id="informationContainer">
        
        <div>
            <img id="productImage" 
            src={Image}
            alt="Product image"/>
    
            <div id="productInformationContainer">
                <h3>This is a title</h3>
                <p>this is a description silly change hehe <br/>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore ...</p>
            </div>

            <div id="tagsContainerSP">
                    <span className="itemTagsSP">Genre</span>
                    <span className="itemTagsSP">Another Genre</span>
                    <span className="itemTagsSP">Genre3</span>
                </div>
        </div>

        <div>
            <div id="ratingContainer">
                <span className="ratingCircle"></span>
                <span className="ratingCircle"></span>
                <span className="ratingCircle"></span>
                <span className="ratingCircle"></span>
                <span className="ratingCircle"></span>
            </div>
            
            <div id="ratingInfo">
                <p>00 Reviews</p>
            </div>

            <div id="social">
                <span className="socialContainer"></span>
                <span className="socialContainer"></span>
                <span className="socialContainer"></span>
                <span className="socialContainer"></span>
                <span className="socialContainer"></span>
            </div>
        </div>
    </div>
    );
  }
  
  export default SmallProduct;