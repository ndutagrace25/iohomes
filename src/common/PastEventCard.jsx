import React from "react";

const PastEventCard = ({ image, title, text }) => {
  return (
    <div className="why-card rounded me-4">
      <div className=" d-flex flex-column align-items-center ">
        <img alt="img" src={image} height="150" className="event-img" />
        <div className="px-3 pt-3 fw-bold" style={{ fontSize: "12px" }}>
          {title}
        </div>
        <div className="header-paragraph mb-3 ">{text}</div>
      </div>
      <div className="d-flex justify-content-end">
        <div className="fw-bold fs-2 plus col-md-2 d-flex text-align-center">+</div>
      </div>
    </div>
  );
};

export default PastEventCard;
