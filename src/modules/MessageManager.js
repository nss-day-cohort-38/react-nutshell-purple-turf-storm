const remoteUrl = "http://localhost:3000/";

export default {
    getAll() {
        return fetch(`${remoteUrl}/messages`).then(result => result.json());
    }
}