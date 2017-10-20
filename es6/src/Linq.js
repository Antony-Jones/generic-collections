import List from './List';
import * as LinqMethods from './LinqMethods';
const iterableIterator = (function* () { })().constructor;
iterableIterator.prototype.toList = function () {
    return new List(this);
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
