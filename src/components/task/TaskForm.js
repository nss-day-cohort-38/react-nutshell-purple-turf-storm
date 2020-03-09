import React, { useState } from "react";
import TaskManager from "../../modules/TaskManager";
import "./TaskForm.css";

const TaskForm = props => {
    const userId = sessionStorage.getItem("id")
  const [task, setTask] = useState({ userId: parseInt(userId), name: "", isComplete: false, completeBy: "" });
  const [isLoading, setIsLoading] = useState(false);

  const handleFieldChange = evt => {
    const stateToChange = { ...task };
    stateToChange[evt.target.id] = evt.target.value;
    setTask(stateToChange);
  };

  const constructNewTask = evt => {
    evt.preventDefault();
    if (task.name === "" || task.completeBy === "") {
      window.alert("Please input a task");
    } else {
      setIsLoading(true);
      TaskManager.post(task).then(() => props.history.push("/tasks"));
    }
  };

  return (
    <>
      <form>
        <fieldset>
          <div className="formgrid">
            <input
              type="text"
              required
              onChange={handleFieldChange}
              id="name"
              placeholder="Task Name"
            />
            <label htmlFor="name">Task Name</label>
            <input
              type="date"
              required
              onChange={handleFieldChange}
              id="completeBy"
              placeholder="Complete By"
            />
            <label htmlFor="completeBy">Complete By</label>
          </div>
          <div className="alignRight">
            <button
              type="button"
              disabled={isLoading}
              onClick={constructNewTask}
            >
              Submit
            </button>
          </div>
        </fieldset>
      </form>
    </>
  );
};

export default TaskForm;
