export default class Erorrs {
    constructor(keys) {
        this.errors = {};

        keys.forEach(key => {
            this.errors[key] = [];
        });
    }

    has(key) {
        return this.errors[key] && this.errors[key].length > 0;
    }

    add(key, value) {
        this.errors[key].push(value);
    }

    empty(key) {
        this.errors[key] = [];
    }

    get(key) {
        return this.errors[key];
    }

    reset() {
        Object.keys(this.errors).forEach(key => {
            this.errors[key] = [];
        });
    }
}
