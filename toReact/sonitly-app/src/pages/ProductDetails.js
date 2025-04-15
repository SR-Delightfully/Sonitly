import Image from '../images/carousel-placeholder.jpg';

const ProductDetails = () => {
  return (
    <div id="tempContainer">
    <div id="baseInformationContainer">
        <img id="productImageFullP"
        src={Image}
        alt="product image"/>

        <div id="carrousselIndicator">            
            <span class="carrousselIndicatorItem"></span> <br/>
            <span class="carrousselIndicatorItem"></span> <br/>
            <span class="carrousselIndicatorItem"></span> <br/>
        </div>

        <div id="baseItemText">
            <h1 id="itemTitle">L This is the title</h1>
            <h3 id="itemAuthor">Author author</h3>
            
            <div id="tagsContainer">
                <span class="itemTags">Genre</span>
                <span class="itemTags">Another Genre</span>
                <span class="itemTags">Genre3</span>
                <span class="itemTags">Really loonnng genre</span>
                <span class="itemTags">Overflowing genre</span>
            </div>
        </div>
    </div>

    <div id="connectingDiv">
        <span class="buyOptions">Edition *</span>
        <span class="buyOptions">Type *</span>
        <span class="buyOptions">Retailer *</span>
        <span class="socialPlaceholderTemp"></span>
        <span class="socialPlaceholderTemp"></span>
        <span class="socialPlaceholderTemp"></span>
    </div>

    <div id="additionalInformationContainer">

        <div id="additionalItemInformation">
            <h3 id="editor">Edition House</h3>
            <p>Thats an edition house</p>

            <h3 id="funStats">Statistics</h3>
            <p>Word Count : 0000</p>
            <p>Page Count : 000</p>
            <p>Chapters : 000</p>
            <p>Editions : 000</p>

            <h3 id="itemLanguages">Languages</h3>
            <p>American English</p>
            <p>French</p>
        </div>

        <div id="itemFullDescription">
            <h3 id="description">Description</h3>
            <p>Lorem ipsum dolor sit amet consectetur adipiscing elit. Quisque faucibus ex sapien vitae pellentesque sem placerat. In id cursus mi pretium tellus duis convallis. Tempus leo eu aenean sed diam urna tempor. Pulvinar vivamus fringilla lacus nec metus bibendum egestas. Iaculis massa nisl malesuada lacinia integer nunc posuere. Ut hendrerit semper vel class aptent taciti sociosqu. Ad litora torquent per conubia nostra inceptos himenaeos.
                <br/><br/> Lorem ipsum dolor sit amet consectetur adipiscing elit. Quisque faucibus ex sapien vitae pellentesque sem placerat. In id cursus mi pretium tellus duis convallis. Tempus leo eu aenean sed diam urna tempor. Pulvinar vivamus fringilla lacus nec metus bibendum egestas.</p>
        </div> 
    </div>

    <h2 id="alsoLikeTitle">You might also like...</h2>
    <br/>

    <div id="furtherStuff">
        <img class="productImageSmall"
        src={Image}
        alt="product image"/>

        <img class="productImageSmall"
        src={Image}
        alt="product image"/>

        <img class="productImageSmall"
        src={Image}
        alt="product image"/>

        <img class="productImageSmall"
        src={Image}
        alt="product image"/>

        <img class="productImageSmall"
        src={Image}
        alt="product image"/>

        <img class="productImageSmall"
        src={Image}
        alt="product image"/>

        <img class="productImageSmall"
        src={Image}
        alt="product image"/>
    </div>
</div>

  );
}

export default ProductDetails;
