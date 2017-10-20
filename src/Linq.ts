import List from './List';
import * as LinqMethods from './LinqMethods';
const iterableIterator = (function* (): IterableIterator<any> { })().constructor;

iterableIterator.prototype.toList = function () {
    return new List(this);
};

iterableIterator.prototype.where = function (predicate: (value: any) => boolean) {
    return LinqMethods.where(this, predicate);
}

iterableIterator.prototype.select = function (selector: (source: any) => any) {
    return LinqMethods.select(this, selector);
}

iterableIterator.prototype.selectMany = function (selector: (source: any) => IterableIterator<any>) {
    return LinqMethods.selectMany(this, selector);
}

iterableIterator.prototype.take = function (count: number) {
    return LinqMethods.take(this, count);
}

iterableIterator.prototype.skip = function (count: number) {
    return LinqMethods.skip(this, count);
}

