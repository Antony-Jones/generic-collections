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
var KeyValuePair_1 = require("./KeyValuePair");
var EqualityComparer_1 = require("./EqualityComparer");
var Dictionary = /** @class */ (function () {
    function Dictionary(comparer) {
        this._data = {};
        this._equalityComparer = comparer || EqualityComparer_1.default.default;
        this._count = 0;
    }
    Dictionary.prototype.keys = function () {
        var _a, _b, item, e_1_1, e_1, _c;
        return __generator(this, function (_d) {
            switch (_d.label) {
                case 0:
                    _d.trys.push([0, 5, 6, 7]);
                    _a = __values(this), _b = _a.next();
                    _d.label = 1;
                case 1:
                    if (!!_b.done) return [3 /*break*/, 4];
                    item = _b.value;
                    return [4 /*yield*/, item.key];
                case 2:
                    _d.sent();
                    _d.label = 3;
                case 3:
                    _b = _a.next();
                    return [3 /*break*/, 1];
                case 4: return [3 /*break*/, 7];
                case 5:
                    e_1_1 = _d.sent();
                    e_1 = { error: e_1_1 };
                    return [3 /*break*/, 7];
                case 6:
                    try {
                        if (_b && !_b.done && (_c = _a.return)) _c.call(_a);
                    }
                    finally { if (e_1) throw e_1.error; }
                    return [7 /*endfinally*/];
                case 7: return [2 /*return*/];
            }
        });
    };
    Dictionary.prototype.values = function () {
        var _a, _b, item, e_2_1, e_2, _c;
        return __generator(this, function (_d) {
            switch (_d.label) {
                case 0:
                    _d.trys.push([0, 5, 6, 7]);
                    _a = __values(this), _b = _a.next();
                    _d.label = 1;
                case 1:
                    if (!!_b.done) return [3 /*break*/, 4];
                    item = _b.value;
                    return [4 /*yield*/, item.value];
                case 2:
                    _d.sent();
                    _d.label = 3;
                case 3:
                    _b = _a.next();
                    return [3 /*break*/, 1];
                case 4: return [3 /*break*/, 7];
                case 5:
                    e_2_1 = _d.sent();
                    e_2 = { error: e_2_1 };
                    return [3 /*break*/, 7];
                case 6:
                    try {
                        if (_b && !_b.done && (_c = _a.return)) _c.call(_a);
                    }
                    finally { if (e_2) throw e_2.error; }
                    return [7 /*endfinally*/];
                case 7: return [2 /*return*/];
            }
        });
    };
    Dictionary.prototype.containsKey = function (key) {
        var hash = this._equalityComparer.getHashCode(key);
        if (this._data[hash]) {
            for (var i = 0; i < this._data[hash].length; i++) {
                if (this._equalityComparer.equals(this._data[hash][i].key, key)) {
                    return true;
                }
            }
        }
        return false;
    };
    Dictionary.prototype.add = function (key, value) {
        if (key instanceof KeyValuePair_1.default && !value) {
            this.insert(key.key, key.value, true);
        }
        else if (key && value) {
            this.insert(key, value, true);
        }
        else {
            throw new Error("Invalide Parameters");
        }
    };
    Dictionary.prototype.insert = function (key, value, add) {
        var hash = this._equalityComparer.getHashCode(key);
        var kvp = new KeyValuePair_1.default(key, value);
        if (this._data[hash]) {
            for (var i = 0; i < this._data[hash].length; i++) {
                if (this._equalityComparer.equals(kvp.key, this._data[hash][i].key)) {
                    if (add) {
                        throw new Error("Cannot add duplicate entry");
                    }
                    this._data[hash][i] = kvp;
                    this._count++;
                    return;
                }
            }
            this._data[hash].push(kvp);
            this._count++;
        }
        else {
            this._data[hash] = [kvp];
            this._count++;
        }
    };
    Dictionary.prototype.remove = function (key) {
        if (key instanceof KeyValuePair_1.default) {
            var hash = this._equalityComparer.getHashCode(key.key);
            var bucket = this._data[hash];
            if (bucket) {
                for (var i = 0; i < bucket.length; i++) {
                    var kvp = bucket[i];
                    var comparer = EqualityComparer_1.default.default;
                    if (this._equalityComparer.equals(key.key, kvp.key)) {
                        if (comparer.equals(key.value, kvp.value)) {
                            if (bucket.length === 1) {
                                delete this._data[hash];
                            }
                            else {
                                this._data[hash].splice(i, 1);
                            }
                            this._count--;
                            return true;
                        }
                        else {
                            return false;
                        }
                    }
                }
            }
        }
        else {
            var hash = this._equalityComparer.getHashCode(key);
            var bucket = this._data[hash];
            if (bucket) {
                for (var i = 0; i < bucket.length; i++) {
                    var kvp = bucket[i];
                    if (this._equalityComparer.equals(key, kvp.key)) {
                        if (bucket.length === 1) {
                            delete this._data[hash];
                        }
                        else {
                            this._data[hash].splice(i, 1);
                        }
                        this._count--;
                        return true;
                    }
                }
            }
        }
        return false;
    };
    Dictionary.prototype.tryGetValue = function (key) {
        var bucket = this._data[this._equalityComparer.getHashCode(key)];
        if (bucket) {
            for (var i = 0; i < bucket.length; i++) {
                var kvp = bucket[i];
                if (this._equalityComparer.equals(key, kvp.key)) {
                    return [true, kvp.value];
                }
            }
        }
        return [false, null];
    };
    Dictionary.prototype[Symbol.iterator] = function () {
        var _a, _b, _i, property, i;
        return __generator(this, function (_c) {
            switch (_c.label) {
                case 0:
                    _a = [];
                    for (_b in this._data)
                        _a.push(_b);
                    _i = 0;
                    _c.label = 1;
                case 1:
                    if (!(_i < _a.length)) return [3 /*break*/, 6];
                    property = _a[_i];
                    if (!this._data.hasOwnProperty(property)) return [3 /*break*/, 5];
                    i = 0;
                    _c.label = 2;
                case 2:
                    if (!(i < this._data[property].length)) return [3 /*break*/, 5];
                    return [4 /*yield*/, this._data[property][i]];
                case 3:
                    _c.sent();
                    _c.label = 4;
                case 4:
                    i++;
                    return [3 /*break*/, 2];
                case 5:
                    _i++;
                    return [3 /*break*/, 1];
                case 6: return [2 /*return*/];
            }
        });
    };
    Object.defineProperty(Dictionary.prototype, "isReadOnly", {
        get: function () {
            return false;
        },
        enumerable: true,
        configurable: true
    });
    Dictionary.prototype.clear = function () {
        this._data = {};
        this._count = 0;
    };
    Dictionary.prototype.contains = function (item) {
        var hash = this._equalityComparer.getHashCode(item.key);
        var bucket = this._data[hash];
        if (bucket) {
            for (var i = 0; i < bucket.length; i++) {
                var kvp = bucket[i];
                var comparer = EqualityComparer_1.default.default;
                if (this._equalityComparer.equals(item.key, kvp.key)) {
                    return comparer.equals(item.value, kvp.value);
                }
            }
        }
        return false;
    };
    Dictionary.prototype.copyTo = function (array, arrayIndex) {
        if (!arrayIndex) {
            arrayIndex = 0;
        }
        var count = 0;
        try {
            for (var _a = __values(this), _b = _a.next(); !_b.done; _b = _a.next()) {
                var item = _b.value;
                array[arrayIndex + count] = item;
                count++;
            }
        }
        catch (e_3_1) { e_3 = { error: e_3_1 }; }
        finally {
            try {
                if (_b && !_b.done && (_c = _a.return)) _c.call(_a);
            }
            finally { if (e_3) throw e_3.error; }
        }
        var e_3, _c;
    };
    Dictionary.prototype.set = function (key, value) {
        this.insert(key, value, false);
    };
    Dictionary.prototype.get = function (key) {
        var bucket = this._data[this._equalityComparer.getHashCode(key)];
        if (bucket) {
            for (var i = 0; i < bucket.length; i++) {
                var kvp = bucket[i];
                if (this._equalityComparer.equals(key, kvp.key)) {
                    return kvp.value;
                }
            }
        }
        throw new Error("Key not found");
    };
    Object.defineProperty(Dictionary.prototype, "count", {
        get: function () { return this._count; },
        enumerable: true,
        configurable: true
    });
    return Dictionary;
}());
exports.default = Dictionary;
