class LinkedListNode {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}
class CircularLinkedList {
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
            this.tail.next = this.head;
        } else {
            this.tail.next = newNode;
            newNode.next = this.head;
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
        this.tail.next = this.head;
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
            this.tail.next = this.head;
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
            this.head = null;
            this.tail = null;
        }
        return current;
    }

    // Get the value of the node at a given position
    get(index) {
        if (index < 0 || index >= this.length) {
            return null;
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
        let newNode = new LinkedListNode(value);
        if (index === 0) {
            newNode.next = this.head;
            this.head = newNode;
            this.length++;
            if (this.length === 1) {
                this.tail = this.head;
            }
            return true;
        }
        let previous = this.get(index - 1);
        newNode.next = previous.next;
        previous.next = newNode;
        this.length++;
        if (index === this.length - 1) {
            this.tail = newNode;
        }
        return true;
    }

    // Remove a node from a given position
    removeAt(index) {
        if (index < 0 || index >= this.length) {
            return undefined;
        }
        let current = this.head;
        let previous = this.head;
        for (let i = 0; i < index; i++) {
            previous = current;
            current = current.next;
        }
        if (index === 0) {
            this.head = current.next;
        } else {
            previous.next = current.next;
        }
        this.length--;
        if (this.length === 0) {
            this.head = null;
            this.tail = null;
        }
        if (index === this.length - 1) {
            this.tail = previous;
        }
        return current;
    }

    // Reverse the list
    reverse() {
        let current = this.head;
        let previous = null;
        let next = null;
        while (current) {
            next = current.next;
            current.next = previous;
            previous = current;
            current = next;
        }
        this.head = previous;
    }
}