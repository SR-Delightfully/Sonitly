const Product = ({ type, productName, description, price, src }) => {

    if (type.toLowerCase() === "book") {
        return (
            <div className="gallery-img">
                <img
                    src={src}
                    alt="Book cover"
                    width='300'
                    height='550'
                />
                <p>{productName}</p>
                <p>{price}</p>
            </div>
        );
    } else {
        return (
            <div className="gallery-img">
                <img
                    src={src}
                    alt="Album cover"
                    width='300'
                    height='300'
                />
                <p>{productName}</p>
                <p>{description}</p>
                <p>${price}</p>
            </div>
        );
    }
};

export default Product;
