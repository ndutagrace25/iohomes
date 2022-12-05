import React from "react";
import { PastEventCard } from "../common";
import students from "../images/students.jpeg";
import planting from "../images/planting.jpeg";
import grass from "../images/grass.jpeg";
import certs from "../images/certs.jpeg";

const PastEvents = () => {
  return (
    <div className="d-flex align-items-center flex-column my-5 text-white">
      <div>Forum</div>
      <div className="fs-3 mb-4 fw-bold">Past Events</div>
      <div className="d-flex justify-content-between">
        <PastEventCard
          title="Students Attended An Amazing..."
          text="August 27, 2022"
          image={students}
        />
        <PastEventCard
          title="Students planted Dozens of Trees At.."
          text="September 2, 2022"
          image={planting}
        />
        <PastEventCard
          title="Students Visited An Amazing Forest..."
          text="April 7, 2022"
          image={grass}
        />
        <PastEventCard
          title="Our Students Groups Participated In..."
          text="January 7, 2022"
          image={certs}
        />
      </div>
      <div className="mt-3">
        <i className="fa-solid fa-backward-step text-white fa-lg mx-3"></i>
        <i className="fa-solid fa-forward-step text-white fa-lg"></i>
      </div>
    </div>
  );
};

export default PastEvents;
