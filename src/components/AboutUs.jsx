import React from "react";
import friends from "../images/friends.jpg";

const AboutUs = () => {
  return (
    <div className="d-flex justify-content-between flex-row my-5 align-items-center">
      <div>
        <img alt="groupPhoto" src={friends} height="400" />
      </div>
      <div className="col-md-5">
        <div className="text-white fw-bold fs-3">About Us</div>
        <div className="text-white mt-3 fw-bold">
          Simple! Our mission is to become the best design agency in the world!
        </div>
        <div className="my-3 text-white">
          <p className="header-paragraph">
            We are the Central Environmental Club, dedicated to improving and
            promoting environmental quality and sustainability on campus and in
            the community. Activities that we do include: advocating for
            sustainability on campus, adopt a stream, campus clean-up, recycling
            awareness, compost initiatives, organizing Earth Day Events and film
            showings, hiking, BBQs, and more
          </p>
        </div>
        <div>
          <button className="btn bg-light text-green fw-bold rounded">
            REGISTER NOW
          </button>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
