

class FakeSet {
    constructor(array) {
        this.store = {}
        this.count = 0;
        this.isEmpty = true
        for (let i = 0; i < array.length; i++) {
            this.store[array[i]] = true
            this.isEmpty = false
        }
    }
    _isSet(set) {
        if (set.store && this.count) return true
    }
    // Add an item to the set
    add(element) {
        this.store[element] = true
        this.isEmpty = false
    }

    // Remove an item from the set
    remove(element) {
        delete this.store[element]
        if ( this.store.keys()) {
            this.isEmpty = false
        }
    }

    // Show all items in the set
    show() {
        return this.store.keys()
    }
    
    // Returns the union of two sets
    union(set) {
        if (!this._isSet()) return false
        let target = set.show()
        let result = {...this.store}
        for (let i = 0; i < target.length; i++) {
            result[target[i]] = true
        }
        return result
    }

    // Returns the intersection of two sets
    intersection(set) {
        if (!this._isSet()) return false
        let target = set.show()
        let result = {}
        for (let i = 0; i < target.length; i++) {
            if (this.store[target[i]]) {
                result[target[i]] = true
            }
        }
        return result
    }

    // Returns all elements not found in both sets
    symmetricDifference(set) {
        if (!this._isSet()) return false
        let target = set.show()
        let result = {}
        for (let i = 0; i < target.length; i++) {
            if (!this.store[target[i]]) {
                result[target[i]] = true
            }
        }
        return result
    }

    // Ret
    subtraction(set) {
        if (!this._isSet()) return false
        let target = set.show()
        let result = {...this.store}
        for (let i = 0; i < target.length; i++) {
            if (this.store[target[i]]) {
                delete result[target[i]]
            }
        }
        return result
    }
}