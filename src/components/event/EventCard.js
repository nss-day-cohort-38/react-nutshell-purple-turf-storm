import React from "react";
import "./Event.css";
import { Link } from "react-router-dom";

const EventCard = props => {
  return (
    <div className="card">
      <div className="card-content">
         <picture>
          <img src={require("./event.svg")} alt="Event" />
        </picture>
        <h3>
          Name: <span className="card-eventname">{props.event.name}</span>
        </h3>
        <p>Date: {props.event.date}</p>
        <p>Location: {props.event.location}</p>

        <Link to={`/events/${props.event.id}`}>
          <button>Details</button>
        </Link>
      </div>
    </div>
  );
};

export default EventCard;
