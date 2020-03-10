import React from "react";
import "./Event.css";
import { Link } from "react-router-dom";
import moment from 'moment';
console.log(moment);


const EventCard = props => {
  return (
    <div className="card">
      <div className="card-content">
        <picture>
          <img src={require("./event.svg")} alt="Event" />
          
        </picture>
       
        <h3>
          Event: <span className="card-eventname">{props.event.name}</span>
        </h3>
        <p>Date: {props.event.date}</p>
        <p>Location: {props.event.location}</p>
        <button
          type="button"
          onClick={() => props.history.push(`events/${props.event.id}/edit`)}
        >
          Edit
        </button>
      
        <button type="button" onClick={() => props.deleteEvent(props.event.id)}>
          Delete
        </button>
       
      </div>
    </div>
  );
};

export default EventCard;
