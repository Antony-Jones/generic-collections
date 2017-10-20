"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const List_1 = require("./List");
const LinqMethods = require("./LinqMethods");
const iterableIterator = (function* () { })().constructor;
iterableIterator.prototype.toList = function () {
    return new List_1.default(this);
};
iterableIterator.prototype.where = function (predicate) {
    return LinqMethods.where(this, predicate);
};
iterableIterator.prototype.select = function (selector) {
    return LinqMethods.select(this, selector);
};
iterableIterator.prototype.selectMany = function (selector) {
    return LinqMethods.selectMany(this, selector);
};
iterableIterator.prototype.take = function (count) {
    return LinqMethods.take(this, count);
};
iterableIterator.prototype.skip = function (count) {
    return LinqMethods.skip(this, count);
};
