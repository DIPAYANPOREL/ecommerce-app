import React from "react";
import { Link } from "react-router-dom";
import { BsLinkedin, BsInstagram, BsGithub, BsTwitter } from "react-icons/bs";

const Footer = () => {
  return (
    <>
      <footer className="py-4">
        <div className="container-xxl d-flex align-items-center">
          <div className="row d-flex align-items-center">
            <div classname="col-5">
              <div className="footer-top-data d-flex align-items-center gap-30">
                <img src="./images/newsletter.png" alt="newsletter" />
                <h3 className="mb-0 text-white">Sign Up for Newsletter</h3>

                <div classname="col-5 d-flex align-items-center">
                  <div className="input-group d-flex align-items-center">
                    <input
                      type="text"
                      className="form-control py-2"
                      placeholder="Your email address..."
                      aria-label="Your email address..."
                      aria-describedby="basic-addon2"
                    />
                    <span className="input-group-text p-2" id="basic-addon2">
                      Subscribe
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
      <footer className="py-3">
        <div className="container-xxl">
          <div className="row">
            <div className="col-4">
              <h4 className="text-white mb-4">Contact Us</h4>
              <div>
                <address className="text-white fs-6">
                  Hno: 242/1 Near Vill Chopal,
                  <br />
                  Sonipath, Haryana, <br />
                  PinCode: 131103
                </address>
                <a
                  href="tel: +91 6289100166"
                  className="mt-3 d-block mb-1 text-white"
                >
                  +91 6289100166
                </a>
                <a
                  href="mailto:dipayanporel288@hmail.com"
                  className="mt-2 d-block mb-0
                text-white"
                >
                  dipayanporel288@gmail.com
                </a>
                <div className="social-icons d-flex align-items-center gap-30 mt-3">
                  <a href="">
                    <BsLinkedin className="text-white font-size-3"/>
                  </a>
                  <a href="">
                    <BsInstagram className="text-white font-size-3"/>
                  </a>
                  <a href="">
                    <BsTwitter className="text-white font-size-3"/>
                  </a>
                  <a href="">
                    <BsGithub className="text-white font-size-3"/>
                  </a>
                </div>
              </div>
            </div>
            <div className="col-3">
              <h4 className="text-white mb-4">Information</h4>
              <div className="footer-links d-flex flex-column">
                <Link className="text-white py-2 mb-1">Privacy Policy</Link>
                <Link className="text-white py-2 mb-1">Refund Policy</Link>
                <Link className="text-white py-2 mb-1">Shipping Policy</Link>
                <Link className="text-white py-2 mb-1">Terms & Conditions</Link>
                <Link className="text-white py-2 mb-1">Blogs</Link>
              </div>
            </div>
            <div className="col-3">
              <h4 className="text-white mb-4">Accounts</h4>
              <div className="footer-links d-flex flex-column">
                <Link className="text-white py-2 mb-1">About Us</Link>
                <Link className="text-white py-2 mb-1">FAQ</Link>
                <Link className="text-white py-2 mb-1">Contact</Link>
              </div>
            </div>
            <div className="col-2">
              <h4 className="text-white mb-4">Quick Links</h4>
              <div className="footer-links d-flex flex-column">
                <Link className="text-white py-2 mb-1">Laptops</Link>
                <Link className="text-white py-2 mb-1">Headphones</Link>
                <Link className="text-white py-2 mb-1">Tablets</Link>
                <Link className="text-white py-2 mb-1">Watch</Link>
              </div>
            </div>
          </div>
        </div>
      </footer>
      <footer className="py-4">
        <div className="container-xxl">
          <div className="row">
            <div className="col-12">
              <p className="text-center mb-0 text-white">
                ©{new Date().getFullYear()}: Powered by Developers
              </p>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
