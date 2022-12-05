import React from "react";
import email from "../images/new_email.png";

const ContactUs = () => {
  return (
    <div className="contact-bg container my-5">
      <div className="d-flex justify-content-between container py-3">
        <div>
          <img src={email} alt="alt" height="300" />
        </div>
        <div className="d-flex align-items-center flex-column justify-content-center col-md-6">
          <div className="fw-bold fs-1 text-green">Contact Us</div>
          <div className="main-bg rounded p-2 col-md-10 d-flex flex-row mt-4">
            <input
              type="email"
              className="form-control main-bg text-black me-2"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
              placeholder="Enter your email"
            />
            <button className="btn bg-light text-green px-4">Send</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
