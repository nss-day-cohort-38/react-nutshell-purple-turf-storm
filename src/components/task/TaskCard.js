import React from "react";
import "./Task.css";

const TaskCard = props => {
  if (props.task.isComplete === false) {
  return (
    <div className="taskCard">
      <div className="taskCardContent">
        <h3>
          <span className="taskCardTitle">Task:{props.task.name}</span>
        </h3>
        <p>Complete By: {props.task.completeBy}</p>
        <input
        type="checkbox"
        id="isComplete"
        checked={props.task.isComplete}
        onChange={() => props.completeTask(props.task.id)}/>
        <label
        htmlFor="isComplete">Complete</label>
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
  } else {return(null)}
};

export default TaskCard;
