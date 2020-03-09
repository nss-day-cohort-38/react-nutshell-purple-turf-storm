import React from "react";
import "./Task.css";
import { Link } from "react-router-dom";

const TaskCard = props => {
  return (
    <div className="taskCard">
      <div className="taskCardContent">
        <h3>
          <span className="taskCardTitle">Task:{props.task.name}</span>
        </h3>
        <p>Complete By: {props.task.completeBy}</p>
        <Link to={`/tasks/${props.task.id}`}>
          <button>Details</button>
        </Link>
        <button
          type="button"
          onClick={() => props.history.push(`tasks/${props.task.id}/edit`)}
        >
          Edit
        </button>
        <button type="button" onClick={() => props.deleteTask(props.task.id)}>
          Delete
        </button>
      </div>
    </div>
  );
};

export default TaskCard;
