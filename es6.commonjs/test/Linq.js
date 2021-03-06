"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
require("mocha");
const assert = require("assert");
const List_1 = require("../src/List");
require("../src/Linq");
suite("Linq", () => {
    function* testIterator() {
        yield 1;
        yield 2;
        yield 3;
        yield 4;
        yield 5;
        yield 6;
        yield 7;
        yield 8;
        yield 9;
        yield 10;
    }
    function* complexTestIterator() {
        yield { value: "a", items: new List_1.default([1, 2, 3]) };
        yield { value: "b", items: new List_1.default([4, 5, 6]) };
        yield { value: "c", items: new List_1.default([7, 8, 9]) };
    }
    test("Can initilize a list using toList extension", () => {
        var list = testIterator().toList();
        let actual = "";
        for (let item of list) {
            actual += item.toString();
        }
        assert.equal(actual, "12345678910");
    });
    test("Can filter using where extension", () => {
        var list = testIterator().where(x => x % 2 === 0);
        let actual = "";
        for (let item of list) {
            actual += item.toString();
        }
        assert.equal(actual, "246810");
    });
    test("Can select using the select extension", () => {
        var list = testIterator().select(x => x * 2);
        let count = 1;
        for (let item of list) {
            assert.equal(item, (count * 2));
            count++;
        }
    });
    test("Can select and combine child lists using the selectMany extension", () => {
        var list = complexTestIterator().selectMany(x => x.items);
        let actual = "";
        for (let item of list) {
            actual += item.toString();
        }
        assert.equal(actual, "123456789");
    });
    test("Can yield only a limited number or items using the take extension", () => {
        var list = testIterator().take(5);
        let actual = "";
        for (let item of list) {
            actual += item.toString();
        }
        assert.equal(actual, "12345");
    });
    test("can skip fist n items using the skip extension", () => {
        var list = testIterator().skip(5);
        let actual = "";
        for (let item of list) {
            actual += item.toString();
        }
        assert.equal(actual, "678910");
    });
});
