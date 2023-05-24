import React from "react";
import ReactStars from "react-rating-stars-component";
import { Link } from "react-router-dom";
import BreadCrumb from "../components/BreadCrumb";
import Meta from "../components/Meta";
import ProductCard from "../components/ProductCard";
import { Rating } from "react-simple-star-rating";
import { useState } from "react";

const SingleProduct = () => {
  const { orderedProduct, setoderedProduct } = useState(false);
  return (
    <>
      <Meta title={"Product Name"} />
      <BreadCrumb title="Product Name" />
      <div className="main-product-wrapper py-5 home-wrapper-2">
        <div className="container-xxl">
          <div className="row">
            <div className="col-6"></div>
            <div className="col-6"></div>
          </div>
        </div>
      </div>
      <div className="description-wrapper py-5 home-wrapper-2">
        <div className="container-xxl">
          <div className="row">
            <div className="col-12">
              <div className="bg-white p-3">
                <h4>Description</h4>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illo
                  sed, itaque reprehenderit magni architecto a nisi labore ex
                  praesentium eligendi ipsa laudantium incidunt cum recusandae
                  illum laboriosam exercitationem sapiente quisquam.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <section className="review-wrapper py-5 home-wrapper-2">
        <div className="container-xxl">
          <div className="row">
            <div className="col-12">
              <div className="review-head d-flex justify-content-between align-items-end">
                <div>
                  <div className="d-flex gap-10">
                    <h4 className="d-flex align-items-center mb-2">
                      Customer Reviews
                    </h4>
                    <Rating
                      count={5}
                      size={20}
                      initialValue="3"
                      allowHover={false}
                      edit={false}
                      fillColor="#ffd700"
                      activeColor="#ffd700"
                    />
                    <p className="mb-0">Based on 2 reviews</p>
                  </div>
                </div>
                {orderedProduct && (
                  <div>
                    <a href="">Write a review</a>
                  </div>
                )}
              </div>
            </div>
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
          </div>
        </div>
      </section>
    </>
  );
};

export default SingleProduct;
