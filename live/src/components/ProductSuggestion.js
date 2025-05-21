import Image from '../images/carousel-placeholder.jpg';
import SmallProduct from '../components/SmallProduct';

const ProductSuggestion = () => {
    <div id="otherProducts">
        <span id="leftImageCaroussel">
            <img class="productImageSmall"
            src={Image}
            alt="product image"/>

            <img class="productImageSmall"
            src={Image}
            alt="product image"/>

            <img class="productImageSmall"
            src={Image}
            alt="product image"/>
        </span>

        <SmallProduct></SmallProduct>

        <span id="rightImageCaroussel">
            <img class="productImageSmall"
            src={Image}
            alt="product image"/>

            <img class="productImageSmall"
            src={Image}
            alt="product image"/>

            <img class="productImageSmall"
            src={Image}
            alt="product image"/>
        </span>
    </div>
}

export default ProductSuggestion;
