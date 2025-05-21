import Image from '../images/carousel-placeholder.jpg';
import Book from '../components/Book';
import { HashLink } from "react-router-hash-link";
import Shelf from '../components/Shelf';
import { useEffect, useState } from 'react';

const Home = () => {
    const authors = ["Helene Rousseau", "Rachel Herron", "Sabrina Robinson"];
    const pages = ["page1", "page2", "page3"];

    const [carouselData, setCarouselData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [currentSlideIndex, setCurrentSlideIndex] = useState(0);

    useEffect(() => {
        async function loadCarouselData() {
            setLoading(true);
            setError(null);

            try {
                console.log("Loading carousel data...");
                const response = await fetch('/data/catalog.json');
                const catalog = await response.json();

                setCarouselData(catalog.carouselData || []);
            } catch (err) {
                console.error('Failed to load carousel', err);
                setError('Failed to load carousel');
            } finally {
                setLoading(false);
            }
        }

        loadCarouselData();
    }, []);

    return (
        <ol id="containers">
            <li>
                <div id="hero-container">
                    <h2 id="hero-title">Sonitly</h2>

                    <ol id="carousel-controls">
                        {carouselData.map((_, index) => (
                            <li key={index}>
                            <HashLink smooth to={`#heroImg${index + 1}`}>
                                <button onClick={() => setCurrentSlideIndex(index)}></button>
                            </HashLink>
                            </li>
                        ))}
                    </ol>

                    <div id="carousel-images">
                        {
                            carouselData.map((carouselSlide, index) => (
                                <img
                                    key={index}
                                    id={`heroImg${index + 1}`}
                                    src={carouselSlide.thumbnail_image || Image}
                                    alt={carouselSlide.description || "Carousel image"}
                                />
                            ))
                        }
                    </div>

                    <div
                        id="carousel-details"
                        style={{
                            backgroundColor: `var(--color-${carouselData[currentSlideIndex]?.background_color})`
                        }}
                    >
                        {console.log("Current background color:", carouselData[currentSlideIndex]?.background_color)}

                         {carouselData.length > 0 && (
                            <>
                            <h3>{carouselData[currentSlideIndex].item_title}</h3>
                            <hr />
                            <p>{carouselData[currentSlideIndex].description}</p>
                            </>
                        )}
                    </div>
                </div>
            </li>

            <li>
                <div id="intro-container">
                    <div>
                        <ol id="featured-items">
                            <li><span><h3>Product Name</h3><p>Product description</p></span></li>
                            <li><span><h3>Product Name</h3><p>Product description</p></span></li>
                            <li><span><h3>Product Name</h3><p>Product description</p></span></li>
                        </ol>
                    </div>

                    <div id="store-intro">
                        <h2>Introduction</h2>
                        <div>
                            <p>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam hendrerit auctor mi sed viverra...
                            </p>
                            <p>
                            <span>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus tempora ratione excepturi at? Laborum ea officiis beatae sapiente, excepturi corporis doloremque at eius fugit! Ut esse magni voluptatum minima consectetur!</span>
                            <span>Nostrum asperiores non optio mollitia! Voluptas, sint reiciendis ipsum adipisci dignissimos iure saepe numquam non illo dolore quisquam delectus? Eos quibusdam aperiam impedit culpa incidunt maxime iusto quis labore asperiores.</span>
                            <span>Eveniet ex necessitatibus in porro ullam quam, cumque itaque voluptatem eum provident. Modi sapiente obcaecati dolorem ex iste, minima repellendus deleniti repudiandae excepturi, voluptas illum tempora eaque quis expedita nihil.</span>
                            <span>Quisquam nesciunt, temporibus unde consequuntur cumque quod sit quae aliquam ab architecto velit atque nam sunt voluptate voluptates fugit inventore perspiciatis voluptatum earum reprehenderit rerum quis. Nemo eos quidem voluptatem.</span>
                            <span>Consequuntur doloremque sunt accusantium ipsa laborum. Deserunt voluptates necessitatibus fugiat fugit tempore sapiente enim sequi aliquam nemo cum iste aliquid nostrum doloremque voluptatem sit quaerat, libero adipisci quos, asperiores dolorum.</span>
                            <span>Velit alias commodi atque ratione deleniti excepturi. Odio rerum voluptatibus deleniti velit. Nihil adipisci quas unde, veritatis laudantium maxime velit nulla repudiandae laborum. Nihil illum voluptate veniam ex numquam laudantium.</span>
                            <br /><br />
                            <span>Perspiciatis, eveniet iure harum saepe praesentium sequi quod tempora a fugit perferendis tenetur possimus, hic natus, soluta eius voluptatum amet ducimus repellendus deserunt libero nemo ea delectus eligendi ratione. Dolore.</span>
                            <span>Explicabo quibusdam iusto tempore, ut nemo soluta ducimus deleniti iste, laboriosam ullam repellat amet commodi ratione. Eligendi debitis modi aut nobis totam harum quam? Unde illum accusamus sit totam quis?</span>
                            <span>Quo dolorem dolore repellat molestias cum similique, pariatur ut iste doloribus quia. Nulla, recusandae iste deserunt quas aliquam rem quibusdam sapiente molestiae explicabo, minima consectetur quo provident! Ad, quis doloribus.</span>
                            <span>Aut rem blanditiis doloribus ea nisi aspernatur at iste in veniam expedita. In impedit officia reprehenderit voluptatibus, quaerat iste possimus ea molestias repellat facilis aliquam mollitia, labore delectus quis. Aliquam!</span>
                            <br /><br />
                            <br /><br />
                            <br /><br />
                            <br /><br />
                            <br /><br />
                            <br />
                            <span>Quibusdam nam odio illum eaque facere nobis, officia perferendis et molestias earum doloribus, in itaque illo, dicta laborum cumque aut libero animi laudantium! Ab, quo molestias voluptate ipsam atque illo!</span>
                            <span>Hic, earum nostrum. Asperiores, non ullam. Perspiciatis et molestiae, eaque autem enim consequatur nulla est. Laboriosam voluptatum quas aliquam culpa voluptas dicta. Eligendi error ea amet dolorem architecto officia odio.</span>
                        </p>
                        </div>
                    </div>
                </div>
            </li>

            <li id="overview-container">
                <span>
                    <h2>Overview</h2>
                    <div id='overview-text'>
                        <p className='p-hook'>This is a paragraph to give a general summary of the store's mission and other information...</p>
                   <p>
                            <span>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus tempora ratione excepturi at? Laborum ea officiis beatae sapiente, excepturi corporis doloremque at eius fugit! Ut esse magni voluptatum minima consectetur!</span>
                            <span>Nostrum asperiores non optio mollitia! Voluptas, sint reiciendis ipsum adipisci dignissimos iure saepe numquam non illo dolore quisquam delectus? Eos quibusdam aperiam impedit culpa incidunt maxime iusto quis labore asperiores.</span>
                            <span>Eveniet ex necessitatibus in porro ullam quam, cumque itaque voluptatem eum provident. Modi sapiente obcaecati dolorem ex iste, minima repellendus deleniti repudiandae excepturi, voluptas illum tempora eaque quis expedita nihil.</span>
                            <span>Quisquam nesciunt, temporibus unde consequuntur cumque quod sit quae aliquam ab architecto velit atque nam sunt voluptate voluptates fugit inventore perspiciatis voluptatum earum reprehenderit rerum quis. Nemo eos quidem voluptatem.</span>
                            <span>Consequuntur doloremque sunt accusantium ipsa laborum. Deserunt voluptates necessitatibus fugiat fugit tempore sapiente enim sequi aliquam nemo cum iste aliquid nostrum doloremque voluptatem sit quaerat, libero adipisci quos, asperiores dolorum.</span>
                            <span>Velit alias commodi atque ratione deleniti excepturi. Odio rerum voluptatibus deleniti velit. Nihil adipisci quas unde, veritatis laudantium maxime velit nulla repudiandae laborum. Nihil illum voluptate veniam ex numquam laudantium.</span>
                            <br />
                            <span>Perspiciatis, eveniet iure harum saepe praesentium sequi quod tempora a fugit perferendis tenetur possimus, hic natus, soluta eius voluptatum amet ducimus repellendus deserunt libero nemo ea delectus eligendi ratione. Dolore.</span>
                            <span>Explicabo quibusdam iusto tempore, ut nemo soluta ducimus deleniti iste, laboriosam ullam repellat amet commodi ratione. Eligendi debitis modi aut nobis totam harum quam? Unde illum accusamus sit totam quis?</span>
                            <span>Quo dolorem dolore repellat molestias cum similique, pariatur ut iste doloribus quia. Nulla, recusandae iste deserunt quas aliquam rem quibusdam sapiente molestiae explicabo, minima consectetur quo provident! Ad, quis doloribus.</span>
                        </p>
                    </div>
                </span>
                <Book title="About the authors" authors={authors} pages={pages} size="large" type="hard" />
                <Shelf />
            </li>
        </ol>
  );
}

export default Home;
