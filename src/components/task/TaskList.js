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

  const deleteTask = id => {
    
    TaskManager.delete(id).then(() => 
    TaskManager.getAll().then(setTasks))
  }

  const completeTask = id => {

    TaskManager.complete(id, true).then(() => 
    TaskManager.getAll().then(setTasks))
  }

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
                    deleteTask={deleteTask}
                    completeTask={completeTask}
                    {...props}
                    />
            ))}
        </div>
      </>
  )
};

export default TaskList
