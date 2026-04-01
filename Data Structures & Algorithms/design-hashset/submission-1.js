class MyHashSet {
    constructor() {
        this.numBuckets = 1000;
        this.set = new Array(this.numBuckets).fill(null).map(() => []);
    }
    _hash(key) {
        return key % this.numBuckets;
    }
    add(key) {
        const index = this._hash(key);
        if (!this.contains(key)) {
            this.set[index].push(key);
        }
    }
    remove(key) {
        const index = this._hash(key);
        const bucket = this.set[index];
        const keyIndex = bucket.indexOf(key);
        if (keyIndex !== -1) {
            bucket.splice(keyIndex, 1);
        }
    }
    contains(key) {
        const index = this._hash(key);
        return this.set[index].includes(key);
    }
}