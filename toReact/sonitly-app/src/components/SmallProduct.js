import Image from '../images/carousel-placeholder.jpg';

const SmallProduct = () => {
    return (
    <div id="informationContainer">
        <span id="topContainer">
            <img id="topContainerImg"
            src={Image}
            alt="Product image"/>
    
            <span id="productInformationContainer">
                <h3>This is a title</h3>
                <h4>This is the author!</h4>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore ...</p>
                <div id="tagsContainerSP">
                    <span className="itemTagsSP">Genre</span>
                    <span className="itemTagsSP">Another Genre</span>
                    <span className="itemTagsSP">Genre3</span>
                </div>
            </span>
        </span>

        <span id="bottomContainer">
            <div id="ratingContainer">
                <span className="ratingCircle"></span>
                <span className="ratingCircle"></span>
                <span className="ratingCircle"></span>
                <span className="ratingCircle"></span>
                <span className="ratingCircle"></span>
            </div>
        

            <div id="social">
                <span className="socialContainer"></span>
                <span className="socialContainer"></span>
                <span className="socialContainer"></span>
            </div>
        </span>
    </div>
    );
  }
  
  export default SmallProduct;