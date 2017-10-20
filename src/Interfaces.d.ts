interface IEqualityComparer<T> {
    equals(x: T, y: T): boolean;
    getHashCode(item:T):number;
}

interface IComparer<T> {
    (x: T, y: T): number;
}

interface ICollection<T> {
    count: number;
    isReadOnly: boolean;
    add(item: T): void;
    clear(): void;
    contains(item: T): boolean;
    copyTo(array: T[], arrayIndex?: number): void;
    remove(item: T): boolean;
    [Symbol.iterator]():IterableIterator<T>
}

interface IList<T> extends ICollection<T> {
    indexOf(item: T): number;
    insert(index: number, item: T): void;
    removeAt(index: number): void;
    [key: number]: T;
}

interface IKeyValuePair<TKey, TValue>{
    readonly key:TKey;
    readonly value:TValue;
}

interface IDictionary<TKey, TValue> extends ICollection<IKeyValuePair<TKey, TValue>> {
    get(key: TKey): TValue;
    set(key:TKey, value:TValue):void;
    keys(): IterableIterator<TKey>;
    values(): IterableIterator<TValue>;
    containsKey(key: TKey): boolean;
    add(key: TKey, value: TValue): void;
    add(item: IKeyValuePair<TKey, TValue>): void;
    remove(key: TKey): boolean;
    remove(item: IKeyValuePair<TKey, TValue>): boolean;
    tryGetValue(key: TKey): [boolean, TValue];
}

interface IterableIterator<T> {
    toList(): IList<T>;
    where(predicate: (value: T) => boolean): IterableIterator<T>;
    select<TResult>(selector: (value: T) => TResult): IterableIterator<TResult>;
    selectMany<TResult>(selector: (value: T) => Iterable<TResult>): IterableIterator<TResult>;
    take(count: number): IterableIterator<T>;
    skip(count: number): IterableIterator<T>;
}