import React, { useState, useEffect } from "react";
import TaskCard from "./TaskCard";
import TaskManager from "../../modules/TaskManager";

const TaskList = props => {
  const [tasks, setTasks] = useState([]);

  const getTasks = () => {
    return TaskManager.getAll().then(tasksFromAPI => {
      setTasks(tasksFromAPI);
    });
  };

  useEffect(() => {
    getTasks();
  }, []);

  return (
      <>
        <section className="taskSection">
            <button 
            type="button"
            className="btn"
            onClick={() => {
                props.history.push("/tasks/new")
            }}>New Task</button>
        </section>
        <div className="conatainerCards">
            {tasks.map(task => (
                <TaskCard
                    key={task.id}
                    task={task}
                    {...props}
                    />
            ))}
        </div>
      </>
  )
};

export default TaskList
