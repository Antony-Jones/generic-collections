"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
require("mocha");
const assert = require("assert");
const Dictionary_1 = require("../src/Dictionary");
const KeyValuePair_1 = require("../src/KeyValuePair");
suite("Dictionary", () => {
    test("can add and retrive items", () => {
        var dictionary = new Dictionary_1.default();
        dictionary.add("a", 1);
        dictionary.add("b", 2);
        dictionary.add("c", 3);
        assert.equal(dictionary.get("a"), 1);
        assert.equal(dictionary.get("b"), 2);
        assert.equal(dictionary.get("c"), 3);
    });
    test("Can update items", () => {
        var dictionary = new Dictionary_1.default();
        dictionary.add("a", 1);
        dictionary.add("b", 2);
        dictionary.add("c", 3);
        dictionary.set("b", 10);
        assert.equal(dictionary.get("b"), 10);
    });
    test("Can check if a key exists", () => {
        var dictionary = new Dictionary_1.default();
        dictionary.add("a", 1);
        dictionary.add("b", 2);
        dictionary.add("c", 3);
        assert.equal(dictionary.containsKey("b"), true);
        assert.equal(dictionary.containsKey("d"), false);
    });
    test("Can attempt to get values", () => {
        var dictionary = new Dictionary_1.default();
        dictionary.add("a", 1);
        dictionary.add("b", 2);
        dictionary.add("c", 3);
        let result, value;
        [result, value] = dictionary.tryGetValue("b");
        assert.equal(result, true);
        assert.equal(value, 2);
        let result2, value2;
        [result2, value2] = dictionary.tryGetValue("d");
        assert.equal(result2, false);
    });
    test("can remove items", () => {
        var dictionary = new Dictionary_1.default();
        dictionary.add("a", 1);
        dictionary.add("b", 2);
        dictionary.add("c", 3);
        dictionary.remove("b");
        assert.equal(dictionary.containsKey("b"), false);
    });
    test("Is iterable", () => {
        var dictionary = new Dictionary_1.default();
        dictionary.add("a", 1);
        dictionary.add("b", 2);
        dictionary.add("c", 3);
        var actual = "";
        for (let item of dictionary) {
            actual += item;
        }
        assert.equal(actual, "[a, 1][b, 2][c, 3]");
    });
    test("Has an iterator for keys", () => {
        var dictionary = new Dictionary_1.default();
        dictionary.add("a", 1);
        dictionary.add("b", 2);
        dictionary.add("c", 3);
        var actual = "";
        for (let item of dictionary.keys()) {
            actual += item;
        }
        assert.equal(actual, "abc");
    });
    test("Has an iterator for values", () => {
        var dictionary = new Dictionary_1.default();
        dictionary.add("a", 1);
        dictionary.add("b", 2);
        dictionary.add("c", 3);
        var actual = "";
        for (let item of dictionary.values()) {
            actual += item;
        }
        assert.equal(actual, "123");
    });
    test("Can get the count of items", () => {
        var dictionary = new Dictionary_1.default();
        dictionary.add("a", 1);
        dictionary.add("b", 2);
        dictionary.add("c", 3);
        assert.equal(dictionary.count, 3);
    });
    test("Can be cleared", () => {
        var dictionary = new Dictionary_1.default();
        dictionary.add("a", 1);
        dictionary.add("b", 2);
        dictionary.add("c", 3);
        dictionary.clear();
        assert.equal(dictionary.count, 0);
    });
    test("Can check if an item exists", () => {
        var dictionary = new Dictionary_1.default();
        dictionary.add("a", 1);
        dictionary.add("b", 2);
        dictionary.add("c", 3);
        assert.equal(dictionary.contains(new KeyValuePair_1.default("b", 2)), true);
        assert.equal(dictionary.contains(new KeyValuePair_1.default("d", 4)), false);
    });
    test("Can copy data to an array", () => {
        var dictionary = new Dictionary_1.default();
        dictionary.add("a", 1);
        dictionary.add("b", 2);
        dictionary.add("c", 3);
        var array = [];
        dictionary.copyTo(array);
        assert.equal(JSON.stringify(array), JSON.stringify([{ "Key": "a", "Value": 1 }, { "Key": "b", "Value": 2 }, { "Key": "c", "Value": 3 }]));
    });
    test("Can copy data to an array starting at a set index", () => {
        var dictionary = new Dictionary_1.default();
        dictionary.add("a", 1);
        dictionary.add("b", 2);
        dictionary.add("c", 3);
        var array = [new KeyValuePair_1.default("x", 100), new KeyValuePair_1.default("y", 200), new KeyValuePair_1.default("z", 300)];
        dictionary.copyTo(array, 3);
        assert.equal(JSON.stringify(array), JSON.stringify([{ "Key": "x", "Value": 100 }, { "Key": "y", "Value": 200 }, { "Key": "z", "Value": 300 }, { "Key": "a", "Value": 1 }, { "Key": "b", "Value": 2 }, { "Key": "c", "Value": 3 }]));
    });
});
