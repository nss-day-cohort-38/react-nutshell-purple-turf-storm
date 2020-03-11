// Matt Reeds - This module creates the layout for the individual message cards

import React from "react";

const MessageCard = props => {
  const loginInfo = sessionStorage.getItem("credentials").slice(12);
  const username = loginInfo.split(`"`);
  const justUsername = username[1];

  return (
    <div className="card">
      <div className="card-content">
        <h3>{props.message.user.userName} says :</h3>
        <h3>"{props.message.message}"</h3>
        <h3>at: {props.message.date}</h3>
        {props.message.user.userName === justUsername ? (
          <button
            type="button"
            onClick={() => props.editHandler(props.message.id)}
          >
            Edit
          </button>
        ) : null}
        {props.message.user.userName === justUsername ? (
          <button
            type="button"
            onClick={() => props.deleteMessage(props.message.id)}
          >
            Delete
          </button>
        ) : null}
      </div>
    </div>
  );
};

export default MessageCard;
