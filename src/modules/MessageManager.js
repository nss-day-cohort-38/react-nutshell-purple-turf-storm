const remoteUrl = "http://localhost:5002";

export default {
    get(id) {
        return fetch(`${remoteUrl}/messages/${id}`).then(result => result.json());
    },
    getMessageUsername() {
        return fetch(`${remoteUrl}/messages?_expand=user`).then(result => result.json())
    },
    getAll() {
        return fetch(`${remoteUrl}/messages`).then(result => result.json());
    },
    delete(id) {
        return fetch(`${remoteUrl}/messages/${id}`, {
            method: "DELETE"
        }).then(results => results.json());
    }
}