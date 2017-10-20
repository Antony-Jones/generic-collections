"use strict";
var __read = (this && this.__read) || function (o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
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
var Dictionary_1 = require("../src/Dictionary");
var KeyValuePair_1 = require("../src/KeyValuePair");
suite("Dictionary", function () {
    test("can add and retrive items", function () {
        var dictionary = new Dictionary_1.default();
        dictionary.add("a", 1);
        dictionary.add("b", 2);
        dictionary.add("c", 3);
        assert.equal(dictionary.get("a"), 1);
        assert.equal(dictionary.get("b"), 2);
        assert.equal(dictionary.get("c"), 3);
    });
    test("Can update items", function () {
        var dictionary = new Dictionary_1.default();
        dictionary.add("a", 1);
        dictionary.add("b", 2);
        dictionary.add("c", 3);
        dictionary.set("b", 10);
        assert.equal(dictionary.get("b"), 10);
    });
    test("Can check if a key exists", function () {
        var dictionary = new Dictionary_1.default();
        dictionary.add("a", 1);
        dictionary.add("b", 2);
        dictionary.add("c", 3);
        assert.equal(dictionary.containsKey("b"), true);
        assert.equal(dictionary.containsKey("d"), false);
    });
    test("Can attempt to get values", function () {
        var dictionary = new Dictionary_1.default();
        dictionary.add("a", 1);
        dictionary.add("b", 2);
        dictionary.add("c", 3);
        var result, value;
        _a = __read(dictionary.tryGetValue("b"), 2), result = _a[0], value = _a[1];
        assert.equal(result, true);
        assert.equal(value, 2);
        var result2, value2;
        _b = __read(dictionary.tryGetValue("d"), 2), result2 = _b[0], value2 = _b[1];
        assert.equal(result2, false);
        var _a, _b;
    });
    test("can remove items", function () {
        var dictionary = new Dictionary_1.default();
        dictionary.add("a", 1);
        dictionary.add("b", 2);
        dictionary.add("c", 3);
        dictionary.remove("b");
        assert.equal(dictionary.containsKey("b"), false);
    });
    test("Is iterable", function () {
        var dictionary = new Dictionary_1.default();
        dictionary.add("a", 1);
        dictionary.add("b", 2);
        dictionary.add("c", 3);
        var actual = "";
        try {
            for (var dictionary_1 = __values(dictionary), dictionary_1_1 = dictionary_1.next(); !dictionary_1_1.done; dictionary_1_1 = dictionary_1.next()) {
                var item = dictionary_1_1.value;
                actual += item;
            }
        }
        catch (e_1_1) { e_1 = { error: e_1_1 }; }
        finally {
            try {
                if (dictionary_1_1 && !dictionary_1_1.done && (_a = dictionary_1.return)) _a.call(dictionary_1);
            }
            finally { if (e_1) throw e_1.error; }
        }
        assert.equal(actual, "[a, 1][b, 2][c, 3]");
        var e_1, _a;
    });
    test("Has an iterator for keys", function () {
        var dictionary = new Dictionary_1.default();
        dictionary.add("a", 1);
        dictionary.add("b", 2);
        dictionary.add("c", 3);
        var actual = "";
        try {
            for (var _a = __values(dictionary.keys()), _b = _a.next(); !_b.done; _b = _a.next()) {
                var item = _b.value;
                actual += item;
            }
        }
        catch (e_2_1) { e_2 = { error: e_2_1 }; }
        finally {
            try {
                if (_b && !_b.done && (_c = _a.return)) _c.call(_a);
            }
            finally { if (e_2) throw e_2.error; }
        }
        assert.equal(actual, "abc");
        var e_2, _c;
    });
    test("Has an iterator for values", function () {
        var dictionary = new Dictionary_1.default();
        dictionary.add("a", 1);
        dictionary.add("b", 2);
        dictionary.add("c", 3);
        var actual = "";
        try {
            for (var _a = __values(dictionary.values()), _b = _a.next(); !_b.done; _b = _a.next()) {
                var item = _b.value;
                actual += item;
            }
        }
        catch (e_3_1) { e_3 = { error: e_3_1 }; }
        finally {
            try {
                if (_b && !_b.done && (_c = _a.return)) _c.call(_a);
            }
            finally { if (e_3) throw e_3.error; }
        }
        assert.equal(actual, "123");
        var e_3, _c;
    });
    test("Can get the count of items", function () {
        var dictionary = new Dictionary_1.default();
        dictionary.add("a", 1);
        dictionary.add("b", 2);
        dictionary.add("c", 3);
        assert.equal(dictionary.count, 3);
    });
    test("Can be cleared", function () {
        var dictionary = new Dictionary_1.default();
        dictionary.add("a", 1);
        dictionary.add("b", 2);
        dictionary.add("c", 3);
        dictionary.clear();
        assert.equal(dictionary.count, 0);
    });
    test("Can check if an item exists", function () {
        var dictionary = new Dictionary_1.default();
        dictionary.add("a", 1);
        dictionary.add("b", 2);
        dictionary.add("c", 3);
        assert.equal(dictionary.contains(new KeyValuePair_1.default("b", 2)), true);
        assert.equal(dictionary.contains(new KeyValuePair_1.default("d", 4)), false);
    });
    test("Can copy data to an array", function () {
        var dictionary = new Dictionary_1.default();
        dictionary.add("a", 1);
        dictionary.add("b", 2);
        dictionary.add("c", 3);
        var array = [];
        dictionary.copyTo(array);
        assert.equal(JSON.stringify(array), JSON.stringify([{ "Key": "a", "Value": 1 }, { "Key": "b", "Value": 2 }, { "Key": "c", "Value": 3 }]));
    });
    test("Can copy data to an array starting at a set index", function () {
        var dictionary = new Dictionary_1.default();
        dictionary.add("a", 1);
        dictionary.add("b", 2);
        dictionary.add("c", 3);
        var array = [new KeyValuePair_1.default("x", 100), new KeyValuePair_1.default("y", 200), new KeyValuePair_1.default("z", 300)];
        dictionary.copyTo(array, 3);
        assert.equal(JSON.stringify(array), JSON.stringify([{ "Key": "x", "Value": 100 }, { "Key": "y", "Value": 200 }, { "Key": "z", "Value": 300 }, { "Key": "a", "Value": 1 }, { "Key": "b", "Value": 2 }, { "Key": "c", "Value": 3 }]));
    });
});
