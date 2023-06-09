import React from "react";
import BreadCrumb from "../components/BreadCrumb";
import Color from "../components/Color";
import Meta from "../components/Meta";

const CompareProduct = () => {
  return (
    <>
      <Meta title={"Compare Products"} />
      <BreadCrumb title="Compare Products" />
      <div className="compare-product-wrapper py-5 home-wrapper-2">
        <div className="container-xxl">
          <div className="row">
            <div className="col-3">
              <div className="compare-product-card position-relative">
                <img
                  src="./images/cross.svg"
                  alt="watch"
                  className="position-absolute cross img-fluid"
                />
                <div className="product-card-image">
                  <img src="./images/tab-resize.jpg" alt="watch" />
                </div>
                <div className="compare-product-details">
                  <h5 className="title">
                    Honor T1 7.0 1GB RAM 8GB ROM 7 Inch With Wi-Fi+4G Tablet
                  </h5>
                  <h6 className="price mb-3 mt-3">₹ 10000</h6>
                  <div>
                    <div className="product-detail">
                      <h6>Brand:</h6>
                      <p>Honor</p>
                    </div>
                    <div className="product-detail">
                      <h6>Type:</h6>
                      <p>Tablet</p>
                    </div>
                    <div className="product-detail">
                      <h6>Availability:</h6>
                      <p>In Stock</p>
                    </div>
                    <div className="product-detail">
                      <h6>Color:</h6>
                      <Color />
                    </div>
                    <div className="product-detail">
                      <h6>Size:</h6>
                      <div className="d-flex gap-10">
                        <p>S</p>
                        <p>M</p>
                        <p>L</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-3">
              <div className="compare-product-card position-relative">
                <img
                  src="./images/cross.svg"
                  alt="watch"
                  className="position-absolute cross img-fluid"
                />
                <div className="product-card-image">
                  <img src="./images/tab-resize.jpg" alt="watch" />
                </div>
                <div className="compare-product-details">
                  <h5 className="title">
                    Honor T1 7.0 1GB RAM 8GB ROM 7 Inch With Wi-Fi+4G Tablet
                  </h5>
                  <h6 className="price mb-3 mt-3">₹ 10000</h6>
                  <div>
                    <div className="product-detail">
                      <h6>Brand:</h6>
                      <p>Honor</p>
                    </div>
                    <div className="product-detail">
                      <h6>Type:</h6>
                      <p>Tablet</p>
                    </div>
                    <div className="product-detail">
                      <h6>Availability:</h6>
                      <p>In Stock</p>
                    </div>
                    <div className="product-detail">
                      <h6>Color:</h6>
                      <Color />
                    </div>
                    <div className="product-detail">
                      <h6>Size:</h6>
                      <div className="d-flex gap-10">
                        <p>S</p>
                        <p>M</p>
                        <p>L</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CompareProduct;
