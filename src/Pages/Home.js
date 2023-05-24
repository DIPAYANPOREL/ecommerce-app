import React from "react";
import { Link } from "react-router-dom";
import Marquee from "react-fast-marquee";
import BlogCard from "../components/BlogCard";
import { ProductCard } from "../components/ProductCard";
import SpecialProduct from "../components/SpecialProduct";

const Home = () => {
  return (
    <>
      <section className="home-wrapper-1 py-5">
        {" "}
        {/* Help me to bring the  */}
        <div className="container-xxl">
          <div className="row">
            <div className="col-6">
              <div className="main-banner position-relative">
                <img
                  src="./images/main-banner-1.jpg"
                  className="img-fluid rounded-3"
                  alt="main banner"
                />
                <div className="main-banner-content position-absolute">
                  <h4>SUPERCHARGED FOR PROS</h4>
                  <h5>iPad S13+ Pro.</h5>
                  <p>From ₹45000 or ₹3,750/mo</p>
                  <Link className="button">BUY NOW</Link>
                </div>
              </div>
            </div>
            <div className="col-6">
              <div className="d-flex gap-10 flex-wrap justify-content-between align-items-center">
                <div className="small-banner position-relative">
                  <img
                    src="./images/catbanner-01.jpg"
                    className="img-fluid rounded-3"
                    alt="main banner"
                  />
                  <div className="small-banner-content position-absolute">
                    <h4>BEST SALE</h4>
                    <h5>Laptops Max</h5>
                    <p>
                      From ₹45000 or <br />
                      ₹3,750/mo
                    </p>
                  </div>
                </div>
                <div className="small-banner position-relative">
                  <img
                    src="./images/catbanner-02.jpg"
                    className="img-fluid rounded-3"
                    alt="main banner"
                  />
                  <div className="small-banner-content position-absolute">
                    <h4>15% OFF.</h4>
                    <h5>Smartwatch 7</h5>
                    <p>
                      Shop the latest band <br />
                      style and colors.
                    </p>
                  </div>
                </div>
                <div className="small-banner position-relative">
                  <img
                    src="./images/catbanner-03.jpg"
                    className="img-fluid rounded-3"
                    alt="main banner"
                  />
                  <div className="small-banner-content position-absolute">
                    <h4>NEW ARRIVAL</h4>
                    <h5>Buy IPad Air</h5>
                    <p>
                      From ₹40000 <br />
                      or ₹2,250/mo
                    </p>
                  </div>
                </div>
                <div className="small-banner position-relative">
                  <img
                    src="./images/catbanner-04.jpg"
                    className="img-fluid rounded-3"
                    alt="main banner"
                  />
                  <div className="small-banner-content position-absolute">
                    <h4>FREE ENGRAVING</h4>
                    <h5>AirPods Max</h5>
                    <p>
                      High-fidelity playback <br />& ultra-low distortion
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="home-wrapper-2 py-5">
        <div className="container-xxl">
          <div className="row">
            <div className="col-12">
              <div className="services d-flex align-items-center justify-content-between">
                <div className="d-flex align-items-center gap-15">
                  <img src="./images/service.png" alt="sevices" />
                  <div>
                    <h6>Free Shipping</h6>
                    <p className="mb-0">From all order over ₹500</p>
                  </div>
                </div>
                <div className="d-flex align-items-center gap-15">
                  <img src="./images/service-02.png" alt="sevices" />
                  <div>
                    <h6>Daily Surprise Offers</h6>
                    <p className="mb-0">Save upto 25% off</p>
                  </div>
                </div>
                <div className="d-flex align-items-center gap-15">
                  <img src="./images/service-03.png" alt="sevices" />
                  <div>
                    <h6>Support 24/7</h6>
                    <p className="mb-0">Shop with an expert</p>
                  </div>
                </div>
                <div className="d-flex align-items-center gap-15">
                  <img src="./images/service-04.png" alt="sevices" />
                  <div>
                    <h6>Afffordable Prices</h6>
                    <p className="mb-0">Get Factory Default Price</p>
                  </div>
                </div>
                <div className="d-flex align-items-center gap-15">
                  <img src="./images/service-05.png" alt="sevices" />
                  <div>
                    <h6>Secure Pyaments</h6>
                    <p className="mb-0">100% Protected Payment</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="home-wrapper-2 py-5">
        <div className="container-xxl">
          <div className="row">
            <div className="col-12">
              <div className="categories d-flex justify-content-between flex-wrap align-items-center">
                <div className="d-flex align-items-center">
                  <div>
                    <h6>Cameras</h6>
                    <p>10 items</p>
                  </div>
                  <img src="./images/camera.jpg" alt="picture of cameras"></img>
                </div>
                <div className="d-flex align-items-center">
                  <div>
                    <h6>Smart Tv</h6>
                    <p>10 items</p>
                  </div>
                  <img src="./images/tv.jpg" alt="picture of cameras"></img>
                </div>
                <div className="d-flex align-items-center">
                  <div>
                    <h6>Smart Watches</h6>
                    <p>10 items</p>
                  </div>
                  <img
                    src="./images/Myproject.jpg"
                    alt="picture of cameras"
                  ></img>
                </div>
                <div className="d-flex align-items-center">
                  <div>
                    <h6>Music & Gaming</h6>
                    <p>10 items</p>
                  </div>
                  <img
                    src="./images/headphone.jpg"
                    alt="picture of cameras"
                  ></img>
                </div>
                <div className="d-flex align-items-center">
                  <div>
                    <h6>Cameras</h6>
                    <p>10 items</p>
                  </div>
                  <img src="./images/camera.jpg" alt="picture of cameras"></img>
                </div>
                <div className="d-flex align-items-center">
                  <div>
                    <h6>Smart Tv</h6>
                    <p>10 items</p>
                  </div>
                  <img src="./images/tv.jpg" alt="picture of cameras"></img>
                </div>
                <div className="d-flex align-items-center">
                  <div>
                    <h6>Smart Watches</h6>
                    <p>10 items</p>
                  </div>
                  <img
                    src="./images/Myproject.jpg"
                    alt="picture of cameras"
                  ></img>
                </div>
                <div className="d-flex align-items-center">
                  <div>
                    <h6>Music & Gaming</h6>
                    <p>10 items</p>
                  </div>
                  <img
                    src="./images/headphone.jpg"
                    alt="picture of cameras"
                  ></img>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="featured-wrapper py-5 home-wrapper-2">
        <div className="container-xxl">
          <div className="row">
            <div className="col-12">
              <h3 className="section-heading">Featured Collection</h3>
            </div>
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
          </div>
        </div>
      </section>
      <section className="special-wrapper py-5 home-wrapper-2">
        <div className="container-xxl">
          <div className="row">
            <div className="col-12">
              <h3 className="section-heading">special Products</h3>
            </div>
          </div>
          <div className="row">
            <SpecialProduct />
            <SpecialProduct />
            <SpecialProduct />
          </div>
        </div>
      </section>
      <section className="popular-wrapper py-5 home-wrapper-2">
        <div className="container-xxl">
          <div className="row">
            <div className="col-12">
              <h3 className="section-heading">Our Popular Products</h3>
            </div>
          </div>
          <div className="row">
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
          </div>
        </div>
      </section>
      <section className="marque-wrapper home-wrapper-2 py-5">
        <div className="container-xxl">
          <div className="row">
            <div className="col-12">
              <div className="marque-inner-wrapper card-wrapper">
                <Marquee className="d-flex">
                  <div className="mx-4 w-25">
                    <img src="./images/brand-01.png" alt="brand" />
                  </div>
                  <div className="mx-4 w-25">
                    <img src="./images/brand-02.png" alt="brand" />
                  </div>
                  <div className="mx-4 w-25">
                    <img src="./images/brand-03.png" alt="brand" />
                  </div>
                  <div className="mx-4 w-25">
                    <img src="./images/brand-04.png" alt="brand" />
                  </div>
                  <div className="mx-4 w-25">
                    <img src="./images/brand-05.png" alt="brand" />
                  </div>
                  <div className="mx-4 w-25">
                    <img src="./images/brand-06.png" alt="brand" />
                  </div>
                  <div className="mx-4 w-25">
                    <img src="./images/brand-07.png" alt="brand" />
                  </div>
                  <div className="mx-4 w-25">
                    <img src="./images/brand-08.png" alt="brand" />
                  </div>
                </Marquee>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="blog-wrapper py-5 home-wrapper-2">
        <div className="container-xxl">
          <div className="row">
            <div className="col-12">
              <h3 className="section-heading">Our Latest Blogs</h3>
            </div>
          </div>
          <div className="row">
            <div className="col-3">
              <BlogCard />
            </div>
            <div className="col-3">
              <BlogCard />
            </div>
            <div className="col-3">
              <BlogCard />
            </div>
            <div className="col-3">
              <BlogCard />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
