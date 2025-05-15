import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Image from '../images/carousel-placeholder.jpg';
import SmallProduct from '../components/SmallProduct';
import ProductSuggestion from '../components/ProductSuggestion';

const ProductDetails = ({type}) => {

    const [product, setProduct] = useState(null);
    const [loading, setLoading] = useState(true);

    if (type.toLowerCase() === "book") {
        const { id } = useParams();
        useEffect(() => {
            const loadBooks = async () => {
                try {
                    const response = await fetch('/data/bookCatalog.json');
                    const catalog = await response.json();

                    const productFound = catalog.products.find((p) =>
                        String(p.id) === String(id)
                    );

                    if (!productFound) {
                        console.error('Book not found');
                        return;
                    }

                    setProduct(productFound);
                } catch (err) {
                    console.error('Failed to load book:', err);
                } finally {
                    setLoading(false);
                }
            }
        })

    } else {
        useEffect(() => {
            const { item_id } = useParams();
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
    }
  
    if (loading) return <div>Loading product details...</div>;
    if (!product) return <div>Product not found.</div>;

    if (type.toLowerCase() === "book") {
        return (
            <>
                <div id="baseProductInfo">
                    <span id="leftInfo">
                      <span id="CButtons">
                          <span class="carousselButton"></span>
                          <span class="carousselButton"></span>
                          <span class="carousselButton"></span>
                      </span>

                      <img id="productImageBig"
                           src={product?.thumbnail_image || Image}
                           alt="product image"/>
                    </span>

                    <span id="rightInfo">
                      <h1 id="itemTitle">{product?.item_title}</h1>
                      <h3 id="itemAuthor">{product?.brand}</h3>

                      <p>00 | 00 Reviews</p>

                      <div id="tagsContainer">
                          <span class="itemTags">{product?.category_id}</span>
                          <span class="itemTags">{product?.category_name}</span>
                          <span class="itemTags">Genre3</span>
                          <span class="itemTags">Really loonnng genre</span>
                          <span class="itemTags">Overflowing genre</span>
                      </div>

                      <div id="optionContainer">
                          <button class="buyingOption">Edition * </button>
                          <button class="buyingOption">Type * </button>
                          <button class="buyingOption">Retailer * </button>
                          <button class="buyingOption">1</button> {/*save/like*/}
                          <button class="buyingOption">2</button> {/*add to cart*/}
                          <button class="buyingOption">3</button> {/*share*/}
                      </div>
                    </span>
                </div>

                <div id="additionalProductInfo">
                  <span id="leftStats">
                    <h3>Edition House</h3>
                    <p>This is an edition house</p>

                    <h3>Edition House</h3>
                    <p>Word Count : 0000</p>
                    <p>Page Count : 0000</p>
                    <p>Chapters : 0000</p>
                    <p>Editions : 0000</p>

                    <h3>Languages</h3>
                    <p>Language 1</p>
                    <p>Language 2</p>
                  </span>
                <span id="rightDescription">
                    <h3>Description</h3>
                    <p>{product?.description}</p>
                </span>
            </div>
                <ProductSuggestion></ProductSuggestion>
            </>
        );
    } else {
        return (
            <>
            </>
        );
    }
}

export default ProductDetails;
