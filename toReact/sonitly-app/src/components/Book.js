import React from "react";
import { useEffect } from "react";


const Book = ({title, authors, pages, size, type}) => {
    useEffect(() => {
        const frontCover = document.getElementById(`${type}-cover-front`);
        const backCover = document.getElementById(`${type}-cover-back`);
        const pages = document.getElementsByClassName("page");
    
        const handleBook = () => {
            if (size = "large") {
                for (let i = 0; i < pages.length; i++) {
                    pages[i].setAttribute("style", `right:-${i + 4}rem;z-index:${60 - i}`)
                }
            }
            if (size ="small") {
                for (let i = 0; i < pages.length; i++) {
                    pages[i].setAttribute("style", `right:-${(i / 2) + 3.5}rem;z-index:${60 - i}`)
                } 
            }
        }
        handleBook();
    }, []);

  return (
    <ol id="book" className={`book-wrapper ${size}`}>
        <li id="hard-cover-front" className={size}>
            <h3>{title}</h3>
            <h5> Written by: 
                {authors}
            </h5>
        </li>
        {pages.map((pages, index) => (
            <li className={`${size} page`} key={1 + index}>{pages[index]}</li>
        ))}
        
        <li id="hard-cover-back" className={size}></li>
</ol>
  );
}

export default Book;
