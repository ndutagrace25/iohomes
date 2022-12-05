import React from "react";

const Services = () => {
  return (
    <div className="d-flex align-items-center flex-column text-white my-5 py-5">
      <div className="header-text">
        Students Clubs
      </div>
      <div className="fw-bold fs-4">Hundreds Of Events And Participants</div>
      <div className="d-flex justify-content-between bg-service col-md-8 my-4 px-5 py-5">
        <div className="d-flex align-items-center flex-column">
          <div className="fs-1 fw-bold">14,320</div>
          <div>Trees planted</div>
        </div>
        <div className="d-flex align-items-center flex-column border-start ps-5">
          <div className="fs-1 fw-bold">189</div>
          <div>Events in 2022</div>
        </div>
        <div className="d-flex align-items-center flex-column border-start ps-5">
          <div className="fs-1 fw-bold">11K</div>
          <div>Registered Members</div>
        </div>
      </div>
    </div>
  );
};

export default Services;
