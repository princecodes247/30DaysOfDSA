class LinkedListNode {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class SingleLinkedList {
    // Create a SingleLinkedList object
    constructor() {
        this.head = null;
        this.tail = null;
        this.length = 0;
    }

    // Add a new node to the end of the list
    add(value) {
        let newNode = new LinkedListNode(value);
        if (this.head === null) {
            this.head = newNode;
            this.tail = newNode;
        } else {
            this.tail.next = newNode;
            this.tail = newNode;
        }
        this.length++;
    }

    // Remove a node from the end of the list
    remove() {
        if (this.length === 0) {
            return undefined;
        }
        let current = this.head;
        let previous = this.head;
        while (current.next) {
            previous = current;
            current = current.next;
        }
        this.tail = previous;
        this.tail.next = null;
        this.length--;
        if (this.length === 0) {
            this.head = null;
            this.tail = null;
        }
        return current;
    }

    // Add a new node to the beginning of the list
    addToHead(value) {
        let newNode = new LinkedListNode(value);
        if (this.head === null) {
            this.head = newNode;
            this.tail = newNode;
        } else {
            newNode.next = this.head;
            this.head = newNode;
        }
        this.length++;
    }

    // Remove a node from the beginning of the list
    removeFromHead() {
        if (this.length === 0) {
            return undefined;
        }
        let current = this.head;
        this.head = current.next;
        this.length--;
        if (this.length === 0) {
            this.tail = null;
        }
        return current;
    }

    // Get the value of the node at a given position
    get(index) {
        if (index < 0 || index >= this.length) {
            return undefined;
        }
        let current = this.head;
        for (let i = 0; i < index; i++) {
            current = current.next;
        }
        return current;
    }

    // Insert a node at a given position
    insert(index, value) {
        if (index < 0 || index > this.length) {
            return false;
        }
        if (index === 0) {
            this.addToHead(value);
        } else if (index === this.length) {
            this.add(value);
        } else {
            let newNode = new LinkedListNode(value);
            let previous = this.get(index - 1);
            let current = previous.next;
            previous.next = newNode;
            newNode.next = current;
            this.length++;
        }
    }

    // Remove a node at a given position
    removeAt(index) {
        if (index < 0 || index >= this.length) {
            return undefined;
        }
        if (index === 0) {
            return this.removeFromHead();
        }
        if (index === this.length - 1) {
            return this.remove();
        }
        let previous = this.get(index - 1);
        let removed = previous.next;
        previous.next = removed.next;
        this.length--;
        return removed;
    }

    // Get value at a given index
    get(index) {
        if (index < 0 || index >= this.length) {
            return undefined;
        }
        let current = this.head;
        for (let i = 0; i < index; i++) {
            current = current.next;
        }
        return current;
    }

    // Reverse the list
    reverse() {
        let current = this.head;
        this.head = this.tail;
        this.tail = current;
        let previous = null;
        let next = null;
        for (let i = 0; i < this.length; i++) {
            next = current.next;
            current.next = previous;
            previous = current;
            current = next;
        }
    }
}