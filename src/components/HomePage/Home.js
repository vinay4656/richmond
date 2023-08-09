import React, { Component } from 'react';


class Home extends Component {
  render() {
    return (
      <div className="page-content">

        <div className="modal fade " id="trackingModal" tabIndex="-1" aria-labelledby="trackingModalLabel" aria-hidden="true">
          <div className="modal-dialog modal-lg">
            <div className="modal-content">
              {/* <div className="modal-header">
                <h5 className="modal-title" id="trackingModalLabel">Tracking Modal</h5>
                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
              </div> */}
              <div className="modal-body">

                <div className="booking-tab-content m-3">
                  <div className="col-lg-12 col-md-12 booking-tab">
                    <form className="track-and-trace-form">

                      <div className="row">


                        <div className="col-lg-12 col-md-12">
                          <div className="mb-3">
                            <textarea className="form-control" id="exampleFormControlTextarea1" rows="3">Enter Docket Number...</textarea>
                          </div>
                        </div>



                        <div className="col-lg-12 col-md-12 mb-3">
                          <div className="tw-booking-footer" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                            <div className="tw-booking-footer-btn">
                              <button type="submit" className="btn-half site-button">
                                <span>Track & Trace</span><em></em>
                              </button>
                            </div>
                            <span style={{ display: 'inline-table', fontFamily: "Oswald, sans-serif", fontSize: "120px", lineHeight: "0.75", fontWeight: '700', color: '#000', textTransform: 'uppercase', opacity: '0.05' }} className="tw-booking-footer-text">Trace</span>
                          </div>

                        </div>

                      </div>

                    </form>
                  </div>
                </div>
              </div>
              {/* <div className="modal-footer">
                <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
              </div> */}
            </div>
          </div>
        </div>
        <div className="twm-slider1-wrap">


          <div className="swiper twm-slider">
            <div className="swiper-wrapper">


              <div className="swiper-slide">
                <div className="h-banner-wrap">
                  <div className="h-banner-left">
                    <div className="h-bnr-top">
                      <h2>
                        <span className="title-outline">Ready</span> To Move
                      </h2>
                      <p>There are many variations of passages of worem Ipsum available, but the majority</p>
                      <a href="whatsapp://send?abid=919972276667&text=Hello!" className="h-bnr-btn">
                        <img style={{ width: '37px' }} src='images/whatsapp.png' /> +91 9972276667
                      </a>
                    </div>

                  </div>
                  <div className="h-banner-right">
                    <div className="h-bnr-r-inner">
                      <div className="h-bnr-media">
                        <img src="images/main-slider/slider1/ship.png" alt="#" className="slide-top" />
                      </div>
                      <div className="h-bnr-animation bg-cover bg-center bg-image-moving" style={{ backgroundImage: "url(images/main-slider/slider1/bg3.jpg)" }}>

                      </div>
                    </div>
                  </div>
                  {/* <div className="cross-line-box left up-down"><img src="images/main-slider/slider1/cross-line-box.png" style={{ filter: 'invert(1)' }} alt="#" /></div>
                  <div className="cross-line-box right up-down"><img src="images/main-slider/slider1/cross-line-box.png" alt="#" /></div>
                  <div className="circle-left-top zoon-in-out"></div> */}
                </div>
              </div>

              <div className="swiper-slide">
                <div className="h-banner-wrap">
                  <div className="h-banner-left">
                    <div className="h-bnr-top">
                      <h2>
                        <span className="title-outline">Around</span> The World
                      </h2>
                      <p>There are many variations of passages of worem Ipsum available, but the majority</p>
                      <a href="whatsapp://send?abid=919972276667&text=Hello!" className="h-bnr-btn">
                        <img style={{ width: '37px' }} src='images/whatsapp.png' /> +91 9972276667
                      </a>
                    </div>

                  </div>
                  <div className="h-banner-right">
                    <div className="h-bnr-r-inner">
                      <div className="h-bnr-media">
                        <img src="images/main-slider/slider1/plane.png" alt="#" className="slide-top" />
                      </div>
                      <div className="h-bnr-animation bg-cover bg-center bg-image-moving" style={{ backgroundImage: "url(images/main-slider/slider1/bg1.jpg)" }}>

                      </div>
                    </div>
                  </div>
                  {/* <div className="cross-line-box left up-down"><img src="images/main-slider/slider1/cross-line-box.png" style={{ filter: 'invert(1)' }} alt="#" /></div>
                  <div className="cross-line-box right up-down"><img src="images/main-slider/slider1/cross-line-box.png" alt="#" /></div>
                  <div className="circle-left-top zoon-in-out"></div> */}
                </div>
              </div>


              <div className="swiper-slide">
                <div className="h-banner-wrap">
                  <div className="h-banner-left">
                    <div className="h-bnr-top">
                      <h2>
                        <span className="title-outline">To Every</span> Direction
                      </h2>
                      <p>Unwavering Deliveries, Infinite Directions.</p>
                      <a href="whatsapp://send?abid=919972276667&text=Hello!" className="h-bnr-btn">
                        <img style={{ width: '37px' }} src='images/whatsapp.png' /> +91 9972276667
                      </a>
                    </div>

                  </div>
                  <div className="h-banner-right">
                    <div className="h-bnr-r-inner">
                      <div className="h-bnr-media">
                        <img src="images/main-slider/slider1/truck.png" alt="#" className="slide-top" />
                      </div>
                      <div className="h-bnr-animation bg-cover bg-center bg-image-moving" style={{ backgroundImage: 'url(images/main-slider/slider1/bg2.jpg)' }}>

                      </div>
                    </div>
                  </div>
                  {/* <div className="cross-line-box left up-down"><img src="images/main-slider/slider1/cross-line-box.png" style={{ filter: 'invert(1)' }} alt="#" /></div>
                  <div className="cross-line-box right up-down"><img src="images/main-slider/slider1/cross-line-box.png" alt="#" /></div>
                  <div className="circle-left-top zoon-in-out"></div> */}
                </div>
              </div>



            </div>
            <div className="swiper-pagination"></div>
          </div>

        </div>






        <div id="services" className="section-full p-t120 p-b90 site-bg-gray tw-what-wedo-area">

          <div className="container">


            <div className="section-head center wt-small-separator-outer">
              <div className="wt-small-separator site-text-primary">
                <div>What we do!</div>
              </div>
              <h2 className="wt-title">Specialist Logistics Services</h2>


              <p className="section-head-text">Lorem Ipsum is simply dummy text of the printing and typesetting industry the standard dummy text ever since the when an printer took.</p>
            </div>


            <div className="tw-what-wedo-section">

              <div className="row">
                <div className="col-xl-5 col-lg-5 col-md-12">
                  <div className="tw-what-wedo-media">
                    <img src="images/icons/img1.png" alt="" />
                  </div>
                </div>

                <div className="col-xl-7 col-lg-7 col-md-12">
                  <div className="tw-service-icon-box-wrap">

                    <div className="service-icon-box-two">

                      <div className="service-icon-box-two-media">
                        <img src="images/icons/pic1.png" alt="" />
                      </div>

                      <div className="service-icon-box-title">
                        <h3 className="wt-title">
                          <a href="#">
                            <span className="site-text-primary">01.</span>Part Loads </a>
                        </h3>
                        <p>Our express parcel delivery network services over 2000+ pin codes in India. It can handle consignments of up to 10 kilograms with same-day and next-day </p>
                      </div>

                    </div>


                    <div className="service-icon-box-two">

                      <div className="service-icon-box-two-media">
                        <img src="images/icons/pic2.png" alt="" />
                      </div>

                      <div className="service-icon-box-title">
                        <h3 className="wt-title">
                          <a href="#">
                            <span className="site-text-primary">02.</span>Warehousing</a>
                        </h3>
                        <p>We offers secure and efficient warehousing solutions, from receiving and storing goods to order fulfillment and distribution. We provide a safe and organized environment to ensure the proper handling and storage of your products.</p>
                      </div>

                    </div>


                    <div className="service-icon-box-two">

                      <div className="service-icon-box-two-media">
                        <img src="images/icons/pic3.png" alt="" />
                      </div>

                      <div className="service-icon-box-title">
                        <h3 className="wt-title">
                          <a href="#">
                            <span className="site-text-primary">03.</span>CNF & Freight Forwarding</a>
                        </h3>
                        <p>CNF (Cost and Freight) and freight forwarding services provided by Logicarts ensure smooth and cost-effective transportation of goods. We manage the logistics and shipping process, ensuring timely and safe delivery to your desired location.</p>
                      </div>

                    </div>
                  </div>
                </div>
              </div>

            </div>
          </div>

        </div>



        <div id='aboutus' className="section-full-wrap site-bg-gray tw-why-choose-area">
          <div className="section-full p-t120 p-b120 tw-why-choose-area-top bg-cover bg-no-repeat" >
            {/* style={{ backgroundImage: "url(images/background/bg-1.jpg)" }} */}
            <div className="container">

              <div className="tw-why-choose-section">

                <div className="row">
                  <div className="col-xl-5 col-lg-5 col-md-12">
                    <div className="tw-why-choose-left">

                      <div className="section-head left wt-small-separator-outer">
                        <div className="wt-small-separator site-text-primary">
                          <div>About Us</div>
                        </div>
                        <h2 className="wt-title">KNOW ABOUT 999 Logistics</h2>
                      </div>

                      {/* <strong>Sed ut perspiciatis unde omnis iste natus error volup tatem accusantium dolorem que laudantium, totam rem aperiam, eaque ipsa illo inventore.</strong> */}
                      <strong >We provide full range  logistics solution
                        Trusted delivery brand, at your service.  Enabling commerce by empowering lives for everyone, everywhere.</strong>
                      <div className="tw-why-choose-left-bottom">
                        {/* <a href="about-1.html" className="btn-half site-button"><span>Learn More</span><em></em></a> */}
                        <div className="sign-font">
                          {/* <span>Signature</span> */}
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="col-xl-7 col-lg-7 col-md-12">
                    <div className="tw-why-choose-right">
                      <div className="tw-why-choose-media1 shine-effect">
                        <div className="shine-box">
                          {/* <img src="images/w-choose/pic1.jpg" alt=""/> */}
                        </div>
                      </div>
                      <div className="tw-why-choose-media2 slide-top shine-effect">
                        <div className="shine-box map2">
                          <img src="map.png" className="map" alt="" />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="tw-hilite-text-wrap2">
                  <div className="tw-hilite-text">
                    <span>Logistics</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="tw-any-help-section">
            <div className="container">
              <div className="tw-any-help-inner">
                <img src="images/w-choose/qt-icon.png" alt="" />
                <span className="tw-24">24/7 Active Suport Team</span>
                <span className="tw-help-title">Need Immediate Support Or Any Help?</span>
                <span className="tw-help-number">(9972276667)</span>
              </div>
            </div>
          </div>

        </div>




        <div className="section-full p-t120 p-b90 site-bg-white tw-company-approch-area">

          <div className="container">

            <div className="wt-separator-two-part">
              <div className="row wt-separator-two-part-row">
                <div className="col-xl-6 col-lg-6 col-md-12 wt-separator-two-part-left">

                  <div className="section-head left wt-small-separator-outer">
                    <div className="wt-small-separator site-text-primary">
                      <div>Company Approch</div>
                    </div>
                    <h2 className="wt-title">Reliable Logistic & Transport Solutions</h2>
                  </div>

                </div>
                <div className="col-xl-6 col-lg-6 col-md-12 wt-separator-two-part-right text-right">
                  {/* <a href="about-1.html" className="btn-half site-button"><span>Read More</span><em></em></a> */}
                </div>
              </div>
            </div>


            <div className="tw-company-approch-section">
              <div className="tw-company-approch-inner">
                <div className="tw-company-years">
                  <div className="light">
                    <h1>5</h1>
                    <img src="images/text-bg.jpg" alt="" />
                  </div>
                  <div className="tw-company-info">
                    <span>Year’s of experience in transport and logistics services</span>
                  </div>
                </div>

                <div className="row">


                  <div className="col-lg-4 col-md-12">
                    <div className="counter-outer-two">
                      <div className="tw-counter-media">
                        <img src="images/icons/c-pic1.png" alt="" />
                      </div>
                      <div className="icon-content">
                        <div className="tw-count-number site-text-primary"><span className="counter site-text-primary">80</span>+</div>
                        <h3 className="icon-content-info">Professional Staff</h3>
                      </div>
                    </div>
                  </div>


                  <div className="col-lg-4 col-md-12">
                    <div className="counter-outer-two">
                      <div className="tw-counter-media">
                        <img src="images/icons/c-pic2.png" alt="" />
                      </div>
                      <div className="icon-content">
                        <div className="tw-count-number site-text-primary">20K+</div>
                        <h3 className="icon-content-info">On Time Delievery</h3>
                      </div>
                    </div>
                  </div>




                  {/* <div className="col-lg-4 col-md-12">
                    <div className="counter-outer-two">
                      <div className="tw-counter-media">
                        <img src="images/icons/c-pic3.png" alt="" />
                      </div>
                      <div className="icon-content">
                        <div className="tw-count-number site-text-primary"><span className="counter site-text-primary">350</span>+</div>
                        <h3 className="icon-content-info">Technology and Media</h3>
                      </div>
                    </div>
                  </div> */}

                </div>

              </div>
            </div>
          </div>

        </div>

        <div id="contact" className="section-full p-t120 p-b90 site-bg-gray bg-cover">
          <div className="section-content">
            <div className="container">

              <div className="contact-one">

                <div className="section-head left wt-small-separator-outer">
                  {/* <h2 className="wt-title m-b30">Send Us a Message</h2> */}
                </div>


                <div className="contact-one-inner  site-bg-sky-blue-light">
                  <div className="row">

                    <div className="col-lg-8 col-md-12">
                      {/* <div className="contact-form-outer"> */}
                      {/* <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3887.7326599895787!2d77.68675271049815!3d12.988943387275176!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae116c279b184b%3A0x1367b7388421b7ed!2sLogicarts%20-%20Always%20On%20Time%20Delivery!5e0!3m2!1sen!2sin!4v1690355215930!5m2!1sen!2sin" style={{ border: 0, width: '100%', height: '100%' }} allowFullScreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe> */}
                      <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3887.649405552933!2d77.69688451049824!3d12.994261587270254!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae11755807bd47%3A0x9ee8589c830d754e!2s91springboard%20ITPL%20Main%20Road%2C%20Mahadevapura!5e0!3m2!1sen!2sin!4v1690379020430!5m2!1sen!2sin" style={{ border: 0, width: '100%', height: '100%' }} allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
                      {/* </div> */}
                    </div>

                    <div className="col-lg-4 col-md-12">
                      <div className="contact-info  site-bg-dark bg-no-repeat bg-bottom-left" style={{ backgroundImage: "url(images/background/contact-bg.png)" }}>

                        <div className="section-head-small white mb-4">
                          <h3 className="wt-title">Let's get in touch</h3>
                        </div>


                        <div className="contact-info-section">

                          <div className="c-info-column">
                            <div className="c-info-icon fa fa-map-marker"><span></span></div>
                            <p>Trifecta Adatto, 21, ITPL Main Rd, Garudachar Palya, Mahadevapura, Bengaluru, Karnataka 560048</p>
                          </div>

                          <div className="c-info-column">
                            <div className="c-info-icon fa fa-mobile-phone custome-size"><span></span></div>

                            <p><a href="tel:+216-761-8331">+91 9972276667</a></p>
                            {/* <p><a href="tel:+216-761-8331">+2 900 234 3219</a></p> */}
                          </div>

                          <div className="c-info-column">
                            <div className="c-info-icon fa fa-envelope-o"><span></span></div>
                            <p>info@999logistics.in</p>
                            {/* <p>support12@gmail.com</p> */}
                          </div>

                        </div>
                      </div>
                    </div>

                  </div>
                </div>
              </div>

            </div>
          </div>
        </div>


      </div>
    );
  }
}

export default Home;
