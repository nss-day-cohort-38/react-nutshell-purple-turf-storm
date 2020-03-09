import React from "react";
import "./Event.css";
import { Link } from "react-router-dom";

const EventCard = props => {
  return (
    <div className="card">
      <div className="card-content">
         <picture>
          <img src={require("./events.svg.ai")} alt="Event"/>
        </picture>
        <h3>
          Name: <span className="card-eventname">{props.event.name}</span>
        </h3>
        <p>Date: {props.event.date}</p>
        <p>Location: {props.event.location}</p>

        
      </div>
    </div>
  );
};

export default EventCard;
