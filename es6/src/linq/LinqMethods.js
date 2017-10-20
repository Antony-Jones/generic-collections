export function* select(iterator, selector) {
    for (let item of iterator) {
        yield selector(item);
    }
}
