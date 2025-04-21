import Image from '../images/carousel-placeholder.jpg';
import Book from '../components/Book';
import { HashLink } from "react-router-hash-link";
import Shelf from '../components/Shelf';

const Home = () => {
    const authors = ["Helene Rousseau","Rachel Herron", "Sabrina Robinson"];
    const pages = ["page1","page2", "page3"];
  return (
    <ol id="containers">
        <li>
            <div id="hero-container">
                <h2 id="hero-title">Company Name</h2>
                <ol id="carousel-controls">
                    <li><HashLink smooth to="#heroImg1"><button></button></HashLink></li>
                    <li><HashLink smooth to="#heroImg2"><button></button></HashLink></li>
                    <li><HashLink smooth to="#heroImg3"><button></button></HashLink></li>
                    <li><HashLink smooth to="#heroImg4"><button></button></HashLink></li>
                </ol>
                <div id="carousel-images">
                    <img id="heroImg1" src={Image} alt="Carousel Placeholder Image" />
                    <img id="heroImg2" src={Image} alt="Carousel Placeholder Image" />
                    <img id="heroImg3" src={Image} alt="Carousel Placeholder Image" />
                    <img id="heroImg4" src={Image} alt="Carousel Placeholder Image" />
                </div>
                <div id="carousel-details">
                    <h3>Title of image</h3>
                    <hr />
                    <p>description of images, <br />
                    or more information about <br />
                    the artist, the sale, etc.</p>
                </div>
            </div>
        </li>
        <li>
            <div id="intro-container">
                <div>
                    <ol id="featured-items">
                        <li><span><h3>product name</h3><p>product desctiption</p></span></li>
                        <li><span><h3>product name</h3><p>product desctiption</p></span></li>
                        <li><span><h3>product name</h3><p>product desctiption</p></span></li>
                    </ol>
                </div>
                <div id="store-intro">
                <h2>Introduction</h2>
                    <div>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam hendrerit auctor mi sed viverra. Cras mi sem, ultricies et feugiat eu, mollis vitae purus. <br />
                            Sed dapibus commodo mi non tincidunt. Etiam sollicitudin ante a libero consectetur, eu posuere neque porta. Morbi nunc odio, fermentum sed magna nec, egestas volutpat dui. <br /> 
                            Aliquam eget rhoncus purus. Duis sagittis neque non finibus tincidunt. Nunc posuere lectus tellus, quis luctus ex vulputate nec. Sed venenatis convallis dolor eu mattis.</p>
                        <p> Ut vestibulum imperdiet mauris, et tempor turpis rhoncus eget. In interdum faucibus tortor, et finibus risus volutpat ac.<br/>
                                Nunc est elit, consectetur eu suscipit auctor, volutpat et arcu. Donec tortor augue, cursus quis dolor eget, aliquam volutpat lectus.</p>
                        <p>Integer a auctor lectus, a suscipit nisl. Maecenas pellentesque dapibus ultrices. Integer tortor est, varius vitae nunc ut, cursus tincidunt libero. <br />
                            Integer nec dictum quam, in finibus ipsum. Mauris varius nulla quis leo interdum iaculis. Phasellus consequat suscipit consectetur. Sed vitae convallis velit.<br />
                            In a nibh sit amet lorem viverra laoreet. Proin id rutrum quam. Curabitur ullamcorper placerat odio, quis congue ex egestas et. In hac habitasse platea dictumst.<br />
                            Quisque et leo nec leo lacinia fermentum ut vel dui. Praesent eleifend nec lacus et varius. Donec id luctus tortor.<br /> 
                            Mauris rhoncus, dolor in consectetur dignissim, mauris nulla condimentum sapien, in viverra dui magna nec orci. <br />
                            In pretium imperdiet nibh, nec ultrices felis tincidunt ac. Phasellus in massa eu urna fermentum fringilla sed ac tellus. <br />
                            Vestibulum ut efficitur arcu, at eleifend libero. Donec eget risus neque.
                        </p>
                    </div>
                </div>
            </div>  
        </li>

        <li id="overview-container">
            <span>
                <h2>Overview</h2>
                <div id='overview-text'>
                    <p className='p-hook'>This is a paragraph to give a general summary of the store's mission and other information<br /> that they may want to display to their users. Lorem ipsum...</p>
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
                        <span>Aut rem blanditiis doloribus ea nisi aspernatur at iste in veniam expedita. In impedit officia reprehenderit voluptatibus, quaerat iste possimus ea molestias repellat facilis aliquam mollitia, labore delectus quis. Aliquam!</span>
                        <span>Quibusdam nam odio illum eaque facere nobis, officia perferendis et molestias earum doloribus, in itaque illo, dicta laborum cumque aut libero animi laudantium! Ab, quo molestias voluptate ipsam atque illo!</span>
                        <span>Hic, earum nostrum. Asperiores, non ullam. Perspiciatis et molestiae, eaque autem enim consequatur nulla est. Laboriosam voluptatum quas aliquam culpa voluptas dicta. Eligendi error ea amet dolorem architecto officia odio.</span>
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
