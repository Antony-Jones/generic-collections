"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class EqualityComparer {
    static get default() {
        if (!this._defaultComparer) {
            this._defaultComparer = new DefaultEqualityComparer();
        }
        return this._defaultComparer;
    }
}
exports.default = EqualityComparer;
class DefaultEqualityComparer {
    equals(x, y) {
        var xType = typeof x;
        if (xType !== typeof y) {
            return false;
        }
        if (xType !== "object") {
            return x === y;
        }
        const xEquals = x["equals"];
        if (xEquals) {
            return xEquals(y);
        }
        return this.getHashCode(x) === this.getHashCode(y);
    }
    getHashCode(item) {
        if (item && item.getHashCode && typeof item.getHashCode === "function") {
            return item.getHashCode();
        }
        return getHashCode(item);
    }
}
/**
* Returns the Hashcode for a given data item.
* @param data The data which should be used to calculate the hash code.
*/
function getHashCode(data) {
    const stringHash = (value) => {
        var hash = 0;
        for (let i = 0; i < value.length; i++) {
            hash = (((hash << 5) - hash) + value.charCodeAt(i)) & 0xFFFFFFFF;
        }
        return hash;
    };
    const objectHash = (value) => {
        var result = 0;
        for (let property in value) {
            if (value.hasOwnProperty(property)) {
                result += getHashCode(property + value[property]);
            }
        }
        return result;
    };
    const dataType = typeof data;
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
