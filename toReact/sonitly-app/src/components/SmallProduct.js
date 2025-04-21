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
                    <span class="itemTagsSP">Genre</span>
                    <span class="itemTagsSP">Another Genre</span>
                    <span class="itemTagsSP">Genre3</span>
                </div>
        </div>

        <div>
            <div id="ratingContainer">
                <span class="ratingCircle"></span>
                <span class="ratingCircle"></span>
                <span class="ratingCircle"></span>
                <span class="ratingCircle"></span>
                <span class="ratingCircle"></span>
            </div>
            
            <div id="ratingInfo">
                <p>00 Reviews</p>
            </div>

            <div id="social">
                <span class="socialContainer"></span>
                <span class="socialContainer"></span>
                <span class="socialContainer"></span>
                <span class="socialContainer"></span>
                <span class="socialContainer"></span>
            </div>
        </div>
    </div>
    );
  }
  
  export default SmallProduct;