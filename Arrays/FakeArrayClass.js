class FakeArray {
    constructor() {
        this.length = 0;
        this.store = {};
    }
    
    add(arg, index) {
        this.store[index] = arg;
        this.length = index === undefined ? this.length + 1 : index + 1;
    }

    concat(...args) {
        return {...this, ...args};
    }

    forEach(callBack) {
        for (let i = 0; i < this.length; i++) {
            callBack(this.store[i], i, this);
        }
    }
    
    pop(){
        let last = this.store[this.length - 1];
        delete this.store[this.length - 1];
        this.length--;
        return last;
    }

    push(...args){
        for (let i = 0; i < args.length; i++) {
            this.add(args[i], this.length);
        }
        return this.length;
    }

    shift(){
        let first = this.store[0];
        delete this.store[0];
        this.length--;
        return first;
    }

    reduce(callBack, initialValue){
        let accumulator = initialValue;
        for (let i = 0; i < this.length; i++) {
            accumulator = callBack(accumulator, this.store[i], i, this);
        }
        return accumulator;
    }

}