export default class KeyValuePair {
    constructor(key, value) {
        this._key = key;
        this._value = value;
    }
    get key() {
        return this._key;
    }
    get value() {
        return this._value;
    }
    toJSON() {
        return { Key: this._key, Value: this._value };
    }
    toString() {
        return `[${this._key}, ${this._value}]`;
    }
}
