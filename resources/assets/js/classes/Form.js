import Errors from './Errors.js';

export default class Form {
    constructor(data = {}) {
        this.original = Object.assign({}, data);
        this.data = data;
        this.errors = new Errors;
    }

    fill(data) {
        Object.keys(data).forEach(prop => {
            this.data[prop] = data[prop];
        });
    }

    set(prop, value) {
        this.data[prop] = value;
    }

    reset() {
        this.data = Object.assign({}, this.original);
    }
}
