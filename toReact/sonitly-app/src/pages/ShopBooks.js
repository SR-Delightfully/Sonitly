import ImagePlaceholder from '../images/image-placeholder.png';
import Product from '../components/Product';
import { Link } from 'react-router-dom';
import { useEffect, useState } from "react";
//const fs = require('fs');
const path = require('path');
import {fetchData} from "../data/fetchWrapper";

const filePath = path.join(__dirname, 'public', 'data', 'bookCatalog.json');

// Clear the file
console.log("clearing all the contents of the JSON file");
//fs.writeFileSync(filePath, JSON.stringify([], null, 2)); //test if it wo

const ShopBooks = () => {
    const [books, setBooks] = useState([]);
    useEffect(() => {
        async function loadToJson() {
            let allBooks = [];
            console.log("Loading the books");

            for (let i = 1; i < 26; i++) { // Fetch 25 pages
                const url = `https://gutendex.com/books?page=${i}`;
                try {
                    const response = await fetch(url);
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
                    console.log(`Fetched page ${i}`);
                } catch (error) {
                    console.error(`Error fetching page ${i} : ${error}`);
                }
            }

            try {
                console.log(JSON.stringify(allBooks, null, 2));
                //fs.writeFileSync('./data/bookCatalog.json', JSON.stringify(allBooks, null, 2));
                console.log('Saved to bookCatalog.json!');
            } catch (error) {
                console.log("error saving to JSON file");
            }
        }
        loadToJson();
    })

    useEffect(() => {
        async function loadBooks() {
            console.log("Loading the books");
            const uri = './data/bookCatalog.json'; //will not work
            const bookCatalog = await fetchData(uri);
            setBooks(bookCatalog.books);
        }
        loadBooks();
    }, []);

    // if (loading) return <div>Loading books...</div>;
    // if (!product) return <div>Book not found.</div>;

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
