"use strict";
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var __values = (this && this.__values) || function (o) {
    var m = typeof Symbol === "function" && o[Symbol.iterator], i = 0;
    if (m) return m.call(o);
    return {
        next: function () {
            if (o && i >= o.length) o = void 0;
            return { value: o && o[i++], done: !o };
        }
    };
};
Object.defineProperty(exports, "__esModule", { value: true });
var EqualityComparer_1 = require("./EqualityComparer");
var List = /** @class */ (function () {
    function List(collection) {
        this._defaultComparer = function (x, y) {
            if (x === y)
                return 0;
            if (x > y)
                return 1;
            return -1;
        };
        //super();
        this._itemCount = 0;
        if (collection != null) {
            if (collection instanceof Array) {
                for (var i = 0; i < collection.length; i++) {
                    this.add(collection[i]);
                }
            }
            else {
                try {
                    for (var collection_1 = __values(collection), collection_1_1 = collection_1.next(); !collection_1_1.done; collection_1_1 = collection_1.next()) {
                        var item = collection_1_1.value;
                        this.add(item);
                    }
                }
                catch (e_1_1) { e_1 = { error: e_1_1 }; }
                finally {
                    try {
                        if (collection_1_1 && !collection_1_1.done && (_a = collection_1.return)) _a.call(collection_1);
                    }
                    finally { if (e_1) throw e_1.error; }
                }
            }
        }
        var e_1, _a;
    }
    List.prototype.indexOf = function (item) {
        var comparer = EqualityComparer_1.default.default;
        var itemHash = comparer.getHashCode(item);
        for (var i = 0; i < this._itemCount; i++) {
            if (itemHash === comparer.getHashCode(this[i]) && comparer.equals(item, this[i])) {
                return i;
            }
        }
        return -1;
    };
    List.prototype.lastIndexOf = function (item) {
        var comparer = EqualityComparer_1.default.default;
        var itemHash = comparer.getHashCode(item);
        for (var i = this._itemCount - 1; i >= 0; i--) {
            if (itemHash === comparer.getHashCode(this[i]) && comparer.equals(item, this[i])) {
                return i;
            }
        }
        return -1;
    };
    List.prototype.insert = function (index, item) {
        if (index >= this._itemCount) {
            throw new Error("Index out of range");
        }
        for (var i = this._itemCount; i > index; i--) {
            this[i] = this[i - 1];
        }
        this[index] = item;
        this._itemCount++;
    };
    List.prototype.removeAt = function (index) {
        if (index >= this._itemCount) {
            throw new Error("Argument Out of Range");
        }
        if (index !== this._itemCount - 1) {
            for (var i = index + 1; i < this._itemCount; i++) {
                this[i - 1] = this[i];
            }
        }
        delete this[this._itemCount--];
    };
    Object.defineProperty(List.prototype, "count", {
        get: function () {
            return this._itemCount;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(List.prototype, "isReadOnly", {
        get: function () {
            return false;
        },
        enumerable: true,
        configurable: true
    });
    List.prototype.add = function (item) {
        this[this._itemCount] = item;
        this._itemCount++;
    };
    List.prototype.clear = function () {
        var _this = this;
        var removeLast = function () {
            delete _this[_this._itemCount];
            _this._itemCount--;
        };
        while (this._itemCount > 0) {
            removeLast();
        }
    };
    List.prototype.contains = function (item) {
        var comparer = EqualityComparer_1.default.default;
        var itemHash = comparer.getHashCode(item);
        for (var i = 0; i < this._itemCount; i++) {
            if (itemHash === comparer.getHashCode(this[i]) && comparer.equals(item, this[i])) {
                return true;
            }
        }
        return false;
    };
    List.prototype.copyTo = function (array, arrayIndex) {
        if (!arrayIndex) {
            arrayIndex = 0;
        }
        for (var i = 0; i < this._itemCount; i++) {
            array[i + arrayIndex] = this[i];
        }
    };
    List.prototype.remove = function (item) {
        var index = this.indexOf(item);
        if (index > -1) {
            this.removeAt(index);
            return true;
        }
        return false;
    };
    List.prototype[Symbol.iterator] = function () {
        var i;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    i = 0;
                    _a.label = 1;
                case 1:
                    if (!(i < this._itemCount)) return [3 /*break*/, 4];
                    return [4 /*yield*/, this[i]];
                case 2:
                    _a.sent();
                    _a.label = 3;
                case 3:
                    i++;
                    return [3 /*break*/, 1];
                case 4: return [2 /*return*/];
            }
        });
    };
    List.prototype.addRange = function (collection) {
        if (!collection) {
            throw new Error("Argument Null");
        }
        try {
            for (var collection_2 = __values(collection), collection_2_1 = collection_2.next(); !collection_2_1.done; collection_2_1 = collection_2.next()) {
                var item = collection_2_1.value;
                this.add(item);
            }
        }
        catch (e_2_1) { e_2 = { error: e_2_1 }; }
        finally {
            try {
                if (collection_2_1 && !collection_2_1.done && (_a = collection_2.return)) _a.call(collection_2);
            }
            finally { if (e_2) throw e_2.error; }
        }
        var e_2, _a;
    };
    List.prototype.insertRange = function (index, collection) {
        if (!collection) {
            throw new Error("Argument Null");
        }
        if (index >= this._itemCount) {
            throw new Error("Index out of range");
        }
        var counter = 0;
        try {
            for (var collection_3 = __values(collection), collection_3_1 = collection_3.next(); !collection_3_1.done; collection_3_1 = collection_3.next()) {
                var item = collection_3_1.value;
                this.insert(index + counter, item);
                counter++;
            }
        }
        catch (e_3_1) { e_3 = { error: e_3_1 }; }
        finally {
            try {
                if (collection_3_1 && !collection_3_1.done && (_a = collection_3.return)) _a.call(collection_3);
            }
            finally { if (e_3) throw e_3.error; }
        }
        var e_3, _a;
    };
    List.prototype.removeAll = function (predicate) {
        // Shift items to remove specified items.
        var itemMovementCount = 0;
        for (var i = 0; i < this._itemCount; i++) {
            if (predicate(this[i])) {
                itemMovementCount++;
            }
            else {
                if (itemMovementCount > 0) {
                    this[i - itemMovementCount] = this[i];
                }
            }
        }
        // Trim the excess
        for (var i = this._itemCount - itemMovementCount; i < this._itemCount; i++) {
            delete this[i];
        }
        // lower the item count by the number of items removed.
        this._itemCount -= itemMovementCount;
    };
    List.prototype.sort = function (comparer) {
        var _this = this;
        // This method uses the Quicksort alorithm, For more information see the following wikipedia page:
        // https://en.wikipedia.org/wiki/Quicksort
        if (!comparer) {
            comparer = this._defaultComparer;
        }
        var swap = function (i, j) {
            var temp = _this[i];
            _this[i] = _this[j];
            _this[j] = temp;
        };
        var partition = function (left, right) {
            var current = _this[right - 1], minEnd = left;
            for (var i = left; i < right - 1; i++) {
                if (comparer(_this[i], current) < 0) {
                    swap(i, minEnd);
                    minEnd += 1;
                }
            }
            swap(minEnd, right - 1);
            return minEnd;
        };
        var sort = function (left, right) {
            if (left < right) {
                var p = partition(left, right);
                sort(left, p);
                sort(p + 1, right);
            }
        };
        sort(0, this._itemCount);
    };
    List.prototype.reverse = function (index, count) {
        if (index === undefined) {
            index = 0;
        }
        if (count === undefined) {
            count = this._itemCount;
        }
        if (index < 0) {
            throw new Error("Argument out of range");
        }
        if (count > this._itemCount - index) {
            throw new Error("Invalid Length");
        }
        var i = index;
        var j = index + count - 1;
        while (i < j) {
            var temp = this[i];
            this[i] = this[j];
            this[j] = temp;
            i++;
            j--;
        }
    };
    List.prototype.binarySearch = function (item, index, count, comparer) {
        if (index === undefined) {
            index = 0;
        }
        if (count === undefined) {
            count = this._itemCount;
        }
        if (!comparer) {
            comparer = this._defaultComparer;
        }
        if (index < 0) {
            throw new Error("Argument out of range");
        }
        if (count > this._itemCount - index) {
            throw new Error("Invalid Length");
        }
        var minIndex = index;
        var maxIndex = (index + count) - 1;
        var currentIndex;
        var currentElement;
        while (minIndex <= maxIndex) {
            currentIndex = (minIndex + maxIndex) / 2 | 0;
            currentElement = this[currentIndex];
            var comparison = comparer(currentElement, item);
            if (comparison < 0) {
                minIndex = currentIndex + 1;
            }
            else if (comparison > 0) {
                maxIndex = currentIndex - 1;
            }
            else {
                return currentIndex;
            }
        }
        return -1;
    };
    List.prototype.getRange = function (index, count) {
        if (index < 0) {
            throw new Error("Argument out of range");
        }
        if (count > this._itemCount - index) {
            throw new Error("Invalid Length");
        }
        var output = new List();
        for (var i = index; i < (index + count); i++) {
            output.add(this[i]);
        }
        return output;
    };
    List.prototype.removeRange = function (index, count) {
        if (index < 0) {
            throw new Error("Argument out of range");
        }
        if (count > this._itemCount - index) {
            throw new Error("Invalid Length");
        }
        // Shift items
        for (var i = (index + count); i < this._itemCount; i++) {
            this[i - count] = this[i];
        }
        // Trim the excess
        for (var i = (this._itemCount - count); i < this._itemCount; i++) {
            delete this[i];
        }
        this._itemCount = this._itemCount - count;
    };
    return List;
}());
exports.default = List;
