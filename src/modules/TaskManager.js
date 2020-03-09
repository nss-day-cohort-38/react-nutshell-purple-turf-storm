const remoteURL = "http://localhost:5002";

export default {
    //get an individual task from api
  get(id) {
    return fetch(`${remoteURL}/tasks/${id}`).then(result => result.json());
  },
  //get all tasks from api
  getAll() {
    return fetch(`${remoteURL}/tasks`).then(results => results.json());
  },
  //post a new task to the api
  post(newTask) {
    return fetch(`${remoteURL}/tasks`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(newTask)
    }).then(data => data.json());
  },
  //delete a task from the api
  delete(id) {
    return fetch(`${remoteURL}/tasks/${id}`, {
      method: "DELETE"
    }).then(result => result.json());
  },
  //edit a task in the api
  update(editedTask) {
    return fetch(`${remoteURL}/tasks/${editedTask.id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(editedTask)
    }).then(data => data.json());
  }
};
