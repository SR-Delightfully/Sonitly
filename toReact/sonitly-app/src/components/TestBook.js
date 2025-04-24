const TestBook = ({ bookName, author, price, src }) => {
    return (
      <div className="gallery-img">
        <img
          src={src}
          alt="Book cover"
          width='256'
          height='392'
        />
        <p>{bookName}</p>
        <p>{author}</p>
        <p>${price}</p>
      </div>
    );
  };
  
  
  
  
  export default TestBook;
  