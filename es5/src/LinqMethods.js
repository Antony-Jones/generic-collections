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
var List_1 = require("./List");
function toList(iterator) {
    return new List_1.default(iterator);
}
exports.toList = toList;
function select(iterator, selector) {
    var iterator_1, iterator_1_1, item, e_1_1, e_1, _a;
    return __generator(this, function (_b) {
        switch (_b.label) {
            case 0:
                _b.trys.push([0, 5, 6, 7]);
                iterator_1 = __values(iterator), iterator_1_1 = iterator_1.next();
                _b.label = 1;
            case 1:
                if (!!iterator_1_1.done) return [3 /*break*/, 4];
                item = iterator_1_1.value;
                return [4 /*yield*/, selector(item)];
            case 2:
                _b.sent();
                _b.label = 3;
            case 3:
                iterator_1_1 = iterator_1.next();
                return [3 /*break*/, 1];
            case 4: return [3 /*break*/, 7];
            case 5:
                e_1_1 = _b.sent();
                e_1 = { error: e_1_1 };
                return [3 /*break*/, 7];
            case 6:
                try {
                    if (iterator_1_1 && !iterator_1_1.done && (_a = iterator_1.return)) _a.call(iterator_1);
                }
                finally { if (e_1) throw e_1.error; }
                return [7 /*endfinally*/];
            case 7: return [2 /*return*/];
        }
    });
}
exports.select = select;
function where(iterator, predicate) {
    var iterator_2, iterator_2_1, item, e_2_1, e_2, _a;
    return __generator(this, function (_b) {
        switch (_b.label) {
            case 0:
                _b.trys.push([0, 5, 6, 7]);
                iterator_2 = __values(iterator), iterator_2_1 = iterator_2.next();
                _b.label = 1;
            case 1:
                if (!!iterator_2_1.done) return [3 /*break*/, 4];
                item = iterator_2_1.value;
                if (!predicate(item)) return [3 /*break*/, 3];
                return [4 /*yield*/, item];
            case 2:
                _b.sent();
                _b.label = 3;
            case 3:
                iterator_2_1 = iterator_2.next();
                return [3 /*break*/, 1];
            case 4: return [3 /*break*/, 7];
            case 5:
                e_2_1 = _b.sent();
                e_2 = { error: e_2_1 };
                return [3 /*break*/, 7];
            case 6:
                try {
                    if (iterator_2_1 && !iterator_2_1.done && (_a = iterator_2.return)) _a.call(iterator_2);
                }
                finally { if (e_2) throw e_2.error; }
                return [7 /*endfinally*/];
            case 7: return [2 /*return*/];
        }
    });
}
exports.where = where;
function selectMany(iterator, selector) {
    var iterator_3, iterator_3_1, item, e_3_1, e_3, _a;
    return __generator(this, function (_b) {
        switch (_b.label) {
            case 0:
                _b.trys.push([0, 5, 6, 7]);
                iterator_3 = __values(iterator), iterator_3_1 = iterator_3.next();
                _b.label = 1;
            case 1:
                if (!!iterator_3_1.done) return [3 /*break*/, 4];
                item = iterator_3_1.value;
                return [5 /*yield**/, __values(selector(item))];
            case 2:
                _b.sent();
                _b.label = 3;
            case 3:
                iterator_3_1 = iterator_3.next();
                return [3 /*break*/, 1];
            case 4: return [3 /*break*/, 7];
            case 5:
                e_3_1 = _b.sent();
                e_3 = { error: e_3_1 };
                return [3 /*break*/, 7];
            case 6:
                try {
                    if (iterator_3_1 && !iterator_3_1.done && (_a = iterator_3.return)) _a.call(iterator_3);
                }
                finally { if (e_3) throw e_3.error; }
                return [7 /*endfinally*/];
            case 7: return [2 /*return*/];
        }
    });
}
exports.selectMany = selectMany;
function take(iterator, count) {
    var iterator_4, iterator_4_1, item, e_4_1, e_4, _a;
    return __generator(this, function (_b) {
        switch (_b.label) {
            case 0:
                if (!(count > 0)) return [3 /*break*/, 8];
                _b.label = 1;
            case 1:
                _b.trys.push([1, 6, 7, 8]);
                iterator_4 = __values(iterator), iterator_4_1 = iterator_4.next();
                _b.label = 2;
            case 2:
                if (!!iterator_4_1.done) return [3 /*break*/, 5];
                item = iterator_4_1.value;
                return [4 /*yield*/, item];
            case 3:
                _b.sent();
                count--;
                if (count === 0)
                    return [3 /*break*/, 5];
                _b.label = 4;
            case 4:
                iterator_4_1 = iterator_4.next();
                return [3 /*break*/, 2];
            case 5: return [3 /*break*/, 8];
            case 6:
                e_4_1 = _b.sent();
                e_4 = { error: e_4_1 };
                return [3 /*break*/, 8];
            case 7:
                try {
                    if (iterator_4_1 && !iterator_4_1.done && (_a = iterator_4.return)) _a.call(iterator_4);
                }
                finally { if (e_4) throw e_4.error; }
                return [7 /*endfinally*/];
            case 8: return [2 /*return*/];
        }
    });
}
exports.take = take;
function skip(iterator, count) {
    var iterator_5, iterator_5_1, item, e_5_1, e_5, _a;
    return __generator(this, function (_b) {
        switch (_b.label) {
            case 0:
                if (!(count > 0)) return [3 /*break*/, 9];
                _b.label = 1;
            case 1:
                _b.trys.push([1, 7, 8, 9]);
                iterator_5 = __values(iterator), iterator_5_1 = iterator_5.next();
                _b.label = 2;
            case 2:
                if (!!iterator_5_1.done) return [3 /*break*/, 6];
                item = iterator_5_1.value;
                if (!(count > 0)) return [3 /*break*/, 3];
                count--;
                return [3 /*break*/, 5];
            case 3: return [4 /*yield*/, item];
            case 4:
                _b.sent();
                _b.label = 5;
            case 5:
                iterator_5_1 = iterator_5.next();
                return [3 /*break*/, 2];
            case 6: return [3 /*break*/, 9];
            case 7:
                e_5_1 = _b.sent();
                e_5 = { error: e_5_1 };
                return [3 /*break*/, 9];
            case 8:
                try {
                    if (iterator_5_1 && !iterator_5_1.done && (_a = iterator_5.return)) _a.call(iterator_5);
                }
                finally { if (e_5) throw e_5.error; }
                return [7 /*endfinally*/];
            case 9: return [2 /*return*/];
        }
    });
}
exports.skip = skip;
