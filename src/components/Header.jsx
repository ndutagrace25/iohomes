import React from "react";
import headerImage from "../images/header.jpg";

const Header = () => {
  return (
    <div className="mt-5 pt-4 d-flex justify-content-between align-items-center">
      <div className="">
        <div className="text-white fs-4 fw-bold">Open Institute University</div>
        <div className="text-white fs-2 fw-bold mt-2">Environment Club</div>
        <div className="text-white my-4">
          <p className="header-paragraph col-md-8">
            The Environmental Club champions the multifaceted campus
            sustainability initiative and collaborates with students, faculty,
            staff and administrators to create a culture of conservation. By
            conserving today, we preserve the promise of tomorrow.
          </p>
        </div>
        <div>
          <button className="btn bg-light text-green fw-bold rounded">
            REGISTER NOW
          </button>
        </div>
      </div>
      <div className="header-image">
        <img alt="header" src={headerImage} className="px-5 header-image" />
      </div>
    </div>
  );
};

export default Header;
