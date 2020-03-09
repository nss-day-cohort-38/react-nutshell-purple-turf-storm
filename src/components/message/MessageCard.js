import React from "react";
// import { Link } from "react-router-dom";

const MessagesCard = props => {
    return (
        <div className="card">
            <div className="card-content">
                <h3>
                    Message: {props.messages.message}
                </h3>
    <p>Date: {props.messages.date}</p>
            </div>
        </div>
    )
}

export default MessagesCard