import React from "react";
import { Link } from "react-router-dom";
import BreadCrumb from "../components/BreadCrumb";
import Meta from "../components/Meta";
import {HiOutlineArrowLeft} from "react-icons/hi";

const SingleBlog = () => {
  return (
    <>
      <Meta title={"Dynamic Blog Name"} />
      <BreadCrumb title="Dynamic Blog Name" />
      <div className="blog-wrapper home-wrapper-2 py-5">
        <div className="container-xxl">
          <div className="row">
            <div className="col-12">
                <div className="single-blog-card">
                    <Link to="/blogs" className="d-flex align-items-center gap-10">
                        <HiOutlineArrowLeft className="fs-4" />
                        Go back to blogs</Link>
                    <h4 className="title">
                        A Beautiful Sunday Morning Renaissance
                    </h4>
                    <img src="./images/blog-1.jpg" className="img-fluid w-100 my-4" alt="blog image" />
                    <p>
                        You're only as good as your last collection, which is an 
                        enourmous pressure.I think there is somthing about luxury-it's 
                        not somthing people people need. It really pulls their heart.
                        I've fantastic relationship with money. Scelerisque Lorem ipsum 
                        dolor sit amet, consectetur adipisicing elit. Illo sed, itaque 
                        reprehenderit magni architecto a nisi labore ex praesentium 
                        eligendi ipsa 
                    </p>
                </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SingleBlog;
