import KeyValuePair from './KeyValuePair';
import EqualityComparer from './EqualityComparer';
export default class Dictionary {
    constructor(comparer) {
        this._data = {};
        this._equalityComparer = comparer || EqualityComparer.default;
        this._count = 0;
    }
    *keys() {
        for (let item of this) {
            yield item.key;
        }
    }
    *values() {
        for (let item of this) {
            yield item.value;
        }
    }
    containsKey(key) {
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
    add(key, value) {
        if (key instanceof KeyValuePair && !value) {
            this.insert(key.key, key.value, true);
        }
        else if (key && value) {
            this.insert(key, value, true);
        }
        else {
            throw new Error("Invalide Parameters");
        }
    }
    insert(key, value, add) {
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
        }
        else {
            this._data[hash] = [kvp];
            this._count++;
        }
    }
    remove(key) {
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
                            }
                            else {
                                this._data[hash].splice(i, 1);
                            }
                            this._count--;
                            return true;
                        }
                        else {
                            return false;
                        }
                    }
                }
            }
        }
        else {
            let hash = this._equalityComparer.getHashCode(key);
            const bucket = this._data[hash];
            if (bucket) {
                for (let i = 0; i < bucket.length; i++) {
                    const kvp = bucket[i];
                    if (this._equalityComparer.equals(key, kvp.key)) {
                        if (bucket.length === 1) {
                            delete this._data[hash];
                        }
                        else {
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
    tryGetValue(key) {
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
    *[Symbol.iterator]() {
        for (let property in this._data) {
            if (this._data.hasOwnProperty(property)) {
                for (let i = 0; i < this._data[property].length; i++) {
                    yield this._data[property][i];
                }
            }
        }
    }
    get isReadOnly() {
        return false;
    }
    clear() {
        this._data = {};
        this._count = 0;
    }
    contains(item) {
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
    copyTo(array, arrayIndex) {
        if (!arrayIndex) {
            arrayIndex = 0;
        }
        let count = 0;
        for (let item of this) {
            array[arrayIndex + count] = item;
            count++;
        }
    }
    set(key, value) {
        this.insert(key, value, false);
    }
    get(key) {
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
    get count() { return this._count; }
}
