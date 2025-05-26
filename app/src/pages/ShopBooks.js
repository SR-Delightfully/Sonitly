import ImagePlaceholder from '../images/image-placeholder.png';
import Product from '../components/Product';
import { Link } from 'react-router-dom';
import { useEffect, useState } from "react";
import {fetchData} from "../data/fetchWrapper";

const ShopBooks = () => {
    const [books, setBooks] = useState([]);
    useEffect(() => {
        async function loadToJson() {
            let allBooks = [];

            for (let i = 1; i < 26; i++) { 
                try {
                    const response = await fetch(`https://gutendex.com/books?page=${i}`);
                    const data = await response.json();

                    const result = data.results.map(book => ({
                        id: book.id,
                        title: book.title || 'unknown title',
                        author: book.authors.map(a => a.name).join(', ') || 'unknown author(s)',
                        languages: book.languages || [],
                        description: book.summaries[0] || 'no summary available',
                        tags: book.subjects || [],
                        text_link: book.formats['text/html'] || null,
                        cover: book.formats['image/jpeg'] || ImagePlaceholder
                    }));

                    allBooks = [...allBooks, ...result];
                } catch (error) {
                    console.error(`Error fetching page ${i} : ${error}`);
                }
            }
        }
        loadToJson();
    })

    useEffect(() => {
        async function loadBooks() {
            const uri = './data/bookCatalog.json'; 
            const bookCatalog = await fetchData(uri);
            setBooks(bookCatalog.books);
        }
        loadBooks();
    }, []);


    return (
        <>
            <h2>Book Gallery</h2>
            <div id="gallery-container">
                {books.map((b) => (
                    <Link to={`/shop/product/${b.id}`}>
                        <Product type={'book'}
                                 key={b.id}
                                 productName={b.title}
                                 description={b.description}
                                 price={<a href={b.text_link["text/html"]} target="_blank" rel="noopener noreferrer">Read Online (Free)</a>}
                                 src={b.cover}>
                        </Product>
                    </Link>
                ))}
            </div>
        </>
    )}

export default ShopBooks;
