import React from "react";
// import { Link } from "react-router-dom";

const MessageCard = props => {
    return (
        <div className="card">
            <div className="card-content">
                <h3>
                    Message: {props.message.message}
                </h3>
    <h3>Date posted: {props.message.date}</h3>
            </div>
        </div>
    )
}

export default MessageCard