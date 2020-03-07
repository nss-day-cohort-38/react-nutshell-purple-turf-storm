import React, { useState, useeffect } from "react";
import TaskCard from "./TaskCard";
import TaskManager from "../../modules/TaskManager";

const TaskList = props => {
  const [tasks, setTasks] = useState([]);

  const getTasks = () => {
    return TaskManager.getAll().then(tasksFromAPI => {
      setTasks(tasksFromAPI);
    });
  };

  useeffect(() => {
    getTasks();
  }, []);

  return (
      <>
        <section>
            
        </section>
      </>
  )
};
