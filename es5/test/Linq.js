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
require("mocha");
var assert = require("assert");
var List_1 = require("../src/List");
require("../src/Linq");
suite("Linq", function () {
    function testIterator() {
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, 1];
                case 1:
                    _a.sent();
                    return [4 /*yield*/, 2];
                case 2:
                    _a.sent();
                    return [4 /*yield*/, 3];
                case 3:
                    _a.sent();
                    return [4 /*yield*/, 4];
                case 4:
                    _a.sent();
                    return [4 /*yield*/, 5];
                case 5:
                    _a.sent();
                    return [4 /*yield*/, 6];
                case 6:
                    _a.sent();
                    return [4 /*yield*/, 7];
                case 7:
                    _a.sent();
                    return [4 /*yield*/, 8];
                case 8:
                    _a.sent();
                    return [4 /*yield*/, 9];
                case 9:
                    _a.sent();
                    return [4 /*yield*/, 10];
                case 10:
                    _a.sent();
                    return [2 /*return*/];
            }
        });
    }
    function complexTestIterator() {
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, { value: "a", items: new List_1.default([1, 2, 3]) }];
                case 1:
                    _a.sent();
                    return [4 /*yield*/, { value: "b", items: new List_1.default([4, 5, 6]) }];
                case 2:
                    _a.sent();
                    return [4 /*yield*/, { value: "c", items: new List_1.default([7, 8, 9]) }];
                case 3:
                    _a.sent();
                    return [2 /*return*/];
            }
        });
    }
    test("Can initilize a list using toList extension", function () {
        var list = testIterator().toList();
        var actual = "";
        try {
            for (var list_1 = __values(list), list_1_1 = list_1.next(); !list_1_1.done; list_1_1 = list_1.next()) {
                var item = list_1_1.value;
                actual += item.toString();
            }
        }
        catch (e_1_1) { e_1 = { error: e_1_1 }; }
        finally {
            try {
                if (list_1_1 && !list_1_1.done && (_a = list_1.return)) _a.call(list_1);
            }
            finally { if (e_1) throw e_1.error; }
        }
        assert.equal(actual, "12345678910");
        var e_1, _a;
    });
    test("Can filter using where extension", function () {
        var list = testIterator().where(function (x) { return x % 2 === 0; });
        var actual = "";
        try {
            for (var list_2 = __values(list), list_2_1 = list_2.next(); !list_2_1.done; list_2_1 = list_2.next()) {
                var item = list_2_1.value;
                actual += item.toString();
            }
        }
        catch (e_2_1) { e_2 = { error: e_2_1 }; }
        finally {
            try {
                if (list_2_1 && !list_2_1.done && (_a = list_2.return)) _a.call(list_2);
            }
            finally { if (e_2) throw e_2.error; }
        }
        assert.equal(actual, "246810");
        var e_2, _a;
    });
    test("Can select using the select extension", function () {
        var list = testIterator().select(function (x) { return x * 2; });
        var count = 1;
        try {
            for (var list_3 = __values(list), list_3_1 = list_3.next(); !list_3_1.done; list_3_1 = list_3.next()) {
                var item = list_3_1.value;
                assert.equal(item, (count * 2));
                count++;
            }
        }
        catch (e_3_1) { e_3 = { error: e_3_1 }; }
        finally {
            try {
                if (list_3_1 && !list_3_1.done && (_a = list_3.return)) _a.call(list_3);
            }
            finally { if (e_3) throw e_3.error; }
        }
        var e_3, _a;
    });
    test("Can select and combine child lists using the selectMany extension", function () {
        var list = complexTestIterator().selectMany(function (x) { return x.items; });
        var actual = "";
        try {
            for (var list_4 = __values(list), list_4_1 = list_4.next(); !list_4_1.done; list_4_1 = list_4.next()) {
                var item = list_4_1.value;
                actual += item.toString();
            }
        }
        catch (e_4_1) { e_4 = { error: e_4_1 }; }
        finally {
            try {
                if (list_4_1 && !list_4_1.done && (_a = list_4.return)) _a.call(list_4);
            }
            finally { if (e_4) throw e_4.error; }
        }
        assert.equal(actual, "123456789");
        var e_4, _a;
    });
    test("Can yield only a limited number or items using the take extension", function () {
        var list = testIterator().take(5);
        var actual = "";
        try {
            for (var list_5 = __values(list), list_5_1 = list_5.next(); !list_5_1.done; list_5_1 = list_5.next()) {
                var item = list_5_1.value;
                actual += item.toString();
            }
        }
        catch (e_5_1) { e_5 = { error: e_5_1 }; }
        finally {
            try {
                if (list_5_1 && !list_5_1.done && (_a = list_5.return)) _a.call(list_5);
            }
            finally { if (e_5) throw e_5.error; }
        }
        assert.equal(actual, "12345");
        var e_5, _a;
    });
    test("can skip fist n items using the skip extension", function () {
        var list = testIterator().skip(5);
        var actual = "";
        try {
            for (var list_6 = __values(list), list_6_1 = list_6.next(); !list_6_1.done; list_6_1 = list_6.next()) {
                var item = list_6_1.value;
                actual += item.toString();
            }
        }
        catch (e_6_1) { e_6 = { error: e_6_1 }; }
        finally {
            try {
                if (list_6_1 && !list_6_1.done && (_a = list_6.return)) _a.call(list_6);
            }
            finally { if (e_6) throw e_6.error; }
        }
        assert.equal(actual, "678910");
        var e_6, _a;
    });
});
