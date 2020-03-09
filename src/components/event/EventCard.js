import React from "react";
import "./Event.css";
import { Link } from "react-router-dom";

const EventCard = props => {
  return (
    <div className="card">
      <div className="card-content">
         <picture>
          <img src={require("./dog.svg")} alt="My Dog" />
        </picture>
        <h3>
          Name: <span className="card-petname">{props.animal.name}</span>
        </h3>
        <p>Breed: {props.animal.breed}</p>
        <Link to={`/animals/${props.animal.id}`}>
          <button>Details</button>
        </Link>
      </div>
    </div>
  );
};

export default EventCard;
