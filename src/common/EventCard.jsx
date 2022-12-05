import React from "react";

const EventCard = ({ image, title, text }) => {
  return (
    <div className="why-card rounded d-flex flex-column align-items-center me-4">
      <img alt="img" src={image} height="130" className="event-img" />
      <div className="px-3 pt-3 fw-bold">{title}</div>
      <div className="header-paragraph mb-3">{text}</div>
    </div>
  );
};

export default EventCard;
