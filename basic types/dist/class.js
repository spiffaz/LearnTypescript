"use strict";
class Queue {
    constructor() {
        this.items = [];
    }
    enqueue(item) {
        this.items.push(item);
    }
    dequeue() {
        if (this.isEmpty()) {
            return undefined;
        }
        return this.items.shift();
    }
    isEmpty() {
        return this.items.length === 0;
    }
    size() {
        return this.items.length;
    }
}
const queue = new Queue();
queue.enqueue(1);
queue.enqueue("90");
queue.enqueue("95");
console.log("The size of the queue is " + queue.size());
console.log("Removed " + queue.dequeue());
console.log("The size of the queue is " + queue.size());
//# sourceMappingURL=class.js.map