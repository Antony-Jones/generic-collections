import KeyValuePair from './KeyValuePair';
import EqualityComparer from './EqualityComparer'

export default class Dictionary<TKey, TValue> implements IDictionary<TKey, TValue>{
    private _data: { [index: number]: IKeyValuePair<TKey, TValue>[] };
    private _equalityComparer: EqualityComparer<TKey>;
    private _count:number

    constructor(comparer?: EqualityComparer<TKey>) {
        this._data = {};
        this._equalityComparer = comparer || EqualityComparer.default;
        this._count = 0;
    }

    public *keys(): IterableIterator<TKey> {
        for (let item of this) {
            yield item.key;
        }
    }

    public *values(): IterableIterator<TValue> {
        for (let item of this) {
            yield item.value;
        }
    }

    public containsKey(key: TKey): boolean {
        const hash = this._equalityComparer.getHashCode(key);
        if (this._data[hash]) {
            for (let i = 0; i < this._data[hash].length; i++) {
                if (this._equalityComparer.equals(this._data[hash][i].key, key)) {
                    return true;
                }
            }
        }
        return false;
    }

    public add(key: TKey, value: TValue): void;
    public add(item: IKeyValuePair<TKey, TValue>): void;
    public add(key: TKey | IKeyValuePair<TKey, TValue>, value?: TValue): void {
        if (key instanceof KeyValuePair && !value) {
            this.insert(key.key, key.value, true);
        } else if (key && value) {
            this.insert(<TKey>key, value, true);
        } else {
            throw new Error("Invalide Parameters");
        }
    }

    private insert(key: TKey, value: TValue, add: boolean): void {
        const hash = this._equalityComparer.getHashCode(key);
        const kvp = new KeyValuePair(key, value);

        if (this._data[hash]) {
            for (var i = 0; i < this._data[hash].length; i++) {
                if (this._equalityComparer.equals(kvp.key, this._data[hash][i].key)) {
                    if (add) {
                        throw new Error("Cannot add duplicate entry");
                    }
                    this._data[hash][i] = kvp;
                    this._count++;
                    return;
                }
            }
            this._data[hash].push(kvp);
            this._count++;
        } else {
            this._data[hash] = [kvp];
            this._count++;
        }
    }

    public remove(key: TKey): boolean;
    public remove(item: IKeyValuePair<TKey, TValue>): boolean;
    public remove(key: TKey | IKeyValuePair<TKey, TValue>): boolean {
        if (key instanceof KeyValuePair) {
            let hash = this._equalityComparer.getHashCode(key.key);
            const bucket = this._data[hash];
            if (bucket) {
                for (let i = 0; i < bucket.length; i++) {
                    const kvp = bucket[i];
                    var comparer = EqualityComparer.default;
                    if (this._equalityComparer.equals(key.key, kvp.key)) {
                        if (comparer.equals(key.value, kvp.value)) {
                            if (bucket.length === 1) {
                                delete this._data[hash];
                            } else {
                                this._data[hash].splice(i, 1);
                            }
                            this._count--;
                            return true;
                        } else {
                            return false;
                        }
                    }
                }
            }
        } else {
            let hash = this._equalityComparer.getHashCode(<TKey>key);
            const bucket = this._data[hash];
            if (bucket) {
                for (let i = 0; i < bucket.length; i++) {
                    const kvp = bucket[i];
                    if (this._equalityComparer.equals(<TKey>key, kvp.key)) {
                        if (bucket.length === 1) {
                            delete this._data[hash];
                        } else {
                            this._data[hash].splice(i, 1);
                        }
                        this._count--;
                        return true;
                    }
                }
            }
        }
        return false;
    }

    public tryGetValue(key: TKey): [boolean, TValue] {
        const bucket = this._data[this._equalityComparer.getHashCode(key)];
        if (bucket) {
            for (let i = 0; i < bucket.length; i++) {
                const kvp = bucket[i];
                if (this._equalityComparer.equals(key, kvp.key)) {
                    return [true, kvp.value];
                }
            }
        }
        return [false, null];
    }

    public *[Symbol.iterator](): IterableIterator<IKeyValuePair<TKey, TValue>> {
        for (let property in this._data) {
            if (this._data.hasOwnProperty(property)) {
                for (let i = 0; i < this._data[property].length; i++) {
                    yield this._data[property][i];
                }
            }
        }
    }

    public get isReadOnly(): boolean {
        return false;
    }

    public clear(): void {
        this._data = {};
        this._count = 0;
    }

    public contains(item: KeyValuePair<TKey, TValue>): boolean {
        let hash = this._equalityComparer.getHashCode(item.key);
        const bucket = this._data[hash];
        if (bucket) {
            for (let i = 0; i < bucket.length; i++) {
                const kvp = bucket[i];
                var comparer = EqualityComparer.default;
                if (this._equalityComparer.equals(item.key, kvp.key)) {
                    return comparer.equals(item.value, kvp.value);
                }
            }
        }
        return false;
    }

    public copyTo(array: IKeyValuePair<TKey, TValue>[], arrayIndex?: number): void {
        if (!arrayIndex) {
            arrayIndex = 0;
        }
        let count = 0;
        for (let item of this) {
            array[arrayIndex + count] = item;
            count++;
        }
    }

    public set(key: TKey, value: TValue): void {
        this.insert(key, value, false);
    }

    public get(key: TKey): TValue {
        const bucket = this._data[this._equalityComparer.getHashCode(key)];
        if (bucket) {
            for (let i = 0; i < bucket.length; i++) {
                const kvp = bucket[i];
                if (this._equalityComparer.equals(key, kvp.key)) {
                    return kvp.value;
                }
            }
        }
        throw new Error("Key not found");
    }

    public get count(): number { return this._count; }
}