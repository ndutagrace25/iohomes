import React from "react";
import logo from "../images/logo1.png";
import logo2 from "../images/logo2.png";
import logo3 from "../images/logo3.png";
import logo4 from "../images/logo4.png";
import logo5 from "../images/logo5.png";

const JoinUs = () => {
  return (
    <div className="mt-4 d-flex justify-content-center flex-column align-items-center mb-5 pb-5">
      <div className="text-white fs-3">
        These Companies Build Tomorrow with us
      </div>
      <div className="text-white text-uppercase fw-bold fs-3 my-2">Join Us</div>
      <div className="d-flex flex-row align-items-center justify-content-beween">
        <div>
          <i className="fa-solid fa-backward-step text-white fa-lg"></i>
        </div>
        <div>
          <img alt="logo" src={logo} height="50" />
        </div>
        <div>
          <img alt="logo" src={logo2} height="50" />
        </div>
        <div>
          <img alt="logo" src={logo3} height="50" />
        </div>
        <div>
          <img alt="logo" src={logo4} height="50" />
          <img alt="logo" src={logo5} height="50" />
        </div>
        <div>
          <i className="fa-solid fa-forward-step text-white fa-lg"></i>
        </div>
      </div>
    </div>
  );
};

export default JoinUs;
