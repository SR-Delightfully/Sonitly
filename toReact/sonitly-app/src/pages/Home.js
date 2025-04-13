import Image from '../images/carousel-placeholder.jpg';
const Home = () => {
  return (
    <ol id="containers">
        <li>
            <div id="hero-container">
                <h2 id="hero-title">Company Name</h2>
                    <ol id="carousel-controls">
                        {/* <!-- Buttons to be added remotely later --> */}
                        <li><button></button></li>
                            <li><button></button></li>
                            <li><button></button></li>
                            <li><button></button></li>
                        </ol>
                        <div id="carousel-images">
                            <img src={Image} alt="Carousel Placeholder Image" />
                            <img src={Image} alt="Carousel Placeholder Image" />
                            <img src={Image} alt="Carousel Placeholder Image" />
                            <img src={Image} alt="Carousel Placeholder Image" />
                            <img src={Image} alt="Carousel Placeholder Image" />
                            {/* <!-- Images to be added remotely later --> */}
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
            <div>
                    <h2>Overview</h2>
                    <p>This is a paragraph to give a general summary of the store's mission and other information<br /> that they may want to display to their users. Lorem ipsum...</p>
                    <p></p>
            </div>
            <div>
                <ol id="book">
                    <li>
                        <h3>Project created by:</h3>
                        <div>
                            <p>Students:</p>
                            <ul>
                                <li>Helene Rousseau</li>
                                <li>Rachel Herron</li>
                                <li>Sabrina Robinson</li>
                            </ul>
                        </div>
                    </li>
                    <li>page</li>
                    <li>page</li>
                    <li>page</li>
                    <li>book cover</li>  
                </ol>
            </div>
            <span className='divider-shelf'></span>
        </li>
    </ol>
  );
}

export default Home;
