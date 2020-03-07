import React from "react";
import "./Task.css";
import { Link } from "react-router-dom";

const TaskCard = props => {
  return (
    <div className="taskCard">
      <div className="taskCardContent">
        <h3>
          <span clasName="taskCardTitle">Task:{props.task.name}</span>
        </h3>
        <p>Complete By: {props.task.completeBy}</p>
      </div>
    </div>
  );
};

export default TaskCard;
