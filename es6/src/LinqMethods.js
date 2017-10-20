import List from './List';
export function toList(iterator) {
    return new List(iterator);
}
export function* select(iterator, selector) {
    for (let item of iterator) {
        yield selector(item);
    }
}
export function* where(iterator, predicate) {
    for (let item of iterator) {
        if (predicate(item)) {
            yield item;
        }
    }
}
export function* selectMany(iterator, selector) {
    for (let item of iterator) {
        yield* selector(item);
    }
}
export function* take(iterator, count) {
    if (count > 0) {
        for (let item of iterator) {
            yield item;
            count--;
            if (count === 0)
                break;
        }
    }
}
export function* skip(iterator, count) {
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
