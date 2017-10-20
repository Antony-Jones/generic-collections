"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const List_1 = require("./List");
function toList(iterator) {
    return new List_1.default(iterator);
}
exports.toList = toList;
function* select(iterator, selector) {
    for (let item of iterator) {
        yield selector(item);
    }
}
exports.select = select;
function* where(iterator, predicate) {
    for (let item of iterator) {
        if (predicate(item)) {
            yield item;
        }
    }
}
exports.where = where;
function* selectMany(iterator, selector) {
    for (let item of iterator) {
        yield* selector(item);
    }
}
exports.selectMany = selectMany;
function* take(iterator, count) {
    if (count > 0) {
        for (let item of iterator) {
            yield item;
            count--;
            if (count === 0)
                break;
        }
    }
}
exports.take = take;
function* skip(iterator, count) {
    if (count > 0) {
        for (let item of iterator) {
            if (count > 0) {
                count--;
            }
            else {
                yield item;
            }
        }
    }
}
exports.skip = skip;
