import Errors from './Errors.js';

export default class Form {
    constructor(data = {}, rules = {}) {
        this.original = JSON.parse(JSON.stringify(data));
        this.data = data;
        this.errors = new Errors(Object.keys(data));
        this.rules = rules;
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
        this.data = JSON.parse(JSON.stringify(this.original));

        this.errors.reset();
    }

    getData() {
        return JSON.parse(JSON.stringify(this.data));
    }

    validate() {
        let errors = [];
        // valami bonyolultabb dolog jonne ide, de nincs kedvem a laraveles validaciot megcsinalni ide :)
        Object.keys(this.data).forEach(key => {
            if (Array.isArray(this.data[key])) {
                if (this.data[key].length == 0) {
                    errors.push(key);
                    this.errors.add(key, 'A mezo megadasa kotelezo!');
                }
            } else {
                if (this.data[key] == '') {
                    errors.push(key);
                    this.errors.add(key, 'A mezo megadasa kotelezo!');
                }
            }
        });

        if (errors.length > 0) {
            throw 'validation errors';
        }

        return true;
    }
}
