"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const EqualityComparer_1 = require("./EqualityComparer");
class List {
    constructor(collection) {
        this._defaultComparer = (x, y) => {
            if (x === y)
                return 0;
            if (x > y)
                return 1;
            return -1;
        };
        //super();
        this._itemCount = 0;
        if (collection != null) {
            if (collection instanceof Array) {
                for (let i = 0; i < collection.length; i++) {
                    this.add(collection[i]);
                }
            }
            else {
                for (let item of collection) {
                    this.add(item);
                }
            }
        }
    }
    indexOf(item) {
        let comparer = EqualityComparer_1.default.default;
        let itemHash = comparer.getHashCode(item);
        for (let i = 0; i < this._itemCount; i++) {
            if (itemHash === comparer.getHashCode(this[i]) && comparer.equals(item, this[i])) {
                return i;
            }
        }
        return -1;
    }
    lastIndexOf(item) {
        var comparer = EqualityComparer_1.default.default;
        var itemHash = comparer.getHashCode(item);
        for (let i = this._itemCount - 1; i >= 0; i--) {
            if (itemHash === comparer.getHashCode(this[i]) && comparer.equals(item, this[i])) {
                return i;
            }
        }
        return -1;
    }
    insert(index, item) {
        if (index >= this._itemCount) {
            throw new Error("Index out of range");
        }
        for (let i = this._itemCount; i > index; i--) {
            this[i] = this[i - 1];
        }
        this[index] = item;
        this._itemCount++;
    }
    removeAt(index) {
        if (index >= this._itemCount) {
            throw new Error("Argument Out of Range");
        }
        if (index !== this._itemCount - 1) {
            for (let i = index + 1; i < this._itemCount; i++) {
                this[i - 1] = this[i];
            }
        }
        delete this[this._itemCount--];
    }
    get count() {
        return this._itemCount;
    }
    get isReadOnly() {
        return false;
    }
    add(item) {
        this[this._itemCount] = item;
        this._itemCount++;
    }
    clear() {
        const removeLast = () => {
            delete this[this._itemCount];
            this._itemCount--;
        };
        while (this._itemCount > 0) {
            removeLast();
        }
    }
    contains(item) {
        let comparer = EqualityComparer_1.default.default;
        let itemHash = comparer.getHashCode(item);
        for (let i = 0; i < this._itemCount; i++) {
            if (itemHash === comparer.getHashCode(this[i]) && comparer.equals(item, this[i])) {
                return true;
            }
        }
        return false;
    }
    copyTo(array, arrayIndex) {
        if (!arrayIndex) {
            arrayIndex = 0;
        }
        for (let i = 0; i < this._itemCount; i++) {
            array[i + arrayIndex] = this[i];
        }
    }
    remove(item) {
        const index = this.indexOf(item);
        if (index > -1) {
            this.removeAt(index);
            return true;
        }
        return false;
    }
    *[Symbol.iterator]() {
        for (let i = 0; i < this._itemCount; i++) {
            yield this[i];
        }
    }
    addRange(collection) {
        if (!collection) {
            throw new Error("Argument Null");
        }
        for (let item of collection) {
            this.add(item);
        }
    }
    insertRange(index, collection) {
        if (!collection) {
            throw new Error("Argument Null");
        }
        if (index >= this._itemCount) {
            throw new Error("Index out of range");
        }
        let counter = 0;
        for (let item of collection) {
            this.insert(index + counter, item);
            counter++;
        }
    }
    removeAll(predicate) {
        // Shift items to remove specified items.
        let itemMovementCount = 0;
        for (let i = 0; i < this._itemCount; i++) {
            if (predicate(this[i])) {
                itemMovementCount++;
            }
            else {
                if (itemMovementCount > 0) {
                    this[i - itemMovementCount] = this[i];
                }
            }
        }
        // Trim the excess
        for (let i = this._itemCount - itemMovementCount; i < this._itemCount; i++) {
            delete this[i];
        }
        // lower the item count by the number of items removed.
        this._itemCount -= itemMovementCount;
    }
    sort(comparer) {
        // This method uses the Quicksort alorithm, For more information see the following wikipedia page:
        // https://en.wikipedia.org/wiki/Quicksort
        if (!comparer) {
            comparer = this._defaultComparer;
        }
        const swap = (i, j) => {
            const temp = this[i];
            this[i] = this[j];
            this[j] = temp;
        };
        const partition = (left, right) => {
            let current = this[right - 1], minEnd = left;
            for (let i = left; i < right - 1; i++) {
                if (comparer(this[i], current) < 0) {
                    swap(i, minEnd);
                    minEnd += 1;
                }
            }
            swap(minEnd, right - 1);
            return minEnd;
        };
        const sort = (left, right) => {
            if (left < right) {
                let p = partition(left, right);
                sort(left, p);
                sort(p + 1, right);
            }
        };
        sort(0, this._itemCount);
    }
    reverse(index, count) {
        if (index === undefined) {
            index = 0;
        }
        if (count === undefined) {
            count = this._itemCount;
        }
        if (index < 0) {
            throw new Error("Argument out of range");
        }
        if (count > this._itemCount - index) {
            throw new Error("Invalid Length");
        }
        let i = index;
        let j = index + count - 1;
        while (i < j) {
            let temp = this[i];
            this[i] = this[j];
            this[j] = temp;
            i++;
            j--;
        }
    }
    binarySearch(item, index, count, comparer) {
        if (index === undefined) {
            index = 0;
        }
        if (count === undefined) {
            count = this._itemCount;
        }
        if (!comparer) {
            comparer = this._defaultComparer;
        }
        if (index < 0) {
            throw new Error("Argument out of range");
        }
        if (count > this._itemCount - index) {
            throw new Error("Invalid Length");
        }
        let minIndex = index;
        let maxIndex = (index + count) - 1;
        let currentIndex;
        let currentElement;
        while (minIndex <= maxIndex) {
            currentIndex = (minIndex + maxIndex) / 2 | 0;
            currentElement = this[currentIndex];
            let comparison = comparer(currentElement, item);
            if (comparison < 0) {
                minIndex = currentIndex + 1;
            }
            else if (comparison > 0) {
                maxIndex = currentIndex - 1;
            }
            else {
                return currentIndex;
            }
        }
        return -1;
    }
    getRange(index, count) {
        if (index < 0) {
            throw new Error("Argument out of range");
        }
        if (count > this._itemCount - index) {
            throw new Error("Invalid Length");
        }
        let output = new List();
        for (let i = index; i < (index + count); i++) {
            output.add(this[i]);
        }
        return output;
    }
    removeRange(index, count) {
        if (index < 0) {
            throw new Error("Argument out of range");
        }
        if (count > this._itemCount - index) {
            throw new Error("Invalid Length");
        }
        // Shift items
        for (let i = (index + count); i < this._itemCount; i++) {
            this[i - count] = this[i];
        }
        // Trim the excess
        for (let i = (this._itemCount - count); i < this._itemCount; i++) {
            delete this[i];
        }
        this._itemCount = this._itemCount - count;
    }
}
exports.default = List;
