"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var EqualityComparer = /** @class */ (function () {
    function EqualityComparer() {
    }
    Object.defineProperty(EqualityComparer, "default", {
        get: function () {
            if (!this._defaultComparer) {
                this._defaultComparer = new DefaultEqualityComparer();
            }
            return this._defaultComparer;
        },
        enumerable: true,
        configurable: true
    });
    return EqualityComparer;
}());
exports.default = EqualityComparer;
var DefaultEqualityComparer = /** @class */ (function () {
    function DefaultEqualityComparer() {
    }
    DefaultEqualityComparer.prototype.equals = function (x, y) {
        var xType = typeof x;
        if (xType !== typeof y) {
            return false;
        }
        if (xType !== "object") {
            return x === y;
        }
        var xEquals = x["equals"];
        if (xEquals) {
            return xEquals(y);
        }
        return this.getHashCode(x) === this.getHashCode(y);
    };
    DefaultEqualityComparer.prototype.getHashCode = function (item) {
        if (item && item.getHashCode && typeof item.getHashCode === "function") {
            return item.getHashCode();
        }
        return getHashCode(item);
    };
    return DefaultEqualityComparer;
}());
/**
* Returns the Hashcode for a given data item.
* @param data The data which should be used to calculate the hash code.
*/
function getHashCode(data) {
    var stringHash = function (value) {
        var hash = 0;
        for (var i = 0; i < value.length; i++) {
            hash = (((hash << 5) - hash) + value.charCodeAt(i)) & 0xFFFFFFFF;
        }
        return hash;
    };
    var objectHash = function (value) {
        var result = 0;
        for (var property in value) {
            if (value.hasOwnProperty(property)) {
                result += getHashCode(property + value[property]);
            }
        }
        return result;
    };
    var dataType = typeof data;
    switch (dataType) {
        case "boolean":
            return data ? 1 : 0;
        case "object":
            return objectHash(data);
        case "string":
            return stringHash(data);
        case "number": // Convert to string and hash to avoid any floating point weirdness.
        case "function": // the toString method of a function object will return the source code.
        default:
            return stringHash(data.toString());
    }
}
exports.getHashCode = getHashCode;
