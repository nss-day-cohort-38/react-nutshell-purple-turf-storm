import React, { useState, useEffect } from "react";
import TaskManager from "../../modules/TaskManager";
import "./TaskForm.css";

const TaskEditForm = props => {
  const [task, setTask] = useState({ name: "", completeBy: "" });
  const [isLoading, setIsLoading] = useState(false);
  const userId = sessionStorage.getItem("id")

  const handleFieldChange = evt => {
    const stateToChange = { ...task };
    stateToChange[evt.target.id] = evt.target.value;
    setTask(stateToChange);
  };

  const updateExistingTask = evt => {
    evt.preventDefault();
    setIsLoading(true);

    const editedTask = {
      id: parseInt(props.match.params.taskId),
      userId: parseInt(userId),
      name: task.name,
      completeBy: task.completeBy,
      isComplete: false

    };
    
    TaskManager.update(editedTask).then(() => props.history.push("/tasks"));
  };

  useEffect(() => {
    TaskManager.get(props.match.params.taskId).then(task => {
      setTask(task);
      setIsLoading(false);
    });
  }, []);

  return (
    <>
      <form>
        <fieldset>
          <div className="formGrid">
            <input
              type="text"
              required
              className="form-control"
              onChange={handleFieldChange}
              id="name"
              value={task.name}
            />
            <label htmlFor="task">Task:</label>
            <input
              type="date"
              required
              className="form-control"
              onChange={handleFieldChange}
              id="completeBy"
              value={task.completeBy}
            />
            <label htmlFor="completeBy">Date:</label>
          </div>
          <div>
            <button
              type="button"
              disabled={isLoading}
              onClick={updateExistingTask}
              className="btn btn-primary"
            >
              Submit
            </button>
          </div>
        </fieldset>
      </form>
    </>
  );
};

export default TaskEditForm
