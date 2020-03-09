import React from "react";
import "./Task.css";

const TaskCard = props => {
  return (
    <div className="taskCard">
      <div className="taskCardContent">
        <h3>
          <span className="taskCardTitle">Task:{props.task.name}</span>
        </h3>
        <p>Complete By: {props.task.completeBy}</p>
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
