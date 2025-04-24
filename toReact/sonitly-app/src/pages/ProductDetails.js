import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Image from '../images/carousel-placeholder.jpg';
import SmallProduct from '../components/SmallProduct';

const ProductDetails = () => {
    const { item_id } = useParams();
    const [product, setProduct] = useState(null);
    const [loading, setLoading] = useState(true);
  
    useEffect(() => {
  const loadProduct = async () => {
    try {
      const response = await fetch('/data/catalog.json');
      const catalog = await response.json();

      const productFound = catalog.products.find((p) =>
        String(p.item_id) === String(item_id)
      );

      if (!productFound) {
        console.error('Product not found');
        return;
      }

      setProduct(productFound);
    } catch (err) {
      console.error('Failed to load product:', err);
    } finally {
      setLoading(false);
    }
  };

  loadProduct();
}, [item_id]);
  
    if (loading) return <div>Loading product details...</div>;
    if (!product) return <div>Product not found.</div>;
  return (
    <div id="productContainers">
        <div id="baseInformationContainer">
            <img id="productImageFullP"
            src={Image}
            alt="product image"/>

            <div id="carrousselIndicator">            
                <span className="carrousselIndicatorItem"></span> <br/>
                <span className="carrousselIndicatorItem"></span> <br/>
                <span className="carrousselIndicatorItem"></span> <br/>
            </div>

            <div id="baseItemText">
                <h1 id="itemTitle">{product?.item_title}</h1>
                <h3 id="itemAuthor">{product?.brand}</h3>
                
                <div id="tagsContainer">
                    <span className="itemTags">{product?.category_id}</span>
                    <span className="itemTags">Another Genre</span>
                    <span className="itemTags">Genre3</span>
                    <span className="itemTags">Really loonnng genre</span>
                    <span className="itemTags">Overflowing genre</span>
                </div>
            </div>
        </div>

        <div id="connectingDiv">
            <span className="buyOptions">Edition *</span>
            <span className="buyOptions">Type *</span>
            <span className="buyOptions">Retailer *</span>
            <span className="socialPlaceholderTemp"></span>
            <span className="socialPlaceholderTemp"></span>
            <span className="socialPlaceholderTemp"></span>
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
                <p>Lorem ipsum dolor sit amet consectetur adipiscing elit. Quisque faucibus ex sapien vitae pellentesque sem placerat. In id cursus mi pretium tellus duis convallis. Tempus leo eu aenean sed diam urna tempor. Pulvinar vivamus fringilla lacus nec metus bibendum egestas. Iaculis massa nisl malesuada lacinia integer nunc posuere. Ut hendrerit semper vel className aptent taciti sociosqu. Ad litora torquent per conubia nostra inceptos himenaeos.
                    <br/><br/> Lorem ipsum dolor sit amet consectetur adipiscing elit. Quisque faucibus ex sapien vitae pellentesque sem placerat. In id cursus mi pretium tellus duis convallis. Tempus leo eu aenean sed diam urna tempor. Pulvinar vivamus fringilla lacus nec metus bibendum egestas.</p>
            </div> 
        </div>

        <h2 id="alsoLikeTitle">You might also like...</h2>
        <br/>
        <SmallProduct></SmallProduct>
        
        <div id="furtherStuff">
            <img className="productImageSmall"
            src={Image}
            alt="product image"/>

            <img className="productImageSmall"
            src={Image}
            alt="product image"/>

            <img className="productImageSmall"
            src={Image}
            alt="product image"/>


            <SmallProduct></SmallProduct>


            <img className="productImageSmall"
            src={Image}
            alt="product image"/>

            <img className="productImageSmall"
            src={Image}
            alt="product image"/>

            <img className="productImageSmall"
            src={Image}
            alt="product image"/>
        </div>  
    </div>
  );
}

export default ProductDetails;
