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
suite("List", function () {
    suite("Should add items and access them using index", function () {
        test("First entry", function () {
            // Arrange
            var target = new List_1.default();
            var expected = 10;
            // Act
            target.add(expected);
            var actual = target[0];
            // Assert
            assert.equal(actual, expected);
        });
        test("second entry", function () {
            // Arrange
            var target = new List_1.default();
            var expected = 20;
            // Act
            target.add(10);
            target.add(expected);
            var actual = target[1];
            // Assert
            assert.equal(actual, expected);
        });
        test("Third entry", function () {
            // Arrange
            var target = new List_1.default();
            var expected = 30;
            // Act
            target.add(10);
            target.add(20);
            target.add(expected);
            var actual = target[2];
            // Assert
            assert.equal(actual, expected);
        });
    });
    test("Should return count of items", function () {
        // Arrange
        var target = new List_1.default();
        target.add(1);
        target.add(2);
        target.add(3);
        var expected = 3;
        // Act
        var actual = target.count;
        // Assert
        assert.equal(actual, expected);
    });
    test("Should not be readonly", function () {
        // Arrange
        var target = new List_1.default();
        var expected = false;
        // Act
        var actual = target.isReadOnly;
        // Assert
        assert.equal(actual, expected);
    });
    test("Should be iterable", function () {
        // Arrange
        var target = new List_1.default();
        target.add(1);
        target.add(2);
        target.add(3);
        var expected = "123";
        // Act
        var actual = "";
        try {
            for (var target_1 = __values(target), target_1_1 = target_1.next(); !target_1_1.done; target_1_1 = target_1.next()) {
                var item = target_1_1.value;
                actual += item.toString();
            }
        }
        catch (e_1_1) { e_1 = { error: e_1_1 }; }
        finally {
            try {
                if (target_1_1 && !target_1_1.done && (_a = target_1.return)) _a.call(target_1);
            }
            finally { if (e_1) throw e_1.error; }
        }
        // Assert
        assert.equal(actual, expected);
        var e_1, _a;
    });
    suite("Contains", function () {
        test("Should return true if the item exists", function () {
            // Arrange
            var target = new List_1.default();
            target.add(1);
            target.add(2);
            target.add(3);
            var expected = true;
            // Act
            var actual = target.contains(2);
            // Assert
            assert.equal(actual, expected);
        });
        test("Should return false if the item doesnt exist", function () {
            // Arrange
            var target = new List_1.default();
            target.add(1);
            target.add(2);
            target.add(3);
            var expected = false;
            // Act
            var actual = target.contains(5);
            // Assert
            assert.equal(actual, expected);
        });
    });
    test("Should be able to insert items", function () {
        // Arrange
        var target = new List_1.default();
        target.add("a");
        target.add("b");
        target.add("c");
        var expected = "a123bc";
        // Act
        target.insert(1, "1");
        target.insert(2, "2");
        target.insert(3, "3");
        var actual = "";
        try {
            for (var target_2 = __values(target), target_2_1 = target_2.next(); !target_2_1.done; target_2_1 = target_2.next()) {
                var item = target_2_1.value;
                actual += item;
            }
        }
        catch (e_2_1) { e_2 = { error: e_2_1 }; }
        finally {
            try {
                if (target_2_1 && !target_2_1.done && (_a = target_2.return)) _a.call(target_2);
            }
            finally { if (e_2) throw e_2.error; }
        }
        // Assert
        assert.equal(actual, expected);
        var e_2, _a;
    });
    test("Should remove item at a given index", function () {
        // Arrange
        var target = new List_1.default();
        target.add(1);
        target.add(2);
        target.add(3);
        var expected = "13";
        // Act
        target.removeAt(1);
        var actual = "";
        try {
            for (var target_3 = __values(target), target_3_1 = target_3.next(); !target_3_1.done; target_3_1 = target_3.next()) {
                var item = target_3_1.value;
                actual += item.toString();
            }
        }
        catch (e_3_1) { e_3 = { error: e_3_1 }; }
        finally {
            try {
                if (target_3_1 && !target_3_1.done && (_a = target_3.return)) _a.call(target_3);
            }
            finally { if (e_3) throw e_3.error; }
        }
        // Assert
        assert.equal(actual, expected);
        var e_3, _a;
    });
    test("Should remove specified item", function () {
        // Arrange
        var target = new List_1.default();
        target.add(1);
        target.add(2);
        target.add(3);
        var expected = "13";
        // Act
        target.remove(2);
        var actual = "";
        try {
            for (var target_4 = __values(target), target_4_1 = target_4.next(); !target_4_1.done; target_4_1 = target_4.next()) {
                var item = target_4_1.value;
                actual += item.toString();
            }
        }
        catch (e_4_1) { e_4 = { error: e_4_1 }; }
        finally {
            try {
                if (target_4_1 && !target_4_1.done && (_a = target_4.return)) _a.call(target_4);
            }
            finally { if (e_4) throw e_4.error; }
        }
        // Assert
        assert.equal(actual, expected);
        var e_4, _a;
    });
    test("Should copy data to an array", function () {
        // Arrange
        var target = new List_1.default();
        target.add(1);
        target.add(2);
        target.add(3);
        var expected = "[1,2,3]";
        // Act
        var array = [];
        target.copyTo(array);
        var actual = JSON.stringify(array);
        // Assert
        assert.equal(actual, expected);
    });
    test("Should copy data to an array starting at a set index", function () {
        // Arrange
        var target = new List_1.default();
        var expected = false;
        // Act
        var actual = target.isReadOnly;
        // Assert
        assert.equal(actual, expected);
    });
    test("Should not be instansible from an array", function () {
        // Arrange
        var target;
        var array = [1, 2, 3];
        var expected = "123";
        // Act
        target = new List_1.default(array);
        var actual = "";
        try {
            for (var target_5 = __values(target), target_5_1 = target_5.next(); !target_5_1.done; target_5_1 = target_5.next()) {
                var item = target_5_1.value;
                actual += item.toString();
            }
        }
        catch (e_5_1) { e_5 = { error: e_5_1 }; }
        finally {
            try {
                if (target_5_1 && !target_5_1.done && (_a = target_5.return)) _a.call(target_5);
            }
            finally { if (e_5) throw e_5.error; }
        }
        // Assert
        assert.equal(actual, expected);
        var e_5, _a;
    });
    test("Should not be instansible from an IterableIterator", function () {
        // Arrange
        var target;
        var iterator = function () {
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
                        return [2 /*return*/];
                }
            });
        };
        var expected = "123";
        // Act
        target = new List_1.default(iterator());
        var actual = "";
        try {
            for (var target_6 = __values(target), target_6_1 = target_6.next(); !target_6_1.done; target_6_1 = target_6.next()) {
                var item = target_6_1.value;
                actual += item.toString();
            }
        }
        catch (e_6_1) { e_6 = { error: e_6_1 }; }
        finally {
            try {
                if (target_6_1 && !target_6_1.done && (_a = target_6.return)) _a.call(target_6);
            }
            finally { if (e_6) throw e_6.error; }
        }
        // Assert
        assert.equal(actual, expected);
        var e_6, _a;
    });
    test("Should add range of items", function () {
        // Arrange
        var target = new List_1.default();
        var iterator = function () {
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
                        return [2 /*return*/];
                }
            });
        };
        var expected = "123";
        // Act
        target.addRange(iterator());
        var actual = "";
        try {
            for (var target_7 = __values(target), target_7_1 = target_7.next(); !target_7_1.done; target_7_1 = target_7.next()) {
                var item = target_7_1.value;
                actual += item.toString();
            }
        }
        catch (e_7_1) { e_7 = { error: e_7_1 }; }
        finally {
            try {
                if (target_7_1 && !target_7_1.done && (_a = target_7.return)) _a.call(target_7);
            }
            finally { if (e_7) throw e_7.error; }
        }
        // Assert
        assert.equal(actual, expected);
        var e_7, _a;
    });
    test("Should insert range of items", function () {
        // Arrange
        var target = new List_1.default();
        target.add(0);
        target.add(4);
        target.add(5);
        var iterator = function () {
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
                        return [2 /*return*/];
                }
            });
        };
        var expected = "012345";
        // Act
        target.insertRange(1, iterator());
        var actual = "";
        try {
            for (var target_8 = __values(target), target_8_1 = target_8.next(); !target_8_1.done; target_8_1 = target_8.next()) {
                var item = target_8_1.value;
                actual += item.toString();
            }
        }
        catch (e_8_1) { e_8 = { error: e_8_1 }; }
        finally {
            try {
                if (target_8_1 && !target_8_1.done && (_a = target_8.return)) _a.call(target_8);
            }
            finally { if (e_8) throw e_8.error; }
        }
        // Assert
        assert.equal(actual, expected);
        var e_8, _a;
    });
    test("Should remove all items which match a predicate", function () {
        // Arrange
        var target = new List_1.default();
        var expected = "246810";
        target.add(1);
        target.add(2);
        target.add(3);
        target.add(4);
        target.add(5);
        target.add(6);
        target.add(7);
        target.add(8);
        target.add(9);
        target.add(10);
        // Act
        target.removeAll(function (x) { return x % 2 !== 0; });
        var actual = "";
        try {
            for (var target_9 = __values(target), target_9_1 = target_9.next(); !target_9_1.done; target_9_1 = target_9.next()) {
                var item = target_9_1.value;
                actual += item;
            }
        }
        catch (e_9_1) { e_9 = { error: e_9_1 }; }
        finally {
            try {
                if (target_9_1 && !target_9_1.done && (_a = target_9.return)) _a.call(target_9);
            }
            finally { if (e_9) throw e_9.error; }
        }
        // Assert
        assert.equal(actual, expected);
        var e_9, _a;
    });
    test("Should be sorted using a comparer", function () {
        // Arrange
        var target = new List_1.default();
        var expected = "12345678910";
        target.add(9);
        target.add(10);
        target.add(4);
        target.add(7);
        target.add(8);
        target.add(5);
        target.add(6);
        target.add(2);
        target.add(1);
        target.add(3);
        var comparer = function (x, y) {
            if (x === y)
                return 0;
            if (x > y)
                return 1;
            return -1;
        };
        // Act
        target.sort(comparer);
        var actual = "";
        try {
            for (var target_10 = __values(target), target_10_1 = target_10.next(); !target_10_1.done; target_10_1 = target_10.next()) {
                var item = target_10_1.value;
                actual += item;
            }
        }
        catch (e_10_1) { e_10 = { error: e_10_1 }; }
        finally {
            try {
                if (target_10_1 && !target_10_1.done && (_a = target_10.return)) _a.call(target_10);
            }
            finally { if (e_10) throw e_10.error; }
        }
        // Assert
        assert.equal(actual, expected);
        var e_10, _a;
    });
    test("Should be reversable", function () {
        // Arrange
        var target = new List_1.default();
        var expected = "12876543910";
        target.add(1);
        target.add(2);
        target.add(3);
        target.add(4);
        target.add(5);
        target.add(6);
        target.add(7);
        target.add(8);
        target.add(9);
        target.add(10);
        var comparer = function (x, y) {
            if (x === y)
                return 0;
            if (x > y)
                return 1;
            return -1;
        };
        // Act
        target.reverse(2, 6);
        var actual = "";
        try {
            for (var target_11 = __values(target), target_11_1 = target_11.next(); !target_11_1.done; target_11_1 = target_11.next()) {
                var item = target_11_1.value;
                actual += item;
            }
        }
        catch (e_11_1) { e_11 = { error: e_11_1 }; }
        finally {
            try {
                if (target_11_1 && !target_11_1.done && (_a = target_11.return)) _a.call(target_11);
            }
            finally { if (e_11) throw e_11.error; }
        }
        // Assert
        assert.equal(actual, expected);
        var e_11, _a;
    });
    test("Should be binary searchable", function () {
        // Arrange
        var target = new List_1.default();
        var expected = 2;
        target.add(1);
        target.add(2);
        target.add(3);
        target.add(4);
        target.add(5);
        target.add(6);
        target.add(7);
        target.add(8);
        target.add(9);
        target.add(10);
        // Act
        var actual = target.binarySearch(3);
        // Assert
        assert.equal(actual, expected);
    });
    test("Should return range of items", function () {
        // Arrange
        var target = new List_1.default();
        var expected = "345678";
        target.add(1);
        target.add(2);
        target.add(3);
        target.add(4);
        target.add(5);
        target.add(6);
        target.add(7);
        target.add(8);
        target.add(9);
        target.add(10);
        var comparer = function (x, y) {
            if (x === y)
                return 0;
            if (x > y)
                return 1;
            return -1;
        };
        // Act
        var actualList = target.getRange(2, 6);
        var actual = "";
        try {
            for (var actualList_1 = __values(actualList), actualList_1_1 = actualList_1.next(); !actualList_1_1.done; actualList_1_1 = actualList_1.next()) {
                var item = actualList_1_1.value;
                actual += item;
            }
        }
        catch (e_12_1) { e_12 = { error: e_12_1 }; }
        finally {
            try {
                if (actualList_1_1 && !actualList_1_1.done && (_a = actualList_1.return)) _a.call(actualList_1);
            }
            finally { if (e_12) throw e_12.error; }
        }
        // Assert
        assert.equal(actual, expected);
        var e_12, _a;
    });
    test("Should return index of given item", function () {
        // Arrange
        var target = new List_1.default();
        var expected = 2;
        target.add(1);
        target.add(2);
        target.add(3);
        target.add(4);
        target.add(5);
        target.add(6);
        target.add(7);
        target.add(8);
        target.add(9);
        target.add(10);
        // Act
        var actual = target.indexOf(3);
        // Assert
        assert.equal(actual, expected);
    });
    test("Should return last index of given item", function () {
        // Arrange
        var target = new List_1.default();
        var expected = 6;
        target.add(1);
        target.add(2);
        target.add(3);
        target.add(4);
        target.add(5);
        target.add(4);
        target.add(3);
        target.add(2);
        target.add(1);
        // Act
        var actual = target.lastIndexOf(3);
        // Assert
        assert.equal(actual, expected);
    });
    test("Should remove items in a range", function () {
        // Arrange
        var target = new List_1.default();
        var expected = "12910";
        target.add(1);
        target.add(2);
        target.add(3);
        target.add(4);
        target.add(5);
        target.add(6);
        target.add(7);
        target.add(8);
        target.add(9);
        target.add(10);
        // Act
        target.removeRange(2, 6);
        var actual = "";
        try {
            for (var target_12 = __values(target), target_12_1 = target_12.next(); !target_12_1.done; target_12_1 = target_12.next()) {
                var item = target_12_1.value;
                actual += item;
            }
        }
        catch (e_13_1) { e_13 = { error: e_13_1 }; }
        finally {
            try {
                if (target_12_1 && !target_12_1.done && (_a = target_12.return)) _a.call(target_12);
            }
            finally { if (e_13) throw e_13.error; }
        }
        // Assert
        assert.equal(actual, expected);
        var e_13, _a;
    });
    test("Should clear all items", function () {
        // Arrange
        var target = new List_1.default();
        var expected = 0;
        target.add(1);
        target.add(2);
        target.add(3);
        target.add(4);
        target.add(5);
        target.add(6);
        target.add(7);
        target.add(8);
        target.add(9);
        target.add(10);
        // Act
        target.clear();
        var actual = target.count;
        // Assert
        assert.equal(actual, expected);
    });
});
