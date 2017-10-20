export default abstract class EqualityComparer<T> implements IEqualityComparer<T> {
    private static _defaultComparer: IEqualityComparer<any>;
    public static get default(): IEqualityComparer<any> {
        if (!this._defaultComparer) {
            this._defaultComparer = new DefaultEqualityComparer();
        }
        return this._defaultComparer;
    }

    abstract equals(x: T, y: T): boolean;

    abstract getHashCode(item: T): number;
}

class DefaultEqualityComparer<T> implements IEqualityComparer<T> {
    public equals(x: T, y: T): boolean {
        var xType = typeof x;
        if (xType !== typeof y) {
            return false;
        }
        if (xType !== "object") {
            return x === y;
        }
        const xEquals = (<any>x)["equals"];
        if (xEquals) {
            return xEquals(y);
        }
        return this.getHashCode(x) === this.getHashCode(y);
    }

    public getHashCode(item: T): number {
        if (item && (<any>item).getHashCode && typeof (<any>item).getHashCode === "function") {
            return (<any>item).getHashCode();
        }
        return getHashCode(item);
    }
}

/**
* Returns the Hashcode for a given data item.
* @param data The data which should be used to calculate the hash code.
*/
export function getHashCode(data: any): number {
    const stringHash = (value: string) => {
        var hash = 0;
        for (let i = 0; i < value.length; i++) {
            hash = (((hash << 5) - hash) + value.charCodeAt(i)) & 0xFFFFFFFF;
        }
        return hash;
    }

    const objectHash = (value: any) => {
        var result = 0;
        for (let property in value) {
            if (value.hasOwnProperty(property)) {
                result += getHashCode(property + value[property]);
            }
        }
        return result;
    }

    const dataType = typeof data;
    switch (dataType) {
        case "boolean":
            return data ? 1 : 0;
        case "object":
            return objectHash(data);
        case "string":
            return stringHash(data);
        case "number": // Convert to string and hash to avoid any floating point weirdness.
        case "function": // the toString method of a function object will return the source code.
        default:
            return stringHash(data.toString());
    }
}