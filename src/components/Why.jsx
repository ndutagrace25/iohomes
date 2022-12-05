import React from "react";

const Why = () => {
  return (
    <div className="bg-why mb-5 pb-5 d-flex align-items-center flex-column text-white container">
      <div className="fw-bold mt-5 pt-5">
        Open Institute University environment club
      </div>
      <div className="fw-bold fs-3 text-uppercase">
        Join Us In Making A Difference
      </div>
      <div className="d-flex justify-content-between mt-4 col-md-8">
        <div className="why-card rounded px-4 py-3 col-md-6 d-flex align-items-center justify-content-between me-3">
          <div className="col-md-3">
            <i className="fa-sharp fa-solid fa-infinity fa-2xl"></i>
          </div>
          <div>
            <div className="fw-bold">Promote The Club Students</div>
            <div className="header-paragraph">
              Share your stories and encourage others to join in making a
              difference of the environment.
            </div>
          </div>
        </div>
        <div className="why-card rounded px-4 py-3 col-md-6 d-flex align-items-center justify-content-between">
          <div className="col-md-3">
            <i className="fa-solid fa-magnifying-glass fa-2xl"></i>
          </div>
          <div>
            <div className="fw-bold">Corporate Sustainability Program</div>
            <div className="header-paragraph">
              Partner with us to support our program and activities.
            </div>
          </div>
        </div>
      </div>
      <div className="d-flex justify-content-between mt-4 col-md-8">
        <div className="why-card rounded px-4 py-3 col-md-6 d-flex align-items-center justify-content-between me-3">
          <div className="col-md-3">
            <i class="fa-solid fa-computer fa-2xl"></i>
          </div>
          <div>
            <div className="fw-bold">Registrar</div>
            <div className="header-paragraph">
              Follow the links to register as a member of our club and signup
              for events.
            </div>
          </div>
        </div>
        <div className="why-card rounded px-4 py-3 col-md-6 d-flex align-items-center justify-content-between">
          <div className="col-md-3">
            <i className="fa-sharp fa-solid fa-bullhorn fa-2xl"></i>
          </div>
          <div>
            <div className="fw-bold ">List Club Events</div>
            <div className="header-paragraph">
              See listings of hundreds of open events waiting for your
              participation.
            </div>
          </div>
        </div>
      </div>
      <div className="d-flex justify-content-between mt-2">
        <div></div>
        <div></div>
      </div>
    </div>
  );
};

export default Why;
