import React, { Component } from 'react';

class Header extends Component {
    render() {
        return (
            <header className="site-header header-style-3 mobile-sider-drawer-menu">

                <div className="sticky-header main-bar-wraper  navbar-expand-lg">
                    <div className="main-bar">

                        <div className="container-fluid clearfix">

                            <div className="logo-header">
                                <div className="logo-header-inner logo-header-one">
                                    <a href="index.html">
                                        <img style={{ width: "89%" }} src="images/logo.png" alt="" />
                                    </a>
                                </div>
                            </div>
                            <div className="extra-nav header-2-nav">
                                {/* <div className="extra-cell">
                                    <div className="header-search">
                                        <a href="#search" className="header-search-icon"><i className="fa fa-search"></i></a>
                                    </div>
                                </div> */}
                                <div className="extra-cell">
                                    <div className="header-nav-call-section">
                                        {/* <div style={{ marginRight: "17px" }}>
                                            <div className='div-tracking'>
                                                <a className='div-tracking-a' href="#">Tracking</a>
                                            </div>
                                        </div> */}

                                        <div className="detail">
                                            <span className="title">Call Us Now</span>
                                            <span><a href="tel:29002344241">+91 9980619996</a></span>
                                        </div>
                                        <div className="media">
                                            <img src="images/whatsapp.png" style={{ width: '44px', height: '44px' }} alt="#" />
                                        </div>
                                    </div>
                                </div>

                            </div>


                            <button id="mobile-side-drawer" data-target=".header-nav" data-toggle="collapse" type="button" style={{filter: 'invert(1)'}} className="navbar-toggler collapsed">
                                <span className="sr-only">Toggle navigation</span>
                                <span className="icon-bar icon-bar-first"></span>
                                <span className="icon-bar icon-bar-two"></span>
                                <span className="icon-bar icon-bar-three"></span>
                            </button>


                            <div className="nav-animation header-nav navbar-collapse collapse d-flex justify-content-center">

                                <ul className="nav navbar-nav">
                                    <li className="has-child"><a href="#">Home</a>
                                    </li>
                                    <li className="has-child"><a href="#services">Services</a>
                                        {/* <ul className="sub-menu">
                                            <li><a href="about-1.html">About Us</a></li>
                                            <li><a href="faq.html">Faq</a></li>
                                            <li><a href="error-404.html">Error 404</a></li>
                                        </ul> */}
                                    </li>
                                    <li className="has-child"><a href="#aboutus">About Us</a>
                                        {/* <ul className="sub-menu">
                                            <li><a href="services-1.html">Services 1</a></li>
                                            <li><a href="services-2.html">Services 2</a></li>
                                            <li><a href="services-detail.html">Services Detail</a></li>
                                        </ul> */}
                                    </li>


                                    <li><a href="#contact">Contact</a></li>

                

                                    <li>
                                        <div className='div-tracking'>
                                            <a className='div-tracking-a' href="#">Tracking</a>
                                        </div>
                                    </li>

                                </ul>

                            </div>


                           



                        </div>


                    </div>


                    <div id="search">
                        <span className="close"></span>
                        <form role="search" id="searchform" action="/search" method="get" className="radius-xl">
                            <input className="form-control" value="" name="q" type="search" placeholder="Type to search" />
                            <span className="input-group-append">
                                <button type="button" className="search-btn">
                                    <i className="fa fa-paper-plane"></i>
                                </button>
                            </span>
                        </form>
                    </div>
                </div>

            </header>
        );
    }
}

class Footer extends Component {
    render() {
        return (
            <footer className="footer-dark">


                {/* <div className="ftr-nw-ltr site-bg-white">

                <div className="ftr-nw-ltr-inner site-bg-primary">
                    <div className="container">
                        <div className="ftr-nw-img">
                            <img src="images/news-l-bg.png" alt="" />
                        </div>
                        <div className="ftr-nw-content">
                            <div className="ftr-nw-title">Subscribe for offers and news</div>
                            <div className="ftr-nw-form">
                                <form>
                                    <input name="news-letter" className="form-control" placeholder="Enter Your Email" type="text" />
                                    <button className="ftr-nw-subcribe-btn">Subscribe Now</button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div> */}


                <div className="ftr-bg" style={{ backgroundImage: "url(images/f-bg.jpg)" }}>

                    <div className="footer-top">
                        <div className="container">
                            <div className="row">

                                <div className="col-lg-3 col-md-6">

                                    <div className="widget widget_about">
                                        <div className="logo-footer clearfix">
                                            <a href="index.html"><img src="images/logo-dark.png" style={{ filter: 'invert(1)' }} alt="" /></a>
                                        </div>
                                        <p>Many desktop publishing packages and web page editors now use are dolra Ipsum as their default .</p>
                                        <ul className="social-icons">
                                            <li><a href="#" className="fa fa-facebook"></a></li>
                                            <li><a href="#" className="fa fa-twitter"></a></li>
                                            <li><a href="#" className="fa fa-instagram"></a></li>
                                            <li><a href="#" className="fa fa-youtube-play"></a></li>
                                        </ul>
                                    </div>

                                </div>

                                <div className="col-lg-3 col-md-6">
                                    <div className="widget widget_services ftr-list-center">
                                        <h3 className="widget-title">Quick Links</h3>
                                        <ul>
                                            <li><a href="about-1.html">About</a></li>
                                            <li><a href="services-1.html">Services</a></li>
                                            <li><a href="blog-grid.html">Blog</a></li>
                                            <li><a href="about-1.html">FAQ</a></li>
                                            <li><a href="contact.html">Contact Us</a></li>
                                        </ul>
                                    </div>
                                </div>

                                <div className="col-lg-3 col-md-6">
                                    <div className="widget widget_services ftr-list-center">
                                        <h3 className="widget-title">Services</h3>
                                        <ul>
                                            <li><a href="services-detail.html">Warehouse</a></li>
                                            <li><a href="services-detail.html">Air Freight</a></li>
                                            <li><a href="services-detail.html">Ocean Freight</a></li>
                                            <li><a href="services-detail.html">Road Freight</a></li>
                                            <li><a href="services-detail.html">Packaging</a></li>
                                        </ul>
                                    </div>
                                </div>

                                <div className="col-lg-3 col-md-6">
                                    <div className="widget widget_services ftr-list-center">
                                        <h3 className="widget-title">Community</h3>
                                        <ul>
                                            <li><a href="about-1.html">Business Consulting</a></li>
                                            <li><a href="about-1.html">Testimonials</a></li>
                                            <li><a href="about-1.html">Track Your Shipment</a></li>
                                            <li><a href="about-1.html">Privacy Policy</a></li>
                                            <li><a href="about-1.html">Terms & Condition</a></li>
                                        </ul>
                                    </div>
                                </div>

                            </div>

                        </div>
                    </div>


                    <div className="footer-bottom">
                        <div className="container">
                            <div className="footer-bottom-info">

                                <div className="footer-copy-right">
                                    <span className="copyrights-text">&copy; {new Date().getFullYear()} by thewebmax All Rights Reserved.</span>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>

            </footer>
        );
    }
}

class App extends Component {

    constructor(props) {
        super(props);
        this.state = {
            loading: true,
        };
    }

    componentDidMount() {
        // Simulate a delay to demonstrate loading
        setTimeout(() => {
            this.setState({ loading: false }); // Set loading to false after the delay
        }, 2000);
    }

    render() {
        const { loading } = this.state;

        const { children } = this.props; // Destructure children from props

        return (



            <>



                <Header />

                {children}
                <Footer />

                <button className="scroltop"><span className="fa fa-angle-up  relative" id="btn-vibrate"></span></button>
            </>

        );
    }
}

export default App;
