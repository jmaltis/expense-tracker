import {BACKEND_URL} from "../utils/Constants";

export default class APICaller {
    constructor(uri) {
        this.uri = uri;
    }

    getAll() {
        return this.callApi(this.uri, {
            method: 'GET'
        });
    }

    get(id) {
        var uri = this.uri + '/' + id;
        return this.callApi(uri, {
            method: 'GET'
        });
    }

    create(body) {
        return this.callApi(this.uri, {
            method: 'POST',
            body: JSON.stringify(body)
        });
    }

    update(id, body) {
        return this.callApi(this.uri + '/' + id, {
            method: 'PATCH',
            body: JSON.stringify(body)
        });
    }

    delete(id) {
        return new Promise((resolve, reject) =>
            this.callApi(this.uri + '/' + id, {method: 'DELETE'})
                .then(() => {
                    return resolve(id);
                })
                .catch(err => {
                    reject(err);
                }));
    }

    callApi(uri, options = {}) {
        // Commons headers
        options.headers = {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        };

        return new Promise((resolve, reject) => {
            fetch(BACKEND_URL + uri, options)
                // Response from server received
                .then(response => {
                    // Response OK, but no content
                    if (response.status == 204) {
                        return resolve();
                    }

                    response.json().then(bodyObject => {
                        // Response OK with content
                        if (response.status >= 200 && response.status < 300) {
                            resolve(bodyObject);
                        } else {
                            reject(bodyObject);
                        }
                    });
                })
                // Server couldn't be contacted
                .catch(err => {
                    reject({
                        'errors': [
                            {'message': err.message}
                        ]
                    });
                });
        });
    }

}
