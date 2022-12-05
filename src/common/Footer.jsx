import React from "react";
import logo from "../images/logo.png";

const Footer = () => {
  return (
    <div className="mb-3 text-white container">
      <div className="border-bottom container d-flex justify-content-between pb-3 align-items-center">
        <div className="col-md-3">
          <div>
            <img alt="logo" src={logo} height="60" />
          </div>
          <div>
            <small className="text-wrap footer-paragraph">
              Across our website you’ll find all you need to learn about the
              events, signup, and complete payment. After the event share your
              photos and stories here and find more activities to be a part
              of. Join the fun!
            </small>
          </div>
        </div>
        <div>
          <div className="fs-5 fw-bold">Company</div>
          <div className="footer-paragraph my-2">About Us</div>
          <div className="footer-paragraph">Contuct Us</div>
        </div>
        <div>
          <div className="fs-5 fw-bold">FAQ</div>
          <div className="footer-paragraph">Terms</div>
          <div className="footer-paragraph my-2">Pricvacy</div>
          <div className="footer-paragraph">Forum</div>
        </div>
        <div>
          <div className="fs-5 fw-bold">Contact</div>
          <div className="footer-paragraph">Phone: +254 722 2032</div>
          <div className="footer-paragraph my-2">Email: example@mail.com</div>
          <div className="footer-paragraph">Address: Nairobi, Kenya</div>
        </div>
      </div>
      <div className="mt-3 mb-5 d-flex justify-content-between">
        <div className="d-flex flex-row">
          <div className="me-3">
            <i className="fa-brands fa-facebook fa-lg"></i>
          </div>
          <div className="me-3">
            <i className="fa-brands fa-square-twitter fa-lg"></i>
          </div>
          <div className="me-3">
            <i className="fa-brands fa-square-instagram fa-lg"></i>
          </div>
          <div className="me-3">
            <i className="fa-brands fa-youtube fa-lg"></i>
          </div>
        </div>
        <div>
          <small className="footer-paragraph">2022 - All Rights Reserved</small>
        </div>
      </div>
    </div>
  );
};

export default Footer;
