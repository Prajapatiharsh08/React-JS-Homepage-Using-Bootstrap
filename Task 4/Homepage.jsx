import React from 'react';

export default function Homepage() {
    const cardData = [
        {
            title: "Design Creative",
            subtitle: "Modern and Clean",
            price: "From $60.99 - Sale 20%",
            imgSrc: "https://www.uboatwatch.com/wp-content/uploads/2022/07/chimera-768x768.png",
        },
        {
            title: "Bestselling Products",
            subtitle: "Jewelry and Diamonds",
            price: "Only from $89.00",
            imgSrc: "https://productimages.withfloats.com/tile/5c7a7270f06c8d0001290255.jpg",
        },
        {
            title: "Onsale Products",
            subtitle: "Perfect Rider Watch",
            price: "Selling Off 30%",
            imgSrc: "https://m.media-amazon.com/images/I/61IduqXygwL._AC_UY350_.jpg",
        },
        {
            title: "Luxury Edition",
            subtitle: "Exclusive Watches",
            price: "From $299.99 - Limited Offer",
            imgSrc: "https://www.bobswatches.com/rolex-blog/wp-content/uploads/2019/03/OMEGA_310.60.42.50.99.001_amb.jpeg",
        },
        {
            title: "Trending Now",
            subtitle: "Elegant Jewelry Sets",
            price: "Only from $129.00",
            imgSrc: "https://rukminim2.flixcart.com/image/850/1000/xif0q/watch/8/e/q/1-black-phantom-version-rceles-men-original-imagvf7mva7yha7h.jpeg?q=90&crop=false",
        },
        {
            title: "Flash Sale",
            subtitle: "Stylish Men's Watches",
            price: "50% Off - From $99.00",
            imgSrc: "https://www.titan.co.in/dw/image/v2/BKDD_PRD/on/demandware.static/-/Sites-titan-master-catalog/default/dw3e10e985/images/Titan/Catalog/1713BM02_1.jpg?sw=360&sh=360",
        }
    ];

    return (
        <div>
            {/* Header Section */}
            <nav className="navbar navbar-expand-lg sticky-top" style={{ backgroundColor: "#1c1c1c" }}>
                <div className="container-fluid">
                    <a className="navbar-brand ms-lg-5" href="#">
                        <img src="https://demo.posthemes.com/pos_mirora/img/mirora-responsive-prestashop-theme-logo-1519658670.jpg" alt="Logo" />
                    </a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav mx-auto mb-2 mb-lg-0" style={{ fontSize: "20px" }}>
                            <li className="nav-item">
                                <a className="nav-link text-white px-3" aria-current="page" href="#">Home</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link text-white px-3" aria-current="page" href="#">Shop</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link text-white px-3" aria-current="page" href="#">Watches</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link text-white px-3" aria-current="page" href="#">For Men's</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link text-white px-3" aria-current="page" href="#">For Women's</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link text-white px-3" aria-current="page" href="#">Jewelry</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link text-white px-3" aria-current="page" href="#">About Us</a>
                            </li>
                        </ul>
                    </div>
                    <form class="d-flex">
                        <button class="btn btn-outline-secondary me-5" type="submit">Get Started!</button>
                    </form>
                </div>
            </nav>

            {/* Slider Section */}
            <div id="carouselExampleCaptions" className="carousel slide">
                <div className="carousel-indicators">
                    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
                    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
                </div>
                <div className="carousel-inner">
                    <div className="carousel-item active">
                        <img src="https://demo.posthemes.com/pos_mirora/modules/posslideshows/images/15fa3d57aa2bfc3888e08377fba1a2d711a416e7_banner1_home1.jpg" className="d-block w-100" alt="Slide 1" style={{ height: "550px", objectFit: "cover" }} />
                        <div className="carousel-caption d-flex flex-column h-100 align-items-start justify-content-center bottom-0">
                            <h1 className="py-2 px-4">Raymond Weil</h1>
                            <p className="py-2 px-4">Raymond Weils emblematic collection, nabucco, makes a strong comeback this year.</p>
                            <h4 className="py-2 px-4">Starting at <span style={{ color: "#a8741a", fontSize: "30px" }}>$2,999.00</span></h4>
                            <a href="#" className="btn btn-outline-warning px-4 py-2 rounded-0 ms-4 mt-2">Shopping Now</a>
                        </div>
                    </div>
                    <div className="carousel-item">
                        <img src="https://demo.posthemes.com/pos_mirora/modules/posslideshows/images/ebcee88d5fa4782d7b5be4902ed64dee34367fcf_banner3_home1.jpg" className="d-block w-100" alt="Slide 2" style={{ height: "550px", objectFit: "cover" }} />
                        <div className="carousel-caption d-flex flex-column h-100 align-items-start justify-content-center bottom-0">
                            <h1 className="py-2 px-4">U-Boat Classico</h1>
                            <p className="py-2 px-4">U-Boat watches are a lot like classic American Muscle cars - except for the American part that is.</p>
                            <h4 className="py-2 px-4">Starting at <span style={{ color: "#a8741a", fontSize: "30px" }}>$1,499.00</span></h4>
                            <a href="#" className="btn btn-outline-warning px-4 py-2 rounded-0 ms-4 mt-2">Shopping Now</a>
                        </div>
                    </div>
                    <div className="carousel-item">
                        <img src="https://demo.posthemes.com/pos_mirora/modules/posslideshows/images/4d413d87b778e4ab6232cef7c6531863bca08ff9_banner2_home1.jpg" className="d-block w-100" alt="Slide 3" style={{ height: "550px", objectFit: "cover" }} />
                        <div className="carousel-caption d-flex flex-column h-100 align-items-start justify-content-center bottom-0">
                            <h1 className="py-2 px-4">Breguet Watches</h1>
                            <p className="py-2 px-4">Breguet, Breguet,"Souscription No. 34/300". Made in a limited edition of 300 sets in the early 1990s.</p>
                            <h4 className="py-2 px-4">Starting at <span style={{ color: "#a8741a", fontSize: "30px" }}>$1,999.00</span></h4>
                            <a href="#" className="btn btn-outline-warning px-4 py-2 rounded-0 ms-4 mt-2">Shopping Now</a>
                        </div>
                    </div>
                </div>
                <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                </button>
            </div>


            {/* Product Cards Section */}
            <div className="container my-5">
                <h1>New Arrival Items</h1>
                <div className="row">
                    {cardData.map((card, index) => (
                        <div key={index} className="col-md-4">
                            <div
                                className="card text-center"
                                style={{
                                    backgroundColor: '#1C1C1C',
                                    borderRadius: '10px',
                                    padding: '15px',
                                    color: 'white',
                                    marginTop: '20px'
                                }}
                            >
                                <img
                                    src={card.imgSrc}
                                    className="card-img-top"
                                    alt={card.title}
                                    style={{ height: '230px', width: '100%', objectFit: 'cover' }}
                                />
                                <div className="card-body">
                                    <h5 className="card-title" style={{ fontWeight: 'bold', color: '#D4AF37' }}>
                                        {card.title}
                                    </h5>
                                    <p className="card-text">{card.subtitle}</p>
                                    <p className="card-text">{card.price}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Footer Section */}
            <footer class="footer" style={{ backgroundColor: "#1c1c1c" }}>
                <div class="container">
                    <div class="row">
                        <div class="col-sm-6 col-md-6 mt-4 col-lg-4 text-center text-sm-start">
                            <div class="contact">
                                <h6 class="footer-heading text-white fw-bold fs-4">About Mirora</h6>
                                <address class="mt-4 m-0 text-white mb-1">Address: 123 Main Street, Anytown, CA 12345 - USA.</address>
                                <a href="" class="text-white mb-1 text-decoration-none d-block">Phone: (012) 800 456 789</a>
                                <a href="" class="text-white mb-1 text-decoration-none d-block">Fax: (012) 800 456 789</a>
                                <a href="" class="text-white text-decoration-none">Email: Contact@posthemes.com</a>
                                <ul class="list-inline my-4">
                                    <li class="list-inline-item"><a href="" class="text-white btn-sm btn mb-2 fs-4"><i class="fa-brands fa-twitter"></i></a></li>
                                    <li class="list-inline-item"><a href="" class="text-white btn-sm btn mb-2 fs-4"><i class="fa-brands fa-instagram"></i></a></li>
                                    <li class="list-inline-item"><a href="" class="text-white btn-sm btn mb-2 fs-4"><i class="fa-brands fa-facebook"></i></a></li>
                                    <li class="list-inline-item"><a href="" class="text-white btn-sm btn mb-2 fs-4"><i class="fa-brands fa-whatsapp"></i></a></li>
                                    <li class="list-inline-item"><a href="" class="text-white btn-sm btn mb-2 fs-4"><i class="fa-brands fa-google"></i></a></li>
                                </ul>
                            </div>
                        </div>
                        <div class="col-sm-6 col-md-4 mt-4 col-lg-3 text-center text-sm-start">
                            <div class="information">
                                <h6 class="footer-heading text-white fw-bold fs-4">Products</h6>
                                <ul class="list-unstyled footer-link mt-4">
                                    <li class="mb-1"><a href="" class="text-white text-decoration-none">Prices drop</a></li>
                                    <li class="mb-1"><a href="" class="text-white text-decoration-none">New Products</a></li>
                                    <li class="mb-1"><a href="" class="text-white text-decoration-none">Best Sales</a></li>
                                    <li class=""><a href="" class="text-white text-decoration-none">Contact Us</a></li>
                                    <li class=""><a href="" class="text-white text-decoration-none">Sitemap</a></li>
                                </ul>
                            </div>
                        </div>
                        <div class="col-sm-6 col-md-4 mt-4 col-lg-3 text-center text-sm-start">
                            <div class="resources">
                                <h6 class="footer-heading text-white fw-bold fs-4">Our Company</h6>
                                <ul class="list-unstyled footer-link mt-4">
                                    <li class="mb-1"><a href="" class="text-white text-decoration-none ">Delivery</a></li>
                                    <li class="mb-1"><a href="" class="text-white text-decoration-none">Legal Notice</a></li>
                                    <li class="mb-1"><a href="" class="text-white text-decoration-none">terma & Conditions Of Use</a></li>
                                    <li class=""><a href="" class="text-white text-decoration-none">About Us</a></li>
                                    <li class=""><a href="" class="text-white text-decoration-none">Secure Payment</a></li>
                                </ul>
                            </div>
                        </div>
                        <div class="col-sm-6 col-md-4 mt-4 col-lg-2 text-center text-sm-start">
                            <div class="resources">
                                <h6 class="footer-heading text-white fw-bold fs-4">Your Account</h6>
                                <ul class="list-unstyled footer-link mt-4">
                                    <li class="mb-1"><a href="" class="text-white text-decoration-none ">Addresses</a></li>
                                    <li class="mb-1"><a href="" class="text-white text-decoration-none">Credit Slips</a></li>
                                    <li class="mb-1"><a href="" class="text-white text-decoration-none">Orders</a></li>
                                    <li class=""><a href="" class="text-white text-decoration-none">Personal Info</a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="text-center bg-dark text-white mt-4 p-1">
                    <p class="mb-0 fw-bold">2023 © Harsh Prajapati, All Rights Reserved</p>
                </div>
            </footer>

        </div>
    );
}
