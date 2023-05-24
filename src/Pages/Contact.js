import React from "react";
import BreadCrumb from "../components/BreadCrumb";
import Meta from "../components/Meta";
import { AiOutlineHome, AiOutlineMail } from "react-icons/ai";
import { BiPhoneCall, BiInfoCircle } from "react-icons/bi";

const Contact = () => {
  return (
    <>
      <Meta title={"Contact Us"} />
      <BreadCrumb title="Contact Us" />
      <div className="contact-wrapper py-5 home-wrapper-2">
        <div className="container-xxl">
          <div className="row">
            <div className="col-12">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d29473.591856414823!2d88.29291742954273!3d22.571660001713663!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a02782e54099073%3A0xe230e1d0af8fa119!2sShibpur%2C%20Howrah%2C%20West%20Bengal!5e0!3m2!1sen!2sin!4v1680016314162!5m2!1sen!2sin"
                width="600"
                height="450"
                className="border-0 w-100"
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
              <div className="col-12 mt-5">
                <div className="contact-inner-wrapper d-flex justify-content-between">
                  <div>
                    <h3 className="contact-title mb-4">Contact Us</h3>
                    <form action="" className="d-flex flex-column gap-15">
                      <din>
                        <input
                          type="text"
                          className="form-control"
                          placeholder="Name"
                        ></input>
                      </din>
                      <din>
                        <input
                          type="email"
                          className="form-control"
                          placeholder="Email"
                        ></input>
                      </din>
                      <din>
                        <input
                          type="tel"
                          className="form-control"
                          placeholder="Mobile number"
                        ></input>
                      </din>
                      <div>
                        <textarea
                          name=""
                          id=""
                          className="w-100 form-control"
                          cols="30"
                          rows="5"
                          placeholder="Comments"
                        ></textarea>
                      </div>
                      <div>
                        <button className="button border-0">Submit</button>
                      </div>
                    </form>
                  </div>
                  <div>
                    <h3 className="contact-title mb-4">Get is touch with us</h3>
                    <div>
                      <ul className="ps-0">
                        <li className="mb-3 d-flex gap-15 align-items-center">
                          <AiOutlineHome className="fs-5" />
                          <address className="mb-0">
                            Hno: 242/1, Netaji Subhas Road, P/o-Khurut,
                            Howrah-711101
                          </address>
                        </li>
                        <li className="mb-3 d-flex gap-15 align-items-center">
                          <BiPhoneCall className="fs-5" />
                          <a href="tel: +91 6289100166">+91 6289100166</a>
                        </li>
                        <li className="mb-3 d-flex gap-15 align-items-center">
                          <AiOutlineMail className="fs-5" />
                          <a href="mailto:dipayanporel@gmail.com">
                            dipayanporel@gmail.com
                          </a>
                        </li>
                        <li className="mb-3 d-flex gap-15 align-items-center">
                          <BiInfoCircle className="fs-5" />
                          <p className="mb-0">Monday - Friday 10AM - 8PM</p>
                        </li>
                      </ul>
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

export default Contact;
