"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function* select(iterator, selector) {
    for (let item of iterator) {
        yield selector(item);
    }
}
exports.select = select;
