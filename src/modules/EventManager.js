const remoteURL = "http://localhost:5002";

export default {
  get(id) {
    return fetch(`${remoteURL}/events/${id}`).then(result => result.json());
  },
  getAll() {
    return fetch(`${remoteURL}/events`).then(result => result.json());
  },
  post(newEvent) {
    return fetch(`${remoteURL}/events`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(newEvent)
    }).then(data => data.json());
  },
  
};