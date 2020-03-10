import React from "react";
import MessageEditForm from "./MessageEditForm";

const MessageCard = props => {

  return (
    <div className="card">
      <div className="card-content">
  <h3>{props.message.user.userName} says :</h3>
        <h3>"{props.message.message}"</h3>
        <h3>at: {props.message.date}</h3>
        <button 
        type="button"
        onClick={() => props.editHandler(props.message.id)}
        >Edit</button>
        <button
          type="button"
          onClick= {() => props.deleteMessage(props.message.id)}
        >
          Delete
        </button>
      </div>
    </div>
  );
};

export default MessageCard;
