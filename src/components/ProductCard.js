import React from "react";
import { Rating } from "react-simple-star-rating";
import { Link, useLocation } from "react-router-dom";

export const ProductCard = (props) => {
  const { grid } = props;
  let location = useLocation();

  return (
    <>
      <div
        className={` ${
          location.pathname == "/store" ? `gr-${grid}` : "col-3"
        } `}
      >
        <Link to=":id" className="product-card position-relative">
          <div className="wishlist-icon position-absolute">
            <Link>
              <img src="./images/wish.svg" alt="wishlist" />
            </Link>
          </div>
          <div className="product-image">
            <img
              src="./images/watch.jpg"
              className="img-fluid"
              alt="product image"
            />
            <img
              src="./images/watch-2.jpg"
              className="img-fluid"
              alt="product image"
            />
          </div>
          <div className="product-details">
            <h6 className="brand">Havels</h6>
            <h5 className="product-title">
              Kids headphones bulk 10 
              multi colored for students
            </h5>
            <Rating
              count={5}
              size={20}
              initialValue="3"
              allowHover={false}
              edit={false}
              fillColor="#ffd700"
              activeColor="#ffd700"
            />
            <p className={`discription ${grid == 12 ? "d-block" : "d-none"}`}>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illo sed, itaque 
            reprehenderit magni architecto a nisi labore ex praesentium eligendi ipsa 
            laudantium incidunt cum recusandae illum laboriosam exercitationem sapiente 
            </p>
            <p className="price"> ₹700.00</p>
          </div>
          <div className="action-bar position-absolute">
            <div className="d-flex flex-column gap-15">
              <Link>
                <img src="./images/view.svg" alt="view" />
              </Link>
              <Link>
                <img src="./images/add-cart.svg" alt="addcart" />
              </Link>
              <Link>
                <img src="./images/prodcompare.svg" alt="compare product" />
              </Link>
            </div>
          </div>
        </Link>
      </div>
      <div
        className={` ${
          location.pathname == "/store" ? `gr-${grid}` : "col-3"
        } `}
      >
        <Link className="product-card position-relative">
          <div className="wishlist-icon position-absolute">
            <Link>
              <img src="./images/wish.svg" alt="wishlist" />
            </Link>
          </div>
          <div className="product-image">
            <img
              src="./images/watch.jpg"
              className="img-fluid"
              alt="product image"
            />
            <img
              src="./images/watch-2.jpg"
              className="img-fluid"
              alt="product image"
            />
          </div>
          <div className="product-details">
            <h6 className="brand">Havels</h6>
            <h5 className="product-title">
              Kids headphones bulk 10 
              multi colored for students
            </h5>
            <Rating
              count={5}
              size={20}
              initialValue="3"
              allowHover={false}
              edit={false}
              fillColor="#ffd700"
              activeColor="#ffd700"
            />
            <p className={`discription ${grid == 12 ? "d-block" : "d-none"}`}>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illo sed, itaque 
            reprehenderit magni architecto a nisi labore ex praesentium eligendi ipsa 
            laudantium incidunt cum recusandae illum laboriosam exercitationem sapiente 
            </p>
            <p className="price"> ₹700.00</p>
          </div>
          <div className="action-bar position-absolute">
            <div className="d-flex flex-column gap-15">
              <Link>
                <img src="./images/view.svg" alt="view" />
              </Link>
              <Link>
                <img src="./images/add-cart.svg" alt="addcart" />
              </Link>
              <Link>
                <img src="./images/prodcompare.svg" alt="compare product" />
              </Link>
            </div>
          </div>
        </Link>
      </div>
    </>
  );
};

export default ProductCard;
