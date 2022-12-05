import React from "react";
import { EventCard } from "../common";
import swimming from "../images/swimming.jpg";
import running from "../images/running.jpg";
import hills from "../images/hills.jpg";
import candle from "../images/candle.jpg";

const Events = () => {
  return (
    <div className="d-flex align-items-center flex-column my-5 text-white">
      <div>Come and have some fun</div>
      <div className="fs-3 mb-4 fw-bold">EVENTS</div>
      <div className="d-flex justify-content-between">
        <EventCard
          title="Swim 4 Butterflies"
          text="12/12/2022"
          image={swimming}
        />
        <EventCard title="Halloween Trails" text="29/10/2022" image={hills} />
        <EventCard title="November Run" text="12/11/2022" image={running} />
        <EventCard title="Late Night Vigil" text="11/02/2023" image={candle} />
      </div>
      <div className="mt-3">
        <i className="fa-solid fa-backward-step text-white fa-lg mx-3"></i>
        <i className="fa-solid fa-forward-step text-white fa-lg"></i>
      </div>
    </div>
  );
};

export default Events;
