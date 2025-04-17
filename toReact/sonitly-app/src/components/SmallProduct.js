import Image from '../images/carousel-placeholder.jpg';

const SmallProduct = () => {
    return (
    <div id="informationContainer">
        
        <div>
            <img id="productImage" 
            src={Image}
            alt="Product image"/>
    
            <div id="productInformationContainer">
                <h2>This is a title</h2>
                <p>this is a description silly change hehe</p>
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

            <div id="social">
                <span class="socialContainer"></span>
                <span class="socialContainer"></span>
                <span class="socialContainer"></span>
                <span class="socialContainer"></span>
                <span class="socialContainer"></span>
                <span class="socialContainer"></span>
            </div>
        </div>

        <div id="ratingInfo">
            <p>00 Ratings / 00 Reviews</p>
        </div>
    </div>
    );
  }
  
  export default SmallProduct;