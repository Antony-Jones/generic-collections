import List from './List';

export function toList<T>(iterator: IterableIterator<T>): List<T>{
    return new List<T>(iterator);
}
export function* select<TSource, TResult>(iterator: IterableIterator<TSource>, selector: (value: TSource) => TResult): IterableIterator<TResult> {
    for (let item of iterator) {
        yield selector(item);
    }
}

export function* where<TSource>(iterator: IterableIterator<TSource>, predicate: (value: TSource) => boolean) {
    for (let item of iterator) {
        if (predicate(item)) {
            yield item;
        }
    }
}

export function* selectMany<TSource, TResult>(iterator: IterableIterator<TSource>, selector: (value: TSource) => IterableIterator<TResult>): IterableIterator<TResult> {
    for (let item of iterator) {
        yield* selector(item);
    }
}

export function* take<TSource>(iterator: IterableIterator<TSource>, count: number): IterableIterator<TSource> {
    if (count > 0) {
        for (let item of iterator) {
            yield item;
            count--;
            if (count === 0) break;
        }
    }
}

export function* skip<TSource>(iterator: IterableIterator<TSource>, count: number): IterableIterator<TSource> {
    if (count > 0) {
        for (let item of iterator) {
            if (count > 0) {
                count--;
            } else {
                yield item;
            }
        }
    }
}