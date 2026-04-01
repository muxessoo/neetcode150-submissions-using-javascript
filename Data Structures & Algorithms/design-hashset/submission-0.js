class MyHashSet {
    constructor() {
        // हमने 1000 बकेट वाला एक एरे बनाया है
        this.numBuckets = 1000;
        this.set = new Array(this.numBuckets).fill(null).map(() => []);
    }

    // हैश फंक्शन: की (key) को इंडेक्स में बदलने के लिए
    _hash(key) {
        return key % this.numBuckets;
    }

    /** * @param {number} key
     * @return {void}
     */
    add(key) {
        const index = this._hash(key);
        // अगर की पहले से मौजूद नहीं है, तभी जोड़ें (duplicates नहीं रखने के लिए)
        if (!this.contains(key)) {
            this.set[index].push(key);
        }
    }

    /** * @param {number} key
     * @return {void}
     */
    remove(key) {
        const index = this._hash(key);
        const bucket = this.set[index];
        const keyIndex = bucket.indexOf(key);
        
        // अगर की मिल जाती है, तो उसे हटा दें
        if (keyIndex !== -1) {
            bucket.splice(keyIndex, 1);
        }
    }

    /** * @param {number} key
     * @return {boolean}
     */
    contains(key) {
        const index = this._hash(key);
        return this.set[index].includes(key);
    }
}