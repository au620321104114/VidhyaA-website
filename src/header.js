import React from 'react';
import chicken from './image/chicken.jpg';
import table from './image/table.jpg';
import grill1 from './image/grill1.jpg';
import pane2 from './image/pane2.jpg';
import leg3 from './image/leg3.jpg';
import veggie from './image/veggie.jpg';
import grill from './image/grill.jpg';
import garlic1 from './image/garlic1.jpg';

import './footer.css'; // Import the CSS file
import background from './image/background.jpg';

function Header() {
  return (
    <div className="card">
    <div class="nav-btn">
        <label for="nav-check">
            <svg xmlns="http://www.w3.org/2000/svg" height="40px" viewBox="0 -960 960 960" width="40px" fill="#e8eaed"><path d="M120-240v-80h720v80H120Zm0-200v-80h720v80H120Zm0-200v-80h720v80H120Z"/></svg>
        </label>
    </div>
    <input type="checkbox" id="nav-check" />
    <label for="nav-check" class="overlay"></label>
    <nav class="navbar">
         <div class="navbar-header">
            <h3>TFC Nation</h3>
            <img src={chicken} alt="TFC" />
            <span class="nav-close">
                <label for="nav-check">
                    <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#e8eaed"><path d="m256-200-56-56 224-224-224-224 56-56 224 224 224-224 56 56-224 224 224 224-56 56-224-224-224 224Z"/></svg> 
                </label>
            </span>
         </div>
         <ul class="nav-items">
            <li><a href="#home" class="nav-link">home</a></li>
            <li><a href="#feature" class="nav-link">features</a></li>
            <li><a href="#about" class="nav-link">about</a></li>
            <li><a href="#product" class="nav-link">product</a></li>
            <li><a href="#contact" class="nav-link">contact</a></li>
         </ul>
    </nav>
    <header class="heater" id="home">
        <div class="banner">
            <h2>Discover The Secret To Taste</h2>
            <h1>Terder Fried Chichen</h1>
            <a href="#" class="btn banner-btn">View More</a>
        </div>
    </header>
<div class="content-divider"></div>
    <section class="features clearfix" id="feature">
        <div class="feature">
            <span class="feature-icon">
                <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#e8eaed"><path d="M640-440 474-602q-31-30-52.5-66.5T400-748q0-55 38.5-93.5T532-880q32 0 60 13.5t48 36.5q20-23 48-36.5t60-13.5q55 0 93.5 38.5T880-748q0 43-21 79.5T807-602L640-440Zm0-112 109-107q19-19 35-40.5t16-48.5q0-22-15-37t-37-15q-14 0-26.5 5.5T700-778l-60 72-60-72q-9-11-21.5-16.5T532-800q-22 0-37 15t-15 37q0 27 16 48.5t35 40.5l109 107ZM280-220l278 76 238-74q-5-9-14.5-15.5T760-240H558q-27 0-43-2t-33-8l-93-31 22-78 81 27q17 5 40 8t68 4q0-11-6.5-21T578-354l-234-86h-64v220ZM40-80v-440h304q7 0 14 1.5t13 3.5l235 87q33 12 53.5 42t20.5 66h80q50 0 85 33t35 87v40L560-60l-280-78v58H40Zm80-80h80v-280h-80v280Zm520-546Z"/></svg>
            </span>
            <h4 class="feature-title">Made With Love</h4>
            <p class="feature-text">Discover heartfelt hospitality in our cozy, lovingly accommodations.</p>
        </div>
        <div class="feature">
            <span class="feature-icon">
                <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#e8eaed"><path d="M280-80v-366q-51-14-85.5-56T160-600v-280h80v280h40v-280h80v280h40v-280h80v280q0 56-34.5 98T360-446v366h-80Zm400 0v-320H560v-280q0-83 58.5-141.5T760-880v800h-80Z"/></svg>
            </span>
            <h4 class="feature-title">Taste</h4>
            <p class="feature-text">Savor the love in every bite of our exquisite, crafted cuisine.</p>
        </div>
        <div class="feature">
            <span class="feature-icon">
                <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#e8eaed"><path d="M160-120v-80h640v80H160Zm160-160q-66 0-113-47t-47-113v-400h640q33 0 56.5 23.5T880-760v120q0 33-23.5 56.5T800-560h-80v120q0 66-47 113t-113 47H320Zm0-80h240q33 0 56.5-23.5T640-440v-320H240v320q0 33 23.5 56.5T320-360Zm400-280h80v-120h-80v120ZM320-360h-80 400-320Z"/></svg>
            </span>
            <h4 class="feature-title">Energy</h4>
            <p class="feature-text">Feel the vibrant energy and warmth in our welcoming, lively atmosphere.</p>
        </div>
        <div class="feature">
            <span class="feature-icon">
                <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#e8eaed"><path d="M400-160h160v-44l50-20q65-26 110.5-72.5T786-400H174q20 57 65 103.5T350-224l50 20v44Zm-80 80v-70q-107-42-173.5-130T80-480h80v-320l720-80v60l-460 52v68h460v60H420v160h460q0 112-66.5 200T640-150v70H320Zm0-620h40v-62l-40 5v57Zm-100 0h40v-50l-40 4v46Zm100 220h40v-160h-40v160Zm-100 0h40v-160h-40v160Zm260 80Z"/></svg>
            </span>
            <h4 class="feature-title">Family Recipe</h4>
            <p class="feature-text">Enjoy our family recipes, lovingly crafted for a taste of tradition.</p>
        </div>
    </section>
    <section class="about" id="about">
        <div class="section-center clearfix">
            <div class="about-img">
                <div class="about-picture-container">
                    <img src={table} alt="TFC" class="about-picture" />
                </div>
            </div>
            <div class="about-info">
                <div class="section-title">
                    <h3>About Us</h3>
                    <h2>TFC Nation</h2>
                </div>
                <p class="about-text">
Discover a haven of luxury and relaxation in our meticulously designed rooms and suites, ensuring a serene and memorable stay.
                </p>
                <p class="about-text">
Our hotel combines modern elegance with personalized service, offering amenities tailored to both leisure and business travelers, ensuring every guest enjoys a seamless and enjoyable experience.         
                </p>
                <a href="#" class="btn">Learn More</a>
            </div>
        </div>
    </section>
    <section class="products" id="product">
        <div class="section-center clearfix">
            <div class="product-info">
                <div class="section-title">
                    <h3>Check Out</h3>
                    <h2>Our Recipe</h2>
                </div>
                <p class="product-text">
                    Indulge in our culinary delights where every dish is meticulously prepared with passion and expertise, showcasing the finest ingredients and flavors. From comforting classics to innovative creations, our recipes embody a commitment to excelence, ensuring each dining experience is unforgettable and filled with delight.
                </p>
                <a href="#" class="btn">Learn More</a>
            </div>
            <div class="product-inventory clearfix">
                <div class="product">
                    <img src={grill} alt="product" class="product-img" />
                    <h4 class="product-title">Grill Chicken</h4>
                    <h4 class="product-price">&#8377; 350</h4>
                </div>
                <div class="product">
                    <img src={veggie} alt="product" class="product-img" />
                    <h4 class="product-title">Veggie Chicken</h4>
                    <h4 class="product-price">&#8377; 325</h4>
                </div>
                <div class="product">
                    <img src={garlic1} alt="product" class="product-img" />
                    <h4 class="product-title">Garlic Chicken</h4>
                    <h4 class="product-price">&#8377; 145</h4>
                </div>
                
            </div>
        </div>
    </section>
     <section class="sevices" id="service">
         <div class="section-title services-title">
            <h3>Explore</h3>
            <h2>Our Services</h2>
         </div>
         <div class="section-center clearfix">
            <div class="service-card">
                <div class="service-img-container">
                    <img src={grill1} alt="product" class="service-img" />
                    <span class="service-icon">
                        <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#e8eaed"><path d="M200-120v-400q-33 0-56.5-23.5T120-600v-212q0-12 8-20t20-8q12 0 20 8t8 20v132h36v-132q0-12 8-20t20-8q12 0 20 8t8 20v132h36v-132q0-12 8-20t20-8q12 0 20 8t8 20v212q0 33-23.5 56.5T280-520v400h-80Zm280 0v-404q-42-20-61-62.5T400-676q0-63 31.5-113.5T520-840q57 0 88.5 50.5T640-676q0 47-19 89.5T560-524v404h-80Zm200 0v-720q66 0 113 47t47 113v240h-80v320h-80Z"/></svg>
                    </span>
                </div>
                <div class="service-info">
                    <h4>Custom Recipes</h4>
                    <p>Experience our bespoke menu, crafted with care and passion for a distinctive culinary journey</p>
                    <a href="#" class="btn service-btn">Read More</a>
                </div>
            </div>
            <div class="service-card">
                <div class="service-img-container">
                    <img src={pane2} alt="product" class="service-img" />
                    <span class="service-icon">
                        <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#e8eaed"><path d="M680-600h80v-80h-80v80Zm0 160h80v-80h-80v80Zm0 160h80v-80h-80v80Zm0 160v-80h160v-560H480v56l-80-58v-78h520v720H680Zm-640 0v-400l280-200 280 200v400H360v-200h-80v200H40Zm80-80h80v-200h240v200h80v-280L320-622 120-480v280Zm560-360ZM440-200v-200H200v200-200h240v200Z"/></svg>
                    </span>
                </div>
                <div class="service-info">
                    <h4>Home Delivery</h4>
                    <p>Convenient home delivery for our delicious menu, ensuring fresh flavors delivered to your doorstop</p>
                    <a href="#" class="btn service-btn">Read More</a>
                </div>
            </div>
            <div class="service-card">
                <div class="service-img-container">
                    <img src={leg3} alt="product" class="service-img" />
                    <span class="service-icon">
                        <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#e8eaed"><path d="M200-80q-33 0-56.5-23.5T120-160v-451q-18-11-29-28.5T80-680v-120q0-33 23.5-56.5T160-880h640q33 0 56.5 23.5T880-800v120q0 23-11 40.5T840-611v451q0 33-23.5 56.5T760-80H200Zm0-520v440h560v-440H200Zm-40-80h640v-120H160v120Zm200 280h240v-80H360v80Zm120 20Z"/></svg>
                    </span>
                </div>
                <div class="service-info">
                    <h4>Tender Chicken</h4>
                    <p>Tender chicken, expertly prepared to perfection for a delectable dining experience.</p>
                    <a href="#" class="btn service-btn">Read More</a>
                </div>
            </div>
         </div>
     </section>
    <section class="contact" id="contact">
        <div class="section-center clearfix">
            <div class="contact-info">
                <div class="contact-item">
                    <h4 class="contact-title"> 
                        <span class="contact-icon">
                        <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#e8eaed"><path d="M240-200h120v-240h240v240h120v-360L480-740 240-560v360Zm-80 80v-480l320-240 320 240v480H520v-240h-80v240H160Zm320-350Z"/></svg>
                        </span>
                        Address
                    </h4>
                    <div class="contact-text">
                        123 Cherry Road Salam <br />
                        Pincode - 636007
                    </div>
                </div>
                <div class="contact-item">
                    <h4 class="contact-title"> 
                        <span class="contact-icon">
                            <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#e8eaed"><path d="M160-160q-33 0-56.5-23.5T80-240v-480q0-33 23.5-56.5T160-800h640q33 0 56.5 23.5T880-720v480q0 33-23.5 56.5T800-160H160Zm320-280L160-640v400h640v-400L480-440Zm0-80 320-200H160l320 200ZM160-640v-80 480-400Z"/></svg>
                        </span>
                        Email
                    </h4>
                    <div class="contact-text">
                        vidhya123@gmail.com
                    </div>
                </div>
                <div class="contact-item">
                    <h4 class="contact-title"> 
                        <span class="contact-icon">
                            <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#e8eaed"><path d="M798-120q-125 0-247-54.5T329-329Q229-429 174.5-551T120-798q0-18 12-30t30-12h162q14 0 25 9.5t13 22.5l26 140q2 16-1 27t-11 19l-97 98q20 37 47.5 71.5T387-386q31 31 65 57.5t72 48.5l94-94q9-9 23.5-13.5T670-390l138 28q14 4 23 14.5t9 23.5v162q0 18-12 30t-30 12ZM241-600l66-66-17-94h-89q5 41 14 81t26 79Zm358 358q39 17 79.5 27t81.5 13v-88l-94-19-67 67ZM241-600Zm358 358Z"/></svg>
                        </span>
                        Telephone
                    </h4>
                    <div class="contact-text">
                        +91 9473626234
                    </div>
                </div>
            </div>
            <div class="contact-form">
                <h3>Contact Us</h3>
                <form action="">
                     <div class="form-group">
                        <input type="text" class="form-control" required />
                        <label for="" class="form-label">Name</label>
                     </div>
                     <div class="form-group">
                        <input type="email" class="form-control" required />
                        <label for="" class="form-label">Email</label>
                     </div>
                     <div class="form-group">
                        <textarea class="form-control" required></textarea>
                        <label for="" class="form-label">Message</label>
                     </div>
                     <button class="btn submit-btn">Send Message</button>
                </form>
            </div>
        </div>
    </section>
    <footer class="footer">
        <div class="section-center">
            <div class="social-icons">
                <a href="#" class="social-icon">
                    <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="50" height="50" viewBox="0 0 48 48">
                        <path d="M 24 4 C 12.972066 4 4 12.972074 4 24 C 4 35.027926 12.972066 44 24 44 C 35.027934 44 44 35.027926 44 24 C 44 12.972074 35.027934 4 24 4 z M 24 7 C 33.406615 7 41 14.593391 41 24 C 41 32.380773 34.967178 39.306373 27 40.720703 L 27 29 L 30.625 29 C 31.129 29 31.555188 28.623047 31.617188 28.123047 L 31.992188 25.123047 C 32.028188 24.839047 31.938047 24.553891 31.748047 24.337891 C 31.559047 24.122891 31.287 24 31 24 L 27 24 L 27 20.5 C 27 19.397 27.897 18.5 29 18.5 L 31 18.5 C 31.552 18.5 32 18.053 32 17.5 L 32 14.125 C 32 13.607 31.604844 13.174906 31.089844 13.128906 C 31.030844 13.123906 29.619984 13 27.833984 13 C 23.426984 13 21 15.616187 21 20.367188 L 21 24 L 17 24 C 16.448 24 16 24.447 16 25 L 16 28 C 16 28.553 16.448 29 17 29 L 21 29 L 21 40.720703 C 13.032822 39.306373 7 32.380773 7 24 C 7 14.593391 14.593385 7 24 7 z"></path>
                    </svg>
                </a>
                <a href="#" class="social-icon">
                    <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="50" height="50" viewBox="0 0 48 48">
                        <path d="M 32 6 C 26.568583 6 22.160643 10.388731 22.042969 15.792969 C 17.240727 15.216998 14.113589 13.421507 12.195312 11.652344 C 10.067982 9.6903754 9.3945312 7.9472656 9.3945312 7.9472656 A 1.50015 1.50015 0 0 0 6.8007812 7.5996094 C 6.8007812 7.5996094 5 10 5 13.5 C 5 15.500985 5.6317952 16.981554 6.3847656 18.236328 C 6.3570276 18.223338 6.1699219 18.158203 6.1699219 18.158203 A 1.50015 1.50015 0 0 0 4.0058594 19.636719 C 4.0058594 19.636719 4.5832039 23.856843 8.5507812 26.941406 L 8.1367188 27.044922 A 1.50015 1.50015 0 0 0 7.1972656 29.244141 C 7.1972656 29.244141 7.8700527 30.382221 9.2792969 31.580078 C 10.11485 32.290298 11.34227 33.023169 12.789062 33.701172 C 11.012271 34.35044 8.362818 35 4.5 35 A 1.50015 1.50015 0 0 0 3.3710938 37.488281 C 3.3710938 37.488281 4.5173251 38.751002 6.7832031 39.849609 C 9.0490812 40.948217 12.539474 42 17.5 42 C 26.219697 42 32.484656 37.817151 36.394531 32.515625 C 40.304407 27.214099 42 20.861111 42 16 C 42 15.691547 41.980739 15.387437 41.953125 15.085938 C 44.064371 13.051602 44.856626 11.522235 44.894531 11.447266 C 45.084531 11.066266 45.01375 10.608688 44.71875 10.304688 C 44.42475 9.9996875 43.969031 9.9137969 43.582031 10.091797 L 43.419922 10.166016 C 43.280922 10.230016 43.141953 10.294422 43.001953 10.357422 C 43.408953 9.7084219 43.730125 9.014875 43.953125 8.296875 C 44.077125 7.900875 43.943234 7.4669375 43.615234 7.2109375 C 43.287234 6.9549375 42.835469 6.9275312 42.480469 7.1445312 C 41.258221 7.8873594 40.086652 8.40739 38.867188 8.7558594 C 37.072578 7.0534724 34.656873 6 32 6 z M 32 9 C 35.883178 9 39 12.116822 39 16 C 39 20.138889 37.445593 26.035901 33.980469 30.734375 C 30.515344 35.432849 25.280303 39 17.5 39 C 13.7348 39 11.230189 38.318942 9.3535156 37.582031 C 11.319341 37.276755 13.011947 36.869367 14.228516 36.398438 C 16.338182 35.581792 17.476563 34.638672 17.476562 34.638672 A 1.50015 1.50015 0 0 0 16.863281 32.044922 C 14.140556 31.364241 12.394328 30.263307 11.298828 29.345703 L 12.863281 28.955078 A 1.50015 1.50015 0 0 0 13.039062 26.099609 C 9.7939415 24.851486 8.4312292 23.086373 7.734375 21.607422 C 8.5823538 21.782967 9.3718961 22 10.5 22 A 1.50015 1.50015 0 0 0 11.169922 19.158203 C 11.169922 19.158203 8 17.7 8 13.5 C 8 12.745947 8.2088435 12.268355 8.3613281 11.697266 C 8.884507 12.400354 9.3156815 13.07859 10.160156 13.857422 C 12.734824 16.231954 16.990366 18.653154 23.419922 18.998047 A 1.50015 1.50015 0 0 0 25 17.5 L 25 16 C 25 12.116822 28.116822 9 32 9 z"></path>
                    </svg>
                </a>
                <a href="#" class="social-icon">
                    <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="26" height="26" viewBox="0 0 26 26">
                        <path d="M 7.546875 0 C 3.390625 0 0 3.390625 0 7.546875 L 0 18.453125 C 0 22.609375 3.390625 26 7.546875 26 L 18.453125 26 C 22.609375 26 26 22.609375 26 18.453125 L 26 7.546875 C 26 3.390625 22.609375 0 18.453125 0 Z M 7.546875 2 L 18.453125 2 C 21.527344 2 24 4.46875 24 7.546875 L 24 18.453125 C 24 21.527344 21.53125 24 18.453125 24 L 7.546875 24 C 4.472656 24 2 21.53125 2 18.453125 L 2 7.546875 C 2 4.472656 4.46875 2 7.546875 2 Z M 20.5 4 C 19.671875 4 19 4.671875 19 5.5 C 19 6.328125 19.671875 7 20.5 7 C 21.328125 7 22 6.328125 22 5.5 C 22 4.671875 21.328125 4 20.5 4 Z M 13 6 C 9.144531 6 6 9.144531 6 13 C 6 16.855469 9.144531 20 13 20 C 16.855469 20 20 16.855469 20 13 C 20 9.144531 16.855469 6 13 6 Z M 13 8 C 15.773438 8 18 10.226563 18 13 C 18 15.773438 15.773438 18 13 18 C 10.226563 18 8 15.773438 8 13 C 8 10.226563 10.226563 8 13 8 Z"></path>
                    </svg>
                </a>
            </div>
            <h4 class="footer-text">&copy; 2024
                <span className="company">TFC Nation</span>
                all rights reserved
            </h4>
        </div>
    </footer>
    </div>
  );
}

export default Header;