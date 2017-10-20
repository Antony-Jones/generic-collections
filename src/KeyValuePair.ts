export default class KeyValuePair<TKey, TValue> implements IKeyValuePair<TKey,TValue> {
    private _key: TKey;
    private _value: TValue;

    constructor(key: TKey, value: TValue) {
        this._key = key;
        this._value = value;
    }

    public get key(): TKey {
        return this._key;
    }

    public get value(): TValue {
        return this._value;
    }

    public toJSON(): Object {
        return { Key: this._key, Value: this._value }
    }

    public toString(): string {
        return `[${this._key}, ${this._value}]`;
    }
}