"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var KeyValuePair = /** @class */ (function () {
    function KeyValuePair(key, value) {
        this._key = key;
        this._value = value;
    }
    Object.defineProperty(KeyValuePair.prototype, "key", {
        get: function () {
            return this._key;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(KeyValuePair.prototype, "value", {
        get: function () {
            return this._value;
        },
        enumerable: true,
        configurable: true
    });
    KeyValuePair.prototype.toJSON = function () {
        return { Key: this._key, Value: this._value };
    };
    KeyValuePair.prototype.toString = function () {
        return "[" + this._key + ", " + this._value + "]";
    };
    return KeyValuePair;
}());
exports.default = KeyValuePair;
