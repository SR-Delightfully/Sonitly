import React, {useContext, useEffect, useState} from 'react';
import { useParams } from 'react-router-dom';
import Image from '../images/carousel-placeholder.jpg';
import SmallProduct from '../components/SmallProduct';
import ProductSuggestion from '../components/ProductSuggestion';
import {CurrentUserContext} from "../components/CurrentUserContext";

const ProductDetails = () => {
    const { item_id } = useParams();

    const { currentUser, cart, wishlist, likedList, addToCart, editWishlist, editLikedList } = useContext(CurrentUserContext);

    const [stock, setStock] = useState(null);
    const [stockInfo, setStockInfo] = useState(null);
    const [product, setProduct] = useState(null);
    const [category, setCategory] = useState(null);
    const [loading, setLoading] = useState(true);

    const isInWishlist = product ? wishlist.includes(product.item_id) : false;
    const isInLikedList = product ? likedList.includes(product.item_id) : false;
    const productType = [1, 2, 5].includes(product?.category_id)
        ? "productImageMusic"
        : "productImageBig";

    const loadProduct = async () => {
        try {
            const response = await fetch(process.env.PUBLIC_URL + '/data/catalog.json');
            const catalog = await response.json();

            const productFound = catalog.products.find((p) =>
                String(p.item_id) === String(item_id)
            );

            if (!productFound) {
                console.error('Product not found');
                setProduct(null);
                return;
            }
            setProduct(productFound);
            return productFound;

        } catch (err) {
            console.error('Failed to load product:', err);
        } finally {
            setLoading(false);
        }
    };

    const getCategory = async (category_id) => {
        if (!category_id) return;
        try {
            const response = await fetch('/data/catalog.json');
            const catalog = await response.json();
            const categoryFound = catalog.categories.find((c) =>
                String(c.category_id) === String(category_id) //test if it works of if i need item_id.category_id
            );

            console.log("category found " + categoryFound);

            if (!categoryFound) {
                console.error('Category not found');
                setCategory(null);
            }  else {
                setCategory(categoryFound);
                console.log("category set");
            }
        } catch (err) {
            console.log ('Failed to load category:', err);
        }
    };

    const isInStock = (product) => {
        if (!product) return "Loading...";
        return product.quantity_in_stock <= 0 ? "Not in stock" : "In stock";
    }

    useEffect(() => {
        const initializeProduct = async () => {
            const loadedProduct = await loadProduct();
            if (loadedProduct) {
                console.log("product found " + loadedProduct);
                setStockInfo(loadedProduct);
                setStockInfo(isInStock(loadedProduct));
                console.log("product is " + stockInfo);
                await getCategory(loadedProduct.category_id);
            }
        };

        initializeProduct();
    }, [item_id]);

    if (loading) return <div>Loading product details...</div>;
    if (!product) return <div>Product not found.</div>;
    return (
        <>
        <div id="baseProductInfo">
            <span id="leftInfo">
                <span id="CButtons">
                    <button className="carousselButton"></button>
                    <button className="carousselButton"></button>
                    <button className="carousselButton"></button>
                </span>

                <img id={productType}
                src={product?.thumbnail_image || Image}
                alt="product image"/>
            </span>

            <span id="rightInfo">
                <h1 id="itemTitle">{product?.item_title}</h1>
                <h3 id="itemAuthor">{product?.brand} | $ {product?.unit_price} CA</h3>

                <div id="tagsContainer">
                   <span className="itemTags">{product?.category_id}</span>
                  <span className="itemTags">{category?.category_name}</span>
                  <span className="itemTags">{category?.description}</span>
                </div>

                <div id="optionContainer">
                    <button className="buyingOption"
                            title="Like"
                            onClick={() => editLikedList(product)}>{isInLikedList ? "💖" : "♥️"}</button>
                    <button className="buyingOption"
                            title="Add to wishlist!"
                            onClick={() => editWishlist(product)}>{isInWishlist ? "💌" : "✉️"}</button>
                     <button className="buyingOption"
                          title="Add to cart!"
                          onClick={() => {addToCart(product)}}>{"🛒" || "add to cart"}</button>
                </div>
            </span>
        </div>

        <div id="additionalProductInfo">
            <span id="leftStats">
                <h3>Edition House</h3>
                <p>{product?.make}</p>

                <h3>Stock Information : {stockInfo}</h3>
                <p>Price : $ {product.unit_price} CA</p>
                <p>Current stock : {product.quantity_in_stock}</p>
            </span>
            <span id="rightDescription">
                <h3>Description</h3>
                <p>{product?.description}</p>
            </span>
        </div>
        </>
    );

}

export default ProductDetails;
