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
          Dozens of clubs. Hundreds of events. Transforming our Environment.
          Join us now and experience it all.
        </div>
        <div className="my-3 text-white">
          <p className="header-paragraph">
            We offered events and activities of all kinds for students
            interested in breading their horizons, creating amazing memories and
            learning more about our environment. Across our website you’ll find
            all you need to learn about the events, signup, and complete
            payment. After the event share your photos and stories here and find
            more activities to be a part of. Join the fun!
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
